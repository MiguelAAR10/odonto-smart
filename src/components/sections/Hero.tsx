"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { hero } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ background: "var(--hero-surface)" }}
    >
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-halo" aria-hidden="true" />

      <Container className="relative z-10 py-28 md:py-32 lg:py-34">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="order-1 text-center lg:text-left"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/62 md:text-[12px]">
              {hero.eyebrow}
            </p>

            <h1
              className="mx-auto max-w-[11ch] text-4xl font-semibold leading-[0.94] text-white md:text-6xl lg:mx-0 lg:text-[4.15rem]"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
            >
              {hero.title.line1}
              <br />
              <span className="text-white/92">{hero.title.line2}</span>
            </h1>

            <div className="mt-7 flex justify-center lg:justify-start">
              <Link
                href={hero.buttons.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#de1bce_0%,#41d4cb_100%)] px-7 py-3 text-[15px] font-semibold text-white shadow-[0_14px_28px_rgba(8,12,24,0.3)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {hero.buttons.primary.label}
              </Link>
            </div>

            <p className="mt-3 text-sm font-medium text-white/56 lg:text-left">
              {hero.ctaNote}
            </p>

            <p className="mx-auto mt-5 max-w-[34ch] text-[15px] leading-relaxed text-white/72 md:text-lg lg:mx-0">
              {hero.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="order-2"
          >
            <div className="hero-visual-frame relative mx-auto max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/4.8] sm:aspect-[4/3.7] lg:aspect-[4/4.2]">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <WaveDivider />
    </section>
  );
}
