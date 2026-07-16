import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const pontos = [
  "Atendimento direto com Rodrigo Guimarães",
  "Atuação em Osório, Atlântida Sul e litoral norte do RS",
  "Experiência prática desde 2010 na construção civil",
  "Execução de casas, reformas, acabamentos e piscinas",
  "Acompanhamento próximo da rotina da obra",
  "Comunicação objetiva sobre etapas, materiais e decisões",
];

export default function Trust() {
  return (
    <section className="relative bg-ink py-28 md:py-36">
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <SectionHeading
            eyebrow="Confiança"
            title="Segurança para quem quer construir com clareza."
            description="Empresários, famílias e parceiros valorizam obra bem conduzida: presença, palavra firme, organização e cuidado com o que foi combinado."
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
