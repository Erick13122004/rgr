import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const pontos = [
  "Contato direto com Rodrigo Guimarães",
  "Atendimento em Osório, Atlântida Sul e litoral norte",
  "Experiência prática desde 2010",
  "Casas, reformas, acabamentos e piscinas",
  "Rotina de obra acompanhada de perto",
  "Comunicação clara sobre escopo, materiais e decisões",
];

export default function Trust() {
  return (
    <section className="relative bg-ink py-28 md:py-36">
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <SectionHeading
            eyebrow="Confiança"
            title="Para contratar sem improviso."
            description="Quem decide uma obra precisa ver clareza, responsabilidade e alguém presente no canteiro. É isso que a RGR entrega."
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {pontos.map((ponto, i) => (
              <Reveal key={ponto} delay={i * 0.05}>
                <div className="border-t border-scarlet pt-5">
                  <CheckCircle2 size={18} className="text-scarlet" strokeWidth={1.7} />
                  <p className="mt-3 text-sm text-paper/85 leading-relaxed">{ponto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
