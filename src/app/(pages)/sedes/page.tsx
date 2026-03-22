"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { locationsPage, ClinicLocation } from "@/data/pages-content";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── WhatsApp icon ─── */

function WhatsAppSmall({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Nearest location finder — geolocation
   ═══════════════════════════════════════════════════════════════════════════════ */

function NearestFinder({
  locations,
  onFound,
}: {
  locations: ClinicLocation[];
  onFound: (id: string) => void;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "error">("idle");
  const [nearest, setNearest] = useState<ClinicLocation | null>(null);

  const find = useCallback(() => {
    setStatus("loading");
    if (!navigator.geolocation) { setStatus("error"); return; }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        let best = locations[0];
        let min = Infinity;
        for (const loc of locations) {
          const d = Math.hypot(lat - loc.coordinates.lat, lng - loc.coordinates.lng);
          if (d < min) { min = d; best = loc; }
        }
        setNearest(best);
        setStatus("found");
        onFound(best.id);
      },
      () => setStatus("error"),
    );
  }, [locations, onFound]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease }}
      className="mx-auto max-w-2xl rounded-2xl border border-brand-teal/14 bg-gradient-to-r from-brand-teal/[0.06] to-brand-purple/[0.04] p-5 md:p-6"
    >
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-teal/10">
          <Navigation className="h-5 w-5 text-brand-teal" strokeWidth={1.8} />
        </div>
        <div className="flex-1">
          <p className="text-[15px] font-semibold text-text-dark" style={{ fontFamily: "var(--font-display)" }}>
            {locationsPage.findNearest.title}
          </p>
          <p className="mt-0.5 text-[13px] text-text-muted">{locationsPage.findNearest.description}</p>
        </div>
        <button
          type="button"
          onClick={find}
          disabled={status === "loading"}
          className="shrink-0 rounded-full bg-brand-teal px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_6px_20px_rgba(65,212,203,0.20)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_10px_28px_rgba(65,212,203,0.28)] disabled:opacity-60"
        >
          {status === "loading" ? "Buscando..." : locationsPage.findNearest.buttonText}
        </button>
      </div>

      {status === "found" && nearest && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-3 text-center text-[13px] text-text-muted sm:text-left"
        >
          {locationsPage.findNearest.nearestText}: <strong className="text-text-dark">{nearest.name}</strong> — {nearest.address}
        </motion.p>
      )}

      {status === "error" && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-center text-[13px] text-text-muted sm:text-left">
          No pudimos acceder a tu ubicacion. Revisa los permisos de tu navegador.
        </motion.p>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Sede card — clean, conversion-focused
   ═══════════════════════════════════════════════════════════════════════════════ */

function SedeCard({
  location,
  isHighlighted,
  index,
}: {
  location: ClinicLocation;
  isHighlighted: boolean;
  index: number;
}) {
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(location.fullAddress)}`;
  const waHref = `https://wa.me/${location.whatsapp.replace(/\+/g, "")}?text=Hola%2C%20quiero%20agendar%20en%20${encodeURIComponent(location.name)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, ease, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 md:p-7 ${
        isHighlighted
          ? "border-brand-teal/28 shadow-[0_12px_40px_rgba(65,212,203,0.14)]"
          : location.isMain
            ? "border-brand-teal/16 shadow-[0_8px_28px_rgba(65,212,203,0.08)] hover:shadow-[0_12px_36px_rgba(65,212,203,0.14)]"
            : "border-border-subtle shadow-[0_4px_20px_rgba(26,10,46,0.05)] hover:shadow-[0_10px_32px_rgba(26,10,46,0.08)]"
      }`}
    >
      {/* Badges */}
      <div className="mb-4 flex items-center gap-2">
        {location.isMain && (
          <span className="rounded-full bg-text-dark px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/90">
            Sede Principal
          </span>
        )}
        {isHighlighted && (
          <span className="rounded-full bg-brand-teal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-teal">
            Mas cercana
          </span>
        )}
      </div>

      {/* Name + District */}
      <h3
        className="text-[20px] font-bold text-text-dark md:text-[22px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {location.name}
      </h3>
      <p className="mt-0.5 text-[13px] font-medium text-brand-teal">{location.district}</p>

      {/* Info */}
      <div className="mt-5 space-y-3">
        <div className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal/60" strokeWidth={1.8} />
          <span className="text-[13px] leading-snug text-text-muted">{location.address}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone className="h-4 w-4 shrink-0 text-brand-teal/60" strokeWidth={1.8} />
          <a href={`tel:${location.phone}`} className="text-[13px] text-text-muted transition-colors hover:text-brand-teal">
            {location.phone}
          </a>
        </div>
        <div className="flex items-start gap-2.5">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal/60" strokeWidth={1.8} />
          <div className="text-[13px] leading-relaxed text-text-muted">
            <p>Lun–Vie: {location.hours.weekdays}</p>
            <p>Sabado: {location.hours.saturday}</p>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-auto flex flex-col gap-2.5 pt-6">
        <Link
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-teal px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(65,212,203,0.16)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_12px_30px_rgba(65,212,203,0.24)]"
        >
          <WhatsAppSmall className="h-4 w-4" />
          Agendar por WhatsApp
        </Link>
        <Link
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-full border border-border-subtle px-5 py-2 text-[13px] font-medium text-text-muted transition-colors duration-200 hover:border-brand-teal/20 hover:text-brand-teal"
        >
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
          Ver en mapa
        </Link>
      </div>
    </motion.article>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Sedes page — brand hero + clean cards
   ═══════════════════════════════════════════════════════════════════════════════ */

export default function SedesPage() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  return (
    <>
      {/* ── Hero header — brand dark, same as landing ── */}
      <section className="relative overflow-hidden bg-[#08090f] pb-20 pt-40 md:pb-24 md:pt-44">
        {/* Brand gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-purple/8 via-transparent to-brand-teal/6" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-brand-teal/5 blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-purple/4 blur-[100px]" aria-hidden="true" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mb-4 inline-block text-[12px] font-bold uppercase tracking-[0.24em] text-brand-teal"
            >
              {locationsPage.hero.label}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
            >
              {locationsPage.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
              className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/55"
            >
              {locationsPage.hero.description}
            </motion.p>
          </motion.div>
        </Container>

        {/* Bottom wave — tricolor, same as hero landing */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-px" aria-hidden="true">
          <svg viewBox="0 0 1440 160" className="h-[60px] w-full md:h-[90px]" fill="none" preserveAspectRatio="none">
            <path d="M0 100C240 130 480 145 720 132C960 119 1200 90 1440 105V160H0Z" fill="rgba(65,212,203,0.07)" />
            <path d="M0 115C280 140 560 150 840 140C1060 132 1280 108 1440 120V160H0Z" fill="rgba(222,27,206,0.05)" />
            <path d="M0 125C220 150 440 158 660 148C880 138 1060 116 1240 122C1360 126 1420 136 1440 142V160H0Z" fill="var(--color-bg-page)" />
          </svg>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-noise relative bg-bg-page pb-20 pt-10 md:pb-24 md:pt-14">
        <Container>
          {/* Nearest finder */}
          <div className="mb-12 md:mb-14">
            <NearestFinder
              locations={locationsPage.locations}
              onFound={(id) => setHighlightedId(id)}
            />
          </div>

          {/* Cards grid */}
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
            {locationsPage.locations.map((location, index) => (
              <SedeCard
                key={location.id}
                location={location}
                isHighlighted={highlightedId === location.id}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
