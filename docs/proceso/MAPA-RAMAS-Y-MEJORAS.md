# Mapa de Ramas y Mejoras — Odonto Smart

## Resumen Ejecutivo

El repositorio no muestra ramas paralelas con objetivos opuestos. Muestra una evolucion acumulativa del producto:

`main` -> `feature/premium-ux-upgrade-v1` -> `feature/full-site-pages-v1` -> `feature/v2-premium-experience` -> `feature/premium-dynamic-ui` -> `feature/v3-gamification-premium`

La rama `feature/v3-smart-collision-experiment` parte del mismo commit que `feature/v3-gamification-premium`, pero hoy contiene trabajo local sin commit. Por eso funciona como rama de experimentacion activa, no como entrega cerrada.

## Estado General

| Rama | Head | Commits sobre `main` | Estado | Rol en la evolucion |
|---|---|---:|---|---|
| `main` | `31a4283` | 0 | Base actual | Punto estable documentado |
| `feature/premium-ux-upgrade-v1` | `45a836c` | 4 | Pendiente de merge | Conversion y contacto |
| `feature/full-site-pages-v1` | `795adca` | 5 | Pendiente de merge | Sitio completo multi-pagina |
| `feature/v2-premium-experience` | `10c5586` | 8 | Pendiente de merge | Reposicionamiento visual premium |
| `feature/premium-dynamic-ui` | `728704a` | 10 | Pendiente de merge | UI dinamica, arquitectura y performance |
| `feature/v3-gamification-premium` | `6413fd8` | 11 | Pendiente de merge | CTA gamificado y engagement |
| `feature/v3-smart-collision-experiment` | `6413fd8` | 11 | En experimentacion local | Iteracion no consolidada |

## Lectura de Producto Basada en Customer Story

La historia del producto evoluciona en este orden:

1. **Contacto sin friccion**
   - Como visitante que llega por primera vez, quiero contactar por WhatsApp en segundos para consultar disponibilidad y precio sin navegar demasiado.
2. **Confianza y profundidad**
   - Como paciente evaluando opciones, quiero ver tratamientos, sedes y quienes son para sentir seguridad antes de reservar.
3. **Percepcion premium**
   - Como paciente de alto valor, quiero sentir una marca moderna y boutique para justificar una percepcion de mayor calidad.
4. **Navegacion fluida**
   - Como usuario que recorre varias secciones y paginas, quiero una experiencia coherente y dinamica para no sentir cortes entre landing y paginas internas.
5. **Impulso a la accion**
   - Como visitante indeciso, quiero una interaccion memorable en el CTA para sentir un empuje emocional a hacer clic.
6. **Experimentacion inmersiva**
   - Como usuario atraido por interfaces vivas, quiero una puesta en escena mas inmersiva para percibir innovacion, siempre que no afecte rendimiento ni claridad.

## Diferencias Rama por Rama

### 1. `feature/premium-ux-upgrade-v1`

**Objetivo de negocio**
- Mejorar conversion temprana y accesibilidad al contacto.

**Historia de usuario principal**
- Como visitante nuevo, quiero encontrar canales de contacto reales y visibles para decidir rapidamente si escribo o continuo explorando.

**Commits incluidos**
- `19e3a8d` `feat(ux): premium polish phase 3A baseline`
- `00dde8c` `feat(ux): premium polish sprint A+B+C`
- `f0b17a0` `docs(workflow): add agent orchestration guide`
- `45a836c` `feat(contact): add WhatsApp button + real social links`

**Mejoras implementadas**
- Boton flotante de WhatsApp.
- Links sociales reales.
- Ajustes de contraste, navegacion y jerarquia visual.
- Pulido en `Hero`, `Stats`, `Footer`, `Navbar`, `Technology` y secciones informativas previas.

**Impacto esperado**
- Menor friccion para el primer contacto.
- Mayor confianza inicial.
- Mejor lectura de CTA y puntos de entrada a conversion.

### 2. `feature/full-site-pages-v1`

**Objetivo de negocio**
- Pasar de una landing aislada a un sitio con mas profundidad de informacion.

**Historia de usuario principal**
- Como paciente comparando clinicas, quiero ver paginas dedicadas de tratamientos, sedes, nosotros y equipo para comprender mejor la propuesta antes de reservar.

**Commit incremental sobre la rama anterior**
- `795adca` `feat(pages): add full site pages - staff, treatments, locations, about`

**Mejoras implementadas**
- Nuevas rutas: `nosotros`, `tratamientos`, `sedes`, `equipo`.
- Nuevo `src/components/ui/PageHeader.tsx`.
- Nuevo `src/data/pages-content.ts`.
- Ajustes de contenido para sostener navegacion real entre landing y paginas internas.

**Impacto esperado**
- Mas profundidad para pacientes que investigan antes de escribir.
- Mejor soporte para SEO y navegacion interna.
- Mayor sensacion de marca establecida y no solo promocional.

### 3. `feature/v2-premium-experience`

**Objetivo de negocio**
- Reposicionar la experiencia visual hacia una marca premium, moderna y mas memorable.

**Historia de usuario principal**
- Como paciente potencial, quiero sentir una experiencia visual de alto nivel para asociar la clinica con calidad, tecnologia y precision.

**Commits incrementales sobre la rama anterior**
- `f0f3092` `feat(v2): premium experience foundation — colors, fonts, motion, textures`
- `c3b39bf` `feat(v2): smile reveal gamified section + remove team/reviews`
- `10c5586` `feat(v2): new hero headline, 7 treatments, redesigned smile reveal`

**Mejoras implementadas**
- Nueva base de color, tipografia, texturas y motion en `src/app/globals.css`.
- Integracion de scroll suave en `src/components/providers/SmoothScroll.tsx`.
- Rediseño fuerte de `Hero`, `SmileReveal`, `Treatments`, `Stats` y `Technology`.
- Evolucion del relato visual hacia tecnologia, precision y experiencia boutique.
- Documentacion de planeamiento en `docs/planificacion/`.

**Impacto esperado**
- Mayor percepcion de valor.
- Diferenciacion frente a landings genericas del rubro salud.
- Mejor alineacion con una narrativa premium y aspiracional.

### 4. `feature/premium-dynamic-ui`

**Objetivo de negocio**
- Dar continuidad entre landing y paginas internas, reforzando dinamismo y consistencia.

**Historia de usuario principal**
- Como usuario recorriendo varias pantallas, quiero sentir una navegacion fluida y coherente para confiar en que la marca esta bien construida y no improvisada.

**Commits incrementales sobre la rama anterior**
- `bb8d9c6` `feat(ui): premium dynamic UI upgrade — navbar, hero, stats, treatments, footer, transitions`
- `728704a` `fix(perf): clean v2 runtime bottlenecks before gamification`

**Mejoras implementadas**
- Reorganizacion de paginas internas en `src/app/(pages)/...`.
- Nuevo `src/app/(pages)/layout.tsx` y `src/app/(pages)/template.tsx`.
- Refactor grande de `Navbar`, `Footer`, `Hero`, `SmileReveal`, `Stats`, `Treatments`.
- Mejoras de performance para preparar interacciones mas complejas.

**Impacto esperado**
- Navegacion mas consistente.
- Mejor experiencia de marca entre home y paginas internas.
- Base mas estable para motion y gamificacion sin degradar rendimiento.

### 5. `feature/v3-gamification-premium`

**Objetivo de negocio**
- Subir engagement del hero y hacer el CTA mas memorable.

**Historia de usuario principal**
- Como visitante indeciso, quiero una llamada a la accion mas viva y atractiva para sentir un empuje claro a interactuar.

**Commit incremental sobre la rama anterior**
- `6413fd8` `feat(hero): add gamified magnetic CTA with confetti success state`

**Mejoras implementadas**
- Nuevo `src/components/ui/MagneticCTA.tsx`.
- Actualizacion de `src/components/sections/Hero.tsx`.
- Incorporacion de feedback visual celebratorio.

**Impacto esperado**
- Mejor CTR del CTA principal.
- Mayor memorabilidad del primer scroll.
- Diferenciacion por interaccion, no solo por estetica.

### 6. `feature/v3-smart-collision-experiment`

**Objetivo de negocio**
- Explorar una puesta en escena todavia mas inmersiva, manteniendo la identidad premium.

**Historia de usuario principal**
- Como usuario sensible al diseño, quiero una experiencia mas cinematica e interactiva para percibir innovacion desde el primer impacto.

**Estado real hoy**
- No tiene commits nuevos sobre `feature/v3-gamification-premium`.
- Tiene cambios locales sin commit en UI, layout, documentacion y assets.
- Por eso debe leerse como laboratorio activo y no como release cerrada.

**Cambios locales observados**
- Nuevos componentes: `CompanionAura`, `SuccessCard`, `WaveDivider`.
- Ajustes en `Hero`, `SmileReveal`, `Navbar`, `layout` y tokens globales.
- Reorganizacion documental hacia `docs/`.
- Presencia de carpeta local `fotos-reales/` y comandos locales en `.claude/`.

**Riesgo actual**
- Mezcla trabajo de documentacion, UX experimental y assets locales en un mismo estado no committeado.
- Requiere separacion en commits pequenos para trazabilidad y rollback seguro.

## Diferencias Incrementales Entre Ramas

| Comparacion | Diferencia principal |
|---|---|
| `main` -> `premium-ux-upgrade-v1` | Contacto real, WhatsApp, pulido UX y mejor acceso a conversion |
| `premium-ux-upgrade-v1` -> `full-site-pages-v1` | Nuevas paginas internas y contenido estructurado de sitio completo |
| `full-site-pages-v1` -> `v2-premium-experience` | Cambio fuerte de look & feel, motion, narrativa premium y nuevas secciones |
| `v2-premium-experience` -> `premium-dynamic-ui` | Arquitectura App Router mas madura, transiciones y performance previa a gamificacion |
| `premium-dynamic-ui` -> `v3-gamification-premium` | CTA magnetico y celebracion visual en hero |
| `v3-gamification-premium` -> `v3-smart-collision-experiment` | Sin nuevos commits; solo trabajo local experimental pendiente de consolidar |

## Recomendacion de Integracion

Orden sugerido para mergear o reconstruir la historia en `main`:

1. `feature/full-site-pages-v1`
2. `feature/v2-premium-experience`
3. `feature/premium-dynamic-ui`
4. `feature/v3-gamification-premium`
5. Separar y normalizar `feature/v3-smart-collision-experiment` en commits pequenos antes de integrarla

## Propuesta de Split para la Rama Experimental

Para dejar la rama experimental limpia y entendible, conviene separar en bloques:

1. **docs:** mover documentacion raiz a `docs/` y agregar mapa de ramas.
2. **chore:** ignorar archivos locales de soporte (`.claude/`, `fotos-reales/`) para evitar ruido.
3. **feat(ui):** agregar `CompanionAura`, `SuccessCard`, `WaveDivider`.
4. **feat(hero):** ajustar `Hero` hacia version collision/immersive.
5. **feat(smile-reveal):** actualizar la seccion final con narrativa y motion nuevos.
6. **style:** terminar refinamiento de `globals.css` y `Navbar`.

Ese orden deja una historia mas facil de revisar, probar y revertir si algo no convence.
