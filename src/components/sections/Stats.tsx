"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { stats } from "@/data/content";
import { CalendarCheck, HeartPulse, ShieldCheck } from "lucide-react";

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  // Arcade-style spring: snappy with slight overshoot
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 60,
    mass: 0.8,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

const icons = [CalendarCheck, HeartPulse, ShieldCheck];

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  variant: "teal" | "purple";
  index: number;
}

function StatCard({ value, prefix, suffix, label, variant, index }: StatCardProps) {
  const bgColor = variant === "teal" ? "bg-brand-teal-soft" : "bg-brand-purple-soft";
  const iconColor = variant === "teal" ? "text-brand-teal" : "text-brand-purple";
  const borderColor =
    variant === "teal" ? "border-brand-teal/15" : "border-brand-purple/15";
  const Icon = icons[index] || ShieldCheck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={`flex flex-col items-center rounded-2xl border ${borderColor} ${bgColor} px-8 py-10 shadow-sm transition-shadow duration-300 hover:shadow-xl`}
    >
      <motion.div
        className={`mb-4 rounded-full bg-white/80 p-3 ${iconColor}`}
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </motion.div>

      {/* Number — Monument Extended style (bold, wide) */}
      <span
        className="text-4xl font-black tracking-tight text-text-dark md:text-5xl"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
      >
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </span>

      {/* Label */}
      <span className="mt-2 text-center text-[13px] font-bold uppercase tracking-[0.15em] text-text-muted">
        {label}
      </span>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="bg-noise relative bg-bg-main py-16 md:py-20">
      <Container>
        {/* Title — Clash Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2
            className="text-2xl font-bold text-text-dark md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {stats.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-brand-teal to-brand-purple" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.items.map((item, index) => (
            <StatCard
              key={item.label}
              value={item.value}
              prefix={item.prefix}
              suffix={item.suffix}
              label={item.label}
              variant={item.variant}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
