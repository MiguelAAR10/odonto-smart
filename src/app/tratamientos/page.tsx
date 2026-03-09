"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { treatmentsPage, Treatment } from "@/data/pages-content";

function TreatmentIcon({ type, className }: { type: string; className?: string }) {
  const baseClass = className || "h-6 w-6";

  if (type === "implant") {
    return (
      <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4m0 12v4M12 8c2 0 4 1.5 4 4s-2 4-4 4-4-1.5-4-4 2-4 4-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 18h8l-1 4H9l-1-4z" />
      </svg>
    );
  }

  if (type === "braces") {
    return (
      <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16M8 8v8M12 8v8M16 8v8" />
        <rect x="6" y="10" width="4" height="4" rx="1" strokeWidth={1.5} />
        <rect x="14" y="10" width="4" height="4" rx="1" strokeWidth={1.5} />
      </svg>
    );
  }

  if (type === "smile") {
    return (
      <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }

  if (type === "sparkle") {
    return (
      <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    );
  }

  // Default tooth icon
  return (
    <svg className={baseClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2c3 0 6 2 6 6 0 2-1 4-2 6s-1 4-1 6c0 1-1 2-2 2h-2c-1 0-2-1-2-2 0-2 0-4-1-6s-2-4-2-6c0-4 3-6 6-6z" />
    </svg>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-brand-teal"
      >
        <span className="pr-4 font-semibold text-text-dark">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-brand-teal"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TreatmentCard({
  treatment,
  isSelected,
  onClick,
}: {
  treatment: Treatment;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4 }}
      className={`group w-full rounded-2xl p-6 text-left transition-all ${
        isSelected
          ? "bg-brand-teal text-white shadow-lg shadow-brand-teal/30"
          : "bg-white shadow-md hover:shadow-lg"
      }`}
    >
      <div
        className={`mb-4 inline-flex rounded-xl p-3 ${
          isSelected ? "bg-white/20" : "bg-brand-teal/10"
        }`}
      >
        <TreatmentIcon
          type={treatment.icon}
          className={`h-8 w-8 ${isSelected ? "text-white" : "text-brand-teal"}`}
        />
      </div>
      <h3
        className={`text-xl font-bold ${
          isSelected ? "text-white" : "text-text-dark"
        }`}
      >
        {treatment.name}
      </h3>
      <p
        className={`mt-2 text-sm ${
          isSelected ? "text-white/80" : "text-text-muted"
        }`}
      >
        {treatment.shortDescription}
      </p>
      <div
        className={`mt-4 flex items-center gap-4 text-xs ${
          isSelected ? "text-white/70" : "text-text-muted"
        }`}
      >
        <span className="flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {treatment.duration}
        </span>
        <span className="flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {treatment.sessions}
        </span>
      </div>
    </motion.button>
  );
}

export default function TratamientosPage() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment>(
    treatmentsPage.treatments[0]
  );

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label={treatmentsPage.hero.label}
          title={treatmentsPage.hero.title}
          description={treatmentsPage.hero.description}
        />

        {/* Treatment Selection */}
        <section className="bg-bg-page py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Treatment Cards */}
              <div className="lg:col-span-4">
                <h2 className="mb-6 text-2xl font-bold text-text-dark">
                  Nuestros Tratamientos
                </h2>
                <div className="space-y-4">
                  {treatmentsPage.treatments.map((treatment) => (
                    <TreatmentCard
                      key={treatment.id}
                      treatment={treatment}
                      isSelected={selectedTreatment.id === treatment.id}
                      onClick={() => setSelectedTreatment(treatment)}
                    />
                  ))}
                </div>
              </div>

              {/* Treatment Detail */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTreatment.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-3xl bg-white p-8 shadow-xl"
                  >
                    {/* Header Image */}
                    <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl">
                      <Image
                        src={selectedTreatment.image}
                        alt={selectedTreatment.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-3xl font-black text-white">
                          {selectedTreatment.name}
                        </h2>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-8 text-lg leading-relaxed text-text-muted">
                      {selectedTreatment.fullDescription}
                    </p>

                    {/* Technology Used */}
                    <div className="mb-8">
                      <h3 className="mb-4 text-xl font-bold text-text-dark">
                        Tecnología Utilizada
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedTreatment.technology.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-brand-purple/10 px-4 py-2 text-sm font-medium text-brand-purple"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h3 className="mb-4 text-xl font-bold text-text-dark">
                        Beneficios
                      </h3>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {selectedTreatment.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-teal text-white">
                              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-text-muted">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process Steps */}
                    <div className="mb-8">
                      <h3 className="mb-6 text-xl font-bold text-text-dark">
                        Proceso del Tratamiento
                      </h3>
                      <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-brand-teal via-brand-purple to-brand-teal" />

                        <div className="space-y-6">
                          {selectedTreatment.process.map((step) => (
                            <motion.div
                              key={step.step}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: step.step * 0.1 }}
                              className="relative flex gap-6 pl-12"
                            >
                              {/* Step Number */}
                              <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-white shadow-lg shadow-brand-teal/30">
                                {step.step}
                              </div>
                              <div className="flex-1 rounded-xl bg-bg-soft p-4">
                                <h4 className="font-bold text-text-dark">
                                  {step.title}
                                </h4>
                                <p className="mt-1 text-sm text-text-muted">
                                  {step.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* FAQs */}
                    <div>
                      <h3 className="mb-4 text-xl font-bold text-text-dark">
                        Preguntas Frecuentes
                      </h3>
                      <div>
                        {selectedTreatment.faqs.map((faq, i) => (
                          <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-brand-teal to-brand-teal-strong p-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          ¿Interesado en este tratamiento?
                        </h4>
                        <p className="mt-1 text-white/80">
                          Agenda una consulta de evaluación sin compromiso
                        </p>
                      </div>
                      <a
                        href="/sedes#contacto"
                        className="inline-block rounded-full bg-white px-6 py-3 text-center font-semibold text-brand-teal-strong transition-all hover:-translate-y-1 hover:shadow-lg"
                      >
                        Agendar Consulta
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
