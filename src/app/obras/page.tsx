import type { Metadata } from "next";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { obras } from "@/lib/data/obras";

export const metadata: Metadata = {
  title: "Obras",
  description:
    "Conheça o portfólio completo da RGR Construtora: obras residenciais, comerciais, reformas e empreendimentos entregues no Rio Grande do Sul.",
};

export default function ObrasPage() {
  return (
    <div className="pt-40 pb-28 bg-ink bp-grid">
      <Container>
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-scarlet" />
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet">
              Portfólio completo
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05] text-paper max-w-3xl text-balance">
            Cada obra é um compromisso cumprido.
          </h1>
          <p className="mt-6 max-w-xl text-mist text-base leading-relaxed">
            {obras.length} projetos entre residências, empreendimentos, obras
            comerciais e reformas — todos conduzidos com o mesmo rigor técnico
            e transparência.
          </p>
        </Reveal>

        <PortfolioGrid obras={obras} />
      </Container>
    </div>
  );
}
