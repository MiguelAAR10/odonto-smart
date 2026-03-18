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
import { Sparkles, ArrowRight, Star } from "lucide-react";

// Word that fades in linked to scroll progress
function ScrollWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <motion.span
      className="mr-[0.3em] inline-block will-change-transform"
      style={{ opacity, y }}
    >
      {word}
    </motion.span>
  );
}

// Floating particles for depth
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1.5 + Math.random() * 2,
    duration: 8 + Math.random() * 6,
    delay: Math.random() * 4,
    color: i % 3 === 0 ? "var(--color-brand-purple)" : "var(--color-brand-teal)",
    opacity: 0.08 + Math.random() * 0.12,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Magnetic CTA button
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

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-brand-teal to-brand-purple px-10 py-5 text-lg font-bold text-white shadow-xl shadow-brand-teal/20 transition-shadow duration-500 hover:shadow-2xl hover:shadow-brand-teal/35"
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

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });

  // All transforms hoisted (fixes rerender-defer-reads anti-pattern)
  const glowOpacity = useTransform(smooth, [0.15, 0.5], [0, 0.3]);
  const glowScale = useTransform(smooth, [0.15, 0.5], [0.6, 1.2]);
  const pinkGlowOpacity = useTransform(glowOpacity, (v) => v * 0.7);
  const ringScale = useTransform(smooth, [0.2, 0.5], [0.85, 1.05]);
  const ringOpacity = useTransform(smooth, [0.2, 0.45], [0, 0.5]);
  const outerRingScale = useTransform(ringScale, (v) => v * 1.05);
  const outerRingOpacity = useTransform(ringOpacity, (v) => v * 0.6);
  const counterScale = useTransform(smooth, [0.3, 0.55], [0.9, 1]);
  const counterOpacity = useTransform(smooth, [0.3, 0.55], [0, 1]);
  const textOpacity = useTransform(smooth, [0.4, 0.55], [0, 1]);
  const textY = useTransform(smooth, [0.4, 0.55], [15, 0]);
  const ctaOpacity = useTransform(smooth, [0.5, 0.65], [0, 1]);
  const ctaY = useTransform(smooth, [0.5, 0.65], [30, 0]);

  const headline = "Tu sonrisa te abre puertas al exito";
  const words = headline.split(" ");

  return (
    <section
      ref={sectionRef}
      className="bg-noise-dark relative overflow-hidden py-32"
      style={{ background: "#0a0f1a" }}
    >
      {/* Floating particles */}
      <Particles />

      {/* Ambient glows */}
      <motion.div
        className="pointer-events-none absolute left-[15%] top-1/4 h-[500px] w-[500px] rounded-full"
        style={{
          background: "#41d4cb",
          opacity: glowOpacity,
          scale: glowScale,
          filter: "blur(140px)",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute right-[15%] top-[40%] h-[400px] w-[400px] rounded-full"
        style={{
          background: "#de1bce",
          opacity: pinkGlowOpacity,
          scale: glowScale,
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/8 px-5 py-2"
          >
            <Sparkles className="h-4 w-4 text-brand-teal" />
            <span className="text-[13px] font-semibold text-brand-teal">
              Experiencia que Transforma
            </span>
          </motion.div>

          {/* Scroll-linked headline */}
          <h2
            className="mb-14 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[56px]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            {words.map((word, i) => (
              <ScrollWord
                key={i}
                word={word}
                progress={smooth}
                range={[
                  0.1 + i * (0.3 / words.length),
                  0.18 + i * (0.3 / words.length),
                ]}
              />
            ))}
          </h2>

          {/* Animated ring + stats reveal */}
          <div className="relative mb-14 flex items-center justify-center">
            {/* Decorative rings */}
            <motion.div
              className="absolute h-[280px] w-[280px] rounded-full border-2 border-brand-teal/25 md:h-[340px] md:w-[340px]"
              style={{ scale: ringScale, opacity: ringOpacity }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute h-[330px] w-[330px] rounded-full border border-brand-purple/15 md:h-[400px] md:w-[400px]"
              style={{
                scale: outerRingScale,
                opacity: outerRingOpacity,
              }}
              aria-hidden="true"
            />

            {/* Central metric */}
            <motion.div
              className="flex flex-col items-center gap-3"
              style={{ scale: counterScale, opacity: counterOpacity }}
            >
              {/* Stars with stagger cascade */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{
                      scale: [0, 1.3, 1],
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.08,
                      type: "spring" as const,
                      stiffness: 400,
                      damping: 15,
                    }}
                  >
                    <Star className="h-5 w-5 fill-brand-teal text-brand-teal" />
                  </motion.div>
                ))}
              </div>
              <span
                className="text-7xl font-black text-white md:text-8xl"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.04em",
                }}
              >
                5,000+
              </span>
              <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Sonrisas Transformadas
              </span>
              <div className="mt-2 h-0.5 w-20 rounded-full bg-gradient-to-r from-brand-teal to-brand-purple" />
            </motion.div>
          </div>

          {/* Supporting text */}
          <motion.p
            className="mb-10 max-w-lg text-lg leading-relaxed text-white/50"
            style={{
              opacity: textOpacity,
              y: textY,
            }}
          >
            Cada paciente es una historia de confianza.
            Tu siguiente sonrisa comienza con una consulta.
          </motion.p>

          {/* Magnetic CTA */}
          <motion.div style={{ opacity: ctaOpacity, y: ctaY }}>
            <MagneticButton href="https://wa.me/51987654321?text=Hola%2C%20quiero%20agendar%20una%20cita">
              Agenda Tu Transformacion
            </MagneticButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
