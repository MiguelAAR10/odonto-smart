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

function StatIcon({ index, className }: { index: number; className: string }) {
  if (index === 0) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3c3.756 0 6.75 2.735 6.75 6.4 0 2.066-.862 3.708-1.997 5.329-.983 1.405-1.778 2.618-2.006 4.271h-1.565c-.228-1.653-1.023-2.866-2.006-4.27C10.042 13.107 9.25 11.465 9.25 9.4 9.25 5.735 12.244 3 16 3"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.25 3C4.494 3 1.5 5.735 1.5 9.4c0 2.066.862 3.708 1.997 5.329.983 1.405 1.778 2.618 2.006 4.271h1.565c.228-1.653 1.023-2.866 2.006-4.27"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 8.25c.7-.5 1.519-.75 2.458-.75 1.95 0 3.292 1.1 3.292 2.85 0 1.95-1.75 2.55-2.742 3.308-.433.33-.758.712-.758 1.342"
        />
        <circle cx="11" cy="16.75" r=".75" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7.5 13.5c1.256 1.25 2.756 1.875 4.5 1.875s3.244-.625 4.5-1.875"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.25 9.75h.008m7.484 0h.008"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 21c4.971 0 9-4.029 9-9s-4.029-9-9-9-9 4.029-9 9 4.029 9 9 9Z"
        />
      </svg>
    );
  }

  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2.75c3.97 0 7.25 2.914 7.25 6.854 0 2.138-.93 4.025-2.365 5.63-1.18 1.319-1.997 2.339-2.135 4.016H9.25c-.138-1.677-.955-2.697-2.135-4.016C5.68 13.629 4.75 11.742 4.75 9.604 4.75 5.664 8.03 2.75 12 2.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 9.25 12 11l2.5-1.75"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.75 21.25h6.5"
      />
    </svg>
  );
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
      className={`flex flex-col items-center rounded-2xl border border-white/60 ${bgColor} px-8 py-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className={`mb-4 rounded-full bg-white/80 p-3 ${iconColor}`}>
        <StatIcon index={index} className="h-8 w-8" />
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
