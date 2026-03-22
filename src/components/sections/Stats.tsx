"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { stats } from "@/data/content";

/* ─── Animated counter — spring physics, viewport triggered ─── */

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  display,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  display?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 28,
    stiffness: 50,
    mass: 0.8,
  });
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {display ?? `${prefix}${displayValue.toLocaleString()}${suffix}`}
    </span>
  );
}

/* ─── Trust metric card ─── */

const ease = [0.22, 1, 0.36, 1] as const;

interface TrustCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
  attribute: string;
  index: number;
}

function TrustCard({ value, prefix, suffix, display, label, attribute, index }: TrustCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease, delay: index * 0.12 }}
      whileHover={{ y: -3, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group flex flex-col items-center rounded-2xl border border-border-subtle bg-white px-6 py-8 text-center shadow-[0_4px_24px_rgba(26,10,46,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(65,212,203,0.10)] md:px-8 md:py-10"
    >
      <span
        className="text-[2.5rem] font-bold tracking-tight text-text-dark md:text-5xl"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
      >
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} display={display} />
      </span>
      <span className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted md:text-xs">
        {label}
      </span>
      <span className="mx-auto mt-2 max-w-[220px] text-[13px] leading-relaxed text-text-light md:text-sm">
        {attribute}
      </span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Stats — Brand medallion overlapping hero→stats transition + trust cards
   ═══════════════════════════════════════════════════════════════════════════════ */

export function Stats() {
  return (
    <section className="bg-noise relative bg-bg-main pb-16 pt-28 md:pb-20 md:pt-32">

      {/* ── Brand medallion — overlaps into hero wave ── */}
      <div className="absolute inset-x-0 top-0 z-30 flex -translate-y-1/2 justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          {/* Outer glow — teal */}
          <div
            className="absolute inset-0 scale-[1.8] rounded-full bg-brand-teal/8 blur-[36px]"
            aria-hidden="true"
          />
          {/* Inner glow — magenta */}
          <div
            className="absolute inset-0 scale-[1.2] rounded-full bg-brand-purple/6 blur-[24px]"
            aria-hidden="true"
          />
          {/* Medallion */}
          <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white p-6 shadow-[0_12px_48px_rgba(65,212,203,0.16),0_4px_20px_rgba(222,27,206,0.08)] ring-1 ring-black/[0.04] md:h-[200px] md:w-[200px] md:p-8">
            <Image
              src="/images/odonto-smart/logo-principal.png"
              alt="Odonto Smart"
              width={300}
              height={300}
              className="h-full w-auto object-contain"
            />
          </div>
        </motion.div>
      </div>

      <Container>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 text-center md:mb-14"
        >
          <h2
            className="text-2xl font-bold text-text-dark md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {stats.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-muted md:text-[15px]">
            {stats.description}
          </p>
        </motion.div>

        {/* Trust cards — 3 columns desktop, stacked mobile */}
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3 md:gap-6">
          {stats.items.map((item, index) => (
            <TrustCard
              key={item.label}
              value={Number(item.value ?? 0)}
              prefix={"prefix" in item ? (item as { prefix: string }).prefix : undefined}
              suffix={"suffix" in item ? (item as { suffix: string }).suffix : undefined}
              display={"display" in item ? (item as { display: string }).display : undefined}
              label={item.label}
              attribute={item.attribute}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
