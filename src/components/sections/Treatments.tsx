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

interface TreatmentCardProps {
  id: string;
  name: string;
  brief: string;
  icon: keyof typeof iconMap;
  color: "teal" | "pink";
  index: number;
}

function TreatmentCard({ id, name, brief, icon, color, index }: TreatmentCardProps) {
  const Icon = iconMap[icon];
  const isTeal = color === "teal";
  const isFeatured = treatments.featuredIds.includes(id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay: index * 0.1,
      }}
      whileHover={{ y: -3 }}
      className={`group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-300 md:min-h-[250px] ${
        isFeatured
          ? "bg-[linear-gradient(180deg,#ffffff_0%,#f8fdfc_100%)] shadow-[0_16px_36px_rgba(26,10,46,0.08)] md:p-7"
          : "bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
      } ${
        isTeal
          ? "border-brand-teal/12 hover:border-brand-teal/22"
          : "border-brand-purple/12 hover:border-brand-purple/22"
      } ${
        isFeatured ? "md:col-span-1 xl:col-span-4" : "md:col-span-1 xl:col-span-3"
      }`}
    >
      <div className="relative z-10 flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 260 }}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${
            isTeal
              ? "bg-brand-teal/10"
              : "bg-brand-purple/10"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${isTeal ? "text-brand-teal" : "text-brand-purple"}`}
            strokeWidth={1.8}
          />
        </motion.div>

        <div className="min-w-0 flex-1">
          {isFeatured && (
            <span className="mb-3 inline-flex rounded-full bg-text-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
              Especialidad destacada
            </span>
          )}
          <h3
            className="text-[15px] font-bold text-text-dark md:text-[16px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h3>
          <p className={`mt-2 leading-relaxed text-text-muted ${isFeatured ? "text-[14px]" : "text-[13px]"}`}>
            {brief}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Treatments() {
  return (
    <section id="especialidades" className="bg-noise relative bg-bg-soft py-20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Grid — 2 columns on desktop */}
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-12">
          {treatments.items.map((item, index) => (
            <TreatmentCard
              key={item.id}
              id={item.id}
              name={item.name}
              brief={item.brief}
              icon={item.icon}
              color={item.color}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
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
