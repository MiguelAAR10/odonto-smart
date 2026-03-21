"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { navigation, siteConfig } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const [scrollState, setScrollState] = useState<"top" | "mid" | "scrolled">("top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll progress for gradient bar
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Progressive navbar padding based on scroll
  const navPadding = useTransform(scrollY, [0, 200], [16, 8]);
  const springPadding = useSpring(navPadding, { stiffness: 200, damping: 30 });

  // Track scroll state for 3-tier visual changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 10) setScrollState("top");
    else if (latest < 200) setScrollState("mid");
    else setScrollState("scrolled");
  });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    },
    [pathname]
  );

  const headerClasses = {
    top: "bg-white/60 backdrop-blur-sm border-b border-transparent",
    mid: "glass shadow-md shadow-black/[0.03] border-b border-brand-teal/10",
    scrolled: "glass shadow-lg shadow-black/[0.06] border-b border-brand-teal/15",
  };

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${headerClasses[scrollState]}`}
      >
        <motion.nav
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-12"
          style={{ paddingTop: springPadding, paddingBottom: springPadding }}
        >
          {/* Logo — Clash Display with shimmer hover */}
          <Link
            href="/"
            className="group flex items-center gap-1.5 text-xl tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="font-bold text-text-dark transition-colors duration-300 group-hover:text-brand-teal-strong">
              {siteConfig.logo.text}
            </span>
            <span className="relative overflow-hidden font-bold italic">
              <span className="gradient-text">{siteConfig.logo.accent}</span>
              {/* Shimmer overlay on hover */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </span>
          </Link>

          {/* Desktop Navigation with active state */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group relative text-[15px] font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                    active
                      ? "text-text-dark"
                      : "text-text-muted hover:text-text-dark"
                  }`}
                >
                  {link.label}
                  {/* Underline — persistent for active, hover for inactive */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-brand-teal to-brand-purple"
                    initial={false}
                    animate={{
                      scaleX: active ? 1 : 0,
                      originX: 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{ originX: 0 }}
                  />
                  {!active && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-teal to-brand-purple transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button with subtle glow pulse */}
          <Link
            href={navigation.cta.href}
            className="group relative hidden overflow-hidden rounded-full bg-brand-teal-strong px-6 py-2.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-teal/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-teal/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 md:block"
          >
            {navigation.cta.label}
            {/* Shine sweep on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </Link>

          {/* Mobile Menu Button — Morphing hamburger/X */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-text-dark transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal md:hidden"
            aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, y: 8, width: "100%" }
                    : { rotate: 0, y: 0, width: "100%" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="block h-0.5 rounded-full bg-current"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.15 }}
                className="block h-0.5 w-4/5 rounded-full bg-current"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -8, width: "100%" }
                    : { rotate: 0, y: 0, width: "100%" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="block h-0.5 w-3/5 rounded-full bg-current"
              />
            </div>
          </button>
        </motion.nav>

        {/* Scroll Progress Bar with glow tip */}
        <div className="relative">
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] origin-left bg-gradient-to-r from-brand-teal via-brand-purple to-brand-teal"
            style={{ scaleX, willChange: "transform" }}
          />
          {/* Glowing tip that follows the progress */}
          <motion.div
            className="absolute bottom-[-1px] h-[4px] w-[40px] rounded-full blur-[4px]"
            style={{
              left: useTransform(scaleX, (v) => `calc(${v * 100}% - 20px)`),
              background: "var(--gradient-primary)",
              opacity: useTransform(scaleX, [0, 0.02, 0.98, 1], [0, 1, 1, 0]),
            }}
          />
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 z-40 flex flex-col bg-white/95 pt-20 backdrop-blur-xl md:hidden"
          >
            {/* Background gradient decoration */}
            <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-brand-teal/5 blur-[100px]" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-purple/5 blur-[100px]" aria-hidden="true" />

            <div className="flex flex-1 flex-col justify-center px-8">
              <div className="space-y-2">
                {navigation.links.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        delay: i * 0.08,
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-4 rounded-xl px-4 py-4 transition-colors ${
                          active
                            ? "bg-brand-teal-soft text-text-dark"
                            : "text-text-muted hover:bg-brand-teal-soft/50 hover:text-text-dark"
                        }`}
                      >
                        {/* Index number */}
                        <span
                          className="text-sm font-medium text-text-light/50"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          0{i + 1}
                        </span>
                        <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                          {link.label}
                        </span>
                        {active && (
                          <motion.span
                            layoutId="mobile-active"
                            className="ml-auto h-2 w-2 rounded-full bg-brand-teal"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 25 }}
                className="mt-8"
              >
                <Link
                  href={navigation.cta.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-2xl bg-gradient-to-r from-brand-teal to-brand-teal-strong px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-brand-teal/20 transition-all hover:shadow-2xl hover:shadow-brand-teal/30"
                >
                  {navigation.cta.label}
                </Link>
              </motion.div>

              {/* Social links in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto flex items-center justify-center gap-6 pb-8 pt-8"
              >
                <span className="text-xs uppercase tracking-widest text-text-light">
                  Siguenos
                </span>
                <div className="h-px flex-1 bg-border-subtle" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
