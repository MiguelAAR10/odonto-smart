// ═══════════════════════════════════════════════════════════════════════════════
// ODONTO SMART — Extended Pages Content
// Data for Staff, Treatments, Locations, and About Us pages
// ═══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// Interfaces
// ─────────────────────────────────────────────────────────────────────────────

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  workingImage: string;
  education: string[];
  certifications: string[];
  experience: string;
  specialties: string[];
  quote: string;
}

export interface Treatment {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  processImage: string;
  duration: string;
  sessions: string;
  technology: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ClinicLocation {
  id: string;
  name: string;
  district: string;
  address: string;
  fullAddress: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  mapEmbedUrl: string;
  images: string[];
  features: string[];
  isMain: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// Staff / Equipo — Full Profiles
// ─────────────────────────────────────────────────────────────────────────────

export const staffPage = {
  hero: {
    label: "NUESTRO EQUIPO",
    title: "Especialistas Comprometidos con Tu Sonrisa",
    description:
      "Conoce al equipo de profesionales que hacen posible transformar sonrisas todos los días. Más de 50 años de experiencia combinada al servicio de tu salud dental.",
  },
  members: [
    {
      id: "maria-lopez",
      name: "Dra. María López Castañeda",
      role: "Directora Clínica",
      specialty: "Odontología Integral",
      image: "/images/odonto-smart/fotos-reales/especialista-sonriente-clinica.jpg",
      workingImage: "/images/odonto-smart/team-1-working.jpg",
      education: [
        "Doctorado en Odontología — Universidad Peruana Cayetano Heredia",
        "Maestría en Gestión de Servicios de Salud — ESAN",
        "Especialización en Rehabilitación Oral — Universidad de São Paulo",
      ],
      certifications: [
        "Certificación Internacional en Implantología — ITI",
        "Diplomado en Odontología Estética — NYU",
        "Fellow del International Congress of Oral Implantologists",
      ],
      experience: "15 años",
      specialties: [
        "Rehabilitación oral completa",
        "Gestión clínica",
        "Odontología estética",
        "Implantes dentales",
      ],
      quote:
        "Mi pasión es devolver la confianza a mis pacientes a través de una sonrisa saludable y hermosa.",
    },
    {
      id: "carlos-ramirez",
      name: "Dr. Carlos Ramírez Mendoza",
      role: "Jefe de Implantología",
      specialty: "Implantología Oral",
      image: "/images/odonto-smart/fotos-reales/especialista-odontologia-estetica.jpg",
      workingImage: "/images/odonto-smart/team-2-working.jpg",
      education: [
        "Cirujano Dentista — Universidad Nacional Mayor de San Marcos",
        "Especialidad en Implantología Oral — Universidad de Barcelona",
        "Fellowship en Cirugía Maxilofacial — Cleveland Clinic",
      ],
      certifications: [
        "Board Certified en Implantología — AO",
        "Certificación Straumann Pro Arch",
        "Diplomado en Regeneración Ósea Guiada",
      ],
      experience: "12 años",
      specialties: [
        "Implantes de carga inmediata",
        "Regeneración ósea",
        "All-on-4 / All-on-6",
        "Cirugía guiada por computadora",
      ],
      quote:
        "Cada implante que coloco es una oportunidad de cambiar la vida de alguien para siempre.",
    },
    {
      id: "ana-torres",
      name: "Dra. Ana Torres Villanueva",
      role: "Jefa de Ortodoncia",
      specialty: "Ortodoncia y Ortopedia Maxilar",
      image: "/images/odonto-smart/fotos-reales/equipo-especialistas-accion.jpg",
      workingImage: "/images/odonto-smart/team-3-working.jpg",
      education: [
        "Cirujano Dentista — Pontificia Universidad Católica del Perú",
        "Especialidad en Ortodoncia — Universidad de Chile",
        "Certificación Invisalign Diamond Provider",
      ],
      certifications: [
        "Invisalign Diamond Provider",
        "Certificación en Ortodoncia Lingual",
        "Diplomado en Ortopedia Funcional de los Maxilares",
      ],
      experience: "10 años",
      specialties: [
        "Ortodoncia invisible",
        "Brackets autoligables",
        "Ortodoncia lingual",
        "Tratamiento de mordidas complejas",
      ],
      quote:
        "Una sonrisa alineada no solo es estética, es salud y bienestar integral.",
    },
    {
      id: "pedro-gutierrez",
      name: "Dr. Pedro Gutiérrez Salazar",
      role: "Jefe de Estética Dental",
      specialty: "Odontología Estética",
      image: "/images/odonto-smart/fotos-reales/equipo-administrativo-atencion.jpg",
      workingImage: "/images/odonto-smart/team-4-working.jpg",
      education: [
        "Cirujano Dentista — Universidad de Lima",
        "Maestría en Estética Dental — University of Southern California",
        "Certificación en Digital Smile Design — DSD Residency",
      ],
      certifications: [
        "DSD Master Certified",
        "Certificación en Carillas de Porcelana — Spear Education",
        "Diplomado en Fotografía Dental",
      ],
      experience: "8 años",
      specialties: [
        "Diseño de sonrisa digital",
        "Carillas de porcelana",
        "Blanqueamiento profesional",
        "Restauraciones estéticas",
      ],
      quote:
        "El diseño de sonrisa es un arte que combina ciencia, tecnología y sensibilidad estética.",
    },
  ] as StaffMember[],
};

// ─────────────────────────────────────────────────────────────────────────────
// Treatments / Tratamientos
// ─────────────────────────────────────────────────────────────────────────────

export const treatmentsPage = {
  hero: {
    label: "TRATAMIENTOS",
    title: "Soluciones Dentales de Vanguardia",
    description:
      "Ofrecemos una gama completa de tratamientos con la última tecnología para garantizar resultados excepcionales y una experiencia sin dolor.",
  },
  categories: [
    {
      id: "implantes",
      name: "Implantes Dentales",
      icon: "implant",
    },
    {
      id: "ortodoncia",
      name: "Ortodoncia",
      icon: "braces",
    },
    {
      id: "estetica",
      name: "Estética Dental",
      icon: "smile",
    },
    {
      id: "general",
      name: "Odontología General",
      icon: "tooth",
    },
  ],
  treatments: [
    {
      id: "implantes-dentales",
      slug: "implantes-dentales",
      name: "Implantes Dentales",
      shortDescription:
        "Recupera tu sonrisa con implantes de titanio de última generación.",
      fullDescription:
        "Los implantes dentales son la solución más avanzada y duradera para reemplazar dientes perdidos. Utilizamos implantes de titanio grado médico que se integran naturalmente con el hueso, proporcionando una base sólida y permanente para coronas, puentes o prótesis.",
      icon: "implant",
      image: "/images/odonto-smart/treatment-implants.jpg",
      processImage: "/images/odonto-smart/treatment-implants-process.jpg",
      duration: "3-6 meses",
      sessions: "2-4 citas",
      technology: [
        "Tomografía Cone Beam 3D",
        "Cirugía guiada por computadora",
        "Implantes Straumann",
        "Prótesis CAD/CAM",
      ],
      benefits: [
        "Recuperación de la función masticatoria al 100%",
        "Aspecto natural indistinguible",
        "Preservación del hueso maxilar",
        "Durabilidad de por vida con cuidado adecuado",
        "Sin afectar dientes adyacentes",
      ],
      process: [
        {
          step: 1,
          title: "Evaluación Inicial",
          description:
            "Tomografía 3D, análisis de hueso y planificación digital del tratamiento.",
        },
        {
          step: 2,
          title: "Cirugía de Colocación",
          description:
            "Inserción del implante de titanio con anestesia local. Procedimiento mínimamente invasivo.",
        },
        {
          step: 3,
          title: "Osteointegración",
          description:
            "Período de 3-6 meses donde el implante se fusiona con el hueso naturalmente.",
        },
        {
          step: 4,
          title: "Corona Final",
          description:
            "Colocación de la corona de porcelana personalizada. Diseñada digitalmente para un ajuste perfecto.",
        },
      ],
      faqs: [
        {
          question: "¿Es doloroso el procedimiento?",
          answer:
            "No. Utilizamos anestesia local y técnicas mínimamente invasivas. La mayoría de pacientes reportan menos molestias que una extracción dental simple.",
        },
        {
          question: "¿Cuánto duran los implantes?",
          answer:
            "Con el cuidado adecuado, los implantes pueden durar toda la vida. La tasa de éxito supera el 98% a 10 años.",
        },
        {
          question: "¿Puedo comer normalmente?",
          answer:
            "Sí. Una vez completado el tratamiento, podrás comer todo tipo de alimentos sin restricciones.",
        },
      ],
    },
    {
      id: "ortodoncia-invisible",
      slug: "ortodoncia-invisible",
      name: "Ortodoncia Invisible",
      shortDescription:
        "Alinea tu sonrisa de forma discreta con alineadores transparentes.",
      fullDescription:
        "La ortodoncia invisible utiliza alineadores transparentes removibles fabricados a medida para mover tus dientes gradualmente. Es la opción perfecta para adultos y adolescentes que desean corregir su sonrisa sin brackets metálicos visibles.",
      icon: "braces",
      image: "/images/odonto-smart/treatment-invisalign.jpg",
      processImage: "/images/odonto-smart/treatment-invisalign-process.jpg",
      duration: "6-18 meses",
      sessions: "Revisiones cada 6-8 semanas",
      technology: [
        "Scanner intraoral iTero",
        "Planificación ClinCheck 3D",
        "Alineadores Invisalign",
        "Simulación de resultados",
      ],
      benefits: [
        "Prácticamente invisibles",
        "Removibles para comer y cepillarse",
        "Más cómodos que brackets tradicionales",
        "Menos visitas al consultorio",
        "Resultados predecibles con simulación 3D",
      ],
      process: [
        {
          step: 1,
          title: "Escaneo Digital",
          description:
            "Escaneamos tu boca con tecnología iTero para crear un modelo 3D preciso.",
        },
        {
          step: 2,
          title: "Plan de Tratamiento",
          description:
            "Diseñamos tu plan personalizado y te mostramos el resultado final antes de empezar.",
        },
        {
          step: 3,
          title: "Alineadores",
          description:
            "Recibes tu set de alineadores. Cambias a uno nuevo cada 1-2 semanas.",
        },
        {
          step: 4,
          title: "Refinamiento",
          description:
            "Ajustes finales para perfeccionar tu sonrisa. Retenedores para mantener resultados.",
        },
      ],
      faqs: [
        {
          question: "¿Se notan los alineadores?",
          answer:
            "Son prácticamente invisibles. La mayoría de personas no notará que los llevas puestos.",
        },
        {
          question: "¿Cuántas horas debo usarlos?",
          answer:
            "Se recomienda usarlos 22 horas al día, quitándolos solo para comer y cepillarse.",
        },
        {
          question: "¿Puedo comer de todo?",
          answer:
            "Sí. A diferencia de los brackets, puedes quitarte los alineadores para comer sin restricciones.",
        },
      ],
    },
    {
      id: "diseno-sonrisa",
      slug: "diseno-de-sonrisa",
      name: "Diseño de Sonrisa Digital",
      shortDescription:
        "Visualiza tu nueva sonrisa antes de comenzar el tratamiento.",
      fullDescription:
        "El Diseño de Sonrisa Digital (DSD) es una técnica revolucionaria que nos permite planificar y visualizar el resultado final de tu tratamiento estético antes de comenzar. Combinamos fotografía especializada, software de diseño y experiencia clínica para crear la sonrisa perfecta para ti.",
      icon: "smile",
      image: "/images/odonto-smart/treatment-dsd.jpg",
      processImage: "/images/odonto-smart/treatment-dsd-process.jpg",
      duration: "2-4 semanas",
      sessions: "3-5 citas",
      technology: [
        "Fotografía dental especializada",
        "Software DSD (Digital Smile Design)",
        "Mockup digital y físico",
        "Carillas de porcelana E.max",
      ],
      benefits: [
        "Visualización previa del resultado",
        "Diseño personalizado a tu rostro",
        "Resultados naturales y armónicos",
        "Proceso predecible",
        "Mínimo desgaste dental",
      ],
      process: [
        {
          step: 1,
          title: "Análisis Facial",
          description:
            "Sesión fotográfica y de video para analizar proporciones faciales y sonrisa actual.",
        },
        {
          step: 2,
          title: "Diseño Digital",
          description:
            "Creamos tu nueva sonrisa digitalmente, considerando forma de rostro, labios y personalidad.",
        },
        {
          step: 3,
          title: "Prueba en Boca",
          description:
            "Mock-up provisional para que veas y sientas tu nueva sonrisa antes del trabajo final.",
        },
        {
          step: 4,
          title: "Carillas Definitivas",
          description:
            "Fabricación y cementación de carillas de porcelana de alta estética.",
        },
      ],
      faqs: [
        {
          question: "¿Las carillas dañan mis dientes?",
          answer:
            "Las carillas modernas requieren mínimo desgaste dental (0.3-0.5mm). Preservamos la mayor cantidad de estructura dental posible.",
        },
        {
          question: "¿Cuánto duran las carillas?",
          answer:
            "Con cuidado adecuado, las carillas de porcelana pueden durar 15-20 años o más.",
        },
        {
          question: "¿Puedo ver cómo quedaré antes?",
          answer:
            "Sí. Esa es la principal ventaja del DSD. Verás tu resultado antes de empezar y podrás solicitar ajustes.",
        },
      ],
    },
    {
      id: "blanqueamiento",
      slug: "blanqueamiento-dental",
      name: "Blanqueamiento Dental",
      shortDescription:
        "Recupera el blanco natural de tus dientes de forma segura.",
      fullDescription:
        "Nuestro blanqueamiento dental profesional utiliza tecnología LED y geles de peróxido de alta concentración para aclarar tus dientes hasta 8 tonos en una sola sesión. Seguro, efectivo y con resultados inmediatos.",
      icon: "sparkle",
      image: "/images/odonto-smart/treatment-whitening.jpg",
      processImage: "/images/odonto-smart/treatment-whitening-process.jpg",
      duration: "1-2 horas",
      sessions: "1-2 sesiones",
      technology: [
        "Lámpara LED de alta potencia",
        "Gel de peróxido profesional",
        "Protección gingival",
        "Kit de mantenimiento en casa",
      ],
      benefits: [
        "Resultados inmediatos",
        "Hasta 8 tonos más blanco",
        "Procedimiento seguro",
        "Sin sensibilidad",
        "Duración de 1-2 años",
      ],
      process: [
        {
          step: 1,
          title: "Evaluación",
          description:
            "Determinamos el color actual y el resultado esperado. Limpieza previa si es necesario.",
        },
        {
          step: 2,
          title: "Protección",
          description:
            "Aislamos las encías para protegerlas del gel blanqueador.",
        },
        {
          step: 3,
          title: "Aplicación",
          description:
            "Aplicamos el gel y activamos con luz LED. 3-4 ciclos de 15 minutos.",
        },
        {
          step: 4,
          title: "Resultado",
          description:
            "Comparamos el antes y después. Entregamos kit de mantenimiento en casa.",
        },
      ],
      faqs: [
        {
          question: "¿Causa sensibilidad?",
          answer:
            "Puede haber sensibilidad leve por 24-48 horas. Usamos geles con desensibilizante para minimizarla.",
        },
        {
          question: "¿El resultado es permanente?",
          answer:
            "Dura 1-2 años dependiendo de hábitos. Evitar café, vino y tabaco prolonga el resultado.",
        },
        {
          question: "¿Es seguro para el esmalte?",
          answer:
            "Sí. El blanqueamiento profesional supervisado no daña el esmalte dental.",
        },
      ],
    },
  ] as Treatment[],
};

// ─────────────────────────────────────────────────────────────────────────────
// Locations / Sedes
// ─────────────────────────────────────────────────────────────────────────────

export const locationsPage = {
  hero: {
    label: "NUESTRAS SEDES",
    title: "Ubicaciones Diseñadas para Tu Comodidad",
    description:
      "Tres sedes estratégicamente ubicadas en Lima, equipadas con la última tecnología y diseñadas para ofrecerte una experiencia premium.",
  },
  findNearest: {
    title: "Encuentra la Sede Más Cercana",
    description: "Activa tu ubicación para descubrir cuál sede está más cerca de ti.",
    buttonText: "Activar Ubicación",
    calculating: "Calculando...",
    nearestText: "La sede más cercana es",
  },
  locations: [
    {
      id: "lince",
      name: "Sede Lince",
      district: "Lince",
      address: "Av. Arequipa 1860",
      fullAddress: "Av. Arequipa 1860, Lince, Lima 15046, Perú",
      phone: "(01) 678-2893",
      whatsapp: "+51980221985",
      email: "lince@odontosmart.pe",
      hours: {
        weekdays: "9:00 AM - 8:00 PM",
        saturday: "9:00 AM - 2:00 PM",
        sunday: "Cerrado",
      },
      coordinates: {
        lat: -12.0847,
        lng: -77.0353,
      },
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-77.0353!3d-12.0847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzA0LjkiUyA3N8KwMDInMDcuMSJX!5e0!3m2!1sen!2spe!4v1234567890",
      images: [
        "/images/odonto-smart/sede-lince-1.jpg",
        "/images/odonto-smart/sede-lince-2.jpg",
        "/images/odonto-smart/sede-lince-3.jpg",
      ],
      features: [
        "Estacionamiento gratuito",
        "Acceso para discapacitados",
        "Sala de espera premium",
        "WiFi gratuito",
        "Café y snacks",
      ],
      isMain: true,
    },
    {
      id: "magdalena",
      name: "Sede Magdalena",
      district: "Magdalena del Mar",
      address: "Calle De La Roca de Vergallo 493",
      fullAddress: "Calle De La Roca de Vergallo 493, Magdalena del Mar, Lima, Perú",
      phone: "(01) 678-2893",
      whatsapp: "+51980221985",
      email: "magdalena@odontosmart.pe",
      hours: {
        weekdays: "9:00 AM - 8:00 PM",
        saturday: "9:00 AM - 8:00 PM",
        sunday: "Cerrado",
      },
      coordinates: {
        lat: -12.0918,
        lng: -77.0728,
      },
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-77.0728!3d-12.0918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzMwLjUiUyA3N8KwMDQnMjIuMSJX!5e0!3m2!1sen!2spe!4v1234567890",
      images: [
        "/images/odonto-smart/sede-magdalena-1.jpg",
        "/images/odonto-smart/sede-magdalena-2.jpg",
        "/images/odonto-smart/sede-magdalena-3.jpg",
      ],
      features: [
        "Cerca al metro",
        "Ambiente familiar",
        "Área de juegos para niños",
        "WiFi gratuito",
      ],
      isMain: false,
    },
    {
      id: "jesus-maria",
      name: "Sede Jesús María",
      district: "Jesús María",
      address: "Jr. Mariscal Luzuriaga 363",
      fullAddress: "Jr. Mariscal Luzuriaga 363, Jesús María, Lima, Perú",
      phone: "(01) 678-2893",
      whatsapp: "+51980221985",
      email: "jesusmaria@odontosmart.pe",
      hours: {
        weekdays: "9:00 AM - 8:00 PM",
        saturday: "9:00 AM - 8:00 PM",
        sunday: "9:00 AM - 12:00 PM",
      },
      coordinates: {
        lat: -12.0722,
        lng: -77.0489,
      },
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-77.0489!3d-12.0722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA0JzIwLjAiUyA3N8KwMDInNTYuMCJX!5e0!3m2!1sen!2spe!4v1234567890",
      images: [
        "/images/odonto-smart/sede-jesusmaria-1.jpg",
        "/images/odonto-smart/sede-jesusmaria-2.jpg",
        "/images/odonto-smart/sede-jesusmaria-3.jpg",
      ],
      features: [
        "Estacionamiento cercano",
        "Tecnología de última generación",
        "Especialistas disponibles",
        "WiFi gratuito",
        "Cafetería",
      ],
      isMain: false,
    },
  ] as ClinicLocation[],
};

// ─────────────────────────────────────────────────────────────────────────────
// About Us / Nosotros
// ─────────────────────────────────────────────────────────────────────────────

export const aboutPage = {
  hero: {
    label: "QUIÉNES SOMOS",
    title: "Transformando Sonrisas desde 2006",
    description:
      "Somos una clínica dental boutique comprometida con brindar la mejor calidad al mejor precio posible, con los mejores especialistas de Lima.",
  },
  mission: {
    title: "Nuestra Misión",
    description:
      "Democratizar el acceso a la odontología de alta calidad, combinando tecnología de vanguardia con un trato humano excepcional, para que cada paciente salga de nuestras clínicas con una sonrisa que cambie su vida.",
  },
  vision: {
    title: "Nuestra Visión",
    description:
      "Ser reconocidos como la clínica dental referente en Latinoamérica por nuestra excelencia clínica, innovación tecnológica y compromiso genuino con el bienestar de nuestros pacientes.",
  },
  values: [
    {
      title: "Excelencia",
      description: "Buscamos la perfección en cada procedimiento y cada interacción.",
      icon: "star",
    },
    {
      title: "Innovación",
      description: "Invertimos constantemente en la última tecnología dental.",
      icon: "lightbulb",
    },
    {
      title: "Calidez",
      description: "Tratamos a cada paciente como nos gustaría ser tratados.",
      icon: "heart",
    },
    {
      title: "Integridad",
      description: "Honestidad y transparencia en cada diagnóstico y presupuesto.",
      icon: "shield",
    },
  ],
  stats: {
    title: "Números que Hablan",
    items: [
      { value: 18, suffix: "+", label: "Años de Experiencia" },
      { value: 5000, suffix: "+", label: "Pacientes Felices" },
      { value: 15000, suffix: "+", label: "Procedimientos Exitosos" },
      { value: 98, suffix: "%", label: "Satisfacción" },
    ],
  },
  whyUs: {
    title: "¿Por Qué Elegirnos?",
    reasons: [
      {
        title: "Los Mejores Especialistas",
        description:
          "Nuestro equipo está conformado por los mejores especialistas certificados, con formación en las mejores universidades del mundo.",
      },
      {
        title: "Tecnología de Vanguardia",
        description:
          "Invertimos en la última tecnología: scanners 3D, rayos X digitales, CAD/CAM, y más para garantizar precisión y comodidad.",
      },
      {
        title: "Precio Justo",
        description:
          "Creemos que la salud dental de calidad no debe ser un lujo. Ofrecemos la mejor relación calidad-precio del mercado.",
      },
      {
        title: "Experiencia Premium",
        description:
          "Desde el momento que agendas tu cita hasta que sales del consultorio, cada detalle está pensado para tu comodidad.",
      },
    ],
  },
  certifications: [
    { name: "ISO 9001:2015", image: "/images/odonto-smart/cert-iso.jpg" },
    { name: "Invisalign Diamond", image: "/images/odonto-smart/cert-invisalign.jpg" },
    { name: "Straumann Partner", image: "/images/odonto-smart/cert-straumann.jpg" },
    { name: "DSD Certified", image: "/images/odonto-smart/cert-dsd.jpg" },
  ],
};
