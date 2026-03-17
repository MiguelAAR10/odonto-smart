"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { hero, stats } from "@/data/content";
import { ShieldCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

// Staggered word reveal for line 1
function StaggeredText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
              },
            },
          }}
          className="mr-[0.3em] inline-block will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Typewriter-style character reveal for line 2
function TypewriterText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const chars = text.split("");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.04, delayChildren: delay },
        },
      }}
      className={className}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.05 },
            },
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {/* Blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          delay: delay + chars.length * 0.04 + 0.2,
          duration: 0.8,
          repeat: 2,
          repeatType: "loop",
        }}
        className="inline-block h-[0.9em] w-[3px] translate-y-[0.1em] rounded-full bg-brand-teal"
      />
    </motion.span>
  );
}

// Floating badge component
function FloatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 20 }}
      className="animate-float-slow glass-dark absolute right-8 top-1/3 z-10 hidden rounded-2xl border border-white/10 px-5 py-4 md:block"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal/20">
          <ShieldCheck className="h-5 w-5 text-brand-teal" strokeWidth={1.5} />
        </div>
        <div>
          <div className="text-xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
            +{stats.items[0].value}
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
            {stats.items[0].label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Scroll indicator
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
    >
      <motion.span
        className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
      </motion.span>
      <div className="relative h-10 w-[1.5px] overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="absolute left-0 top-0 h-3 w-full rounded-full bg-gradient-to-b from-brand-teal to-brand-purple"
          animate={{ y: [0, 28, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax with spring physics
  const rawY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundY = useSpring(rawY, { stiffness: 100, damping: 30 });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[80vh] w-full overflow-hidden pt-16 md:min-h-[92vh]"
    >
      {/* Background Image with Spring Parallax */}
      <motion.div
        className="absolute inset-0 h-[130%] w-full"
        style={{ y: backgroundY, willChange: "transform" }}
      >
        <Image
          src={hero.image}
          alt="Clinica dental moderna"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay with diagonal mask on desktop */}
      <div
        className="bg-noise-dark absolute inset-0 md:clip-diagonal"
        style={{ background: "var(--color-hero-overlay)" }}
        aria-hidden="true"
      />

      {/* Diagonal gradient edge (desktop only) */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background: "linear-gradient(115deg, transparent 53%, rgba(65, 212, 203, 0.08) 53.5%, transparent 54%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle glow behind content */}
      <div
        className="pointer-events-none absolute left-[10%] top-1/3 h-[400px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--color-brand-teal)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[20%] top-1/2 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "var(--color-brand-purple)" }}
        aria-hidden="true"
      />

      {/* Floating Badge */}
      <FloatingBadge />

      {/* Content */}
      <motion.div
        className="relative flex min-h-[80vh] items-center md:min-h-[92vh]"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-2xl">
            {/* Title Line 1 — Clash Display, staggered words */}
            <h1
              className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <StaggeredText text={hero.title.line1} delay={0.1} />
            </h1>

            {/* Title Line 2 — Typewriter with gradient + cursor */}
            <span
              className="mt-1 block text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <TypewriterText
                text={hero.title.line2}
                className="gradient-text"
                delay={0.6}
              />
            </span>

            {/* Description — Satoshi */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease, delay: 1.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              {hero.description}
            </motion.p>

            {/* Buttons with enhanced hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {/* Primary — Glass outline with animated border on hover */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href={hero.buttons.primary.href}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-all hover:border-brand-teal/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                >
                  {hero.buttons.primary.label}
                  {/* Hover sweep */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </Link>
              </motion.div>

              {/* Secondary — Purple with glow expansion */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href={hero.buttons.secondary.href}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-brand-purple px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-purple/25 transition-all hover:shadow-xl hover:shadow-brand-purple/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
                >
                  {hero.buttons.secondary.label}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div style={{ opacity: scrollIndicatorOpacity }}>
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
