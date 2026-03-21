"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

type SuccessCardProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  metric?: string;
  whileHover?: boolean;
  variants?: Variants;
  custom?: number;
  className?: string;
};

export function SuccessCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  metric,
  whileHover = true,
  variants,
  custom,
  className = "",
}: SuccessCardProps) {
  return (
    <motion.article
      variants={variants}
      custom={custom}
      whileHover={
        whileHover
          ? {
              y: -5,
              rotateX: 2,
              rotateY: -2,
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className={`relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.06] text-white mix-blend-[plus-lighter] shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {imageSrc ? (
        <div className="flex h-full min-h-[168px] flex-col">
          <div className="relative h-28 w-full md:h-32">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 35vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </div>
          <div className="p-4">
            {metric ? (
              <span className="mb-2 inline-flex rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90">
                {metric}
              </span>
            ) : null}
            <h3 className="text-base font-black leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
              {title}
            </h3>
            {description ? <p className="mt-1 text-xs leading-relaxed text-white/80">{description}</p> : null}
          </div>
        </div>
      ) : (
        <div className="flex h-full min-h-[160px] flex-col justify-between p-5">
          {metric ? (
            <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              {metric}
            </span>
          ) : null}
          <div>
            <h3 className="text-2xl font-black leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
              {title}
            </h3>
            {description ? <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p> : null}
          </div>
        </div>
      )}
    </motion.article>
  );
}
