import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import VideosSection from "@/components/sections/VideosSection";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <PortfolioPreview />
      <VideosSection />
      <Services />
      <Differentials />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
