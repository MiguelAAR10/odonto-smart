"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { treatments } from "@/data/content";
import {
  ScanLine,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Syringe,
  HeartPulse,
  Baby,
} from "lucide-react";

const iconMap = {
  "scan-line": ScanLine,
  "refresh-cw": RefreshCw,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  syringe: Syringe,
  "heart-pulse": HeartPulse,
  baby: Baby,
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════════════════════════════════════
   Featured card — large, prominent, with CTA
   ═══════════════════════════════════════════════════════════════════════════════ */

function FeaturedCard({
  name,
  brief,
  icon,
  color,
  index,
}: {
  name: string;
  brief: string;
  icon: keyof typeof iconMap;
  color: "teal" | "pink";
  index: number;
}) {
  const Icon = iconMap[icon];
  const isTeal = color === "teal";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-7 transition-shadow duration-300 md:min-h-[260px] md:p-8 ${
        isTeal
          ? "border-brand-teal/16 bg-gradient-to-br from-white via-white to-brand-teal-soft/40 shadow-[0_12px_40px_rgba(65,212,203,0.10)] hover:shadow-[0_16px_48px_rgba(65,212,203,0.16)]"
          : "border-brand-purple/16 bg-gradient-to-br from-white via-white to-brand-purple/[0.04] shadow-[0_12px_40px_rgba(222,27,206,0.08)] hover:shadow-[0_16px_48px_rgba(222,27,206,0.14)]"
      }`}
    >
      {/* Subtle corner glow */}
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-[60px] ${
          isTeal ? "bg-brand-teal/8" : "bg-brand-purple/6"
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
              isTeal ? "bg-brand-teal/10" : "bg-brand-purple/10"
            }`}
          >
            <Icon
              className={`h-5 w-5 ${isTeal ? "text-brand-teal" : "text-brand-purple"}`}
              strokeWidth={1.8}
            />
          </div>
          <span className="rounded-full bg-text-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
            Mas solicitado
          </span>
        </div>

        <h3
          className="text-[17px] font-bold text-text-dark md:text-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h3>
        <p className="mt-2 max-w-[280px] text-[14px] leading-relaxed text-text-muted">
          {brief}
        </p>
      </div>

      {/* CTA inside card */}
      <Link
        href={treatments.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative z-10 mt-5 inline-flex items-center gap-1.5 self-start rounded-full px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-px ${
          isTeal
            ? "bg-gradient-to-r from-brand-teal to-brand-teal/85 shadow-[0_6px_20px_rgba(65,212,203,0.20)]"
            : "bg-gradient-to-r from-brand-purple to-brand-purple/85 shadow-[0_6px_20px_rgba(222,27,206,0.18)]"
        }`}
      >
        Consultar ahora
      </Link>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Secondary card — compact, clean
   ═══════════════════════════════════════════════════════════════════════════════ */

function SecondaryCard({
  name,
  brief,
  icon,
  color,
  index,
}: {
  name: string;
  brief: string;
  icon: keyof typeof iconMap;
  color: "teal" | "pink";
  index: number;
}) {
  const Icon = iconMap[icon];
  const isTeal = color === "teal";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease, delay: index * 0.08 }}
      whileHover={{ y: -3, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`group flex items-start gap-3.5 rounded-2xl border bg-white p-5 transition-shadow duration-300 ${
        isTeal
          ? "border-border-subtle hover:shadow-[0_8px_28px_rgba(65,212,203,0.08)]"
          : "border-border-subtle hover:shadow-[0_8px_28px_rgba(222,27,206,0.06)]"
      }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          isTeal ? "bg-brand-teal/8" : "bg-brand-purple/8"
        }`}
      >
        <Icon
          className={`h-4 w-4 ${isTeal ? "text-brand-teal" : "text-brand-purple"}`}
          strokeWidth={1.8}
        />
      </div>
      <div className="min-w-0">
        <h3
          className="text-[14px] font-bold text-text-dark md:text-[15px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h3>
        <p className="mt-1 text-[13px] leading-relaxed text-text-muted">
          {brief}
        </p>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Treatments — Bento layout: 2 featured + 5 secondary
   ═══════════════════════════════════════════════════════════════════════════════ */

export function Treatments() {
  const featured = treatments.items.filter((item) =>
    treatments.featuredIds.includes(item.id),
  );
  const secondary = treatments.items.filter(
    (item) => !treatments.featuredIds.includes(item.id),
  );

  return (
    <section id="especialidades" className="bg-noise relative bg-bg-soft py-20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-[12px] font-bold uppercase tracking-[0.2em] text-brand-purple">
            {treatments.label}
          </span>
          <h2
            className="text-3xl font-bold text-text-dark md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {treatments.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-teal to-brand-purple" />
        </motion.div>

        {/* Featured row — 2 large cards */}
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 md:gap-5">
          {featured.map((item, index) => (
            <FeaturedCard
              key={item.id}
              name={item.name}
              brief={item.brief}
              icon={item.icon}
              color={item.color}
              index={index}
            />
          ))}
        </div>

        {/* Secondary grid — compact cards */}
        <div className="mx-auto mt-4 grid max-w-5xl gap-3 md:mt-5 md:grid-cols-2 lg:grid-cols-3">
          {secondary.map((item, index) => (
            <SecondaryCard
              key={item.id}
              name={item.name}
              brief={item.brief}
              icon={item.icon}
              color={item.color}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08, ease }}
          className="mt-12 flex justify-center"
        >
          <Link
            href={treatments.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#de1bce_0%,#41d4cb_100%)] px-7 py-3 text-[15px] font-semibold text-white shadow-[0_16px_34px_rgba(26,10,46,0.16)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {treatments.cta.label}
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
