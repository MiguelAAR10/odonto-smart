"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { navigation, siteConfig } from "@/data/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll progress — gradient cyan→rosa
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg shadow-black/5"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      style={{ borderBottom: "1px solid rgba(65, 212, 203, 0.1)" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo — Clash Display */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-xl tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="font-bold text-text-dark">{siteConfig.logo.text}</span>
          <span className="gradient-text font-bold italic">
            {siteConfig.logo.accent}
          </span>
        </a>

        {/* Desktop Navigation — Satoshi */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-[15px] font-medium text-text-muted transition-colors duration-300 hover:text-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-teal to-brand-purple transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* CTA Button — Glow effect */}
        <a
          href={navigation.cta.href}
          className="hidden rounded-full bg-brand-teal-strong px-6 py-2.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-teal/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-teal/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 md:block"
        >
          {navigation.cta.label}
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-dark transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal md:hidden"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Scroll Progress Bar — Gradient Cyan → Rosa */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] origin-left bg-gradient-to-r from-brand-teal via-brand-purple to-brand-teal"
        style={{ scaleX, willChange: "transform" }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brand-teal/10 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {navigation.links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="rounded-lg px-4 py-3 text-[15px] font-medium text-text-muted transition-colors hover:bg-brand-teal-soft hover:text-text-dark"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={navigation.cta.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 rounded-full bg-brand-teal-strong px-6 py-3 text-center text-[15px] font-semibold text-white shadow-lg shadow-brand-teal/20 transition-all hover:shadow-xl hover:shadow-brand-teal/30"
              >
                {navigation.cta.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
