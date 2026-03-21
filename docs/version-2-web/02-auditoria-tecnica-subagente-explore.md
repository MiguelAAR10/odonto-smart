# Auditoria Tecnica - Subagente Explore (Consolidada)

Fuente: exploracion automatizada de codigo (subagente tipo `explore`)
Objetivo: snapshot exacto del estado tecnico actual.

---

## A) Configuracion del Proyecto

### package.json (runtime)

- `next`: `16.1.6`
- `react`: `19.2.3`
- `react-dom`: `19.2.3`
- `framer-motion`: `^12.35.1`
- `lenis`: `^1.3.18`
- `lucide-react`: `^0.577.0`
- `clsx`: `^2.1.1`
- `tailwind-merge`: `^3.5.0`

### package.json (dev)

- `typescript`: `^5`
- `eslint`: `^9`
- `eslint-config-next`: `16.1.6`
- `tailwindcss`: `^4`
- `@tailwindcss/postcss`: `^4`
- `@types/react`: `^19`
- `@types/react-dom`: `^19`
- `@types/node`: `^20`
- `babel-plugin-react-compiler`: `1.0.0`

### next.config.ts

```ts
const nextConfig = {
  reactCompiler: true,
};
```

---

## B) Layout y Ruteo

- Root: `src/app/layout.tsx`
  - `SmoothScroll` envuelve todo.
- Home: `src/app/page.tsx`
  - Orden: `Navbar -> Hero -> Stats -> Treatments -> Technology -> SmileReveal -> Footer -> WhatsAppButton`.
- Route Group: `src/app/(pages)/layout.tsx`
  - Shell compartido para paginas internas.
- Transicion de paginas: `src/app/(pages)/template.tsx`
  - Fade/slide (`opacity 0->1`, `y 12->0`, `0.35s`).

---

## C) Variables y Sistema Visual (globals.css)

### Variables principales

- Brand: `#41d4cb`, `#2bb5ad`, `#de1bce`
- Fondo: `#fafbfc`, `#ffffff`, `#f0fdfb`, `#0a0f1a`
- Texto: `#0f172a`, `#475569`, `#94a3b8`

### Utilidades clave

- Noise overlays: `.bg-noise`, `.bg-noise-dark`
- Glass: `.glass`, `.glass-dark`
- Motion helpers: `.animate-float*`, `.animate-shimmer-text`, `.animate-gradient`, `.animate-pulse-subtle`
- Performance helper: `.lazy-section`
- Hero helper: `.clip-diagonal`

### Keyframes

- `shimmer`, `float`, `shimmer-slide`, `gradient-shift`, `pulse-subtle`, `pulse-glow`

---

## D) Motor de Movimiento por Componente

## Navbar (`src/components/layout/Navbar.tsx`)

Estados:
- `scrollState`: `top | mid | scrolled`
- `isMobileMenuOpen`

Hooks:
- `useScroll`, `useSpring`, `useTransform`, `useMotionValueEvent`

Interacciones:
- 3 estados visuales por scroll.
- Barra de progreso con glow tip.
- Mobile fullscreen menu con stagger.
- Hamburger morphing a X.

## Hero (`src/components/sections/Hero.tsx`)

Subcomponentes:
- `StaggeredText`
- `TypewriterText`
- `FloatingBadge`
- `ScrollIndicator`

Hooks:
- `useScroll` sobre `sectionRef`
- `useTransform` para parallax/fade/offset
- `useSpring` para suavizado

Features:
- Parallax de fondo,
- corte diagonal desktop,
- reveal tipografico,
- CTA con micro-interacciones.

## Stats (`src/components/sections/Stats.tsx`)

Subcomponentes:
- `AnimatedCounter`
- `StatItem`

Hooks:
- `useMotionValue`, `useSpring`, `useInView`

Features:
- Contadores animados por spring,
- entradas diferenciadas por icono,
- strip horizontal con divisores.

## Treatments (`src/components/sections/Treatments.tsx`)

Hooks:
- `useMotionValue` (glowX/glowY)
- `useMotionTemplate`

Features:
- Glow radial direccional segun cursor.
- Hover lift + arrow reveal.
- Card clickable completa por overlay Link.

## Technology (`src/components/sections/Technology.tsx`)

Hooks:
- `useMotionValue`, `useSpring`, `useTransform`, `useMotionTemplate`

Features:
- Tilt 3D con perspective.
- Glow radial y zoom de imagen.
- Entrada por stagger en viewport.

## SmileReveal (`src/components/sections/SmileReveal.tsx`)

Subcomponentes:
- `ScrollWord`
- `Particles`
- `MagneticButton`

Hooks:
- `useScroll`
- `useSpring`
- `useTransform` (secuencia multicapa)

Features:
- Narrativa scroll-linked por fases,
- particulas de profundidad,
- CTA magnetico.

## Footer (`src/components/sections/Footer.tsx`)

Features:
- Newsletter strip,
- social glow por marca,
- shimmer divider,
- links de servicios funcionales.

## WhatsAppButton (`src/components/ui/WhatsAppButton.tsx`)

Features:
- FAB fijo con pulse,
- entrance con delay,
- hover/tap scaling.

## SmoothScroll (`src/components/providers/SmoothScroll.tsx`)

Features:
- Lenis global,
- raf loop con cleanup correcto.

---

## E) Z-Index / Capas Globales

- `z-50`: Navbar, WhatsAppButton
- `z-40`: mobile overlay menu
- `z-20`: contenidos interactivos internos de cards
- `z-10`: overlays relevantes (hero badge, indicators)

---

## F) Datos y Contenido (`src/data/content.ts`)

Objetos exportados:
- `siteConfig`, `navigation`, `hero`, `treatments`, `stats`, `technology`, `team`, `reviews`, `footer`

Observacion:
- `team` y `reviews` estan definidos y listos para uso, pero no todos se usan en homepage actual.

---

## G) Observaciones tecnicas destacadas

- Arquitectura lista para escalar iteraciones UX sin reescribir base.
- App Router + route groups correctamente aplicados.
- Motion language consistente entre secciones.
- Build estable con rutas estaticas generadas correctamente.
