"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import MediaFrame from "@/components/ui/MediaFrame";
import VideoModal from "@/components/ui/VideoModal";
import { videosDestaque } from "@/lib/data/conteudo";

export default function VideosSection() {
  const [ativo, setAtivo] = useState<number | null>(null);

  return (
    <section className="relative bg-ink py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Vídeo"
          title="A construção, em movimento."
          description="Um registro real da obra para mostrar detalhes, ambientes e acabamento sem recorrer a material fictício."
        />

        <div className="mt-16 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          {videosDestaque.map((video, i) => (
            <Reveal key={video.id} delay={i * 0.1}>
              <button
                onClick={() => setAtivo(i)}
                className="group text-left w-full"
                aria-haspopup="dialog"
              >
                <MediaFrame ratio="aspect-video">
                  <Image
                    src={video.poster}
                    alt={`Capa do vídeo ${video.titulo}`}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-ink/35 group-hover:bg-ink/20 transition-colors" />
                  <div className="relative h-16 w-16 rounded-full border border-paper/40 bg-ink/70 flex items-center justify-center group-hover:border-scarlet group-hover:bg-scarlet transition-all duration-300">
                    <Play size={22} className="ml-0.5 group-hover:text-paper transition-colors" />
                  </div>
                  <span className="absolute bottom-4 left-4 font-mono text-[11px] tracking-wide text-paper bg-ink/70 px-2 py-1">
                    {video.duracao}
                  </span>
                </MediaFrame>
              </button>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <div className="border-t border-scarlet pt-8">
              <p className="font-display text-2xl md:text-3xl text-paper">
                Do projeto à realização.
              </p>
              <p className="mt-5 text-sm md:text-base text-mist leading-relaxed max-w-xl">
                Cada etapa de uma obra pede atenção, organização e compromisso.
                O vídeo foi mantido em carregamento leve para preservar a
                experiência no celular.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {videosDestaque.map((video, i) => (
        <VideoModal
          key={video.id}
          open={ativo === i}
          onClose={() => setAtivo(null)}
          titulo={video.titulo}
          descricao={video.descricao}
          src={video.src}
          poster={video.poster}
        />
      ))}
    </section>
  );
}
