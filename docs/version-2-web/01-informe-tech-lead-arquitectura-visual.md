# Informe de Estado Arquitectonico y Visual - Web V2

Autor: Tech Lead Frontend
Fecha: 2026-03-17
Rama: `feature/premium-dynamic-ui`

---

## 1) Stack y Frameworks

| Tecnologia | Version | Uso |
|---|---|---|
| Next.js | 16.1.6 | Framework principal (App Router) |
| React | 19.2.3 | UI Runtime |
| React DOM | 19.2.3 | Render |
| TypeScript | ^5 | Tipado estricto |
| Tailwind CSS | v4 | Estilos utilitarios |
| Framer Motion | 12.35.1 | Motor de animacion |
| Lenis | 1.3.18 | Smooth scrolling |
| Lucide React | 0.577.0 | Iconografia |

Notas de arquitectura:
- React Compiler habilitado en `next.config.ts` (`reactCompiler: true`).
- Sin libreria de estado global (no Redux, no Zustand). Estado local + Motion Values.
- Route Group `(pages)` para shell compartido con `Navbar/Footer/WhatsAppButton` persistentes.

---

## 2) Motor de Animacion

### Framer Motion

Se usa como engine principal para:
- Scroll-driven motion (`useScroll`, `useTransform`, `useSpring`).
- Viewport entrance (`whileInView`, `initial/animate`, stagger).
- Interaccion (`whileHover`, `whileTap`, `onMouseMove`).

Componentes con mayor carga de motion:
- `Navbar.tsx`: progreso de scroll, compresion dinamica del nav, morph del menu mobile.
- `Hero.tsx`: parallax de fondo, reveal de titulo, fade progresivo al scroll.
- `SmileReveal.tsx`: secuencia scroll-linked multicapa (glows, rings, metrica, CTA).
- `Technology.tsx`: tilt 3D + glow direccional por cursor.

### CSS Nativo

Se usa para micro-transiciones de bajo costo:
- hover de color/sombra/escala,
- shimmer de texto,
- pulse,
- float.

### Smooth Scrolling

`SmoothScroll.tsx` con Lenis:
- `lerp: 0.06`, `smoothWheel: true`, `orientation: vertical`.
- RAF loop con cleanup correcto (`cancelAnimationFrame` + `lenis.destroy`).

---

## 3) Paleta, Gradientes y Texturas (sin cambios de marca)

### Colores base (tokens)

- `--color-brand-teal: #41d4cb`
- `--color-brand-teal-strong: #2bb5ad`
- `--color-brand-purple: #de1bce`
- `--color-bg-dark: #0a0f1a`
- `--color-bg-page: #fafbfc`
- `--color-bg-main: #ffffff`
- `--color-bg-soft: #f0fdfb`
- `--color-text-dark: #0f172a`
- `--color-text-muted: #475569`
- `--color-text-light: #94a3b8`

### Gradientes

- `--gradient-primary: linear-gradient(135deg, #41d4cb 0%, #de1bce 100%)`
- `--gradient-text: linear-gradient(90deg, #41d4cb 0%, #de1bce 100%)`

### Recursos visuales

- Glassmorphism claro y oscuro (`.glass`, `.glass-dark`).
- Textura de noise (`.bg-noise`, `.bg-noise-dark`) con SVG turbulence.
- Glow ambiental (teal/purple) en secciones clave.

---

## 4) Iconografia y Assets

### Iconos

- `lucide-react` para iconos funcionales/animables.
- SVG inline para social/contacto y elementos decorativos puntuales.

### Interacciones iconograficas

- Stats: entradas diferenciadas por icono (flip, pulse, bounce).
- Treatments: icon wiggle + scale al hover.
- Footer social: glow por marca (Facebook/Instagram/WhatsApp).

### Imagenes

- `next/image` en hero y bloques media.
- Hero con `priority` para LCP.

---

## 5) Desglose Frame por Frame

## Hero

Capas:
1. Fondo imagen con parallax spring.
2. Overlay oscuro texturizado.
3. Corte diagonal (`clip-path`) en desktop.
4. Glows difusos teal/purple.
5. Badge flotante con social proof.
6. Bloque textual (headline + copy + CTA).
7. Scroll indicator.

Entradas:
- Linea 1: stagger por palabra.
- Linea 2: typewriter por caracter + cursor.
- Copy/CTA: fade-up secuencial.

## Especialidades/Servicios (Treatments)

Estructura:
- Grid responsive de cards (2 columnas en desktop).
- Cada card es clickable completa (overlay Link).

Feedback visual:
- Elevacion por hover.
- Glow radial que sigue cursor.
- Arrow reveal y refuerzo de borde/sombra.

## CTA de Reserva

Puntos de conversion:
- Navbar: `Reservar Cita`.
- Hero: `Agenda Tu Cita`.
- SmileReveal: CTA magnetico (tracking de cursor).
- WhatsApp FAB fijo.

Comportamiento:
- Estados hover/tap con spring,
- refuerzo visual por brillo/sombra,
- CTA siempre disponible por FAB.

---

## 6) Viaje del Usuario e Impacto de Experiencia

### Fase A - Descubrimiento

Sensacion objetivo:
- Confianza + modernidad + precision.

Mecanismos:
- Hero cinematico,
- typography potente,
- animaciones no intrusivas.

Impacto:
- El usuario percibe marca premium en los primeros 3-5 segundos.

### Fase B - Validacion

Sensacion objetivo:
- Credibilidad medible.

Mecanismos:
- Stats animados,
- tecnologia en tarjetas 3D,
- consistencia visual.

Impacto:
- Se reduce incertidumbre sobre capacidad clinica.

### Fase C - Evaluacion

Sensacion objetivo:
- Claridad de opciones.

Mecanismos:
- Grid de tratamientos con jerarquia clara.
- Feedback directo al cursor y hover.

Impacto:
- Facilita exploracion sin friccion cognitiva alta.

### Fase D - Conversion

Sensacion objetivo:
- Accion inmediata y sin duda.

Mecanismos:
- CTA persistente en Navbar + FAB + bloques de cierre.

Impacto:
- Multiples puertas de conversion en todo el flujo.

---

## 7) Fortalezas actuales

- Base visual consistente (tokens + motion language).
- Arquitectura de shell compartido para subpaginas.
- Navegacion SPA con `next/link`.
- Build estable y rendimiento visual alto percibido.

---

## 8) Riesgos / mejoras inmediatas

- Evitar IDs duplicados entre secciones (`#especialidades`).
- Conectar newsletter a backend real (hoy es UI).
- Deep-link por tratamiento especifico (`/tratamientos?id=...`).
- Uniformar assets iconograficos reutilizables para reducir duplicidad.

---

## 9) Conclusion

La Web V2 ya tiene una base premium real: identidad consistente, micro-interacciones con intencion, y arquitectura preparada para iterar sin re-hacer desde cero.

El siguiente salto a "Experiencia AAA" no requiere ruptura, sino optimizacion tactica de conversion, personalizacion de flujo y analitica de comportamiento.
