"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { depoimentos } from "@/lib/data/conteudo";

function iniciais(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const atual = depoimentos[index];

  function next() {
    setIndex((i) => (i + 1) % depoimentos.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + depoimentos.length) % depoimentos.length);
  }

  return (
    <section id="depoimentos" className="relative bg-ink py-28 md:py-36 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem construiu com a gente, conta."
          align="center"
        />

        <div className="relative mt-16 max-w-3xl mx-auto">
          <Quote className="mx-auto text-scarlet/40" size={40} strokeWidth={1.2} />

          <div className="relative min-h-[260px] mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={atual.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="font-display text-2xl md:text-3xl leading-snug text-paper text-balance">
                  “{atual.texto}”
                </p>

                <div className="mt-8 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={i < atual.nota ? "fill-scarlet text-scarlet" : "text-ink-line"}
                    />
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="h-11 w-11 rounded-full bg-ink-soft border border-ink-line flex items-center justify-center font-mono text-xs text-scarlet">
                    {iniciais(atual.nome)}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-medium text-paper">{atual.nome}</p>
                    <p className="text-xs text-mist">
                      {atual.cidade}{atual.obra ? ` · ${atual.obra}` : ""}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="h-10 w-10 rounded-full border border-paper/20 flex items-center justify-center hover:border-scarlet hover:text-scarlet transition-colors"
            >
              <ChevronLeft size={17} />
            </button>
            <div className="flex items-center gap-2">
              {depoimentos.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver depoimento de ${d.nome}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-scarlet" : "w-1.5 bg-paper/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="h-10 w-10 rounded-full border border-paper/20 flex items-center justify-center hover:border-scarlet hover:text-scarlet transition-colors"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
