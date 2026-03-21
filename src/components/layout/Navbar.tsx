"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const progressTipLeft = useTransform(scaleX, (value) => `calc(${value * 100}% - 20px)`);
  const progressTipOpacity = useTransform(scaleX, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

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
    top: "bg-transparent border-b border-transparent",
    mid: "bg-white/35 border-b border-white/30 backdrop-blur-xl",
    scrolled: "bg-white/50 border-b border-white/40 backdrop-blur-xl",
  };

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${headerClasses[scrollState]}`}
      >
        <motion.nav
          className="mx-auto w-full max-w-7xl px-4 md:px-8"
          style={{ paddingTop: springPadding, paddingBottom: springPadding }}
        >
          <div className="premium-shell relative flex items-center justify-between gap-3 rounded-[28px] px-4 py-3 md:px-5">
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-r from-white/18 via-transparent to-white/12" aria-hidden="true" />

            <Link
              href="/"
              className="group relative z-10 flex min-w-0 items-center rounded-2xl px-2 py-1"
            >
              <Image
                src="/images/odonto-smart/logo.svg"
                alt={siteConfig.name}
                width={160}
                height={48}
                className="h-10 w-auto md:h-12"
                priority
              />
            </Link>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex items-center gap-1 rounded-full border border-white/60 bg-white/58 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                {navigation.links.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`relative rounded-full px-4 py-2 text-[14px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                        active
                          ? "bg-[linear-gradient(135deg,rgba(222,27,206,0.1),rgba(65,212,203,0.14))] text-text-dark shadow-sm"
                          : "text-text-muted hover:text-text-dark"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-2">
              <div className="hidden text-right xl:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-text-light">
                  {siteConfig.locationLabel}
                </p>
                <p className="text-xs text-text-muted">{siteConfig.tagline}</p>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/70 text-text-dark shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal md:hidden"
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
            </div>
          </div>
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
              left: progressTipLeft,
              background: "var(--gradient-primary)",
              opacity: progressTipOpacity,
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
            className="fixed inset-0 z-40 flex flex-col bg-[radial-gradient(circle_at_top,rgba(65,212,203,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,252,0.98))] pt-24 backdrop-blur-xl md:hidden"
          >
            {/* Background gradient decoration */}
            <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-brand-teal/5 blur-[100px]" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-purple/5 blur-[100px]" aria-hidden="true" />

            <div className="flex flex-1 flex-col justify-center px-8">
              <div className="space-y-2">
                <div className="mb-6 rounded-3xl border border-white/70 bg-white/65 p-5 shadow-[0_18px_48px_rgba(26,10,46,0.08)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-text-light">
                    {siteConfig.locationLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{siteConfig.tagline}</p>
                </div>

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
                        className={`flex items-center gap-4 rounded-2xl px-4 py-4 transition-colors ${
                          active
                            ? "bg-[linear-gradient(135deg,rgba(222,27,206,0.08),rgba(65,212,203,0.12))] text-text-dark"
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

              {/* Social links in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto flex items-center justify-center gap-6 pb-8 pt-8"
              >
                <span className="text-xs uppercase tracking-widest text-text-light">
                  {siteConfig.locationLabel}
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
