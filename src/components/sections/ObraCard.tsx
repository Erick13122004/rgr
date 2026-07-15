import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import MediaFrame from "@/components/ui/MediaFrame";
import ProjectArt from "@/components/illustrations/ProjectArt";
import { Obra } from "@/types";

export default function ObraCard({ obra, index = 0 }: { obra: Obra; index?: number }) {
  return (
    <Link href={`/obras/${obra.slug}`} className="group block">
      <MediaFrame ratio="aspect-[4/5]" className="transition-colors duration-500 group-hover:border-scarlet/50">
        <ProjectArt
          variant={index}
          className="h-2/3 w-2/3 text-paper/60 transition-all duration-500 group-hover:text-scarlet group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 right-4 font-mono text-[10px] tracking-widest uppercase text-paper/60 border border-paper/20 px-2.5 py-1">
          {obra.status}
        </span>
      </MediaFrame>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-scarlet mb-1.5">
            {obra.categoria} · {obra.ano}
          </p>
          <h3 className="font-display text-xl text-paper group-hover:text-scarlet transition-colors">
            {obra.nome}
          </h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-mist">
            <MapPin size={13} /> {obra.cidade}
          </p>
        </div>
        <span className="mt-1 shrink-0 h-9 w-9 rounded-full border border-paper/20 flex items-center justify-center text-paper/70 group-hover:border-scarlet group-hover:text-scarlet group-hover:bg-scarlet/10 transition-all">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
