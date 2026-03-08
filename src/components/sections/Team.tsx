"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/content";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

function TeamMember({ name, role, image, index }: TeamMemberProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col items-center text-center"
    >
      {/* Photo Container */}
      <div className="relative mb-4 h-44 w-44 overflow-hidden rounded-full border-4 border-brand-teal transition-all duration-300 group-hover:border-[6px] group-hover:shadow-lg md:h-48 md:w-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          sizes="(max-width: 768px) 176px, 192px"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-text-dark md:text-xl">{name}</h3>

      {/* Role */}
      <p className="mt-1 text-[15px] text-text-muted">{role}</p>
    </motion.article>
  );
}

export function Team() {
  return (
    <section className="bg-bg-main py-20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <SectionHeading
            label={team.label}
            title={team.title}
            description={team.description}
            centered
          />
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((member, index) => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
