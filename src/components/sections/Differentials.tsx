import { Handshake, Eye, Clock, Users, ShieldCheck, LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { diferenciais } from "@/lib/data/conteudo";

const icons: Record<string, LucideIcon> = {
  handshake: Handshake,
  eye: Eye,
  clock: Clock,
  users: Users,
  shield: ShieldCheck,
};

export default function Differentials() {
  return (
    <section className="relative bg-ink py-28 md:py-36 bp-grid">
      <Container>
        <SectionHeading
          eyebrow="Diferenciais"
          title="O que pesa na decisão."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {diferenciais.map((item, i) => {
            const Icon = icons[item.icone];
            return (
              <Reveal key={item.id} delay={i * 0.08}>
                <div className="border-t border-scarlet pt-6">
                  <Icon size={24} className="text-scarlet" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display font-semibold text-lg text-paper leading-snug">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 text-[13px] text-mist leading-relaxed">
                    {item.descricao}
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
