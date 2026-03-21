import type { Metadata } from "next";
import { CompanionAura } from "@/components/ui/CompanionAura";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odonto Smart — La Inteligencia Dental de Tu Mejor Sonrisa",
  description:
    "Más de 20 años transformando sonrisas con tecnología de vanguardia. Implantes, ortodoncia invisible, diseño de sonrisa y más en Lima.",
  keywords: [
    "dentista",
    "odontología",
    "implantes dentales",
    "ortodoncia invisible",
    "diseño de sonrisa",
    "lima",
    "miraflores",
    "san isidro",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <div className="hidden md:block">
          <CompanionAura />
        </div>
      </body>
    </html>
  );
}
