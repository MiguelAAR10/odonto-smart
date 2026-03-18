"use client";

import { useEffect, useRef, useState } from "react";
import ReactConfetti from "react-confetti";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type MagneticCTAProps = {
  initialLabel?: string;
  successLabel?: string;
  className?: string;
};

export function MagneticCTA({
  initialLabel = "Agenda Tu Cita",
  successLabel = "Cita Asegurada",
  className = "",
}: MagneticCTAProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const [isBooked, setIsBooked] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport, { passive: true });
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || isBooked) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    if (isBooked) return;
    setIsBooked(true);
    x.set(0);
    y.set(0);
  };

  return (
    <>
      {isBooked && viewport.width > 0 && viewport.height > 0 && (
        <ReactConfetti
          width={viewport.width}
          height={viewport.height}
          numberOfPieces={400}
          recycle={false}
          gravity={0.22}
          initialVelocityY={12}
          tweenDuration={4500}
          colors={["#41d4cb", "#de1bce"]}
          style={{ zIndex: 70, pointerEvents: "none", position: "fixed", top: 0, left: 0 }}
        />
      )}

      <motion.button
        ref={ref}
        type="button"
        disabled={isBooked}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        whileTap={isBooked ? undefined : { scale: 0.96 }}
        whileHover={isBooked ? undefined : { scale: 1.03, y: -2 }}
        transition={{ type: "spring", stiffness: 380, damping: 25 }}
        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
          isBooked
            ? "cursor-default border-transparent bg-brand-teal-strong shadow-brand-teal/35"
            : "border-transparent bg-gradient-to-r from-brand-teal to-brand-purple shadow-brand-teal/20 hover:shadow-xl hover:shadow-brand-teal/35"
        } ${className}`}
      >
        <span className="relative z-10">
          {isBooked ? successLabel : initialLabel}
        </span>

        {isBooked ? (
          <CheckCircle2 className="relative z-10 h-4 w-4" />
        ) : (
          <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}

        {!isBooked && (
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        )}
      </motion.button>
    </>
  );
}
