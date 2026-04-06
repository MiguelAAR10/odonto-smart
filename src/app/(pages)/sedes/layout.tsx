import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sedes Odonto Smart | Clínica Dental en Lince, Jesús María y Magdalena",
  description:
    "Encuentra la sede Odonto Smart más cercana. Clínicas dentales en Lince (Av. Arequipa 1860), Jesús María (Jr. Mariscal Luzuriaga 363) y Magdalena (Calle De La Roca de Vergallo 493). Agenda tu cita.",
  alternates: {
    canonical: "/sedes",
  },
  openGraph: {
    title: "Sedes Odonto Smart | Dentistas en Lince, Jesús María y Magdalena",
    description:
      "3 sedes estratégicas en Lima con tecnología dental de vanguardia. Agenda tu valoración hoy.",
  },
};

export default function SedesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
