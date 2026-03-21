# Roadmap - Experiencia AAA (sobre base V2)

Objetivo: aumentar conversion y calidad percibida sin romper arquitectura existente.

---

## Prioridad P0 (impacto inmediato)

1. **Form de contacto real**
   - Implementar backend (Resend/Formspree/Server Action) en `/sedes#contacto`.
   - Mantener WhatsApp como canal alterno, no unico.

2. **Deep-linking por tratamiento**
   - Soportar `/tratamientos?id=ortodoncia`.
   - Al entrar, seleccionar automaticamente tratamiento correspondiente.

3. **CTA consistency map**
   - Unificar copys y destino segun contexto (explorar vs reservar).

---

## Prioridad P1 (conversion + confianza)

1. **Bloque testimonios activo en homepage**
   - Reutilizar dataset `reviews` ya disponible.
   - Mostrar rating + highlights + prueba social real.

2. **CTA de salida en Technology**
   - "Conoce nuestra tecnologia en persona" -> `/sedes`.

3. **Analytics de funnel**
   - Instrumentar eventos:
     - click CTA navbar,
     - click CTA hero,
     - click treatment card,
     - click WhatsApp,
     - submit form.

---

## Prioridad P2 (experiencia refinada)

1. **A/B de Hero CTA**
   - Variar copy y orden de botones.
   - Medir CTR por variante.

2. **Seccion antes/despues**
   - Casos reales con slider comparativo.

3. **Accesibilidad hardening**
   - Validar focus flow, landmarks, labels, contrastes y lectura por SR.

---

## KPI sugeridos

- CTR Hero CTA
- CTR Navbar CTA
- Scroll depth por seccion
- Click-through a `/tratamientos`
- Conversion primaria (reserva)
- Conversion secundaria (newsletter)

---

## Resultado esperado

La base V2 ya aporta calidad visual premium.
Con este roadmap, se convierte esa calidad en resultados de negocio medibles:
- mas leads,
- menor friccion de decision,
- mayor confianza percibida.
