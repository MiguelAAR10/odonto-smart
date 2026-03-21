"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactConfetti from "react-confetti";
import { motion, type Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/ui/WaveDivider";

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardOffsets = [
  { x: -120, y: -60 },
  { x: 95, y: -70 },
  { x: 130, y: 15 },
  { x: -85, y: 80 },
  { x: 100, y: 95 },
  { x: -110, y: 25 },
];

const cardVariants: Variants = {
  hidden: (index: number) => ({
    x: cardOffsets[index]?.x ?? 0,
    y: cardOffsets[index]?.y ?? 0,
    opacity: 0,
    filter: "blur(10px)",
  }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const cards = [
  {
    image: "/images/odonto-smart/tech-3.png",
    alt: "Diseno de sonrisa",
    title: "Diseno de Sonrisa",
    description: "Planificacion estetica digital",
    className: "col-span-2 row-span-2",
  },
  {
    image: "/images/odonto-smart/team-2.png",
    alt: "Dr. Carlos Ramirez",
    title: "Dr. Carlos Ramirez",
    description: "Precision laser y protocolo premium",
    className: "col-span-1 row-span-2",
  },
  {
    image: "/images/odonto-smart/tech-1.png",
    alt: "Scanner intraoral",
    title: "Scanner Intraoral",
    description: "Diagnostico inteligente en minutos",
    className: "col-span-1 row-span-1",
  },
  {
    image: "/images/odonto-smart/team-4.png",
    alt: "Paciente feliz",
    title: "Paciente Feliz",
    description: "Experiencia boutique de principio a fin",
    className: "col-span-1 row-span-1",
  },
  {
    image: "/images/odonto-smart/tech-2.png",
    alt: "Sede moderna",
    title: "Clinica Boutique",
    description: "Ambiente premium y tecnologia avanzada",
    className: "col-span-1 row-span-1",
  },
  {
    image: "/images/odonto-smart/hero-bg.png",
    alt: "Sonrisa con brackets",
    title: "+20 anos | 5000+ sonrisas",
    description: "Resultados reales, confianza medible",
    className: "col-span-2 row-span-1",
  },
];

export function Hero() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [didCelebrate, setDidCelebrate] = useState(false);
  const [viewport, setViewport] = useState(() => ({
    width: typeof window === "undefined" ? 0 : window.innerWidth,
    height: typeof window === "undefined" ? 0 : window.innerHeight,
  }));

  useEffect(() => {
    const syncViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", syncViewport, { passive: true });

    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  const triggerCollisionCelebration = () => {
    if (didCelebrate) return;
    setDidCelebrate(true);
    setShowConfetti(true);
    window.setTimeout(() => setShowConfetti(false), 2400);
  };

  return (
    <section
      id="inicio"
      className="relative overflow-x-hidden overflow-y-visible pb-24 pt-24 md:pt-28"
      style={{ background: "var(--color-bg-hero)" }}
    >
      {showConfetti && viewport.width > 0 && viewport.height > 0 && (
        <ReactConfetti
          width={viewport.width}
          height={viewport.height}
          recycle={false}
          numberOfPieces={280}
          gravity={0.18}
          initialVelocityY={10}
          tweenDuration={3600}
          colors={["#d4af37", "#f2e1a7", "#41d4cb"]}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 70, pointerEvents: "none" }}
        />
      )}

      <Container className="relative z-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-gray-300">
              Odonto Smart Elite Care
            </p>

            <h1
              className="text-white drop-shadow-md text-4xl font-black leading-[0.92] md:text-6xl"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
            >
              Sonrisas de elite,
              <br />
              precision boutique.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-200 md:text-lg lg:mx-0 mx-auto">
              Tratamientos personalizados, equipo especialista y tecnologia de ultima generacion para resultados impecables con una experiencia premium.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/sedes#contacto"
                className="inline-flex items-center rounded-xl bg-brand-purple px-7 py-3 text-[15px] font-semibold text-white shadow-lg shadow-brand-purple/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Agenda Tu Cita
              </Link>
              <Link
                href="/tratamientos"
                className="inline-flex items-center rounded-xl bg-brand-teal px-7 py-3 text-[15px] font-semibold text-white shadow-lg shadow-brand-teal/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Ver Especialidades
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={gridVariants}
            onAnimationComplete={triggerCollisionCelebration}
            className="grid auto-rows-[118px] grid-cols-2 gap-4 md:auto-rows-[128px] md:grid-cols-3"
          >
            {cards.map((card, index) => (
              <motion.article
                key={card.title}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className={`relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.06] shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm ${card.className}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-[62%] w-full">
                  <Image src={card.image} alt={card.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 38vw" />
                </div>
                <div className="p-3.5">
                  <h3 className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-200">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>

      <WaveDivider />
    </section>
  );
}
