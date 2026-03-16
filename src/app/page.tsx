import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Treatments } from "@/components/sections/Treatments";
import { Technology } from "@/components/sections/Technology";
import { SmileReveal } from "@/components/sections/SmileReveal";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Treatments />
        <Technology />
        <SmileReveal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
