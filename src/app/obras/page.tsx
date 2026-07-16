import type { Metadata } from "next";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { obras } from "@/lib/data/obras";

export const metadata: Metadata = {
  title: "Obras",
  description:
    "Conheça registros reais de obras residenciais, piscinas e etapas de execução da RGR Construtora em Osório, Atlântida Sul e litoral norte do RS.",
};

export default function ObrasPage() {
  return (
    <div className="pt-40 pb-28 bg-ink bp-grid">
      <Container>
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-scarlet" />
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet">
              Portfólio
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05] text-paper max-w-3xl text-balance">
            Obras reais, apresentadas com clareza.
          </h1>
          <p className="mt-6 max-w-xl text-mist text-base leading-relaxed">
            Fotos e vídeo reais organizados por tipo de registro, com foco em
            casas, piscinas, reformas e acompanhamento de obras no litoral norte.
          </p>
        </Reveal>

        <PortfolioGrid obras={obras} />
      </Container>
    </div>
  );
}
