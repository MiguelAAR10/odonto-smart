"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { hero } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

// Staggered word reveal for titles
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
          style={{ transformOrigin: "bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
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

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[80vh] w-full overflow-hidden pt-16 md:min-h-[88vh]"
    >
      {/* Background Image with Spring Parallax */}
      <motion.div
        className="absolute inset-0 h-[130%] w-full"
        style={{ y: backgroundY, willChange: "transform" }}
      >
        <Image
          src={hero.image}
          alt="Clínica dental moderna"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark Overlay with texture */}
      <div
        className="bg-noise-dark absolute inset-y-0 left-0 w-full md:w-[56%]"
        style={{ background: "var(--color-hero-overlay)" }}
        aria-hidden="true"
      />

      {/* Subtle glow behind content */}
      <div
        className="pointer-events-none absolute left-[10%] top-1/3 h-[400px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--color-brand-teal)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative flex min-h-[80vh] items-center md:min-h-[88vh]"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-2xl">
            {/* Title Line 1 — Clash Display */}
            <h1
              className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <StaggeredText text={hero.title.line1} delay={0.1} />
            </h1>

            {/* Title Line 2 — Gradient text */}
            <span
              className="mt-1 block text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <StaggeredText
                text={hero.title.line2}
                className="gradient-text"
                delay={0.5}
              />
            </span>

            {/* Description — Satoshi */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease, delay: 0.9 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              {hero.description}
            </motion.p>

            {/* Buttons with hover glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.1 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href={hero.buttons.primary.href}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:border-brand-teal/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                {hero.buttons.primary.label}
              </motion.a>
              <motion.a
                href={hero.buttons.secondary.href}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  boxShadow: "0 8px 32px rgba(222, 27, 206, 0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="rounded-xl bg-brand-purple px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-purple/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
              >
                {hero.buttons.secondary.label}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
