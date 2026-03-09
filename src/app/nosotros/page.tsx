"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { aboutPage } from "@/data/pages-content";

function ValueIcon({ type, className }: { type: string; className?: string }) {
  const baseClass = className || "h-8 w-8";

  if (type === "star") {
    return (
      <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    );
  }

  if (type === "lightbulb") {
    return (
      <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }

  return null;
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-black text-brand-teal md:text-6xl">
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
        {label}
      </div>
    </div>
  );
}

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label={aboutPage.hero.label}
          title={aboutPage.hero.title}
          description={aboutPage.hero.description}
        />

        {/* Mission & Vision */}
        <section className="bg-bg-page py-20">
          <Container>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-gradient-to-br from-brand-teal to-brand-teal-strong p-8 text-white shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-xl bg-white/20 p-3">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">{aboutPage.mission.title}</h2>
                <p className="mt-4 leading-relaxed text-white/90">
                  {aboutPage.mission.description}
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-3xl bg-gradient-to-br from-brand-purple to-purple-700 p-8 text-white shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-xl bg-white/20 p-3">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">{aboutPage.vision.title}</h2>
                <p className="mt-4 leading-relaxed text-white/90">
                  {aboutPage.vision.description}
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="bg-white py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-black text-text-dark md:text-4xl">
                {aboutPage.stats.title}
              </h2>
              <div className="mx-auto mt-3 h-1 w-20 rounded bg-brand-teal" />
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {aboutPage.stats.items.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-bg-soft p-8"
                >
                  <AnimatedStat value={stat.value} suffix={stat.suffix} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="bg-bg-page py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <span className="mb-2 inline-block text-sm font-bold uppercase tracking-widest text-brand-teal">
                NUESTROS VALORES
              </span>
              <h2 className="text-3xl font-black text-text-dark md:text-4xl">
                Lo Que Nos Define
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {aboutPage.values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-brand-teal/10 p-3 text-brand-teal transition-colors group-hover:bg-brand-teal group-hover:text-white">
                    <ValueIcon type={value.icon} />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark">{value.title}</h3>
                  <p className="mt-2 text-text-muted">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="mb-2 inline-block text-sm font-bold uppercase tracking-widest text-brand-teal">
                  ¿POR QUÉ NOSOTROS?
                </span>
                <h2 className="text-3xl font-black text-text-dark md:text-4xl">
                  {aboutPage.whyUs.title}
                </h2>

                <div className="mt-8 space-y-6">
                  {aboutPage.whyUs.reasons.map((reason, index) => (
                    <motion.div
                      key={reason.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-teal text-white">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-text-dark">{reason.title}</h3>
                        <p className="mt-1 text-text-muted">{reason.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Image Collage */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid gap-4">
                  <div className="relative aspect-video overflow-hidden rounded-2xl">
                    <Image
                      src="/images/odonto-smart/about-clinic.png"
                      alt="Clínica Odonto Smart"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-square overflow-hidden rounded-2xl">
                      <Image
                        src="/images/odonto-smart/about-tech.png"
                        alt="Tecnología de vanguardia"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-2xl">
                      <Image
                        src="/images/odonto-smart/about-team.png"
                        alt="Nuestro equipo"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Certifications */}
        <section className="bg-bg-soft py-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-text-dark">
                Certificaciones y Alianzas
              </h2>
              <p className="mt-2 text-text-muted">
                Respaldados por las mejores marcas y certificaciones del mundo
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
                {aboutPage.certifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="relative h-16 w-32 grayscale transition-all hover:grayscale-0"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-brand-teal via-brand-teal-strong to-brand-purple py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-black text-white md:text-4xl">
                ¿Listo para Transformar Tu Sonrisa?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Únete a los más de 5,000 pacientes que ya confían en nosotros.
                Agenda tu primera consulta sin compromiso.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/sedes"
                  className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-brand-teal-strong shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  Agendar Cita
                </Link>
                <Link
                  href="/equipo"
                  className="inline-block rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-brand-teal-strong"
                >
                  Conocer al Equipo
                </Link>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
