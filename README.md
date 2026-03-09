# Odonto Smart

Landing page para clínica dental. Next.js 16 + React 19 + Tailwind v4 + Framer Motion.

## Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI:** React 19 + Tailwind CSS v4
- **Motion:** Framer Motion 12
- **Tipografía:** Inter (única)
- **Estética:** Health-tech / Comercial (V1 Stitch Final)

## Estructura

```
src/
├── app/
│   ├── page.tsx           # Landing principal
│   ├── style-guide/       # Guía visual de tokens
│   └── globals.css        # Design tokens
├── components/
│   ├── layout/Navbar.tsx
│   ├── sections/          # Hero, Stats, Technology, Team, Reviews, Footer
│   └── ui/                # Container, SectionHeading
└── data/
    └── content.ts         # Contenido centralizado
```

## Secciones

`Navbar → Hero → Stats → Technology → Team → Reviews → Footer`

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | Verificar código |

## Documentación

- [`TCAD.md`](./TCAD.md) — Framework de desarrollo
- [`BITACORA.md`](./BITACORA.md) — Registro de cambios
- [`/style-guide`](http://localhost:3000/style-guide) — Tokens visuales

## Sedes

- Lince — Av. Arequipa 1860
- Magdalena — Calle De La Roca de Vergallo 493
- Jesús María — Jr. Mariscal Luzuriaga 363
