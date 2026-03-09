# Framework TCAD — Guía Estratégica de Desarrollo

> **Versión:** 1.0
> **Proyecto:** Odonto Smart
> **Creado:** 2026-03-09
> **Última actualización:** 2026-03-09

---

## ¿Qué es TCAD?

**TCAD** es un framework de desarrollo iterativo diseñado para realizar cambios **quirúrgicos, trazables y documentados** en proyectos de software sin romper la base existente.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   T ──→ C ──→ A ──→ D                                       │
│   │     │     │     │                                       │
│   │     │     │     └─ Desarrollo / Documentación           │
│   │     │     └─────── Análisis                             │
│   │     └───────────── Contexto                             │
│   └─────────────────── Traducción                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Las 4 Fases

### T — Traducción

**Propósito:** Convertir la solicitud del usuario en un objetivo técnico claro.

| Pregunta Clave | Descripción |
|----------------|-------------|
| ¿Qué quiere lograr el usuario? | Entender la intención, no solo las palabras |
| ¿Cómo lo explicaría a alguien no técnico? | Validar comprensión mutua |
| ¿Cuál es el entregable esperado? | Definir criterio de éxito |

**Acciones:**
- Preguntar si hay ambigüedad
- Reformular el objetivo en términos simples
- Confirmar antes de avanzar

**Output esperado:**
```markdown
#### T — Traducción
- **Objetivo solicitado:** [descripción clara]
- **Entendible para no-técnicos:** [explicación simple]
- **Criterio de éxito:** [qué significa "terminado"]
```

---

### C — Contexto

**Propósito:** Entender el estado actual del proyecto antes de tocar código.

| Pregunta Clave | Descripción |
|----------------|-------------|
| ¿Qué archivos están involucrados? | Mapear dependencias |
| ¿Qué patrones existen? | Reutilizar, no reinventar |
| ¿Qué podría romperse? | Identificar riesgos |

**Acciones:**
- Leer archivos relevantes
- Identificar tokens, componentes, estructura
- Documentar el estado actual

**Output esperado:**
```markdown
#### C — Contexto
- **Estado actual:** [descripción del proyecto]
- **Archivos involucrados:** [lista]
- **Patrones a reutilizar:** [Container, SectionHeading, etc.]
- **Riesgos identificados:** [qué no romper]
```

---

### A — Análisis

**Propósito:** Diseñar la solución antes de escribir código.

| Pregunta Clave | Descripción |
|----------------|-------------|
| ¿Cuál es la estrategia mínima? | Cambio quirúrgico, no refactor masivo |
| ¿Cómo se descompone en pasos? | Cambios modulares y atómicos |
| ¿Qué alternativas existen? | Evaluar trade-offs |

**Principios:**
- **Mínimo impacto:** Solo tocar lo necesario
- **Modularidad:** Cada cambio debe ser independiente
- **Reversibilidad:** Poder hacer rollback fácilmente

**Output esperado:**
```markdown
#### A — Análisis
- **Estrategia:** [enfoque general]
- **Skills aplicables:** (marcar solo si el cambio lo requiere)
  - [ ] audit-ui
  - [ ] web-design-guidelines
  - [ ] vercel-react-best-practices
  - [ ] implement-frontend
- **Cambios modulares:**
  - Archivo 1: [qué cambiar]
  - Archivo 2: [qué cambiar]
- **Orden de ejecución:** [secuencia]
```

---

### D — Desarrollo / Documentación

**Propósito:** Implementar y documentar con trazabilidad completa.

| Acción | Descripción |
|--------|-------------|
| Implementar | Ejecutar los cambios planificados |
| Validar | Build, lint, tests |
| Commit | Mensaje descriptivo con referencia TCAD |
| Documentar | Actualizar BITACORA.md |

**Formato de commit:**
```
tipo(scope): descripción corta

TCAD [timestamp]: Título del cambio

T — Traducción:
- Resumen del objetivo

A — Análisis:
- Cambios realizados

D — Desarrollo:
- Archivos modificados
- Build status

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

**Output esperado:**
```markdown
#### D — Desarrollo
- **Archivos modificados:** [lista con descripción]
- **Build:** ✅/❌
- **Commit:** `hash mensaje`
- **Bitácora:** Actualizada
```

---

## Cuándo Usar TCAD

### ✅ Usar TCAD cuando:

- Se agrega una nueva sección o componente
- Se modifica estructura existente
- Se cambian tokens de diseño
- Se integra una nueva funcionalidad
- El cambio afecta múltiples archivos

### ❌ No es necesario TCAD para:

- Corrección de typos
- Cambios de texto en content.ts
- Ajustes de un solo archivo triviales
- Exploración o debugging temporal

---

## Plantilla Rápida

```markdown
### [YYYY-MM-DD HH:MM UTC] Título del cambio (TCAD)

#### T — Traducción
- **Objetivo:**
- **Para no-técnicos:**

#### C — Contexto
- **Estado actual:**
- **Archivos:**

#### A — Análisis
- **Estrategia:**
- **Cambios:**
  -

#### D — Desarrollo
- **Modificados:**
- **Build:**
- **Commit:**
```

---

## Integración con el Proyecto

### Archivos de Referencia

| Archivo | Propósito |
|---------|-----------|
| `TCAD.md` | Este documento — definición del framework |
| `BITACORA.md` | Registro histórico de cambios TCAD |
| `src/app/style-guide/page.tsx` | Guía visual de componentes |
| `mockup.pen` | Fuente de verdad del diseño |

### Flujo de Trabajo

```
1. Usuario solicita cambio
         │
         ▼
2. [T] Traducir → Entender objetivo
         │
         ▼
3. [C] Contexto → Leer código actual
         │
         ▼
4. [A] Análisis → Planificar cambios
         │
         ▼
5. [D] Desarrollo → Implementar
         │
         ▼
6. [D] Documentar → BITACORA.md + Commit
         │
         ▼
7. Validar → Build + Review
```

---

## Principios Fundamentales

### 1. No Romper la Base

> "El cambio más seguro es el que no se hace. El segundo más seguro es el más pequeño posible."

- Preservar tokens de diseño
- Reutilizar componentes existentes
- No cambiar orden de secciones sin razón

### 2. Trazabilidad Total

> "Si no está documentado, no existe."

- Cada cambio tiene timestamp
- Cada cambio tiene commit referenciado
- La bitácora es la fuente de verdad histórica

### 3. Claridad para Todos

> "Si no puedes explicarlo simplemente, no lo entiendes lo suficiente."

- El objetivo debe ser entendible para no-técnicos
- El código debe ser legible sin comentarios excesivos
- La documentación debe ser útil, no burocrática

### 4. Cambios Quirúrgicos

> "Operar con bisturí, no con motosierra."

- Archivos mínimos modificados
- Líneas mínimas cambiadas
- Máximo impacto con mínimo riesgo

---

## Checklist Pre-Commit

Antes de hacer commit de un cambio TCAD:

- [ ] ¿El objetivo está claramente definido? (T)
- [ ] ¿Leí los archivos involucrados? (C)
- [ ] ¿El cambio es el mínimo necesario? (A)
- [ ] ¿Este cambio requería revisión de UI, accesibilidad o performance? (A)
- [ ] ¿El build pasa? (D)
- [ ] ¿La bitácora está actualizada? (D)
- [ ] ¿El commit message sigue el formato? (D)

---

## Ejemplo Completo

```markdown
### [2026-03-09 01:15:00 UTC] Sección Reviews + Sedes Google Maps (TCAD)

#### T — Traducción
- **Objetivo:** Insertar sección de prueba social y actualizar sedes con enlaces a Google Maps.
- **Para no-técnicos:** Nueva sección con experiencias de pacientes + sedes clickeables que abren mapas.

#### C — Contexto
- **Estado actual:** Landing con Navbar → Hero → Stats → Technology → Team → Footer
- **Archivos:** content.ts, Footer.tsx, page.tsx, nuevo Reviews.tsx
- **Patrones:** Container, SectionHeading, bg-bg-soft

#### A — Análisis
- **Estrategia:** Inserción quirúrgica entre Team y Footer
- **Cambios:**
  - content.ts: Interfaces + nuevas sedes + bloque reviews
  - Reviews.tsx: Server Component nuevo
  - Footer.tsx: Sedes como enlaces
  - page.tsx: Importar Reviews

#### D — Desarrollo
- **Modificados:** 4 archivos (1 nuevo)
- **Build:** ✅ Exitoso
- **Commit:** `6b052e7 feat(reviews): add social proof section and Google Maps links`
```

---

## Glosario

| Término | Definición |
|---------|------------|
| **Cambio quirúrgico** | Modificación precisa y mínima |
| **Modular** | Independiente y aislado |
| **Trazable** | Con historial completo |
| **Base** | Estado estable del proyecto |
| **Token** | Variable de diseño (color, spacing, etc.) |
| **Server Component** | Componente React sin "use client" |
| **Client Component** | Componente React con interactividad |

---

## Referencias

- **BITACORA.md** — Historial de cambios
- **src/app/style-guide/** — Guía visual
- **src/data/content.ts** — Contenido centralizado
- **mockup.pen** — Diseño fuente de verdad

---

> *"Primero entender, luego planificar, después ejecutar, siempre documentar."*

---

*Framework TCAD v1.0 — Odonto Smart*
