"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { staffPage } from "@/data/pages-content";

function SpecialtyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function EducationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
  );
}

function CertificationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );
}

export default function EquipoPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label={staffPage.hero.label}
          title={staffPage.hero.title}
          description={staffPage.hero.description}
        />

        {/* Team Members */}
        <section className="bg-bg-page py-20">
          <Container>
            <div className="space-y-24">
              {staffPage.members.map((member, index) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Images Column */}
                  <div
                    className={`space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    {/* Main Profile Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-teal/20 to-brand-purple/20"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Overlay with Role Badge */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                        <span className="inline-block rounded-full bg-brand-teal px-4 py-1.5 text-sm font-semibold text-white">
                          {member.role}
                        </span>
                      </div>
                    </motion.div>

                    {/* Working Image */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="relative aspect-video overflow-hidden rounded-xl"
                    >
                      <Image
                        src={member.workingImage}
                        alt={`${member.name} trabajando`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent" />
                    </motion.div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`flex flex-col justify-center ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    {/* Name & Specialty */}
                    <div className="mb-6">
                      <h2 className="text-3xl font-black text-text-dark md:text-4xl">
                        {member.name}
                      </h2>
                      <p className="mt-2 text-lg font-medium text-brand-teal">
                        {member.specialty}
                      </p>
                      <p className="mt-1 text-text-muted">
                        {member.experience} de experiencia
                      </p>
                    </div>

                    {/* Quote */}
                    <blockquote className="mb-8 border-l-4 border-brand-teal pl-4 italic text-text-muted">
                      &ldquo;{member.quote}&rdquo;
                    </blockquote>

                    {/* Education */}
                    <div className="mb-6">
                      <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-text-dark">
                        <EducationIcon className="h-5 w-5 text-brand-teal" />
                        Formación Académica
                      </h3>
                      <ul className="space-y-2">
                        {member.education.map((edu, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-teal" />
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certifications */}
                    <div className="mb-6">
                      <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-text-dark">
                        <CertificationIcon className="h-5 w-5 text-brand-purple" />
                        Certificaciones
                      </h3>
                      <ul className="space-y-2">
                        {member.certifications.map((cert, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-text-muted"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-purple" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-text-dark">
                        <SpecialtyIcon className="h-5 w-5 text-brand-teal" />
                        Especialidades
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((spec, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-brand-teal/10 px-3 py-1.5 text-sm font-medium text-brand-teal"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-teal to-brand-teal-strong py-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-black text-white md:text-4xl">
                ¿Listo para Conocernos?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Agenda una consulta con nuestros especialistas y descubre cómo
                podemos transformar tu sonrisa.
              </p>
              <a
                href="/sedes#contacto"
                className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-brand-teal-strong shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Agendar Cita
              </a>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
