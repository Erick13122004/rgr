import { Home, Building2, Hammer, ClipboardList, Ruler, LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { servicos } from "@/lib/data/conteudo";

const icons: Record<string, LucideIcon> = {
  home: Home,
  building: Building2,
  hammer: Hammer,
  clipboard: ClipboardList,
  ruler: Ruler,
};

export default function Services() {
  return (
    <section id="servicos" className="relative bg-paper text-ink py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="O que fazemos"
          title="Execução completa para obra residencial."
          align="center"
          light
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {servicos.map((servico, i) => {
            const Icon = icons[servico.icone];
            return (
              <Reveal key={servico.id} delay={i * 0.06} className="bg-paper">
                <div className="h-full p-8 md:p-10 hover:bg-ink hover:text-paper transition-colors duration-500 group">
                  <Icon size={26} className="text-bordeaux group-hover:text-scarlet transition-colors" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display font-semibold text-xl">{servico.titulo}</h3>
                  <p className="mt-3 text-sm text-stone group-hover:text-mist leading-relaxed transition-colors">
                    {servico.descricao}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {servico.itens.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[13px] text-stone group-hover:text-paper/75 transition-colors">
                        <span className="h-1 w-1 rounded-full bg-scarlet shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
