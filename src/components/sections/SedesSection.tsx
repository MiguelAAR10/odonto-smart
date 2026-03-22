"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { sedesSection } from "@/data/content";
import { MapPin, Clock, Phone } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── WhatsApp icon (small) ─── */

function WhatsAppSmall({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Sede card — quick-decision focused
   ═══════════════════════════════════════════════════════════════════════════════ */

function SedeCard({
  sede,
  index,
}: {
  sede: (typeof sedesSection.items)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, ease, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white p-6 transition-shadow duration-300 md:p-7 ${
        sede.isRecommended
          ? "border-brand-teal/20 shadow-[0_8px_32px_rgba(65,212,203,0.10)] hover:shadow-[0_14px_40px_rgba(65,212,203,0.16)]"
          : "border-border-subtle shadow-[0_4px_20px_rgba(26,10,46,0.05)] hover:shadow-[0_10px_32px_rgba(26,10,46,0.08)]"
      }`}
    >
      {/* Recommended badge */}
      {sede.isRecommended && (
        <span className="absolute right-4 top-4 rounded-full bg-brand-teal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-teal">
          Recomendada
        </span>
      )}

      {/* Name */}
      <h3
        className="mb-4 text-[18px] font-bold text-text-dark md:text-[20px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {sede.name}
      </h3>

      {/* Info rows */}
      <div className="mb-4 space-y-2.5">
        <div className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal/70" strokeWidth={1.8} />
          <span className="text-[13px] leading-snug text-text-muted">{sede.address}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone className="h-4 w-4 shrink-0 text-brand-teal/70" strokeWidth={1.8} />
          <span className="text-[13px] text-text-muted">{sede.phone}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Clock className="h-4 w-4 shrink-0 text-brand-teal/70" strokeWidth={1.8} />
          <span className="text-[13px] text-text-muted">{sede.hours}</span>
        </div>
      </div>

      {/* Micro-benefit */}
      <p className="mb-6 rounded-xl bg-bg-soft px-3.5 py-2.5 text-[13px] font-medium leading-snug text-text-dark">
        {sede.benefit}
      </p>

      {/* CTAs */}
      <div className="mt-auto flex flex-col gap-2">
        <Link
          href={sede.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-teal px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(65,212,203,0.16)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_12px_30px_rgba(65,212,203,0.24)]"
        >
          <WhatsAppSmall className="h-4 w-4" />
          Agendar por WhatsApp
        </Link>
        <Link
          href={sede.mapHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-full border border-border-subtle px-5 py-2 text-[13px] font-medium text-text-muted transition-colors duration-200 hover:border-brand-teal/20 hover:text-brand-teal"
        >
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
          Ver en mapa
        </Link>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SedesSection — quick-decision location picker
   ═══════════════════════════════════════════════════════════════════════════════ */

export function SedesSection() {
  return (
    <section id="sedes" className="bg-noise relative bg-bg-soft py-16 md:py-20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 text-center"
        >
          <h2
            className="text-2xl font-bold text-text-dark md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {sedesSection.title}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-text-muted md:text-[15px]">
            {sedesSection.description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
          {sedesSection.items.map((sede, index) => (
            <SedeCard key={sede.id} sede={sede} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
