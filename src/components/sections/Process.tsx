import { ClipboardCheck, FileText, HardHat, KeyRound } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const etapas = [
  {
    titulo: "Diagnóstico",
    descricao:
      "Entendimento do tipo de obra, prioridades, medidas, prazo desejado e materiais envolvidos.",
    icone: FileText,
  },
  {
    titulo: "Orçamento",
    descricao:
      "Escopo definido com clareza para o cliente entender o que será executado antes do início.",
    icone: ClipboardCheck,
  },
  {
    titulo: "Execução",
    descricao:
      "Canteiro acompanhado de perto, com atenção à equipe, materiais e sequência de serviço.",
    icone: HardHat,
  },
  {
    titulo: "Entrega",
    descricao:
      "Conferência de acabamento, limpeza visual e detalhes finais antes da conclusão.",
    icone: KeyRound,
  },
];

export default function Process() {
  return (
    <section className="relative bg-paper text-ink py-28 md:py-36 bp-grid-dim">
      <Container>
        <SectionHeading
          eyebrow="Processo"
          title="Como a RGR conduz sua obra."
          description="Um fluxo direto para tirar dúvidas, alinhar orçamento e executar com presença no canteiro."
          align="center"
          light
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {etapas.map((etapa, i) => {
            const Icon = etapa.icone;
            return (
              <Reveal key={etapa.titulo} delay={i * 0.06} className="bg-paper">
                <div className="h-full p-8 md:p-9">
                  <Icon size={25} className="text-bordeaux" strokeWidth={1.5} />
                  <p className="mt-6 font-display font-semibold text-xl">{etapa.titulo}</p>
                  <p className="mt-3 text-sm text-stone leading-relaxed">
                    {etapa.descricao}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
