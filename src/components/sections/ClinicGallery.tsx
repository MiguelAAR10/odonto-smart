"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─── Keywords to classify images into editorial rows ─── */

const SPACES_KEYWORDS = [
  "recepcion", "sala", "instalacion", "zona", "consultorio",
  "unidad", "administrativo", "area", "pasillo", "exterior",
  "noche", "espera", "rayos", "pediatric", "logo-sede",
];

function isSpacesImage(filename: string): boolean {
  const lower = filename.toLowerCase();
  return SPACES_KEYWORDS.some((kw) => lower.includes(kw));
}

/* ─── Deterministic shuffle — stable across renders, changes daily ─── */

function deterministicShuffle(arr: string[]): string[] {
  const copy = [...arr];
  const seed = new Date().toISOString().slice(0, 10);
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  for (let i = copy.length - 1; i > 0; i--) {
    hash = (hash * 16807 + 1) | 0;
    const j = ((hash >>> 0) % (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ─── Extract short alt from filename ─── */

function filenameToAlt(src: string): string {
  const name = src.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ═══════════════════════════════════════════════════════════════════════════════
   Marquee row — infinite CSS scroll, GPU-composited
   ═══════════════════════════════════════════════════════════════════════════════ */

function MarqueeRow({
  images,
  direction,
  heightClass,
  aspectRatio,
  duration,
}: {
  images: string[];
  direction: "left" | "right";
  heightClass: string;
  aspectRatio: string;
  duration: number;
}) {
  if (images.length === 0) return null;

  // Duplicate for seamless loop
  const doubled = [...images, ...images];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-3 md:gap-4 ${animClass}`}
        style={{
          animationDuration: `${duration}s`,
          width: "max-content",
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`group relative shrink-0 overflow-hidden rounded-2xl ${heightClass}`}
            style={{ aspectRatio }}
          >
            <Image
              src={src}
              alt={filenameToAlt(src)}
              fill
              className="object-cover object-[center_25%] transition-transform duration-500 ease-out md:group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 240px, 380px"
            />
            {/* Hover shadow overlay — desktop only */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-opacity duration-300 md:group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   ClinicGallery — editorial dual marquee
   ═══════════════════════════════════════════════════════════════════════════════ */

export function ClinicGallery({ images }: { images: string[] }) {
  const router = useRouter();

  // Classify into editorial rows
  const spacesRaw = images.filter((img) => isSpacesImage(img));
  const proceduresRaw = images.filter((img) => !isSpacesImage(img));

  // Balance rows — if one is too short, redistribute
  let row1 = spacesRaw;
  let row2 = proceduresRaw;

  if (row1.length < 4 && row2.length > 6) {
    const extra = row2.splice(0, Math.min(3, row2.length - 4));
    row1 = [...row1, ...extra];
  } else if (row2.length < 4 && row1.length > 6) {
    const extra = row1.splice(0, Math.min(3, row1.length - 4));
    row2 = [...row2, ...extra];
  }

  // Deterministic shuffle
  row1 = deterministicShuffle(row1);
  row2 = deterministicShuffle(row2);

  // Speed scales with image count for consistent visual rhythm
  const dur1 = Math.max(40, row1.length * 6);
  const dur2 = Math.max(40, row2.length * 6);

  return (
    <section className="relative overflow-hidden bg-bg-main py-14 md:py-20">
      {/* Minimal title */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="mb-8 text-center md:mb-10"
      >
        <h2
          className="text-xl font-bold text-text-dark md:text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Nuestra clinica, en accion
        </h2>
      </motion.div>

      {/* Row 1 — spaces, brand, infrastructure → scrolls left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease }}
        className="mb-3 md:mb-4"
      >
        <MarqueeRow
          images={row1}
          direction="left"
          heightClass="h-[200px] md:h-[300px]"
          aspectRatio="3/2"
          duration={dur1}
        />
      </motion.div>

      {/* Row 2 — procedures, action, technical → scrolls right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
      >
        <MarqueeRow
          images={row2}
          direction="right"
          heightClass="h-[220px] md:h-[300px]"
          aspectRatio="3/4"
          duration={dur2}
        />
      </motion.div>

      {/* Edge fades — left and right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg-main to-transparent md:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg-main to-transparent md:w-20" />

      {/* Hidden refresh button — appears on hover, bottom-right */}
      <button
        type="button"
        onClick={() => router.refresh()}
        className="absolute bottom-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/60 text-text-light/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:opacity-100 focus:opacity-100"
        aria-label="Actualizar galeria"
        title="Actualizar galeria"
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </section>
  );
}
