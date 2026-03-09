# Bitácora de Desarrollo — Odonto Smart

> Framework: **TCAD** (Traducción → Contexto → Análisis → Desarrollo/Documentación)
>
> 📖 **Guía completa del framework:** [`TCAD.md`](./TCAD.md)

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
│   │   ├── Reviews.tsx      # Server - prueba social
│   │   └── Footer.tsx       # Server - 4 columnas
│   └── ui/
│       ├── Container.tsx    # max-w-7xl px-6
│       └── SectionHeading.tsx
└── data/
    └── content.ts           # Texto centralizado + interfaces
```

### Orden de Secciones Actual

```
Navbar → Hero → Stats → Technology → Team → Reviews → Footer
```

### Design Tokens Actuales

```css
/* Brand */
--color-brand-teal: #4EB1AC
--color-brand-teal-strong: #0F766E      /* Alto contraste para CTAs */
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
fed4f96 docs: add BITACORA.md for TCAD framework tracking
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

### Commits Posteriores (TCAD)

```
00cfea4 chore: ignore legacy experimental components
29f0737 fix(ux): improve contrast, navigation and accessibility
6b052e7 feat(reviews): add social proof section and Google Maps links
```

---

## Registro de Cambios

> Cada cambio sigue el framework TCAD

---

### [2026-03-09 00:27:00 UTC] Inserción modular sin romper base (TCAD)

#### T — Traducción
- Objetivo solicitado: insertar mejoras quirúrgicas sin cambiar la base visual V1.
- Resultado esperado: mantener estética, mejorar navegación, accesibilidad y coherencia con mockup.

#### C — Contexto
- Estado actual relevante: landing funcional con server en `:3000`, estructura visual estable.
- Problemas detectados: CTA teal con contraste bajo, anchor links sin destino, `text-xs` en métricas.
- Archivos involucrados: `globals.css`, `content.ts`, `Navbar.tsx`, `Hero.tsx`, `Stats.tsx`, `Technology.tsx`, `Footer.tsx`.

#### A — Análisis
- Estrategia: cambios de bajo impacto y alta trazabilidad, sin alterar orden ni componentes base.
- Cambios modulares:
  - contraste: introducir token `--color-brand-teal-strong` para CTAs sobre fondo sólido.
  - navegación: conectar `href` de menú a `id` reales en secciones/columnas.
  - fidelidad hero: overlay lateral más cercano al mockup y eliminar itálica no requerida.
  - accesibilidad tipográfica: elevar etiqueta de stats de `text-xs` a `14px`.

#### D — Desarrollo
- Archivos modificados:
  - `src/app/globals.css` — token `--color-brand-teal-strong: #0f766e`
  - `src/components/layout/Navbar.tsx` — hrefs a secciones reales
  - `src/components/sections/Hero.tsx` — overlay lateral, teal-strong CTA
  - `src/components/sections/Stats.tsx` — label text-[14px]
  - `src/components/sections/Technology.tsx` — id="especialidades"
- **Commit:** `29f0737 fix(ux): improve contrast, navigation and accessibility`

---

### [2026-03-09 01:15:00 UTC] Sección Reviews + Sedes Google Maps (TCAD)

#### T — Traducción
- **Objetivo solicitado:** Insertar sección de prueba social y actualizar sedes con enlaces a Google Maps.
- **Clarificación:** NO se muestran reseñas reales de Google. Se crean 3 testimonios editoriales con CTA a Google Reviews real.
- **Entendible para no-técnicos:** Nueva sección con experiencias de pacientes + sedes clickeables que abren mapas.

#### C — Contexto
- **Estado actual:** Landing con `Navbar → Hero → Stats → Technology → Team → Footer`
- **Sedes anteriores:** Miraflores y San Isidro (sin enlaces)
- **Archivos involucrados:** `content.ts`, `Footer.tsx`, `page.tsx`, nuevo `Reviews.tsx`
- **Patrón reutilizado:** Container, SectionHeading, bg-bg-soft, border-border-subtle

#### A — Análisis
- **Estrategia:** Inserción quirúrgica entre Team y Footer, sin alterar estructura existente.
- **Cambios modulares:**
  - `content.ts`: Interfaces TypeScript (`Location`, `Testimonial`), helper `getGoogleMapsUrl()`, nuevas sedes (Lince, Magdalena, Jesús María), bloque `reviews`.
  - `Reviews.tsx`: Server Component con tarjetas de testimonios y CTA externo.
  - `Footer.tsx`: Sedes como enlaces `<a>` con `target="_blank"` y hover.
  - `page.tsx`: Importar e insertar `<Reviews />`.

#### D — Desarrollo
- **Archivos modificados:**
  - `src/data/content.ts` — interfaces + sedes + reviews
  - `src/components/sections/Reviews.tsx` — **NUEVO**
  - `src/components/sections/Footer.tsx` — sedes clickeables
  - `src/app/page.tsx` — insertar Reviews
- **Build:** ✅ Exitoso
- **Orden final:** `Navbar → Hero → Stats → Technology → Team → Reviews → Footer`
- **Commit:** `6b052e7 feat(reviews): add social proof section and Google Maps links`

#### Validaciones
| Check | Estado |
|-------|--------|
| Reviews entre Team y Footer | ✅ |
| 3 sedes abren Google Maps | ✅ |
| Botón abre Google Reviews | ✅ |
| No hay reseñas falsas de Google | ✅ |
| Sin nuevas dependencias | ✅ |
| Build exitoso | ✅ |

---

### [Plantilla próximo cambio]

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

*Última actualización: 2026-03-09 01:45 UTC*
