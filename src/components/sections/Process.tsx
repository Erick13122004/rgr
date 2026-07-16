import { ClipboardCheck, FileText, HardHat, KeyRound } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const etapas = [
  {
    titulo: "Conversa inicial",
    descricao:
      "Entendimento do objetivo da obra, do tipo de serviço e das informações necessárias para avaliar o projeto.",
    icone: FileText,
  },
  {
    titulo: "Orçamento claro",
    descricao:
      "Levantamento do escopo, alinhamento de prioridades e orientação sobre etapas antes do início da execução.",
    icone: ClipboardCheck,
  },
  {
    titulo: "Execução acompanhada",
    descricao:
      "Presença próxima no canteiro, cuidado com materiais, equipe e sequência de trabalho combinada.",
    icone: HardHat,
  },
  {
    titulo: "Entrega com responsabilidade",
    descricao:
      "Conferência dos detalhes finais, acabamento e organização para entregar a obra com seriedade.",
    icone: KeyRound,
  },
];

export default function Process() {
  return (
    <section className="relative bg-paper text-ink py-28 md:py-36 bp-grid-dim">
      <Container>
        <SectionHeading
          eyebrow="Processo"
          title="Da primeira conversa à entrega da obra."
          description="Um jeito de trabalhar direto, organizado e próximo do cliente, com Rodrigo acompanhando as decisões importantes de cada etapa."
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
                  <p className="mt-6 font-display text-xl">{etapa.titulo}</p>
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
