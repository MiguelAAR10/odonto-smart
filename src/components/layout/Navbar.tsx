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

function WhatsAppNavIcon() {
  return (
    <svg className="h-[15px] w-[15px] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

  // Shell appearance: dark glass over hero → light glass when scrolled into content
  const shellClass = {
    top: "bg-white/6 border-white/10 shadow-[0_2px_24px_rgba(0,0,0,0.25)] backdrop-blur-xl",
    mid: "bg-white/8 border-white/12 shadow-[0_2px_24px_rgba(0,0,0,0.20)] backdrop-blur-xl",
    scrolled: "bg-white/88 border-white/60 shadow-[0_4px_28px_rgba(26,10,46,0.10)] backdrop-blur-xl",
  };

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50"
      >
        <motion.nav
          className="mx-auto w-full max-w-7xl px-4 md:px-8"
          style={{ paddingTop: springPadding, paddingBottom: springPadding }}
        >
          <div className={`relative flex items-center justify-between gap-3 rounded-[28px] border px-4 py-3 transition-all duration-500 md:px-5 ${shellClass[scrollState]}`}>
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-r from-white/10 via-transparent to-white/6" aria-hidden="true" />

            <Link
              href="/"
              className="group relative z-10 flex min-w-0 items-center rounded-2xl px-2 py-1"
            >
                  <Image
                    src="/images/odonto-smart/logo-horizontal-marca-premium.png"
                    alt={siteConfig.name}
                    width={400}
                    height={266}
                    className="h-32 w-auto md:h-40"
                    priority
                  />
            </Link>

            <div className="hidden items-center gap-3 lg:flex">
              <div className={`flex items-center gap-1 rounded-full border p-1 transition-all duration-500 ${
                scrollState === "scrolled"
                  ? "border-black/8 bg-black/5"
                  : "border-white/12 bg-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              }`}>
                {navigation.links.map((link) => {
                  const active = isActive(link.href);
                  const textColor = scrollState === "scrolled"
                    ? active ? "text-text-dark" : "text-text-muted hover:text-text-dark"
                    : active ? "text-white" : "text-white/68 hover:text-white";
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`relative rounded-full px-4 py-2 text-[14px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${textColor} ${
                        active ? "bg-[linear-gradient(135deg,rgba(222,27,206,0.14),rgba(65,212,203,0.16))] shadow-[0_8px_18px_rgba(7,10,18,0.12)]" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop WhatsApp CTA */}
              <Link
                href={navigation.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-teal px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(65,212,203,0.18)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_12px_30px_rgba(65,212,203,0.26)] xl:flex"
              >
                <WhatsAppNavIcon />
                {navigation.cta.label}
              </Link>
            </div>

            <div className="relative z-10 flex items-center gap-2">
                <div className="hidden max-w-[360px] text-right xl:block">
                  <p className={`text-[11px] leading-relaxed transition-colors duration-500 ${scrollState === "scrolled" ? "text-text-muted" : "text-white/72"}`}>
                    {siteConfig.topBar}
                  </p>
                </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border shadow-sm backdrop-blur-xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal md:hidden ${
                  scrollState === "scrolled"
                    ? "border-black/10 bg-black/6 text-text-dark hover:bg-black/10"
                    : "border-white/14 bg-white/8 text-white hover:bg-white/12"
                }`}
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
                  <p className="text-sm leading-relaxed text-text-muted">{siteConfig.topBar}</p>
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
