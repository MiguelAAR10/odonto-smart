"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { stats } from "@/data/content";
import { CalendarCheck, HeartPulse, ShieldCheck } from "lucide-react";

// Reusable animated counter with spring physics (slot-machine style)
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
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

const icons = [CalendarCheck, HeartPulse, ShieldCheck];

// Icon entrance animations — each icon has a unique entrance
const iconVariants = [
  // CalendarCheck: flip in
  {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 200, damping: 15 } },
  },
  // HeartPulse: double pulse
  {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.3, 0.9, 1.15, 1],
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  },
  // ShieldCheck: bounce in
  {
    hidden: { y: -30, opacity: 0, scale: 0.5 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 12 },
    },
  },
];

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  variant: "teal" | "purple";
  index: number;
}

function StatItem({ value, prefix, suffix, label, variant, index }: StatCardProps) {
  const iconColor = variant === "teal" ? "text-brand-teal" : "text-brand-purple";
  const Icon = icons[index] || ShieldCheck;
  const isLast = index === stats.items.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.15,
      }}
      className="group relative flex flex-1 flex-col items-center px-6 py-8 md:px-10"
    >
      {/* Icon with unique entrance animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={iconVariants[index] || iconVariants[0]}
        className={`mb-5 rounded-full bg-white/80 p-3 shadow-sm ${iconColor}`}
      >
        <Icon className="h-7 w-7" strokeWidth={1.5} />
      </motion.div>

      {/* Number — Clash Display */}
      <span
        className="text-4xl font-black tracking-tight text-text-dark md:text-5xl"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
      >
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </span>

      {/* Label */}
      <span className="mt-2 text-center text-[12px] font-bold uppercase tracking-[0.15em] text-text-muted">
        {label}
      </span>

      {/* Divider — gradient vertical line between items */}
      {!isLast && (
        <div className="pointer-events-none absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-brand-teal/20 to-transparent md:block" aria-hidden="true" />
      )}
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="bg-noise lazy-section relative bg-bg-main py-16 md:py-20">
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

        {/* Stats Strip — horizontal with dividers */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-main shadow-sm md:flex-row">
          {stats.items.map((item, index) => (
            <StatItem
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
