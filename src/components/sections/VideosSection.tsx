"use client";

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
          eyebrow="Bastidores"
          title="A construção, em movimento."
          description="Acompanhe de perto a evolução das nossas obras, do canteiro à entrega das chaves."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {videosDestaque.map((video, i) => (
            <Reveal key={video.id} delay={i * 0.1}>
              <button
                onClick={() => setAtivo(i)}
                className="group text-left w-full"
                aria-haspopup="dialog"
              >
                <MediaFrame ratio="aspect-video">
                  <div className="h-14 w-14 rounded-full border border-paper/30 flex items-center justify-center group-hover:border-scarlet group-hover:bg-scarlet transition-all duration-300">
                    <Play size={20} className="ml-0.5 group-hover:text-paper transition-colors" />
                  </div>
                  <span className="absolute bottom-4 left-4 font-mono text-[11px] tracking-wide text-paper/70">
                    {video.duracao}
                  </span>
                </MediaFrame>
                <p className="mt-4 font-display text-lg text-paper group-hover:text-scarlet transition-colors">
                  {video.titulo}
                </p>
                <p className="mt-1.5 text-[13px] text-mist leading-relaxed">
                  {video.descricao}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {videosDestaque.map((video, i) => (
        <VideoModal
          key={video.id}
          open={ativo === i}
          onClose={() => setAtivo(null)}
          titulo={video.titulo}
          descricao={video.descricao}
        />
      ))}
    </section>
  );
}
