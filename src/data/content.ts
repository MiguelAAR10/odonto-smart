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

// ─────────────────────────────────────────────────────────────────────────────
// Site Configuration
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Odonto Smart",
  logo: {
    text: "ODONTO",
    accent: "SMART",
  },
  tagline: "La inteligencia dental de tu mejor sonrisa",
};

export const navigation = {
  links: [
    { label: "Inicio", href: "/" },
    { label: "Especialidades", href: "/tratamientos" },
    { label: "Sedes", href: "/sedes" },
    { label: "Nosotros", href: "/nosotros" },
  ],
  cta: {
    label: "Reservar Cita",
    href: "/sedes#contacto",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  title: {
    line1: "La Inteligencia Dental de",
    line2: "Tu Mejor Sonrisa",
  },
  description:
    "Calidad y experiencia boutique para transformar tu sonrisa con la mejor tecnología de vanguardia y un equipo de especialistas de primer nivel.",
  buttons: {
    primary: {
      label: "Saber Más",
      href: "#conocenos",
    },
    secondary: {
      label: "Ver Servicios",
      href: "#especialidades",
    },
  },
  image: "/images/odonto-smart/hero-bg.png",
};

// ─────────────────────────────────────────────────────────────────────────────
// Stats Section
// ─────────────────────────────────────────────────────────────────────────────

export const stats = {
  title: "Nuestra Experiencia Nos Define",
  items: [
    {
      value: 20,
      prefix: "+",
      label: "AÑOS DE EXCELENCIA",
      variant: "teal" as const,
    },
    {
      value: 5000,
      suffix: "+",
      label: "PACIENTES FELICES",
      variant: "purple" as const,
    },
    {
      value: 1000,
      suffix: "+",
      label: "CASOS DE ÉXITO",
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
      image: "/images/odonto-smart/tech-1.png",
    },
    {
      id: "sede",
      title: "Sede Miraflores",
      description:
        "Nuestra sede principal diseñada para ofrecerte una experiencia premium en cada visita.",
      image: "/images/odonto-smart/tech-2.png",
    },
    {
      id: "dsd",
      title: "Diseño de Sonrisa",
      description:
        "Diseño de sonrisa digital personalizado — visualiza tu nueva sonrisa antes de comenzar.",
      image: "/images/odonto-smart/tech-3.png",
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
      image: "/images/odonto-smart/team-1.png",
    },
    {
      id: "carlos",
      name: "Dr. Carlos Ramírez",
      role: "Implantología",
      bio: "Especialista en implantes de carga inmediata y regeneración ósea.",
      image: "/images/odonto-smart/team-2.png",
    },
    {
      id: "ana",
      name: "Dra. Ana Torres",
      role: "Ortodoncia",
      bio: "Experta en ortodoncia invisible y técnicas de alineación avanzada.",
      image: "/images/odonto-smart/team-3.png",
    },
    {
      id: "pedro",
      name: "Dr. Pedro Gutiérrez",
      role: "Estética Dental",
      bio: "Pionero en diseño de sonrisa digital y carillas de última generación.",
      image: "/images/odonto-smart/team-4.png",
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
    { label: "WhatsApp", href: "https://wa.me/51987654321?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita" },
  ],
  copyright: "© 2026 Odonto Smart. Todos los derechos reservados.",
};
