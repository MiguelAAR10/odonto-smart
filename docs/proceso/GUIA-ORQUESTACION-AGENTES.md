# Guía de Orquestación de Agentes y Skills

> Proyecto: **Odonto Smart**
>
> Framework rector: **TCAD**
>
> Objetivo: coordinar agentes, skills y ramas de trabajo para mejorar el proyecto sin perder trazabilidad ni calidad.

---

## 1. Principio Operativo

Odonto Smart se desarrolla bajo una arquitectura híbrida:

- **TCAD** gobierna el proceso del proyecto.
- **Skills** amplían la capacidad del agente bajo demanda.
- **BITACORA.md** registra cambios no triviales.
- **Branches** aíslan upgrades, sprints y experimentos.

La regla principal es:

> **El repo guarda producto y trazabilidad. Las skills viven fuera del repo.**

---

## 2. Roles de Agentes

### Agente Lead

Responsable de:

- traducir la visión del usuario a decisiones técnicas y visuales,
- aplicar TCAD,
- repartir trabajo entre agentes,
- consolidar validaciones,
- decidir qué skills activar,
- mantener coherencia entre ramas y entregables.

### Agentes de Implementación

Responsables de:

- ejecutar cambios modulares en archivos específicos,
- respetar patrones existentes,
- no introducir gobernanza nueva sin aprobación,
- reportar exactamente qué tocaron.

### Agente de Auditoría

Responsable de:

- revisar UX/UI, accesibilidad, responsive y performance,
- validar que los cambios no degradan la base,
- devolver findings priorizados y concretos.

---

## 3. Fuentes de Verdad del Proyecto

Dentro del repo:

- [`TCAD.md`](./TCAD.md): protocolo oficial
- [`BITACORA.md`](./BITACORA.md): historial de cambios
- [`README.md`](./README.md): overview del proyecto
- `src/app/globals.css`: tokens de diseño
- `src/data/content.ts`: contenido centralizado

Fuera del repo:

- skills globales del agente
- autenticación de GitHub


No crear por defecto:

- `status.md`
- `.cursorrules`
- `.agents/skills/` dentro del repo
- nuevos archivos de gobernanza salvo que resuelvan un problema real

---

## 4. Skills Activas para Odonto Smart

Skills base instaladas para este proyecto:

- `frontend-design`
- `web-design-guidelines`
- `ui-animation`
- `vercel-react-best-practices`

Instalación efectiva en esta máquina:

```text
~/.agents/skills/
├── frontend-design
├── web-design-guidelines
├── ui-animation
└── vercel-react-best-practices
```

Regla:

- no se versionan en Git,
- no se copian al repo,
- si se instalan o actualizan, hay que reiniciar Codex.

---

## 5. Cuándo Usar Cada Skill

### `frontend-design`

Usar cuando:

- se modifica percepción premium,
- se rediseña una sección,
- se busca evitar layouts genéricos,
- se trabaja jerarquía visual, composición o fondos.

### `web-design-guidelines`

Usar cuando:

- se quiere auditar responsive,
- se revisa accesibilidad,
- se ajusta navegación, formularios o semántica,
- se necesita una validación visual más estricta.

### `ui-animation`

Usar cuando:

- se introduce motion nuevo,
- se unifican hover states,
- se agregan scroll interactions,
- se afina `prefers-reduced-motion`.

### `vercel-react-best-practices`

Usar cuando:

- se refactoriza lógica React,
- se toca render performance,
- se agregan componentes cliente,
- se necesita revisar que el polish visual no degrade arquitectura.

---

## 6. Flujo Estándar por Solicitud

Cada solicitud no trivial sigue este flujo:

### 1. T — Traducción

- convertir la intención del usuario en objetivo técnico,
- definir criterio de éxito,
- aclarar si el pedido es visual, estructural o de performance.

### 2. C — Contexto

- leer archivos implicados,
- detectar patrones reutilizables,
- identificar riesgos y dependencias.

### 3. A — Análisis

- definir estrategia mínima,
- decidir qué skills aplicar,
- separar el trabajo en cambios modulares,
- asignar o coordinar agentes si el trabajo es concurrente.

### 4. D — Desarrollo / Documentación

- implementar,
- validar con `lint` / `build`,
- actualizar `BITACORA.md` si el cambio fue no trivial,
- preparar commit claro.

---

## 7. Orquestación con Varios Agentes

Cuando haya varios agentes trabajando en simultáneo:

### Regla 1

Un solo **Agente Lead** consolida decisiones y define el orden.

### Regla 2

Cada agente trabaja en **un alcance concreto**:

- `Navbar + navegación`
- `Hero + motion`
- `Team + cards`
- `Footer + conversion`

No repartir varios dominios mezclados al mismo agente si no hace falta.

### Regla 3

Antes de editar, cada agente debe declarar:

- objetivo,
- archivos a tocar,
- skill principal,
- validación esperada.

### Regla 4

No se pisan cambios sin leer el estado actual del branch.

### Regla 5

Los agentes de auditoría no deben abrir refactors masivos; deben devolver backlog o correcciones puntuales.

---

## 8. Handoff Entre Agentes

Formato recomendado:

```md
### Handoff
- Objetivo:
- Branch:
- Archivos tocados:
- Skill principal usada:
- Riesgos:
- Validación ejecutada:
- Pendiente para el siguiente agente:
```

Esto evita perder contexto y reduce colisiones.

---

## 9. Estrategia de Branches

### Rama principal

- `main` solo para estado relativamente estable.

### Rama de upgrade

Usar una rama dedicada para mejoras UX/UI amplias, por ejemplo:

```text
feature/premium-ux-upgrade-v1
```

### Reglas

- no trabajar upgrades grandes directamente sobre `main`,
- cerrar checkpoint del baseline antes de instalar nuevas skills o reiniciar el agente,
- agrupar commits por fase funcional, no por impulso.

Ejemplo de progresión:

- `feat(ux): premium polish phase 3A baseline`
- `feat(navbar): add scroll progress and active feedback`
- `feat(footer): add social icons and hover polish`

---

## 10. Plan de Uso de Skills por Sprint

### Sprint 0 — Baseline

- confirmar `lint`,
- revisar `build`,
- crear branch de trabajo,
- cerrar checkpoint base.

### Sprint 1 — Quick Wins

Skills:

- `frontend-design`
- `ui-animation`
- `web-design-guidelines`

Objetivo:

- polish visible de alto impacto y bajo riesgo.

### Sprint 2 — Coherencia de interacción

Skills:

- `ui-animation`
- `frontend-design`

Objetivo:

- unificar hover, feedback y vocabulario de movimiento.

### Sprint 3 — Elevación premium

Skills:

- `frontend-design`
- `ui-animation`

Objetivo:

- rediseños medianos como `Team`, `Hero`, fondos y narrativa visual.

### Sprint 4 — Revisión técnica

Skills:

- `vercel-react-best-practices`
- `web-design-guidelines`

Objetivo:

- asegurar que el polish no rompió rendimiento ni accesibilidad.

---

## 11. Checklist Operativo Antes de Push

- [ ] El cambio pasó por TCAD
- [ ] Se leyó el contexto real antes de editar
- [ ] Se activó solo la skill necesaria
- [ ] `lint` fue ejecutado
- [ ] `build` fue ejecutado o se documentó por qué no
- [ ] `BITACORA.md` fue actualizada si corresponde
- [ ] El branch está listo para revisión
- [ ] No se versionó ninguna skill ni configuración local del agente

---

## 12. Regla Final

La prioridad del proyecto es:

1. experiencia premium clara,
2. responsive sólido,
3. accesibilidad suficiente,
4. motion con criterio,
5. performance sin regresiones.

Si una skill o una idea complica el flujo sin mejorar esos cinco puntos, no se adopta.
