import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Ruler, Calendar, ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import MediaFrame from "@/components/ui/MediaFrame";
import Button from "@/components/ui/Button";
import ProjectArt from "@/components/illustrations/ProjectArt";
import ObraCard from "@/components/sections/ObraCard";
import ObraVideos from "@/components/sections/ObraVideos";
import { obras, getObraBySlug } from "@/lib/data/obras";
import { empresa } from "@/lib/data/empresa";

export function generateStaticParams() {
  return obras.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const obra = getObraBySlug(slug);
  if (!obra) return {};
  return {
    title: obra.nome,
    description: obra.descricaoResumo,
    openGraph: {
      title: `${obra.nome} | RGR Construtora`,
      description: obra.descricaoResumo,
    },
  };
}

export default async function ObraPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const obra = getObraBySlug(slug);
  if (!obra) notFound();

  const relacionadas = obras.filter((o) => o.slug !== obra.slug).slice(0, 3);
  const antes = obra.galeria.find((g) => g.tipo === "antes");
  const depois = obra.galeria.find((g) => g.tipo === "depois");

  return (
    <div className="bg-ink">
      {/* Hero */}
      <section className="relative pt-40 pb-20 bp-grid overflow-hidden">
        <Container>
          <Link
            href="/obras"
            className="inline-flex items-center gap-2 text-xs text-mist hover:text-scarlet transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Voltar para o portfólio
          </Link>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-5">
                {obra.categoria} · {obra.status}
              </p>
              <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.02] text-paper text-balance">
                {obra.nome}
              </h1>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-mist">
                <span className="flex items-center gap-2"><MapPin size={15} className="text-scarlet" /> {obra.cidade}</span>
                <span className="flex items-center gap-2"><Ruler size={15} className="text-scarlet" /> {obra.areaConstruida}</span>
                <span className="flex items-center gap-2"><Calendar size={15} className="text-scarlet" /> {obra.ano}</span>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <MediaFrame ratio="aspect-[4/3]">
                <ProjectArt variant={obras.findIndex((o) => o.slug === obra.slug)} className="h-2/3 w-2/3 text-scarlet" />
              </MediaFrame>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Descrição */}
      <section className="py-20 border-t border-ink-line">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-5">
                Sobre o projeto
              </p>
              <div className="space-y-5">
                {obra.descricaoCompleta.map((p, i) => (
                  <p key={i} className="text-paper/85 leading-relaxed text-[15px]">{p}</p>
                ))}
              </div>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {obra.diferenciais.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-paper/75">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-scarlet shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-ink-soft border border-ink-line p-8">
                <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-mist mb-6">
                  Informações técnicas
                </p>
                <dl className="divide-y divide-ink-line">
                  {obra.infoTecnica.map((info) => (
                    <div key={info.label} className="flex items-center justify-between py-3.5">
                      <dt className="text-sm text-mist">{info.label}</dt>
                      <dd className="text-sm text-paper font-medium">{info.valor}</dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between py-3.5">
                    <dt className="text-sm text-mist">Localização</dt>
                    <dd className="text-sm text-paper font-medium text-right">{obra.localizacao}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Linha do tempo de execução */}
      <section className="py-20 border-t border-ink-line bp-grid">
        <Container>
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-14">
              Linha do tempo da execução
            </p>
          </Reveal>
          <div className="relative">
            <div className="absolute left-[7px] top-1 bottom-1 w-px bg-ink-line md:left-0 md:right-0 md:top-[7px] md:bottom-auto md:h-px md:w-auto" />
            <div className="grid md:grid-cols-4 gap-10">
              {obra.linhaDoTempo.map((etapa, i) => (
                <Reveal key={etapa.id} delay={i * 0.08}>
                  <div className="relative pl-8 md:pl-0">
                    <div className="absolute left-0 top-1 md:relative md:mb-5 h-3.5 w-3.5 rounded-full bg-scarlet ring-4 ring-scarlet/15" />
                    <p className="font-mono text-xs text-scarlet">{etapa.mes}</p>
                    <p className="mt-2 font-display text-lg text-paper">{etapa.titulo}</p>
                    <p className="mt-2 text-[13px] text-mist leading-relaxed">{etapa.descricao}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Galeria */}
      <section className="py-20 border-t border-ink-line">
        <Container>
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-10">
              Galeria
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {obra.galeria.map((img, i) => (
              <Reveal key={img.id} delay={(i % 6) * 0.06}>
                <MediaFrame ratio={i % 5 === 0 ? "aspect-[4/3] lg:col-span-2" : "aspect-[4/3]"}>
                  <ProjectArt variant={i} className="h-1/2 w-1/2 text-paper/50" />
                  {img.legenda && (
                    <span className="absolute bottom-3 left-3 text-[11px] font-mono text-paper/70 bg-ink/70 px-2 py-1">
                      {img.legenda}
                    </span>
                  )}
                </MediaFrame>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Antes e depois */}
      {antes && depois && (
        <section className="py-20 border-t border-ink-line bp-grid">
          <Container>
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-10">
                Antes &amp; Depois
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-6">
              <Reveal>
                <MediaFrame ratio="aspect-[4/3]">
                  <ProjectArt variant={4} className="h-1/2 w-1/2 text-paper/40" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest uppercase bg-ink/80 px-2.5 py-1 text-paper/70">
                    Antes
                  </span>
                </MediaFrame>
              </Reveal>
              <Reveal delay={0.1}>
                <MediaFrame ratio="aspect-[4/3]">
                  <ProjectArt variant={0} className="h-1/2 w-1/2 text-scarlet" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest uppercase bg-scarlet px-2.5 py-1 text-paper">
                    Depois
                  </span>
                </MediaFrame>
              </Reveal>
            </div>
          </Container>
        </section>
      )}

      {/* Vídeos */}
      {obra.videos.length > 0 && (
        <section className="py-20 border-t border-ink-line">
          <Container>
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-10">
                Vídeos da construção
              </p>
            </Reveal>
            <ObraVideos videos={obra.videos} />
          </Container>
        </section>
      )}

      {/* CTA da obra */}
      <section className="py-20 border-t border-ink-line">
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-paper max-w-md text-balance">
              Gostou deste projeto? Vamos planejar o seu.
            </h2>
          </div>
          <Button
            href={`https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(
              `Olá! Vi o projeto "${obra.nome}" e gostaria de solicitar um orçamento.`
            )}`}
            target="_blank"
          >
            Solicitar Orçamento
          </Button>
        </Container>
      </section>

      {/* Relacionadas */}
      <section className="py-20 border-t border-ink-line bg-ink-soft">
        <Container>
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-10">
            Outras obras
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {relacionadas.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.08}>
                <ObraCard obra={o} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
