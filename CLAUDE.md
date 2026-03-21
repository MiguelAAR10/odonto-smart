# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Odonto Smart is a dental clinic landing page and multi-page website for a Lima, Peru practice. The site is in **Spanish** — all user-facing content must remain in Spanish.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint (Next.js core-web-vitals + typescript rules)
```

No test framework is configured.

## Architecture

- **Next.js 16** App Router with **React 19** and **React Compiler** enabled (`reactCompiler: true` in next.config.ts)
- **Tailwind CSS v4** (via `@tailwindcss/postcss` plugin, no tailwind.config — all tokens in `globals.css`)
- **Framer Motion 12** for animations
- **Lenis** for smooth scrolling (provider at `components/providers/SmoothScroll.tsx`)
- Path alias: `@/*` maps to `./src/*`

### Page Structure

- `src/app/page.tsx` — Landing page: `Navbar → Hero → Stats → Treatments → Technology → SmileReveal → Footer + WhatsAppButton`
- `src/app/(pages)/` — Route group for inner pages: `nosotros`, `tratamientos`, `sedes`, `equipo` (each with its own layout/template)
- `src/app/style-guide/` — Visual design token reference

### Key Directories

- `src/components/sections/` — Full-page sections (Hero, Stats, Treatments, etc.)
- `src/components/ui/` — Reusable UI primitives (Container, SectionHeading, MagneticCTA, WhatsAppButton, etc.)
- `src/components/layout/` — Navbar
- `src/data/content.ts` — Centralized text content for the landing page. No hardcoded strings in components.
- `src/data/pages-content.ts` — Content for inner pages (staff, treatments, locations)
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Design System

All design tokens live in CSS custom properties in `src/app/globals.css`, registered to Tailwind via `@theme inline`. Key tokens:

- **Fonts:** Clash Display (headings, `font-display`), Satoshi (body, `font-sans`) — loaded via Fontshare
- **Brand palette:** Teal (`#41d4cb`), Purple/Pink Neon (`#de1bce`), Deep Purple (`#1a0a2e`) — **no pure black**
- **Effects:** glassmorphism (`.glass`, `.glass-dark`), gradient text (`.gradient-text`), glow utilities (`.glow-cyan`, `.glow-pink`), noise textures (`.bg-noise`)
- **Motion easing:** `--ease-out-expo`, `--ease-spring`

### Brand Rules

- Colors are **registered at INDECOPI** (Peru trademark office) — do not change the core Cian + Rosa Neon palette
- **No reviews section** and **no doctor profile cards** — the owner explicitly does not want these
- The clinic has 3 locations: Lince, Magdalena, Jes&uacute;s Mar&iacute;a

## Development Process

The project follows **TCAD** (Translate → Context → Analysis → Development), documented in `docs/proceso/TCAD.md`. Changes are logged in `docs/proceso/BITACORA.md`. Agent orchestration is described in `docs/proceso/GUIA-ORQUESTACION-AGENTES.md`.
