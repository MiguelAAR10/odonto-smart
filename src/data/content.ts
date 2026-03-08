// ═══════════════════════════════════════════════════════════════════════════════
// ODONTO SMART V1 — Stitch Final | Content Data
// All text content centralized here. No hardcoded strings in components.
// ═══════════════════════════════════════════════════════════════════════════════

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
    { label: "Inicio", href: "#" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Sedes", href: "#sedes" },
    { label: "Contacto", href: "#contacto" },
  ],
  cta: {
    label: "Reservar Cita",
    href: "#reservar",
  },
};

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
      href: "#servicios",
    },
  },
  image: "/images/odonto-smart/hero-bg.png",
};

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
      image: "/images/odonto-smart/team-1.png",
    },
    {
      id: "carlos",
      name: "Dr. Carlos Ramírez",
      role: "Implantología",
      image: "/images/odonto-smart/team-2.png",
    },
    {
      id: "ana",
      name: "Dra. Ana Torres",
      role: "Ortodoncia",
      image: "/images/odonto-smart/team-3.png",
    },
    {
      id: "pedro",
      name: "Dr. Pedro Gutiérrez",
      role: "Estética Dental",
      image: "/images/odonto-smart/team-4.png",
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
    items: [
      {
        name: "Miraflores",
        address: "Av. José Larco 812",
      },
      {
        name: "San Isidro",
        address: "Av. Conquistadores 1024",
      },
    ],
  },
  contact: {
    title: "Contacto",
    phone: "(01) 234-5678",
    mobile: "+51 987 654 321",
    email: "info@odontosmart.pe",
  },
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  copyright: "© 2026 Odonto Smart. Todos los derechos reservados.",
};
