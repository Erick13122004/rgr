import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import MediaFrame from "@/components/ui/MediaFrame";
import Button from "@/components/ui/Button";
import ObraCard from "@/components/sections/ObraCard";
import ObraVideos from "@/components/sections/ObraVideos";
import { obras, getObraBySlug } from "@/lib/data/obras";
import { empresa } from "@/lib/data/empresa";

const capas: Record<string, string> = {
  "residencia-contemporanea": "/obras/residencia-contemporanea/capa.webp",
  "piscina-residencial": "/obras/piscina-residencial/capa.webp",
  "obra-em-andamento": "/obras/obra-em-andamento/capa.webp",
};

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
      images: [{ url: capas[obra.slug] ?? obra.galeria[0]?.src }],
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

  const capa = capas[obra.slug] ?? obra.galeria[0]?.src;
  const relacionadas = obras.filter((o) => o.slug !== obra.slug).slice(0, 3);

  return (
    <div className="bg-ink">
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
              <p className="mt-7 max-w-xl text-mist leading-relaxed">
                {obra.descricaoResumo}
              </p>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-mist">
                <span className="flex items-center gap-2">
                  <MapPin size={15} className="text-scarlet" /> {obra.cidade}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <MediaFrame ratio="aspect-[4/3]">
                <Image
                  src={capa}
                  alt={obra.galeria[0]?.alt ?? obra.nome}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </MediaFrame>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-ink-line">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-5">
                Sobre o registro
              </p>
              <div className="space-y-5">
                {obra.descricaoCompleta.map((p) => (
                  <p key={p} className="text-paper/85 leading-relaxed text-[15px]">
                    {p}
                  </p>
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
                  Informações disponíveis
                </p>
                <dl className="divide-y divide-ink-line">
                  {obra.infoTecnica.map((info) => (
                    <div key={info.label} className="flex items-center justify-between gap-6 py-3.5">
                      <dt className="text-sm text-mist">{info.label}</dt>
                      <dd className="text-sm text-paper font-medium text-right">{info.valor}</dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-6 py-3.5">
                    <dt className="text-sm text-mist">Localização</dt>
                    <dd className="text-sm text-paper font-medium text-right">{obra.localizacao}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

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
                <MediaFrame ratio="aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  {img.legenda && (
                    <span className="absolute bottom-3 left-3 text-[11px] font-mono text-paper bg-ink/75 px-2 py-1">
                      {img.legenda}
                    </span>
                  )}
                </MediaFrame>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {obra.linhaDoTempo.length > 0 && (
        <section className="py-20 border-t border-ink-line bp-grid">
          <Container>
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-14">
                Etapas registradas
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {obra.linhaDoTempo.map((etapa, i) => (
                <Reveal key={etapa.id} delay={i * 0.08}>
                  <div className="border-t border-scarlet pt-6">
                    <p className="font-mono text-xs text-scarlet">{etapa.mes}</p>
                    <p className="mt-2 font-display text-lg text-paper">{etapa.titulo}</p>
                    <p className="mt-2 text-[13px] text-mist leading-relaxed">{etapa.descricao}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {obra.videos.length > 0 && (
        <section className="py-20 border-t border-ink-line">
          <Container>
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-10">
                Vídeo real da obra
              </p>
            </Reveal>
            <ObraVideos videos={obra.videos} />
          </Container>
        </section>
      )}

      <section className="py-20 border-t border-ink-line">
        <Container className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-paper max-w-md text-balance">
              Quer conversar sobre a sua obra?
            </h2>
            <p className="mt-3 text-sm text-mist max-w-xl">
              Fale com a RGR e envie as informações do projeto para receber orientação.
            </p>
          </div>
          <Button
            href={`https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(
              `Olá! Vi o projeto "${obra.nome}" no site da RGR e gostaria de solicitar um orçamento.`
            )}`}
            target="_blank"
          >
            Solicitar orçamento
          </Button>
        </Container>
      </section>

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
