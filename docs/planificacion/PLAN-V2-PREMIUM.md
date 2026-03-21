# PLAN V2 — Odonto Smart Premium Experience

> **Framework:** TCAD
> **Fecha:** 2026-03-15
> **Basado en:** Research de Miguel + Feedback Stakeholders
> **Branch:** `feature/v2-premium-experience`

---

## T — Traduccion

| | |
|---|---|
| **Objetivo** | Transformar el sitio de "informativo/generico" a una experiencia visual premium de alto nivel con efecto WOW |
| **Para no-tecnicos** | La pagina debe sentirse como entrar a una clinica de lujo — todo elegante, dinamico, bonito. Sin doctores, sin resenas. Solo experiencia visual |
| **Criterio de exito** | Alguien la ve y dice "wow, esto se ve de otro nivel, no parece hecha por IA" |

### Decisiones del Owner
- **NO** Reviews / Testimonios
- **NO** Perfiles de Doctores / Team
- **SI** Colores mas vivos: **Cian (#41d4cb)** + **Rosa Neon (#de1bce)**
- **SI** Logo con mejor presencia
- **SI** Efecto WOW — diseno que vende placer visual
- **SI** Mas dinamico, elegante, profesional

### 3 Paginas Principales
1. **HOME** — Landing principal con efecto WOW
2. **ESPECIALIDADES** — Showcase visual de tratamientos
3. **UBICACIONES** — Sedes (ya existe, subir nivel)

---

## C — Contexto

### Estado Actual del Homepage
```
Navbar → Hero → Stats → Technology → Team → Reviews → Footer
```

### Estado Despues del Sprint V2
```
Navbar (glass+gradient) → Hero (WOW cinematic) → Stats (premium) → Especialidades (visual-first) → VisualCTA (nuevo) → Footer (upgraded)
```

### Archivos Involucrados

| Archivo | Accion | Riesgo |
|---|---|---|
| `globals.css` | Nuevos tokens Cian + Rosa Neon | Bajo |
| `layout.tsx` | Agregar fuente display + Lenis smooth scroll | Bajo |
| `page.tsx` | Quitar Team + Reviews, agregar VisualCTA | Bajo |
| `content.ts` | Actualizar navegacion (quitar Equipo) | Bajo |
| `Hero.tsx` | Rediseno WOW con springs + parallax mejorado | Medio |
| `Navbar.tsx` | Logo gradiente + glassmorphism | Bajo |
| `Stats.tsx` | Fondo gradiente + cards premium | Bajo |
| `Technology.tsx` | Rediseno visual-first, menos texto | Medio |
| `Footer.tsx` | Upgrade colores + hover effects | Bajo |
| *(nuevo)* `VisualCTA.tsx` | Seccion cierre de alto impacto | Nuevo |
| *(nuevo)* `template.tsx` | Page transitions (AnimatePresence) | Nuevo |

### Imagenes Actuales (Necesitan Reemplazo)

| Imagen | Estado | Accion Requerida |
|---|---|---|
| `hero-bg.png` | Placeholder | Reemplazar con foto real de clinica o sonrisa premium |
| `tech-1.png` | Placeholder | Reemplazar con foto real del scanner |
| `tech-2.png` | Placeholder | Reemplazar con foto real de sede |
| `tech-3.png` | Placeholder | Reemplazar con foto real de DSD |
| `team-1.png` | YA NO SE USA | Mantener pero no mostrar |
| `team-2.png` | YA NO SE USA | Mantener pero no mostrar |
| `team-3.png` | YA NO SE USA | Mantener pero no mostrar |
| `team-4.png` | YA NO SE USA | Mantener pero no mostrar |

#### Imagenes Nuevas Necesarias
- Logo Odonto Smart en SVG (vectorial)
- Hero background (sonrisa premium o clinica)
- Imagenes de tratamientos (implantes, ortodoncia, DSD, blanqueamiento)
- Fotos de sedes reales
- Logo mark para favicon y companero visual

---

## A — Analisis

### Paleta de Color V2

#### Colores Principales
```css
/* NUEVO — Cian + Rosa Neon */
--color-brand-cyan: #41d4cb;           /* Primary — Cian vivo */
--color-brand-cyan-strong: #2bb5ad;    /* Cyan oscuro para CTAs */
--color-brand-cyan-soft: rgba(65, 212, 203, 0.1);  /* Fondo sutil */
--color-brand-pink: #de1bce;           /* Secondary — Rosa Neon */
--color-brand-pink-strong: #b815a6;    /* Rosa oscuro */
--color-brand-pink-soft: rgba(222, 27, 206, 0.1);  /* Fondo sutil */

/* Gradientes premium */
--gradient-primary: linear-gradient(135deg, #41d4cb 0%, #de1bce 100%);
--gradient-hero: linear-gradient(135deg, #0f172a 0%, #1a1035 50%, #0f172a 100%);
--gradient-glass: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
```

#### Neutrales (sin negro puro)
```css
--color-bg-page: #fafbfc;             /* Fondo principal — mas limpio */
--color-bg-main: #ffffff;
--color-bg-soft: #f0fdfb;             /* Toque cyan sutil */
--color-bg-dark: #0f172a;             /* Slate-900 (NO negro puro) */
--color-text-dark: #0f172a;           /* Slate-900 */
--color-text-muted: #475569;          /* Slate-600 */
--color-footer-bg: #0c1322;           /* Casi negro pero no puro */
```

### Tipografia V2

| Uso | Fuente | Por que |
|---|---|---|
| **Display/Titulos** | `Clash Display` o `Playfair Display` | Lujo, editorial, premium |
| **Body/UI** | `Inter` (mantener) | Legible, moderna, ya instalada |
| **Contadores/Stats** | `Inter` weight 900 | Impacto numerico |

### Librerias a Instalar

| Libreria | Para que | Verificada |
|---|---|---|
| `lenis` / `@studio-freight/react-lenis` | Smooth scroll premium 60fps | Si — 10k+ stars |
| `lucide-react` | Iconos SVG animables con Framer Motion | Si — 50k+ stars |
| `clsx` + `tailwind-merge` | Utilidad `cn()` para clases | Si — standard |

### Librerias Opcionales (Fase posterior)

| Libreria | Para que | Stars |
|---|---|---|
| `@tsparticles/react` | Particulas ambientales de fondo | 7k+ |
| `embla-carousel-react` | Carousel premium para sedes/galeria | 5k+ |
| Aceternity UI (copy-paste) | Componentes WOW (3D cards, beams) | 15k+ |
| Magic UI (copy-paste) | Bento grids, text reveals | 15k+ |

> **NOTA:** Aceternity y Magic UI NO son npm packages — son copy-paste. Se copian los componentes que necesitemos directamente.

---

## D — Plan de Ejecucion

### Sprint 1: Foundation (Colores + Fuentes + Smooth Scroll)
**Archivos:** `globals.css`, `layout.tsx`, `package.json`
**Riesgo:** Bajo

1. Instalar `lenis`, `lucide-react`, `clsx`, `tailwind-merge`
2. Actualizar tokens de color en `globals.css` (Cian + Rosa Neon)
3. Agregar fuente display (Clash Display o Playfair Display) en `layout.tsx`
4. Crear utilidad `cn()` en `src/lib/utils.ts`
5. Integrar Lenis smooth scroll en layout
6. Agregar textura noise CSS sutil
7. Build + Verificar

### Sprint 2: Navbar Premium + Logo
**Archivos:** `Navbar.tsx`, `content.ts`
**Riesgo:** Bajo

1. Logo con gradiente `bg-gradient cyan→pink text-transparent bg-clip-text`
2. Navbar glassmorphism: `backdrop-blur-2xl bg-white/70 border-white/10`
3. Quitar link "Equipo" de navegacion
4. Scroll progress bar con gradiente cyan→pink
5. Hover underline con gradiente
6. Mobile menu con AnimatePresence mejorado
7. Build + Verificar

### Sprint 3: Hero WOW
**Archivos:** `Hero.tsx`, `content.ts`
**Riesgo:** Medio

1. Titulo con fuente display (Clash/Playfair)
2. Overlay con gradiente dramatico (no flat black)
3. Glow radial cyan detras del titulo
4. Botones con estilo premium:
   - Primary: gradiente cyan→pink, hover magnetic
   - Secondary: glass effect con border sutil
5. Animaciones spring (no duration-based)
6. Parallax mejorado con useSpring
7. Staggered text reveal para titulo
8. Build + Verificar

### Sprint 4: Stats Premium
**Archivos:** `Stats.tsx`
**Riesgo:** Bajo

1. Fondo con gradiente sutil cyan-soft → pink-soft
2. Cards con glassmorphism o sombra premium
3. Iconos con lucide-react (animados on hover)
4. Contadores con spring mas dramatico (stiffness: 40, damping: 15)
5. Mas espacio entre cards
6. Build + Verificar

### Sprint 5: Especialidades Visual-First
**Archivos:** `Technology.tsx` (renombrar a `Especialidades.tsx`), `content.ts`
**Riesgo:** Medio

1. Renombrar seccion a "Especialidades" o "Nuestros Servicios"
2. Cards mas grandes con overlay gradiente on hover
3. Menos texto (1 linea max de descripcion)
4. Hover 3D tilt effect (mouse tracking)
5. Staggered reveal (whileInView)
6. Glow effect detras de cards on hover
7. Build + Verificar

### Sprint 6: VisualCTA + Limpieza
**Archivos:** `page.tsx`, nuevo `VisualCTA.tsx`
**Riesgo:** Bajo

1. Quitar Team y Reviews de `page.tsx`
2. Crear seccion VisualCTA full-bleed:
   ```
   ┌─────────────────────────────────────────────────┐
   │  [Background imagen/gradiente premium]          │
   │                                                 │
   │  "Tu sonrisa es nuestra obra maestra"           │
   │                                                 │
   │  [Boton CTA magnetico → WhatsApp/Agenda]        │
   └─────────────────────────────────────────────────┘
   ```
3. Seccion con gradiente mesh cyan→pink de fondo
4. Titulo con fuente display
5. Boton magnetico (spring physics on hover)
6. Build + Verificar

### Sprint 7: Footer + Page Transitions
**Archivos:** `Footer.tsx`, nuevo `template.tsx`
**Riesgo:** Bajo

1. Footer con colores actualizados (cyan accents, pink hovers)
2. Hover effects premium en iconos sociales
3. Agregar `template.tsx` para page transitions (fade + blur)
4. Build + Verificar

### Sprint 8: Pagina Especialidades (standalone)
**Archivos:** `src/app/tratamientos/page.tsx`
**Riesgo:** Medio

1. PageHeader con gradiente premium
2. Grid de tratamientos visual-first (cards grandes)
3. Cada tratamiento: imagen dominante, titulo, 1 linea, CTA
4. Hover effects premium (3D tilt, glow)
5. Staggered reveal
6. Build + Verificar

### Sprint 9: Pagina Ubicaciones (upgrade)
**Archivos:** `src/app/sedes/page.tsx`
**Riesgo:** Bajo

1. Actualizar colores a nueva paleta
2. Cards con glassmorphism
3. Mapas con mejor integracion visual
4. Hover effects premium
5. Geolocation mantener pero mejorar UI
6. Build + Verificar

---

## Componentes de Motion Premium (del Research)

### Tecnicas a Implementar (priorizadas)

| # | Tecnica | Sprint | Impacto |
|---|---------|--------|---------|
| 1 | **Staggered Text Reveal** | Hero (S3) | Alto — titulo se revela palabra por palabra |
| 2 | **Spring Physics Hover** | Cards (S5) | Alto — cards reaccionan fisicamente |
| 3 | **Magnetic CTA Button** | VisualCTA (S6) | Alto — boton que atrae el cursor |
| 4 | **Glassmorphism Cards** | Stats (S4) | Medio — backdrop-blur + border sutil |
| 5 | **Scroll Progress Gradient** | Navbar (S2) | Medio — barra cyan→pink |
| 6 | **Page Transitions** | Template (S7) | Medio — fade+blur entre paginas |
| 7 | **Parallax Layers** | Hero (S3) | Medio — profundidad Z multi-layer |
| 8 | **Directional Hover Glow** | Cards (S5) | Alto — highlight sigue el mouse |
| 9 | **Radial Glow Backgrounds** | Secciones (S4-S6) | Medio — gradientes radiales de acento |
| 10 | **Infinite Marquee** | Opcional | Bajo — texto corriendo tipo "ticker" |

### Tecnicas para Fase Futura
- 3D Tooth Model (Three.js / R3F) — requiere assets 3D
- Particle Explosion Hero — requiere tsparticles
- Before/After Slider — requiere fotos reales
- SVG Path Morphing — requiere flubber + SVGs custom
- Confetti on Booking — requiere react-confetti

---

## Repositorios de Referencia

| Repo | Stars | Usar para |
|---|---|---|
| `aceternity/ui` | 15k+ | 3D cards, parallax hero, background beams |
| `magicuidesign/magicui` | 15k+ | Bento grid, text reveals, animated beams |
| `shadcn-ui/ui` | 94k+ | Primitivos accesibles (dialog, progress) |
| `darkroomengineering/lenis` | 10k+ | Smooth scroll premium |
| `pqoqubbw/icons` | 7k+ | Lucide icons animados |

---

## Imagenes — Guia de Reemplazo

### Placeholder → Logo/Real

| Ubicacion | Imagen Actual | Reemplazar Con |
|---|---|---|
| Hero background | `hero-bg.png` | Foto real: sonrisa perfecta o interior de clinica premium |
| Tech Card 1 | `tech-1.png` | Foto real: scanner intraoral en uso |
| Tech Card 2 | `tech-2.png` | Foto real: sede Miraflores exterior/interior |
| Tech Card 3 | `tech-3.png` | Foto real: proceso DSD en pantalla |
| Sedes | `sede-*.png` | Fotos reales de cada sede |
| Tratamientos | Aun no existen | Fotos de: implantes, alineadores, carillas, blanqueamiento |
| Favicon | Default Next.js | Logo Odonto Smart como .ico/.svg |
| OG Image | No existe | Crear imagen social con logo + gradiente |

### Logo de la Empresa
- **Necesitamos:** Logo en SVG (vectorial)
- **Uso:** Navbar, Footer, Favicon, OG Image, Watermark en imagenes
- **Efecto:** Gradiente `#41d4cb → #de1bce` aplicado al texto del logo
- **Solicitar a Tia Betty:** Logo original en formato AI, SVG o PDF

---

## Checklist Pre-Ejecucion

- [x] Objetivo claramente definido (T)
- [x] Archivos involucrados mapeados (C)
- [x] Cambio minimo necesario por sprint (A)
- [x] Research consolidado con tecnicas viables (A)
- [x] Librerias verificadas (stars, mantenimiento) (A)
- [x] Sin tocar Reviews.tsx ni Team.tsx (solo desmontar)
- [x] Build no se rompe en ningun sprint (D)
- [ ] Colores oficiales confirmados con Tia Betty
- [ ] Logo SVG recibido

---

## Skills Recomendados

| Skill | Sprint | Para que |
|---|---|---|
| `web-design-guidelines` | S1-S2 | Validar paleta + accesibilidad |
| `implement-frontend` | S3-S9 | Implementacion de componentes |
| `audit-ui` | Post-S9 | Auditoria visual + responsive |

---

## Metricas de Exito

1. **Visual:** Se ve premium, no generico/IA
2. **Motion:** Animaciones fluidas a 60fps
3. **Mobile:** Se ve perfecto en 375px (iPhone SE) y 414px (iPhone 14)
4. **Performance:** Lighthouse > 90 en todas las metricas
5. **Stakeholders:** Sr. Anthony y Sra. Beatriz aprueban el resultado

---

> *"Primero entender, luego planificar, despues ejecutar, siempre documentar."*
> — Framework TCAD v1.0

---

*Plan V2 Premium — Odonto Smart — 2026-03-15*
