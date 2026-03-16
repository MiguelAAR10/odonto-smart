import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
