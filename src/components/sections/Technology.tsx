"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technology } from "@/data/content";

interface TechCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

function TechCard({ title, description, image, index }: TechCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl bg-bg-main shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-dark">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export function Technology() {
  return (
    <section className="bg-bg-soft py-20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <SectionHeading label={technology.label} title={technology.title} />
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
