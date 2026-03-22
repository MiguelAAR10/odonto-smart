"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { hero } from "@/data/content";

/* ─── Config ─── */

const SLIDE_MS = 5500;
const ease = [0.22, 1, 0.36, 1] as const;

const heroSlides = [
  { src: "/images/odonto-smart/fotos-reales/recepcion-clinica-principal.jpg", alt: "Lobby Odonto Smart con letrero de marca",          position: "object-center" },
  { src: "/images/odonto-smart/fotos-reales/atencion-paciente-personalizada.jpg",              alt: "Doctora sonriente en consultorio moderno",          position: "object-center" },
  { src: "/images/odonto-smart/fotos-reales/consultorio-dental-1.jpg",             alt: "Consultorio premium con tecnologia digital",        position: "object-center" },
  { src: "/images/odonto-smart/fotos-reales/instalaciones-modernas-pasillo.jpg",              alt: "Especialistas atendiendo con equipamiento clinico", position: "object-[center_35%]" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

/* ═══════════════════════════════════════════════════════════════════════════════
   Background carousel — absolute layer, crossfade, never affects layout
   ═══════════════════════════════════════════════════════════════════════════════ */

function BackgroundCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      SLIDE_MS,
    );
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slide = heroSlides[index];

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover ${slide.position}`}
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Consistent dark overlay — high contrast, never washed out ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/55" />

      {/* Top vignette — blends with navbar */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Bottom vignette — blends into wave */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#08090f] to-transparent" />
    </div>
  );
}

/* ─── WhatsApp icon ─── */

function WhatsAppIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Tricolor wave — single divider at the bottom of the hero
   Teal + Magenta accents → solid bg-page cut
   ═══════════════════════════════════════════════════════════════════════════════ */

function HeroWaveBottom() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 z-20 w-full translate-y-px"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 200"
        className="h-[80px] w-full md:h-[120px]"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Teal band — topmost curve, visible presence */}
        <path
          d="M0 105C180 135 360 155 600 142C840 129 1080 98 1260 108C1360 113 1420 128 1440 135V200H0Z"
          fill="rgba(65,212,203,0.12)"
        />
        {/* Texture grain — irregular teal hairline for organic feel */}
        <path
          d="M0 115C60 118 120 128 200 132C320 138 440 150 580 146C720 142 840 128 960 125C1080 122 1180 118 1280 116C1360 114 1400 120 1440 124"
          stroke="rgba(65,212,203,0.15)"
          strokeWidth="0.5"
        />
        {/* Magenta band — middle curve, subtle accent */}
        <path
          d="M0 128C240 155 520 162 780 150C1020 139 1200 112 1440 125V200H0Z"
          fill="rgba(222,27,206,0.07)"
        />
        {/* Texture grain — irregular magenta hairline */}
        <path
          d="M0 138C100 145 220 152 380 155C540 158 700 148 860 142C1020 136 1160 126 1300 128C1380 129 1420 134 1440 136"
          stroke="rgba(222,27,206,0.10)"
          strokeWidth="0.5"
        />
        {/* Solid cut — connects to bg-page */}
        <path
          d="M0 148C220 172 440 180 660 168C880 156 1060 132 1240 138C1360 142 1420 155 1440 162V200H0Z"
          fill="var(--color-bg-page)"
        />
        {/* Edge stroke — teal definition line on the solid cut */}
        <path
          d="M0 148C220 172 440 180 660 168C880 156 1060 132 1240 138C1360 142 1420 155 1440 162"
          stroke="rgba(65,212,203,0.16)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Hero — Full-bleed carousel + dark overlay + content
   ═══════════════════════════════════════════════════════════════════════════════ */

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[min(100dvh,900px)] overflow-hidden bg-[#08090f]"
    >
      {/* ── Background: photo carousel ── */}
      <BackgroundCarousel />

      {/* ── Content ── */}
      <Container className="relative z-10 flex h-full items-center pb-32 pt-32 md:pb-0 md:pt-0">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[560px]"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="mb-5 text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-teal"
          >
            {hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-[2.4rem] font-semibold leading-[0.92] text-white sm:text-[3rem] md:text-[3.5rem]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            {hero.title.line1}
            <br />
            <span className="text-white">
              {hero.title.line2}
            </span>
            {" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-teal/80 bg-clip-text text-transparent">
              {hero.title.accent}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mb-9 max-w-[380px] text-[15px] leading-relaxed text-white/60"
          >
            {hero.description}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2.5">
            <Link
              href={hero.buttons.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 self-start rounded-full bg-gradient-to-r from-brand-purple to-brand-teal px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_36px_rgba(65,212,203,0.18),0_4px_14px_rgba(222,27,206,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(65,212,203,0.28),0_6px_20px_rgba(222,27,206,0.20)]"
            >
              <WhatsAppIcon />
              {hero.buttons.primary.label}
            </Link>

            <p className="pl-1 text-[12px] font-medium tracking-wide text-white/38">
              {hero.ctaNote}
            </p>
          </motion.div>
        </motion.div>
      </Container>

      {/* ── Tricolor wave — section transition ── */}
      <HeroWaveBottom />
    </section>
  );
}
