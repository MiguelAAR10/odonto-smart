// ═══════════════════════════════════════════════════════════════════════════════
// ODONTO SMART V1 — Stitch Final | Content Data
// All text content centralized here. No hardcoded strings in components.
// ═══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// Interfaces
// ─────────────────────────────────────────────────────────────────────────────

export interface Location {
  name: string;
  address: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  highlight: string;
  initial: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function getGoogleMapsUrl(address: string): string {
  return `https://maps.google.com/?q=${encodeURIComponent(address + ", Lima, Perú")}`;
}

const whatsappHref =
  "https://wa.me/51980221985?text=Hola%2C%20quiero%20agendar%20por%20WhatsApp%20en%20Odonto%20Smart";

// ─────────────────────────────────────────────────────────────────────────────
// Site Configuration
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Odonto Smart",
  logo: {
    text: "ODONTO",
    accent: "SMART",
    caption: "Boutique dental premium",
  },
  tagline: "La inteligencia dental de tu mejor sonrisa",
  locationLabel: "Lima · 3 sedes",
  topBar: "Estética Avanzada. Cero Dolor. Sedes en Lince, Jesús María y Magdalena.",
};

export const navigation = {
  links: [
    { label: "Inicio", href: "/" },
    { label: "Sedes", href: "/sedes" },
  ],
  cta: {
    label: "Agendar por WhatsApp",
    href: whatsappHref,
  },
  meta: "Diagnostico digital · Alta estética",
};

// ─────────────────────────────────────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  eyebrow: "ODONTOLOGÍA ESTÉTICA DE ALTO NIVEL",
  title: {
    line1: "La clínica dental en Lima",
    line2: "que tu imagen",
    accent: "merece.",
  },
  description:
    "Olvídate de la clínica tradicional y del miedo al sillón dental. Disfruta de una experiencia premium con especialistas enfocados en transformar tu estética sin estrés y con resultados reales desde tu primera visita.",
  buttons: {
    primary: {
      label: "Agenda tu Valoración Premium",
      href: whatsappHref,
    },
  },
  ctaNote: "Atención sin dolor. Facilidades de pago. Más de 5,000 sonrisas transformadas.",
  image: "/images/odonto-smart/fotos-reales/atencion-paciente-personalizada.jpg",
  imageAlt: "Tecnologia dental y sonrisa estetica en Odonto Smart",
};

export const problemSection = {
  label: "LO QUE MUCHOS SIGUEN POSTERGANDO",
  title: "Sabes que deberías verlo…\npero lo sigues postergando",
  points: [
    "Te cuesta sonreír con naturalidad",
    "Te preocupa que sea incómodo",
    "No sabes cuánto podría costar ni cómo empezar",
  ],
  closing: "Mientras más lo postergas, más difícil puede volverse.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Treatments / Especialidades (7)
// ─────────────────────────────────────────────────────────────────────────────

export const treatments = {
  label: "ESPECIALIDADES",
  title: "Estética dental, ortodoncia e implantes en Lima",
  featuredIds: ["estetica", "ortodoncia"],
  items: [
    {
      id: "estetica",
      name: "Diseño y estética de sonrisa",
      brief: "Forma, color y armonia para una sonrisa que te devuelve confianza.",
      icon: "sparkles" as const,
      color: "teal" as const,
    },
    {
      id: "ortodoncia",
      name: "Ortodoncia y alineación dental",
      brief: "Alineamos tu sonrisa con un plan claro y resultados visibles.",
      icon: "scan-line" as const,
      color: "teal" as const,
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Oral",
      brief: "Devolvemos funcion y comodidad para sonreir sin limitaciones.",
      icon: "refresh-cw" as const,
      color: "pink" as const,
    },
    {
      id: "periodoncia",
      name: "Periodoncia e Implantología",
      brief: "Implantes y tratamiento de encias para recuperar estabilidad.",
      icon: "shield-check" as const,
      color: "pink" as const,
    },
    {
      id: "cirugia",
      name: "Cirugía Oral y Maxilofacial",
      brief: "Casos complejos resueltos con precision y explicaciones claras.",
      icon: "syringe" as const,
      color: "teal" as const,
    },
    {
      id: "endodoncia",
      name: "Endodoncia",
      brief: "Salvamos tu diente a tiempo con tratamiento preciso.",
      icon: "heart-pulse" as const,
      color: "pink" as const,
    },
    {
      id: "odontopediatria",
      name: "Odontopediatría",
      brief: "Sonrisas pequenas cuidadas con paciencia y carino.",
      icon: "baby" as const,
      color: "teal" as const,
    },
  ],
  cta: {
    label: "Hablar por WhatsApp ahora",
    href: whatsappHref,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Stats Section
// ─────────────────────────────────────────────────────────────────────────────

export const stats = {
  title: "Odontólogos de confianza en Lima",
  description:
    "No improvisamos tratamientos. Cada decisión se apoya en experiencia, atención clara y resultados visibles.",
  items: [
    {
      display: "4.9/5",
      label: "ESTRELLAS",
      attribute: "Respaldado por pacientes reales.",
      variant: "teal" as const,
    },
    {
      value: 5000,
      suffix: "+",
      label: "PACIENTES FELICES",
      attribute: "Confianza construida con atencion clara y resultados visibles.",
      variant: "purple" as const,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Social Proof — Redes Sociales
// ─────────────────────────────────────────────────────────────────────────────

export const socialProof = {
  title: "Evidencia real de tu transformación.",
  description:
    "La tranquilidad de elegir a los expertos. Mira cómo estamos cambiando la odontología en Lima a través de los ojos de nuestros pacientes.",
  channels: [
    {
      id: "tiktok",
      name: "TikTok",
      keyword: "PRECISIÓN",
      headline: "El proceso, sin secretos.",
      copy: "Mira cómo la tecnología elimina el miedo. Procedimientos rápidos y transparentes documentados en tiempo real.",
      cta: "Ver el detrás de escena",
      href: "https://www.tiktok.com/@odonto_smart",
      color: "teal" as const,
    },
    {
      id: "instagram",
      name: "Instagram",
      keyword: "ESTÉTICA",
      headline: "Diseños de alto impacto.",
      copy: "El arte de la transformación visual. Inspírate con las sonrisas que están redefiniendo el estatus de nuestros pacientes.",
      cta: "Explorar galería estética",
      href: "https://www.instagram.com/odonto_smart/",
      color: "purple" as const,
    },
    {
      id: "facebook",
      name: "Facebook",
      keyword: "CONFIANZA",
      headline: "Opiniones reales de pacientes.",
      copy: "Lee lo que dicen quienes ya confiaron en nosotros. Experiencias reales que respaldan cada tratamiento.",
      cta: "Ver opiniones en Facebook",
      href: "https://www.facebook.com/odonto.smart.3",
      color: "teal" as const,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Technology Section
// ─────────────────────────────────────────────────────────────────────────────

export const technology = {
  label: "EXCELENCIA",
  title: "Tecnologia que te da mas claridad",
  description: "La usamos para evaluar mejor, explicarte mejor y tratarte con mas precision desde el inicio.",
  cards: [
    {
      id: "scanner",
      title: "Scanner Intraoral",
      description:
        "Tecnología líder en escaneo digital 3D — precisión milimétrica para restauraciones y ortodoncia invisible.",
      image: "/images/odonto-smart/fotos-reales/tecnologia-escaneo-digital.jpg",
    },
    {
      id: "sede",
      title: "Sede Miraflores",
      description:
        "Nuestra sede principal diseñada para ofrecerte una experiencia premium en cada visita.",
      image: "/images/odonto-smart/fotos-reales/recepcion-clinica-principal.jpg",
    },
    {
      id: "dsd",
      title: "Diseño de Sonrisa",
      description:
        "Diseño de sonrisa digital personalizado — visualiza tu nueva sonrisa antes de comenzar.",
      image: "/images/odonto-smart/fotos-reales/atencion-paciente-personalizada.jpg",
    },
  ],
};

export const finalCta = {
  title: "Agenda tu cita dental en Lima hoy",
  cta: {
    label: "Habla con un especialista ahora",
    href: whatsappHref,
  },
  micro: "Te orientamos con calma y sin compromiso.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Team Section
// ─────────────────────────────────────────────────────────────────────────────

export const team = {
  label: "EXCELENCIA",
  title: "Nuestro Equipo de Especialistas",
  description:
    "Profesionales comprometidos con la excelencia en cada procedimiento.",
  members: [
    {
      id: "maria",
      name: "Dra. María López",
      role: "Directora Clínica",
      bio: "15 años liderando equipos de alto rendimiento en odontología integral.",
      image: "/images/odonto-smart/fotos-reales/especialista-sonriente-clinica.jpg",
    },
    {
      id: "carlos",
      name: "Dr. Carlos Ramírez",
      role: "Implantología",
      bio: "Especialista en implantes de carga inmediata y regeneración ósea.",
      image: "/images/odonto-smart/fotos-reales/especialista-odontologia-estetica.jpg",
    },
    {
      id: "ana",
      name: "Dra. Ana Torres",
      role: "Ortodoncia",
      bio: "Experta en ortodoncia invisible y técnicas de alineación avanzada.",
      image: "/images/odonto-smart/fotos-reales/equipo-especialistas-accion.jpg",
    },
    {
      id: "pedro",
      name: "Dr. Pedro Gutiérrez",
      role: "Estética Dental",
      bio: "Pionero en diseño de sonrisa digital y carillas de última generación.",
      image: "/images/odonto-smart/fotos-reales/equipo-administrativo-atencion.jpg",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Reviews Section (Prueba Social)
// ─────────────────────────────────────────────────────────────────────────────

export const reviews = {
  label: "CONFIANZA",
  title: "Lo Que Dicen Nuestros Pacientes",
  description: "Experiencias reales de quienes confían en nosotros.",
  testimonials: [
    {
      id: "exp-1",
      quote:
        "Tenía mucho miedo de ir al dentista, pero desde la primera consulta me sentí en confianza. El trato del equipo es excepcional y muy humano.",
      highlight: "Excelente trato desde el primer momento",
      initial: "M",
    },
    {
      id: "exp-2",
      quote:
        "Me realizaron una endodoncia y no sentí absolutamente nada. La tecnología que usan hace toda la diferencia. Recomendado al 100%.",
      highlight: "Procedimiento sin dolor",
      initial: "J",
    },
    {
      id: "exp-3",
      quote:
        "El diseño de sonrisa digital me permitió ver el resultado antes de empezar. Quedé impresionada con la precisión y el resultado final.",
      highlight: "Tecnología de vanguardia",
      initial: "C",
    },
  ] as Testimonial[],
  cta: {
    label: "Ver más reseñas en Google",
    href: "https://www.google.com/search?q=odonto+smart#lrd=0x9105c9a79909517d:0x83b58704d34befe2,1,,,,",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────

const footerLocations: Location[] = [
  {
    name: "Lince",
    address: "Av. Arequipa 1860",
    href: getGoogleMapsUrl("Av. Arequipa 1860, Lince"),
  },
  {
    name: "Magdalena",
    address: "Calle De La Roca de Vergallo 493",
    href: getGoogleMapsUrl("Calle De La Roca de Vergallo 493, Magdalena"),
  },
  {
    name: "Jesús María",
    address: "Jr. Mariscal Luzuriaga 363",
    href: getGoogleMapsUrl("Jr. Mariscal Luzuriaga 363, Jesús María"),
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sedes — Landing quick-decision section
// ─────────────────────────────────────────────────────────────────────────────

export const sedesSection = {
  title: "Sedes dentales en Lince, Magdalena y Jesús María",
  description: "3 ubicaciones estratégicas en Lima para atenderte más cerca.",
  items: [
    {
      id: "lince",
      name: "Sede Lince",
      address: "Av. Arequipa 1860, Lince",
      phone: "(01) 678-2893",
      hours: "Lun–Vie 9am–8pm · Sab 9am–2pm",
      benefit: "Atencion rapida y ubicacion central.",
      mapHref: getGoogleMapsUrl("Av. Arequipa 1860, Lince"),
      whatsappHref: "https://wa.me/51980221985?text=Hola%2C%20quiero%20agendar%20en%20sede%20Lince",
      isRecommended: true,
    },
    {
      id: "magdalena",
      name: "Sede Magdalena",
      address: "Calle De La Roca de Vergallo 493, Magdalena",
      phone: "(01) 678-2893",
      hours: "Lun–Sab 9am–8pm",
      benefit: "Ideal si vienes de la costa verde.",
      mapHref: getGoogleMapsUrl("Calle De La Roca de Vergallo 493, Magdalena del Mar"),
      whatsappHref: "https://wa.me/51980221985?text=Hola%2C%20quiero%20agendar%20en%20sede%20Magdalena",
      isRecommended: false,
    },
    {
      id: "jesus-maria",
      name: "Sede Jesus Maria",
      address: "Jr. Mariscal Luzuriaga 363, Jesus Maria",
      phone: "(01) 678-2893",
      hours: "Lun–Sab 9am–8pm · Dom 9am–12pm",
      benefit: "Acceso facil desde avenidas principales.",
      mapHref: getGoogleMapsUrl("Jr. Mariscal Luzuriaga 363, Jesús María"),
      whatsappHref: "https://wa.me/51980221985?text=Hola%2C%20quiero%20agendar%20en%20sede%20Jesus%20Maria",
      isRecommended: false,
    },
  ],
};

export const footer = {
  brand: {
    name: "ODONTO SMART",
    description:
      "La inteligencia dental de tu mejor sonrisa. Innovación, tecnología y excelencia en cada procedimiento.",
  },
  services: {
    title: "Servicios",
    items: [
      "Implantes Dentales",
      "Ortodoncia Invisible",
      "Diseño de Sonrisa",
      "Blanqueamiento",
      "Endodoncia",
    ],
  },
  locations: {
    title: "Nuestras Sedes",
    items: footerLocations,
  },
  contact: {
    title: "Contacto",
    phone: "(01) 678-2893",
    mobile: "+51 980 221 985",
    whatsapp: "+51980221985",
    email: "info@odontosmart.pe",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/odonto.smart.3" },
    { label: "Instagram", href: "https://www.instagram.com/odonto_smart/" },
    { label: "WhatsApp", href: whatsappHref },
  ],
  copyright: "© 2026 Odonto Smart. Todos los derechos reservados.",
};
