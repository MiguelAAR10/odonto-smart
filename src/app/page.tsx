import fs from "fs";
import path from "path";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { SocialProof } from "@/components/sections/SocialProof";

import { Treatments } from "@/components/sections/Treatments";
import { ClinicGallery } from "@/components/sections/ClinicGallery";
import { SedesSection } from "@/components/sections/SedesSection";
import { SmileReveal } from "@/components/sections/SmileReveal";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/* ─── Read gallery images from filesystem at build/request time ─── */

function getGalleryImages(): string[] {
  const dir = path.join(process.cwd(), "public/images/odonto-smart/fotos-reales");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .sort()
      .map((f) => `/images/odonto-smart/fotos-reales/${f}`);
  } catch {
    return [];
  }
}

export default function Home() {
  const galleryImages = getGalleryImages();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ClinicGallery images={galleryImages} />
        <SocialProof />
        <Treatments />
        <SedesSection />
        <SmileReveal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
