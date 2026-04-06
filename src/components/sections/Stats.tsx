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

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Stat card — compact for flanking the medallion ─── */

function StatCard({
  value,
  prefix,
  suffix,
  display,
  label,
  attribute,
  delay,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
  attribute: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease, delay }}
      className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/90 px-5 py-5 text-center shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md md:px-7 md:py-7"
    >
      <span
        className="text-[1.8rem] font-bold tracking-tight text-text-dark md:text-[2.2rem]"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
      >
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} display={display} />
      </span>
      <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted md:text-[11px]">
        {label}
      </span>
      <span className="mx-auto mt-1 max-w-[160px] text-[11px] leading-relaxed text-text-light md:text-[12px]">
        {attribute}
      </span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Stats — All three elements (stat + medallion + stat) overlap the hero wave
   ═══════════════════════════════════════════════════════════════════════════════ */

export function Stats() {
  return (
    <section className="bg-noise relative bg-bg-main pb-16 pt-8 md:pb-20 md:pt-10">

      {/* ── Floating row: stat | medallion | stat — all on the wave ── */}
      <div className="absolute inset-x-0 top-0 z-30 -translate-y-1/2">
        <Container>
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 md:gap-6">

            {/* Left — Stars */}
            <div className="w-[140px] md:w-[180px]">
              <StatCard
                value={Number(stats.items[0]?.value ?? 0)}
                display={"display" in (stats.items[0] ?? {}) ? (stats.items[0] as { display: string }).display : undefined}
                label={stats.items[0]?.label ?? ""}
                attribute={stats.items[0]?.attribute ?? ""}
                delay={0.15}
              />
            </div>

            {/* Center — Medallion (bigger, higher) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="relative -mt-14 shrink-0 md:-mt-20"
            >
              <div
                className="absolute inset-0 scale-[2.2] rounded-full bg-brand-teal/12 blur-[60px]"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 scale-[1.4] rounded-full bg-brand-purple/8 blur-[40px]"
                aria-hidden="true"
              />
              <div className="relative flex h-[210px] w-[210px] items-center justify-center rounded-full bg-white p-6 shadow-[0_20px_64px_rgba(65,212,203,0.24),0_8px_28px_rgba(222,27,206,0.14)] ring-2 ring-brand-teal/10 md:h-[280px] md:w-[280px] md:p-9">
                <Image
                  src="/images/odonto-smart/logo-principal.png"
                  alt="Odonto Smart"
                  width={400}
                  height={400}
                  className="h-full w-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Right — Patients */}
            <div className="w-[140px] md:w-[180px]">
              <StatCard
                value={Number(stats.items[1]?.value ?? 0)}
                suffix={"suffix" in (stats.items[1] ?? {}) ? (stats.items[1] as { suffix: string }).suffix : undefined}
                label={stats.items[1]?.label ?? ""}
                attribute={stats.items[1]?.attribute ?? ""}
                delay={0.3}
              />
            </div>

          </div>
        </Container>
      </div>

      {/* ── Title below the floating elements ── */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="pt-24 text-center md:pt-32"
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
      </Container>
    </section>
  );
}
