import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MediaFrame from "@/components/ui/MediaFrame";
import { empresa, linhaDoTempoEmpresa } from "@/lib/data/empresa";

export default function About() {
  return (
    <section id="sobre" className="relative bg-ink py-28 md:py-36">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow="Quem somos"
              title="Construção é ofício. Confiança é o que entregamos."
              description={empresa.missao}
            />

            <Reveal delay={0.15}>
              <div className="mt-7 space-y-4 text-sm md:text-base text-mist leading-relaxed">
                {empresa.historia.map((paragrafo) => (
                  <p key={paragrafo}>{paragrafo}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {empresa.valores.map((valor) => (
                  <div key={valor} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-scarlet shrink-0" />
                    <p className="text-sm text-paper/80 leading-relaxed">{valor}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div>
              <MediaFrame ratio="aspect-[4/5]" className="bg-ink border-paper/15">
                <div className="relative h-full w-full">
                  <Image
                    src="/rodrigo-familia-rgr.jpeg"
                    alt="Rodrigo Guimarães, responsável pela RGR, com sua família"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover brightness-[0.82] contrast-110 saturate-95"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/75">
                      Família e propósito
                    </p>
                    <p className="mt-2 font-display text-2xl text-paper">
                      Rodrigo Guimarães
                    </p>
                  </div>
                </div>
              </MediaFrame>

              <div className="mt-6 border border-ink-line bg-ink-soft p-6">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-scarlet mb-3">
                  À frente da RGR
                </p>
                <p className="text-sm md:text-base text-paper/85 leading-relaxed">
                  {empresa.perfilRodrigo}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Linha do tempo */}
        <div className="mt-28 md:mt-36">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-14">
              Nossa trajetória
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-0 right-0 top-[7px] h-px bg-ink-line hidden md:block" />
            <div className="grid md:grid-cols-6 gap-10 md:gap-6">
              {linhaDoTempoEmpresa.map((etapa, i) => (
                <Reveal key={`${etapa.ano}-${etapa.titulo}`} delay={i * 0.08}>
                  <div className="relative pl-6 md:pl-0">
                    <div className="absolute left-0 top-1.5 md:relative md:mb-5 h-3.5 w-3.5 rounded-full bg-scarlet ring-4 ring-scarlet/15" />
                    <div className="absolute left-[6px] top-4 bottom-0 w-px bg-ink-line md:hidden" />
                    <p className="font-display text-2xl text-paper">{etapa.ano}</p>
                    <p className="mt-2 text-sm font-medium text-paper/90">{etapa.titulo}</p>
                    <p className="mt-2 text-[13px] text-mist leading-relaxed">{etapa.descricao}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
