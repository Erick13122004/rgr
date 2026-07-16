import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import MediaFrame from "@/components/ui/MediaFrame";
import { Obra } from "@/types";

const capas: Record<string, string> = {
  "residencia-contemporanea": "/obras/residencia-contemporanea/capa.webp",
  "piscina-residencial": "/obras/piscina-residencial/capa.webp",
  "obra-em-andamento": "/obras/obra-em-andamento/capa.webp",
};

export default function ObraCard({ obra }: { obra: Obra; index?: number }) {
  const capa = capas[obra.slug] ?? obra.galeria[0]?.src;

  return (
    <Link href={`/obras/${obra.slug}`} className="group block">
      <MediaFrame ratio="aspect-[4/5]" className="transition-colors duration-500 group-hover:border-scarlet/50">
        <Image
          src={capa}
          alt={obra.galeria[0]?.alt ?? obra.nome}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
        <span className="absolute top-4 right-4 font-mono text-[10px] tracking-widest uppercase text-paper border border-paper/20 bg-ink/65 px-2.5 py-1">
          {obra.status}
        </span>
      </MediaFrame>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-scarlet mb-1.5">
            {obra.categoria}
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
