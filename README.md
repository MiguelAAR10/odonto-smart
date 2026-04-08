# Odonto Smart

Sitio web de **Odonto Smart**, clínica dental premium con 3 sedes en Lima, Perú. Diseñado para convertir visitantes en pacientes a través de WhatsApp, con una experiencia visual de alto nivel y SEO agresivo para posicionamiento local.

**Live:** https://odonto-smart-1.vercel.app/

---

## Objetivo

Posicionar a Odonto Smart como la clínica dental de referencia en Lima para búsquedas de odontología estética, ortodoncia e implantes. El sitio funciona como embudo de conversión: cada sección guía al visitante hacia el CTA principal (agendar por WhatsApp).

## Stack Tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js | 16.1.6 | Framework (App Router, React Compiler) |
| React | 19.2.3 | UI con React Compiler habilitado |
| Tailwind CSS | v4 | Estilos (tokens en CSS custom properties) |
| Framer Motion | 12.35 | Animaciones y transiciones |
| Lucide React | 0.577 | Iconografía |
| TypeScript | 5.x | Tipado estático |

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx              # Layout raíz (metadata SEO, JSON-LD, Google verification)
│   ├── page.tsx                # Landing principal (server component)
│   ├── robots.ts               # robots.txt dinámico
│   ├── sitemap.ts              # sitemap.xml dinámico
│   ├── globals.css             # Design tokens + efectos (glassmorphism, noise, glow)
│   ├── style-guide/page.tsx    # Guía visual de tokens de diseño
│   └── (pages)/                # Route group para páginas internas
│       ├── layout.tsx          # Layout compartido (Navbar + Footer + WhatsApp)
│       ├── template.tsx        # Transiciones entre páginas
│       ├── sedes/
│       │   ├── layout.tsx      # Metadata SEO específica de sedes
│       │   └── page.tsx        # Página de sedes con geolocalización
│       ├── equipo/page.tsx     # Perfiles completos del equipo médico
│       ├── nosotros/page.tsx   # Redirige a /
│       └── tratamientos/page.tsx # Redirige a /#especialidades
├── components/
│   ├── layout/
│   │   └── Navbar.tsx          # Navbar fixed con glassmorphism (3 estados de scroll)
│   ├── sections/
│   │   ├── Hero.tsx            # Carrusel de fotos + headline + CTA WhatsApp
│   │   ├── Stats.tsx           # Medallón logo + stats en podio (4.9/5, 5000+)
│   │   ├── ClinicGallery.tsx   # Marquee infinito de fotos reales (2 filas)
│   │   ├── SocialProof.tsx     # Iconos de redes sociales (TikTok, IG, FB)
│   │   ├── Treatments.tsx      # 7 especialidades (2 featured + 5 secondary)
│   │   ├── SedesSection.tsx    # 3 sedes con CTA individual por WhatsApp
│   │   ├── SmileReveal.tsx     # CTA final oscuro con glassmorphism
│   │   └── Footer.tsx          # 4 columnas (marca, servicios, sedes, contacto)
│   ├── ui/
│   │   ├── Container.tsx       # Wrapper de ancho máximo
│   │   ├── WhatsAppButton.tsx  # Botón flotante de WhatsApp
│   │   ├── PageHeader.tsx      # Header reutilizable para páginas internas
│   │   ├── SectionHeading.tsx  # Heading de sección reutilizable
│   │   ├── MagneticCTA.tsx     # CTA con efecto magnético
│   │   ├── WaveDivider.tsx     # Divisor SVG ondulado
│   │   └── SuccessCard.tsx     # Card de estado de éxito
│   └── providers/
│       └── SmoothScroll.tsx    # Provider de Lenis (deshabilitado)
└── data/
    ├── content.ts              # Todo el contenido de la landing (sin hardcoded strings)
    └── pages-content.ts        # Contenido de páginas internas (equipo, tratamientos, sedes)
```

## Flujo de Secciones — Landing Page

```
NAVBAR (fixed, glassmorphism, barra de progreso de scroll)
  │
  ▼
HERO — Carrusel 4 fotos reales + "La clínica dental en Lima que tu imagen merece"
  │    CTA: "Agenda tu Valoración Premium" → WhatsApp
  │    Ola tricolor SVG (teal + magenta → blanco)
  ▼
STATS — Medallón logo (podio) + 4.9/5 Estrellas + 5,000+ Pacientes
  │
  ▼
CLINIC GALLERY — Marquee infinito de fotos reales (2 filas, direcciones opuestas)
  │
  ▼
SOCIAL PROOF — Iconos grandes: TikTok, Instagram, Facebook (hover con colores de marca)
  │
  ▼
TREATMENTS — 7 especialidades dentales (2 destacadas + 5 compactas)
  │           CTA: "Hablar por WhatsApp ahora"
  ▼
SEDES — 3 sedes con dirección, teléfono, horario y CTA WhatsApp individual
  │
  ▼
SMILE REVEAL — CTA final: "Agenda tu cita dental en Lima hoy"
  │
  ▼
FOOTER — Marca + Servicios + Sedes con Google Maps + Contacto + Redes
  │
  ▼
WHATSAPP BUTTON — Flotante, siempre visible
```

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Landing principal — embudo de conversión completo |
| `/sedes` | Página de sedes con geolocalización (encuentra la más cercana) |
| `/equipo` | Perfiles de 4 doctores (formación, certificaciones, especialidades) |
| `/nosotros` | Redirige a `/` |
| `/tratamientos` | Redirige a `/#especialidades` |

## Sistema de Diseño

### Paleta de Marca (registrada en INDECOPI)

| Token | Color | Uso |
|---|---|---|
| `--color-brand-teal` | `#41d4cb` | Color principal, CTAs, acentos |
| `--color-brand-purple` | `#de1bce` | Acento secundario (rosa neón) |
| `--color-brand-deep` | `#1a0a2e` | Fondos oscuros premium |

**Regla:** No usar negro puro. Fondos oscuros usan `#0a0f1a` o `#0c1322`.

### Tipografía (Fontshare)

- **Clash Display** — Headings (`font-display`)
- **Satoshi** — Body text (`font-sans`)

### Efectos

- **Glassmorphism:** `.glass`, `.glass-dark`, `.premium-shell`
- **Glow:** `.glow-cyan`, `.glow-pink`, `.glow-gradient`
- **Textura:** `.bg-noise`, `.bg-noise-dark` (SVG film grain)
- **Motion:** `--ease-out-expo`, `--ease-spring`

## SEO

| Elemento | Implementado |
|---|---|
| Metadata API (title, description, keywords) | layout.tsx |
| Open Graph + Twitter Cards | layout.tsx |
| JSON-LD Structured Data (Dentist schema) | layout.tsx |
| Google Search Console verification | Meta tag + archivo HTML |
| robots.txt | robots.ts |
| sitemap.xml (/, /sedes, /equipo) | sitemap.ts |
| Geo meta tags (geo.region, ICBM) | layout.tsx |
| H1 con keyword "clínica dental en Lima" | Hero.tsx |
| H2 con keywords geo-targeted | Todas las secciones |
| Alt descriptivos con keywords | Todas las imágenes |
| Metadata específica por página | sedes/layout.tsx |

## Sedes

| Sede | Dirección | Horario |
|---|---|---|
| **Lince** | Av. Arequipa 1860 | Lun-Vie 9am-8pm, Sab 9am-2pm |
| **Magdalena** | Calle De La Roca de Vergallo 493 | Lun-Sab 9am-8pm |
| **Jesús María** | Jr. Mariscal Luzuriaga 363 | Lun-Sab 9am-8pm, Dom 9am-12pm |

## Contacto

| Canal | Número |
|---|---|
| Teléfono fijo | (01) 678-2893 |
| Celular / Marketing | +51 980 221 985 |
| WhatsApp | +51 980 221 985 |
| Email | info@odontosmart.pe |

## Redes Sociales

- **TikTok:** [@odonto_smart](https://www.tiktok.com/@odonto_smart)
- **Instagram:** [@odonto_smart](https://www.instagram.com/odonto_smart/)
- **Facebook:** [odonto.smart.3](https://www.facebook.com/odonto.smart.3)

## Desarrollo

```bash
npm install         # Instalar dependencias
npm run dev         # Servidor de desarrollo (http://localhost:3000)
npm run build       # Build de producción
npm run lint        # ESLint (Next.js core-web-vitals + TypeScript)
```

## Deploy

El proyecto se despliega automáticamente en **Vercel** al hacer push a `main`.

- **Producción:** https://odonto-smart-1.vercel.app/
- **Sitemap:** https://odonto-smart-1.vercel.app/sitemap.xml
- **Robots:** https://odonto-smart-1.vercel.app/robots.txt

## Reglas de Negocio

- Los colores Cian + Rosa Neón están **registrados en INDECIPO** — no cambiar la paleta
- **No hay sección de reviews** ni **cards de doctores en la landing** (decisión del dueño)
- Todo el contenido es en **español**
- WhatsApp es el **canal principal de conversión**
- Las 3 sedes son: Lince, Magdalena, Jesús María

## Documentación Interna

| Documento | Descripción |
|---|---|
| [`docs/proceso/TCAD.md`](./docs/proceso/TCAD.md) | Framework de desarrollo (Translate → Context → Analysis → Development) |
| [`docs/proceso/BITACORA.md`](./docs/proceso/BITACORA.md) | Registro cronológico de cambios |
| [`docs/proceso/GUIA-ORQUESTACION-AGENTES.md`](./docs/proceso/GUIA-ORQUESTACION-AGENTES.md) | Guía operativa de agentes y skills |
| [`docs/proceso/MAPA-RAMAS-Y-MEJORAS.md`](./docs/proceso/MAPA-RAMAS-Y-MEJORAS.md) | Evolución de ramas y customer stories |
| [`CLAUDE.md`](./CLAUDE.md) | Instrucciones para Claude Code |
