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
  "https://wa.me/51987654321?text=Hola%2C%20quiero%20agendar%20por%20WhatsApp%20en%20Odonto%20Smart";

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
};

export const navigation = {
  links: [
    { label: "Inicio", href: "/" },
    { label: "Especialidades", href: "/tratamientos" },
    { label: "Sedes", href: "/sedes" },
    { label: "Nosotros", href: "/nosotros" },
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
  eyebrow: "Odontologia premium en Lima",
  title: {
    line1: "Transforma tu sonrisa",
    line2: "con precision estetica premium",
  },
  description:
    "Diagnostico digital, especialistas y resultados visibles desde la primera visita.",
  buttons: {
    primary: {
      label: "Agendar por WhatsApp",
      href: whatsappHref,
    },
  },
  ctaNote: "Respuesta rapida en minutos",
  image: "/images/odonto-smart/tech-3.jpg",
  imageAlt: "Tecnologia dental y sonrisa estetica en Odonto Smart",
};

// ─────────────────────────────────────────────────────────────────────────────
// Treatments / Especialidades (7)
// ─────────────────────────────────────────────────────────────────────────────

export const treatments = {
  label: "ESPECIALIDADES",
  title: "Tratamientos que elevan tu sonrisa",
  featuredIds: ["estetica", "ortodoncia", "periodoncia"],
  items: [
    {
      id: "ortodoncia",
      name: "Ortodoncia y Ortopedia Maxilar",
      brief: "Alineamos tu sonrisa con técnicas invisibles y modernas.",
      icon: "scan-line" as const,
      color: "teal" as const,
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Oral",
      brief: "Devolvemos función y estética a tu boca completa.",
      icon: "refresh-cw" as const,
      color: "pink" as const,
    },
    {
      id: "estetica",
      name: "Odontología Estética y Restauradora",
      brief: "Diseño de sonrisa, carillas y blanqueamiento premium.",
      icon: "sparkles" as const,
      color: "teal" as const,
    },
    {
      id: "periodoncia",
      name: "Periodoncia e Implantología",
      brief: "Implantes de titanio y cuidado avanzado de encías.",
      icon: "shield-check" as const,
      color: "pink" as const,
    },
    {
      id: "cirugia",
      name: "Cirugía Oral y Maxilofacial",
      brief: "Procedimientos quirúrgicos con precisión y seguridad.",
      icon: "syringe" as const,
      color: "teal" as const,
    },
    {
      id: "endodoncia",
      name: "Endodoncia",
      brief: "Salvamos tu diente natural con tratamientos de conducto.",
      icon: "heart-pulse" as const,
      color: "pink" as const,
    },
    {
      id: "odontopediatria",
      name: "Odontopediatría",
      brief: "Cuidado dental especializado para los más pequeños.",
      icon: "baby" as const,
      color: "teal" as const,
    },
  ],
  cta: {
    label: "Agendar por WhatsApp",
    href: whatsappHref,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Stats Section
// ─────────────────────────────────────────────────────────────────────────────

export const stats = {
  title: "Confianza premium respaldada por experiencia real",
  items: [
    {
      value: 20,
      prefix: "+",
      label: "AÑOS DE EXCELENCIA",
      attribute: "Especialistas con criterio clinico",
      variant: "teal" as const,
    },
    {
      value: 5000,
      suffix: "+",
      label: "PACIENTES FELICES",
      attribute: "3 sedes y atencion personalizada",
      variant: "purple" as const,
    },
    {
      value: 1000,
      suffix: "+",
      label: "CASOS DE ÉXITO",
      attribute: "Diagnostico digital y tecnologia precisa",
      variant: "teal" as const,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Technology Section
// ─────────────────────────────────────────────────────────────────────────────

export const technology = {
  label: "EXCELENCIA",
  title: "Tecnología y Vanguardia",
  cards: [
    {
      id: "scanner",
      title: "Scanner Intraoral",
      description:
        "Tecnología líder en escaneo digital 3D — precisión milimétrica para restauraciones y ortodoncia invisible.",
      image: "/images/odonto-smart/tech-1.jpg",
    },
    {
      id: "sede",
      title: "Sede Miraflores",
      description:
        "Nuestra sede principal diseñada para ofrecerte una experiencia premium en cada visita.",
      image: "/images/odonto-smart/tech-2.jpg",
    },
    {
      id: "dsd",
      title: "Diseño de Sonrisa",
      description:
        "Diseño de sonrisa digital personalizado — visualiza tu nueva sonrisa antes de comenzar.",
      image: "/images/odonto-smart/tech-3.jpg",
    },
  ],
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
      image: "/images/odonto-smart/team-1.jpg",
    },
    {
      id: "carlos",
      name: "Dr. Carlos Ramírez",
      role: "Implantología",
      bio: "Especialista en implantes de carga inmediata y regeneración ósea.",
      image: "/images/odonto-smart/team-2.jpg",
    },
    {
      id: "ana",
      name: "Dra. Ana Torres",
      role: "Ortodoncia",
      bio: "Experta en ortodoncia invisible y técnicas de alineación avanzada.",
      image: "/images/odonto-smart/team-3.jpg",
    },
    {
      id: "pedro",
      name: "Dr. Pedro Gutiérrez",
      role: "Estética Dental",
      bio: "Pionero en diseño de sonrisa digital y carillas de última generación.",
      image: "/images/odonto-smart/team-4.jpg",
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
    phone: "(01) 234-5678",
    mobile: "+51 987 654 321",
    whatsapp: "+51987654321",
    email: "info@odontosmart.pe",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/odonto.smart.3" },
    { label: "Instagram", href: "https://www.instagram.com/odonto_smart/" },
    { label: "WhatsApp", href: whatsappHref },
  ],
  copyright: "© 2026 Odonto Smart. Todos los derechos reservados.",
};
