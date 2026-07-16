import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import VideosSection from "@/components/sections/VideosSection";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import Process from "@/components/sections/Process";
import Trust from "@/components/sections/Trust";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <PortfolioPreview />
      <Differentials />
      <Process />
      <Trust />
      <VideosSection />
      <CTA />
      <Contact />
    </>
  );
}
