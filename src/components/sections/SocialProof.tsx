"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { socialProof } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.97a8.21 8.21 0 004.76 1.52V7.04a4.85 4.85 0 01-1-.35z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const iconComponents = {
  tiktok: TikTokIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const;

const cardThemes = {
  teal: {
    iconWrap: "bg-[linear-gradient(135deg,rgba(65,212,203,0.1),rgba(65,212,203,0.04))] text-brand-teal",
    keyword: "text-brand-teal",
    hover: "hover:border-brand-teal/24 hover:shadow-[0_16px_42px_rgba(65,212,203,0.12)]",
    cta: "text-brand-teal hover:text-[#2ebbb2]",
  },
  purple: {
    iconWrap: "bg-[linear-gradient(135deg,rgba(222,27,206,0.1),rgba(255,138,91,0.08))] text-brand-purple",
    keyword: "text-brand-purple",
    hover: "hover:border-brand-purple/24 hover:shadow-[0_16px_42px_rgba(222,27,206,0.12)]",
    cta: "text-brand-purple hover:text-[#c615b7]",
  },
} as const;

function SocialCard({
  channel,
  index,
}: {
  channel: (typeof socialProof.channels)[number];
  index: number;
}) {
  const IconComponent = iconComponents[channel.id as keyof typeof iconComponents];
  const theme = cardThemes[channel.color as keyof typeof cardThemes];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, ease, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-black/[0.04] bg-white/95 p-6 shadow-[0_12px_34px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 md:p-7 ${theme.hover}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0.96))]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/6 to-transparent" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col">
        <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconWrap}`}>
          <IconComponent className="h-7 w-7" />
        </div>

        <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.22em] ${theme.keyword}`}>
          {channel.keyword}
        </p>

        <h3
          className="max-w-[14ch] text-[1.15rem] font-bold leading-[1.08] text-text-dark md:text-[1.25rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {channel.headline}
        </h3>

        <p className="mt-3 max-w-[28ch] text-[14px] leading-relaxed text-text-muted md:text-[15px]">
          {channel.copy}
        </p>

        <Link
          href={channel.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-semibold transition-colors duration-200 ${theme.cta}`}
        >
          {channel.cta}
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

export function SocialProof() {
  return (
    <section className="bg-noise relative bg-bg-soft py-18 md:py-22">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 text-center md:mb-14"
        >
          <h2
            className="text-3xl font-bold text-text-dark md:text-4xl"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            {socialProof.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-text-muted md:text-[15px]">
            {socialProof.description}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 md:gap-6">
          {socialProof.channels.map((channel, index) => (
            <SocialCard key={channel.id} channel={channel} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
