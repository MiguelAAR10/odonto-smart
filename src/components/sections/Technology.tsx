"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technology } from "@/data/content";
import { type MouseEvent } from "react";

interface TechCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

function TechCard({ title, description, image, index }: TechCardProps) {
  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Heavy damping for luxury feel
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

  // Directional glow that follows cursor
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowBackground = useMotionTemplate`radial-gradient(300px circle at ${glowX}px ${glowY}px, rgba(65, 212, 203, 0.12), transparent 70%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.12,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
        willChange: "transform",
      }}
      className="group relative overflow-hidden rounded-2xl bg-bg-main shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Directional glow overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 p-6" style={{ transform: "translateZ(20px)" }}>
        <h3
          className="text-xl font-bold text-text-dark"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export function Technology() {
  return (
    <section id="tecnologia" className="bg-noise relative bg-bg-soft py-20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <SectionHeading label={technology.label} title={technology.title} description={technology.description} />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technology.cards.map((card, index) => (
            <TechCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
