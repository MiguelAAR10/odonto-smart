"use client";

import { motion } from "framer-motion";

export function WaveDivider() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full translate-y-[40%]" aria-hidden="true">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-full"
      >
        <svg
          viewBox="0 0 1440 260"
          className="h-auto w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 145C128 196 244 222 377 212C524 201 635 134 788 122C948 109 1076 160 1232 186C1308 199 1376 200 1440 189V260H0V145Z"
            fill="#1a0a2e"
          />
          <path
            d="M0 170C143 224 264 245 395 238C547 230 665 171 818 161C966 151 1089 193 1243 217C1318 229 1382 230 1440 221V260H0V170Z"
            fill="#41d4cb"
          />
        </svg>
      </motion.div>
    </div>
  );
}
