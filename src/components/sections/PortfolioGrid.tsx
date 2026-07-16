"use client";

import { useState, useMemo } from "react";
import Reveal from "@/components/ui/Reveal";
import ObraCard from "./ObraCard";
import { Obra, CategoriaObra } from "@/types";

const categorias: (CategoriaObra | "Todas")[] = [
  "Todas",
  "Residencial",
  "Piscina",
  "Obra em andamento",
];

export default function PortfolioGrid({ obras }: { obras: Obra[] }) {
  const [filtro, setFiltro] = useState<(typeof categorias)[number]>("Todas");

  const filtradas = useMemo(
    () => (filtro === "Todas" ? obras : obras.filter((o) => o.categoria === filtro)),
    [filtro, obras]
  );

  return (
    <div className="mt-14">
      <div className="flex flex-wrap gap-3">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`px-5 py-2.5 text-[13px] tracking-wide border transition-colors ${
              filtro === cat
                ? "bg-scarlet border-scarlet text-paper"
                : "border-paper/20 text-paper/70 hover:border-paper/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filtradas.map((obra, i) => (
          <Reveal key={obra.slug} delay={(i % 6) * 0.07}>
            <ObraCard obra={obra} index={i} />
          </Reveal>
        ))}
      </div>

      {filtradas.length === 0 && (
        <p className="mt-16 text-center text-mist text-sm">
          Nenhuma obra encontrada nessa categoria no momento.
        </p>
      )}
    </div>
  );
}
