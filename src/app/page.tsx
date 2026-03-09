import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Technology } from "@/components/sections/Technology";
import { Team } from "@/components/sections/Team";
import { Reviews } from "@/components/sections/Reviews";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Technology />
        <Team />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
