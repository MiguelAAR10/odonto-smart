import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://odonto-smart-1.vercel.app";

export const metadata: Metadata = {
  title: "Odonto Smart | Clínica Dental en Lima (Lince, Jesús María, Magdalena)",
  description:
    "Clínica dental líder en Lima. Especialistas en estética dental, ortodoncia e implantes con tecnología avanzada. ¡Reserva tu cita hoy en nuestras sedes de Lince, Jesús María y Magdalena!",
  keywords: [
    "dentista lima",
    "clínica dental lima",
    "odontología estética lima",
    "implantes dentales lima",
    "ortodoncia invisible lima",
    "diseño de sonrisa lima",
    "dentista lince",
    "dentista magdalena",
    "dentista jesús maría",
    "blanqueamiento dental lima",
    "carillas dentales lima",
    "odontólogo lima",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: SITE_URL,
    siteName: "Odonto Smart",
    title: "Odonto Smart | Clínica Dental en Lima — Lince, Jesús María, Magdalena",
    description:
      "Clínica dental líder en Lima. Especialistas en estética dental, ortodoncia e implantes. ¡Reserva tu cita hoy!",
    images: [
      {
        url: "/images/odonto-smart/logo-horizontal-marca-premium.png",
        width: 1200,
        height: 630,
        alt: "Odonto Smart — Clínica Dental Premium en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odonto Smart | Clínica Dental en Lima",
    description:
      "Clínica dental líder en Lima. Especialistas en estética dental, ortodoncia e implantes. ¡Reserva tu cita!",
    images: ["/images/odonto-smart/logo-horizontal-marca-premium.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google7b239463988be32a",
  },
  other: {
    "geo.region": "PE-LIM",
    "geo.placename": "Lima",
    "geo.position": "-12.0847;-77.0353",
    "ICBM": "-12.0847, -77.0353",
  },
};

/* ─── JSON-LD Structured Data — Dentist / LocalBusiness ─── */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Odonto Smart",
  description:
    "Clínica dental premium especializada en odontología estética, ortodoncia e implantes dentales en Lima, Perú.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/odonto-smart/logo-principal.png`,
  image: `${SITE_URL}/images/odonto-smart/logo-horizontal-marca-premium.png`,
  telephone: "+5116782893",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5000",
    bestRating: "5",
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Av. Arequipa 1860",
      addressLocality: "Lince",
      addressRegion: "Lima",
      postalCode: "15046",
      addressCountry: "PE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Calle De La Roca de Vergallo 493",
      addressLocality: "Magdalena del Mar",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Jr. Mariscal Luzuriaga 363",
      addressLocality: "Jesús María",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
  ],
  geo: [
    {
      "@type": "GeoCoordinates",
      latitude: -12.0847,
      longitude: -77.0353,
    },
    {
      "@type": "GeoCoordinates",
      latitude: -12.0918,
      longitude: -77.0728,
    },
    {
      "@type": "GeoCoordinates",
      latitude: -12.0722,
      longitude: -77.0489,
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/odonto.smart.3",
    "https://www.instagram.com/odonto_smart/",
    "https://www.tiktok.com/@odonto_smart",
  ],
  medicalSpecialty: [
    "Odontología Estética",
    "Ortodoncia",
    "Implantología",
    "Periodoncia",
    "Endodoncia",
    "Cirugía Oral y Maxilofacial",
    "Odontopediatría",
  ],
  areaServed: {
    "@type": "City",
    name: "Lima",
    "@id": "https://www.wikidata.org/wiki/Q2868",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tratamientos Dentales",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño de Sonrisa Digital" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ortodoncia Invisible" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Implantes Dentales" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blanqueamiento Dental" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rehabilitación Oral" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
