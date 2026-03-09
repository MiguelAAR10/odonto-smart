"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/data/content";

function QuoteIcon() {
  return (
    <svg
      className="h-8 w-8 text-brand-teal/30"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section id="resenas" className="bg-bg-soft py-20">
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
            label={reviews.label}
            title={reviews.title}
            description={reviews.description}
            centered
          />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col rounded-2xl border border-border-subtle bg-bg-main p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <QuoteIcon />

              {/* Quote Text */}
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Highlight Tag */}
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-teal-soft text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
                  {testimonial.initial}
                </span>
                <span className="text-sm font-semibold text-brand-teal">
                  {testimonial.highlight}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={reviews.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-teal px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            {reviews.cta.label}
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
