"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CompanionAura() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 100, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setIsVisible(true);
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target;
      if (!(target instanceof Element)) {
        setIsHovering(false);
        return;
      }

      const clickable = target.closest('a, button, [role="button"]');
      setIsHovering(Boolean(clickable));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 rounded-full mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: "#ffffff",
      }}
      animate={{
        width: isHovering ? 80 : 32,
        height: isHovering ? 80 : 32,
        filter: isHovering ? "blur(10px)" : "blur(0px)",
        opacity: isVisible ? (isHovering ? 0.95 : 1) : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 24,
      }}
    />
  );
}
