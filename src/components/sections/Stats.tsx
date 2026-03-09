"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { stats } from "@/data/content";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({ value, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col items-center rounded-2xl ${bgColor} px-8 py-10`}
    >
      {/* Icon placeholder */}
      <div className={`mb-4 ${iconColor}`}>
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {variant === "teal" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          )}
        </svg>
      </div>

      {/* Number */}
      <span className="text-4xl font-black text-text-dark md:text-5xl">
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </span>

      {/* Label */}
      <span className="mt-2 text-center text-[14px] font-bold uppercase tracking-widest text-text-muted">
        {label}
      </span>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="bg-bg-main py-16 md:py-20">
      <Container>
        {/* Title with underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-black text-text-dark md:text-3xl">
            {stats.title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-brand-teal" />
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
