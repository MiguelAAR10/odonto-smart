"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  type MotionValue,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Sparkles, ArrowRight } from "lucide-react";

// Staggered word component for scroll-linked text
function ScrollWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);
  const blur = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      className="mr-[0.3em] inline-block will-change-transform"
      style={{
        opacity,
        y,
        filter: useTransform(blur, (v) => `blur(${v}px)`),
      }}
    >
      {word}
    </motion.span>
  );
}

// Magnetic button that pulls toward cursor
function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-brand-teal to-brand-purple px-10 py-5 text-lg font-bold text-white shadow-xl shadow-brand-teal/25 transition-shadow duration-500 hover:shadow-2xl hover:shadow-brand-teal/40"
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  );
}

export function SmileReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring for all scroll-linked values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Smile image reveal — clips open as you scroll
  const clipPath = useTransform(
    smoothProgress,
    [0.1, 0.5],
    ["circle(0% at 50% 50%)", "circle(75% at 50% 50%)"]
  );

  // Glow intensity increases with scroll
  const glowOpacity = useTransform(smoothProgress, [0.2, 0.6], [0, 0.3]);
  const glowScale = useTransform(smoothProgress, [0.2, 0.6], [0.5, 1.2]);

  // CTA appears at the end
  const ctaOpacity = useTransform(smoothProgress, [0.55, 0.7], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.55, 0.7], [40, 0]);

  // Headline text to split into words
  const headline = "Tu sonrisa te abre puertas al éxito";
  const words = headline.split(" ");

  return (
    <section
      ref={sectionRef}
      className="bg-noise-dark relative min-h-[100vh] overflow-hidden py-32"
      style={{ background: "var(--color-bg-dark)" }}
    >
      {/* Ambient glow — cyan */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full"
        style={{
          background: "var(--color-brand-teal)",
          opacity: glowOpacity,
          scale: glowScale,
          filter: "blur(120px)",
          willChange: "transform, opacity",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow — rosa */}
      <motion.div
        className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full"
        style={{
          background: "var(--color-brand-purple)",
          opacity: useTransform(glowOpacity, (v) => v * 0.8),
          scale: glowScale,
          filter: "blur(100px)",
          willChange: "transform, opacity",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative flex flex-col items-center text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/10 px-5 py-2"
          >
            <Sparkles className="h-4 w-4 text-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal">
              Experiencia que Transforma
            </span>
          </motion.div>

          {/* Scroll-linked headline — words reveal as you scroll */}
          <h2
            className="mb-16 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {words.map((word, i) => (
              <ScrollWord
                key={i}
                word={word}
                progress={smoothProgress}
                range={[
                  0.1 + i * (0.35 / words.length),
                  0.2 + i * (0.35 / words.length),
                ]}
              />
            ))}
          </h2>

          {/* Smile image reveal — circle clip that opens with scroll */}
          <div className="relative mb-16 h-[350px] w-[350px] md:h-[420px] md:w-[420px]">
            {/* Ring decoration */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-brand-teal/30"
              style={{
                scale: useTransform(smoothProgress, [0.1, 0.5], [0.8, 1.05]),
                opacity: useTransform(smoothProgress, [0.1, 0.4], [0, 0.6]),
              }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute -inset-4 rounded-full border border-brand-purple/20"
              style={{
                scale: useTransform(smoothProgress, [0.15, 0.55], [0.7, 1.1]),
                opacity: useTransform(smoothProgress, [0.15, 0.45], [0, 0.4]),
              }}
              aria-hidden="true"
            />

            {/* The smile image — revealed by scroll via clip-path */}
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-brand-teal/20 to-brand-purple/20"
              style={{ clipPath, willChange: "clip-path" }}
            >
              <div className="flex h-full w-full items-center justify-center text-[120px] md:text-[160px]">
                😁
              </div>
            </motion.div>
          </div>

          {/* Supporting text */}
          <motion.p
            className="mb-10 max-w-xl text-lg text-white/60"
            style={{
              opacity: useTransform(smoothProgress, [0.4, 0.55], [0, 1]),
              y: useTransform(smoothProgress, [0.4, 0.55], [20, 0]),
            }}
          >
            Más de 5,000 pacientes ya transformaron su confianza.
            Tu siguiente sonrisa comienza con una consulta.
          </motion.p>

          {/* CTA — Magnetic button appears last */}
          <motion.div
            style={{
              opacity: ctaOpacity,
              y: ctaY,
              willChange: "transform, opacity",
            }}
          >
            <MagneticButton href="https://wa.me/51987654321?text=Hola%2C%20quiero%20agendar%20una%20cita">
              Agenda Tu Transformación
            </MagneticButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
