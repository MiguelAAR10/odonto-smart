# Bitácora de Desarrollo — Odonto Smart

> Framework: **TCAD** (Traducción → Contexto → Análisis → Desarrollo/Documentación)

---

## Base Point Establecido

**Timestamp:** 2026-03-08 18:30 UTC-5

### Estado Inicial

| Aspecto | Valor |
|---------|-------|
| Version | V1 Stitch Final |
| Framework | Next.js 16.1.6 + React 19 + Tailwind v4 + Framer Motion 12 |
| Tipografía | Inter (única) — Mínimo 14px |
| Paleta Principal | Teal `#4EB1AC`, Purple `#8E44AD` |
| Estética | Health-tech / Comercial |

### Archivos Base

```
src/
├── app/
│   ├── globals.css          # Design tokens
│   ├── layout.tsx           # Font Inter
│   ├── page.tsx             # Landing compuesta
│   └── style-guide/page.tsx # Guía visual
├── components/
│   ├── layout/Navbar.tsx    # Client - sticky, mobile menu
│   ├── sections/
│   │   ├── Hero.tsx         # Client - reveal animations
│   │   ├── Stats.tsx        # Client - animated counters
│   │   ├── Technology.tsx   # Client - hover effects
│   │   ├── Team.tsx         # Client - grayscale hover
│   │   └── Footer.tsx       # Server - 4 columnas
│   └── ui/
│       ├── Container.tsx    # max-w-7xl px-6
│       └── SectionHeading.tsx
└── data/
    └── content.ts           # Texto centralizado
```

### Design Tokens Actuales

```css
/* Brand */
--color-brand-teal: #4EB1AC
--color-brand-purple: #8E44AD
--color-brand-teal-soft: rgba(78, 177, 172, 0.1)
--color-brand-purple-soft: rgba(142, 68, 173, 0.1)

/* Backgrounds */
--color-bg-page: #F6F7F7
--color-bg-main: #FFFFFF
--color-bg-soft: #F8FAFC
--color-footer-bg: #0F172A

/* Text */
--color-text-dark: #0F172A
--color-text-muted: #475569
--color-text-light: #94A3B8

/* Utility */
--color-border-subtle: #E2E8F0
--color-hero-overlay: rgba(0, 0, 0, 0.85)

/* Motion */
--ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1)
```

### Commits Base

```
f5485be docs: add style guide page for experimentation
9e46f3f chore: add mockup.pen design file and update gitignore
f1e23e5 chore(deps): add framer-motion for animations
741d82d feat(app): compose landing page with images
1ee35b8 feat(sections): add landing page sections
d3c19db feat(layout): add Navbar with mobile menu
cda121c feat(ui): add Container and SectionHeading components
2b65f8b feat(data): add centralized content data structure
a6f0243 feat(design-system): add V1 Stitch design tokens and typography
```

---

## Registro de Cambios

> Cada cambio sigue el framework TCAD

---

### [Pendiente próximo cambio]

**Timestamp:** —

#### T — Traducción
- Objetivo solicitado: —
- Clarificación: —

#### C — Contexto
- Estado actual relevante: —
- Archivos involucrados: —

#### A — Análisis
- Estrategia: —
- Cambios modulares: —

#### D — Desarrollo
- Archivos modificados: —
- Commit: —

---

*Última actualización: 2026-03-08*
