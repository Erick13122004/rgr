"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SkylineDraw from "@/components/illustrations/SkylineDraw";
import { empresa } from "@/lib/data/empresa";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink">
      <div className="absolute inset-0 bp-grid opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-[55%] opacity-90">
        <SkylineDraw className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <Container className="relative z-10 pb-24 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-7"
        >
          <span className="h-px w-10 bg-scarlet" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet">
            {empresa.regiao} · trajetória desde {empresa.inicioTrajetoria}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.98] text-paper max-w-4xl text-balance"
        >
          Desde <span className="italic text-scarlet">2010</span>, construindo
          histórias com qualidade e confiança.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-7 max-w-lg text-base md:text-lg text-mist leading-relaxed"
        >
          Da primeira experiência no canteiro à entrega de obras completas:
          acompanhamento próximo, execução cuidadosa e atuação sólida em casas,
          projetos de maior porte e piscinas no litoral gaúcho.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/obras" variant="primary">
            Ver Obras
          </Button>
          <Button href="/#contato" variant="outline-light">
            Solicitar Orçamento
          </Button>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 border-t border-ink-line"
      >
        <Container className="flex items-center justify-between py-5">
          <span className="hidden sm:block font-mono text-[11px] tracking-[0.2em] uppercase text-mist">
            Role para conhecer a RGR
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-scarlet"
          >
            <ChevronDown size={20} />
          </motion.span>
        </Container>
      </motion.div>
    </section>
  );
}
