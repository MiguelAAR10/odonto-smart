"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/content";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
}

function TeamMember({ name, role, bio, image, index }: TeamMemberProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Photo Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Role badge */}
        <span className="inline-block rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-teal">
          {role}
        </span>

        {/* Name */}
        <h3 className="mt-3 text-lg font-bold text-text-dark">{name}</h3>

        {/* Bio */}
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{bio}</p>
      </div>
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((member, index) => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
