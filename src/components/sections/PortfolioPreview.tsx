import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ObraCard from "./ObraCard";
import { obras } from "@/lib/data/obras";

export default function PortfolioPreview() {
  const destaques = obras.slice(0, 3);

  return (
    <section id="obras" className="relative bg-ink py-28 md:py-36 bp-grid">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Portfólio"
            title="Veja a execução antes de contratar."
            description="Fotos e vídeos reais de fachadas, canteiro, piscina, acabamento e etapas de obra."
          />
          <Reveal delay={0.2}>
            <Button href="/obras" variant="outline-light">
              Abrir portfólio
            </Button>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {destaques.map((obra, i) => (
            <Reveal key={obra.slug} delay={i * 0.1}>
              <ObraCard obra={obra} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
