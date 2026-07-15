"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import MediaFrame from "@/components/ui/MediaFrame";
import VideoModal from "@/components/ui/VideoModal";
import { VideoObra } from "@/types";

export default function ObraVideos({ videos }: { videos: VideoObra[] }) {
  const [ativo, setAtivo] = useState<number | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <button key={video.id} onClick={() => setAtivo(i)} className="group text-left">
            <MediaFrame ratio="aspect-video">
              <div className="h-12 w-12 rounded-full border border-paper/30 flex items-center justify-center group-hover:border-scarlet group-hover:bg-scarlet transition-all duration-300">
                <Play size={18} className="ml-0.5 group-hover:text-paper transition-colors" />
              </div>
              <span className="absolute bottom-3 left-3 font-mono text-[11px] text-paper/70">
                {video.duracao}
              </span>
            </MediaFrame>
            <p className="mt-3 text-sm font-medium text-paper group-hover:text-scarlet transition-colors">
              {video.titulo}
            </p>
          </button>
        ))}
      </div>
      {videos.map((video, i) => (
        <VideoModal
          key={video.id}
          open={ativo === i}
          onClose={() => setAtivo(null)}
          titulo={video.titulo}
          descricao={video.descricao}
        />
      ))}
    </>
  );
}
