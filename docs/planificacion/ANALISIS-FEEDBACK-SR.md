# Análisis del Feedback — Stakeholders Odonto Smart

> **Framework**: TCAD
> **Fecha**: 2026-03-08
> **Fuentes**:
> - Sr. Anthony Rivera Neo (Asesor técnico/visual)
> - Sra. Beatriz Reymer (Owner/Propietaria)

---

## 🚨 FEEDBACK CRÍTICO: Sra. Beatriz (Owner)

### Feedback Original (Textual)

```
[10:13 PM] Buenas noches Miguelito
Recuerda que tenemos una marca registrada con colores propios

[10:14 PM] Si bien se le adiciona el color oscuro pero no dejar
los registrados ante INDECOPI

[10:15 PM] El negro es muy duro el plomo oscuro que me parece
se usa en esa imagen de la sonrisa es más suave
```

### Traducción del Mensaje

| Punto | Lo que dice | Lo que significa |
|-------|-------------|------------------|
| **Marca registrada** | "colores propios registrados ante INDECOPI" | Existen colores oficiales de marca con registro legal |
| **No abandonar colores** | "no dejar los registrados" | Los colores actuales del sitio DEBEN ser los oficiales |
| **Negro muy duro** | "el negro es muy duro" | El `#000` o negros puros son muy agresivos |
| **Plomo oscuro mejor** | "el plomo oscuro... es más suave" | Prefiere grises oscuros (`slate`, `gray-800`) |

### 🔴 ALERTA: Cumplimiento de Marca

**PROBLEMA:** No tenemos los colores oficiales registrados de Odonto Smart.

**RIESGO LEGAL:** Usar colores no autorizados en sitio web de marca registrada.

**ACCIÓN REQUERIDA:** Solicitar manual de marca o códigos de colores oficiales.

---

## Respuesta Sugerida para la Sra. Beatriz

```
Buenas noches Tía Betty,

Muchas gracias por la observación, es muy importante.
Tienes toda la razón sobre los colores de marca.

Para asegurarme de usar exactamente los colores registrados
ante INDECOPI, ¿podrías compartirme alguno de estos?

1. Manual de marca (si existe)
2. Los códigos de colores oficiales (en formato hexadecimal
   como #4EB1AC o en Pantone)
3. El logo en formato vectorial (AI, SVG o PDF)
4. Cualquier documento de INDECOPI con los colores

Sobre el negro, entendido perfectamente. Voy a cambiarlo
por tonos de gris oscuro (plomo) que son más suaves y
elegantes.

¿Me podrías enviar esa información para hacer los ajustes
correctamente?

Gracias Tía Betty 🙏
```

---

## Qué Necesitamos de la Owner

| Asset | Prioridad | Para qué |
|-------|-----------|----------|
| **Códigos de color oficiales** | 🔴 CRÍTICO | Actualizar `globals.css` con colores correctos |
| **Logo vectorial (SVG/AI)** | 🔴 CRÍTICO | Asegurar logo correcto en navbar |
| **Manual de marca** | 🟡 ALTA | Tipografía, uso de colores, tono |
| **Fotos reales** | 🟡 ALTA | Reemplazar placeholders |
| **Registro INDECOPI** | 🟢 MEDIA | Verificar colores exactos |

---

## Colores Actuales vs Posibles Oficiales

### Lo que tenemos en `globals.css`:

```css
--color-brand-teal: #4EB1AC;        /* ¿Es oficial? */
--color-brand-teal-strong: #0F766E; /* ¿Es oficial? */
--color-brand-purple: #8E44AD;      /* ¿Es oficial? */
```

### Lo que debemos verificar:

- ¿El teal `#4EB1AC` es el color registrado?
- ¿El purple `#8E44AD` es parte de la marca?
- ¿Qué grises/plomos están aprobados?
- ¿Hay colores secundarios oficiales?

---

## T — Traducción (Feedback Sr. Anthony)

### Feedback Original (Textual)

```
[9:57 PM] Siento que hace falta cambiar la tipografia

[9:59 PM] Necesitas mejorar los espaciados, si te das cuenta en el inicio,
dice la inteligencia dental y el "de" se pone debajo, hay partes que se ven
muy IA (las cards que tienen un emoji y texto), la parte de las reseñas
puede ser mejor si usas la api de maps. yo imagino que se puede integrar
de forma real al formato de tu pagina web y que no sea un link que te
redirecciona.

[10:01 PM] En la seccion de tratamientos se ve todo muy junto

[10:01 PM] Se ve demasiado texto.

[10:01 PM] Te fijaste como se ve en celular?
```

### Puntos de Dolor Identificados

| # | Problema | Sección | Severidad |
|---|----------|---------|-----------|
| 1 | **Tipografía** — Necesita cambio | Global | 🔴 Alta |
| 2 | **Espaciado Hero** — "de" cae a línea siguiente | Hero | 🔴 Alta |
| 3 | **Aspecto "IA"** — Cards con emoji + texto genéricas | Reviews/Stats | 🔴 Alta |
| 4 | **Reseñas** — Link externo, no integradas | Reviews | 🟡 Media |
| 5 | **Tratamientos muy junto** — Falta breathing room | Tratamientos | 🔴 Alta |
| 6 | **Demasiado texto** — Overwhelming | Varias páginas | 🟡 Media |
| 7 | **Mobile** — ¿Se revisó en celular? | Global | 🔴 Alta |

### Para no-técnicos

El Sr Anthony nos dice que la página:
- Se ve "generada por IA" en algunas partes (genérica)
- Tiene problemas de espaciado y texto cortado
- Tiene demasiado texto que agobia
- Las reseñas deberían estar integradas, no ser un link externo
- **No está claro si se ve bien en celular**

---

## C — Contexto

### Estado Actual vs Feedback

| Área | Lo que tenemos | Lo que dice el Sr |
|------|----------------|-------------------|
| **Tipografía** | Inter (única fuente) | "Hace falta cambiar" |
| **Hero** | "La Inteligencia Dental de / Tu Mejor Sonrisa" | El "de" cae mal en algunos breakpoints |
| **Reviews** | Iniciales en círculos teal | "Se ven muy IA" |
| **Stats** | Iconos custom + cards pastel | Posiblemente también "muy IA" |
| **Reseñas Google** | Link `href` que redirige | Quiere API integrada en página |
| **Tratamientos** | Grid compacto con mucha info | "Todo muy junto", "demasiado texto" |
| **Mobile** | Responsive básico | **Sin validación visual confirmada** |

### Imágenes Mentales del Problema

```
HERO ACTUAL (problema de breakpoint):
┌─────────────────────────────┐
│ La Inteligencia Dental de   │  ← En ciertos anchos
│ Tu Mejor Sonrisa            │     "de" cae solo
└─────────────────────────────┘

HERO CORREGIDO:
┌─────────────────────────────┐
│ La Inteligencia Dental      │  ← "de" debe ir con
│ de Tu Mejor Sonrisa         │     la segunda línea
└─────────────────────────────┘
```

```
REVIEWS ACTUAL:
┌──────┐  ┌──────┐  ┌──────┐
│  M   │  │  J   │  │  C   │   ← Iniciales genéricas
│ text │  │ text │  │ text │      "se ven muy IA"
└──────┘  └──────┘  └──────┘

REVIEWS MEJORADO (integración Google):
┌────────────────────────────────┐
│ ⭐⭐⭐⭐⭐ 4.8 (234 reseñas)      │
│ ┌──────┐ ┌──────┐ ┌──────┐    │
│ │ foto │ │ foto │ │ foto │    │  ← Fotos reales de Google
│ │ real │ │ real │ │ real │    │
│ └──────┘ └──────┘ └──────┘    │
└────────────────────────────────┘
```

---

## A — Análisis

### Diagnóstico por Severidad

#### 🔴 CRÍTICOS (Resolver primero)

| Issue | Causa Raíz | Solución |
|-------|------------|----------|
| **Mobile sin validar** | No se testeó en dispositivo real | Auditoría responsive completa |
| **Tipografía genérica** | Solo Inter, sin jerarquía clara | Agregar fuente display para títulos |
| **Hero breakpoint** | `line1` y `line2` mal divididos | Reorganizar texto o usar `<br>` condicional |
| **Aspecto IA** | Elementos genéricos (iniciales, iconos) | Humanizar con fotos reales o mejor diseño |
| **Tratamientos denso** | Mucha info en poco espacio | Más padding, menos texto, cards más grandes |

#### 🟡 IMPORTANTES (Siguiente iteración)

| Issue | Causa Raíz | Solución |
|-------|------------|----------|
| **Reseñas externas** | Solo link a Google | Integrar Google Places API |
| **Demasiado texto** | Contenido extenso sin editar | Copywriting más conciso |

### Estrategia de Solución

#### Fase 1: Quick Fixes (Sin cambios estructurales)

```
1. Auditoría mobile → Capturar screenshots en 375px, 414px
2. Hero text → Mover "de" a line2: "La Inteligencia Dental" / "de Tu Mejor Sonrisa"
3. Spacing → Aumentar padding/gap en Tratamientos
4. Text reduction → Cortar descripciones a 2 líneas máx
```

#### Fase 2: Mejoras Visuales (Cambios moderados)

```
1. Tipografía → Agregar fuente display (ej: Playfair, Fraunces) para títulos
2. Reviews → Rediseñar cards sin aspecto "IA" (quitar iniciales circulares)
3. Stats → Revisar si también se ven genéricas
```

#### Fase 3: Integraciones (Cambios mayores)

```
1. Google Places API → Traer reseñas reales con fotos y rating
2. Fotos reales → Reemplazar placeholders por contenido real
```

### Skills del Sr Recomendadas

| Skill | Para qué |
|-------|----------|
| `web-design-guidelines` | Auditoría responsive + spacing |
| `frontend-design` | Tipografía + humanizar diseño |
| `ui-animation` | Revisar que motion no agrave densidad |

---

## D — Plan de Acción Priorizado

### Sprint Inmediato: "Feedback del Sr Anthony"

| Prioridad | Tarea | Archivo(s) | Riesgo |
|-----------|-------|------------|--------|
| **P0** | Auditoría mobile (screenshots) | — | 🔴 |
| **P0** | Fix Hero text breakpoint | `content.ts`, `Hero.tsx` | 🟢 |
| **P0** | Aumentar spacing en Tratamientos | `tratamientos/page.tsx` | 🟢 |
| **P1** | Evaluar cambio de tipografía | `globals.css`, `layout.tsx` | 🟡 |
| **P1** | Rediseñar Reviews (quitar aspecto IA) | `Reviews.tsx` | 🟡 |
| **P1** | Reducir texto en tratamientos | `pages-content.ts` | 🟢 |
| **P2** | Investigar Google Places API | Nuevo archivo | 🔴 |

### Preguntas para el Sr Anthony

1. ¿Qué tipografía/estilo de fuente te gustaría? (serif, moderna, elegante)
2. ¿Tienes fotos reales del equipo y clínica para reemplazar placeholders?
3. ¿Tienes acceso a Google Business para la API de reseñas?
4. ¿Cuáles son los breakpoints móviles más importantes? (iPhone, Android específico)

---

## Resumen Ejecutivo

### Lo que el Sr Anthony nos está comunicando

> **"La página se ve genérica/IA y no está optimizada para móvil"**

### Acciones Inmediatas

1. ✅ **Auditoría mobile** — Ver cómo se ve REALMENTE en celular
2. ✅ **Fix spacing** — Hero y Tratamientos
3. ✅ **Humanizar** — Quitar elementos que gritan "generado por IA"
4. ⏳ **Tipografía** — Evaluar cambio de fuente
5. ⏳ **API Google** — Integrar reseñas reales

### Métrica de Éxito

El Sr Anthony debe poder ver la página en su celular y decir:
> "Ahora sí se ve profesional, no parece hecha por IA"

---

## 📋 Plan de Acción Consolidado

### Prioridad ABSOLUTA: Colores de Marca

```
⚠️ BLOQUEANTE: No podemos hacer cambios visuales significativos
hasta tener los colores oficiales de INDECOPI.
```

| Paso | Acción | Responsable |
|------|--------|-------------|
| 1 | Enviar mensaje a Tía Betty solicitando colores | Miguel |
| 2 | Esperar respuesta con assets de marca | — |
| 3 | Actualizar `globals.css` con colores oficiales | Dev |
| 4 | Luego proceder con feedback de Anthony | Dev |

### Orden de Ejecución

```
FASE 0: MARCA (BLOQUEANTE)
├── Solicitar colores oficiales a Tía Betty
├── Solicitar logo vectorial
├── Actualizar globals.css
└── Cambiar negros por grises (plomo oscuro)

FASE 1: FIXES RÁPIDOS (Post-colores)
├── Fix Hero breakpoint ("de")
├── Aumentar spacing Tratamientos
├── Auditoría mobile
└── Reducir textos densos

FASE 2: HUMANIZACIÓN
├── Rediseñar Reviews (quitar aspecto IA)
├── Evaluar tipografía oficial de marca
└── Fotos reales (si las envían)

FASE 3: INTEGRACIONES
├── Google Places API (reseñas)
└── Otros
```

### Resumen de Stakeholders

| Persona | Rol | Feedback Principal |
|---------|-----|-------------------|
| **Sra. Beatriz** | Owner | Colores de marca registrada, no usar negro puro |
| **Sr. Anthony** | Asesor | Tipografía, spacing, aspecto IA, mobile |

### Siguiente Paso Inmediato

**Enviar mensaje a Tía Betty pidiendo:**
1. Códigos de colores oficiales
2. Logo vectorial
3. Manual de marca (si existe)

---

*Documento TCAD — Última actualización: 2026-03-08*
