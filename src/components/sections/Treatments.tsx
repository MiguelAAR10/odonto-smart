"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
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
  ArrowRight,
} from "lucide-react";
import { type MouseEvent } from "react";

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
  name: string;
  brief: string;
  icon: keyof typeof iconMap;
  color: "teal" | "pink";
  index: number;
  id: string;
}

function TreatmentCard({ name, brief, icon, color, index, id }: TreatmentCardProps) {
  const Icon = iconMap[icon];
  const isTeal = color === "teal";

  // Directional glow
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowColor = isTeal ? "65, 212, 203" : "222, 27, 206";
  const glowBg = useMotionTemplate`radial-gradient(250px circle at ${glowX}px ${glowY}px, rgba(${glowColor}, 0.08), transparent 70%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  }

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
      whileHover={{ y: -4 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-xl ${
        isTeal
          ? "border-brand-teal/10 hover:border-brand-teal/25 hover:shadow-brand-teal/10"
          : "border-brand-purple/10 hover:border-brand-purple/25 hover:shadow-brand-purple/10"
      }`}
    >
      <Link href={`/tratamientos`} className="absolute inset-0 z-20" aria-label={`Ver ${name}`} />

      {/* Directional glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glowBg }}
      />

      <div className="relative z-10 flex items-start gap-4">
        {/* Icon with entrance animation */}
        <motion.div
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
            isTeal
              ? "bg-brand-teal/10 group-hover:bg-brand-teal/20"
              : "bg-brand-purple/10 group-hover:bg-brand-purple/20"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${isTeal ? "text-brand-teal" : "text-brand-purple"}`}
            strokeWidth={1.8}
          />
        </motion.div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <h3
            className="text-[15px] font-bold text-text-dark transition-all duration-300 group-hover:tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {name}
          </h3>
          <p className="mt-1 text-[13px] leading-relaxed text-text-muted">
            {brief}
          </p>
        </div>

        {/* Arrow reveal on hover */}
        <div className="flex h-11 items-center">
          <motion.div
            className={`flex h-7 w-7 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 ${
              isTeal ? "bg-brand-teal/10 text-brand-teal" : "bg-brand-purple/10 text-brand-purple"
            }`}
          >
            <ArrowRight className="h-3.5 w-3.5 -translate-x-1 transition-transform duration-300 group-hover:translate-x-0" />
          </motion.div>
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
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
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
      </Container>
    </section>
  );
}
