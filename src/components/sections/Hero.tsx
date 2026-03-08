"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { hero } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden pt-16">
      {/* Background Image */}
      <Image
        src={hero.image}
        alt="Clínica dental moderna"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay - Left side */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-2xl">
            {/* Title Line 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
            >
              {hero.title.line1}
            </motion.h1>

            {/* Title Line 2 - Teal */}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="mt-1 block text-4xl font-black italic leading-tight text-brand-teal md:text-5xl lg:text-6xl"
            >
              {hero.title.line2}
            </motion.span>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              {hero.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href={hero.buttons.primary.href}
                className="rounded-lg bg-brand-purple px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-purple/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
              >
                {hero.buttons.primary.label}
              </a>
              <a
                href={hero.buttons.secondary.href}
                className="rounded-lg bg-brand-teal px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                {hero.buttons.secondary.label}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
