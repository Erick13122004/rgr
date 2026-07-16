"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { empresa } from "@/lib/data/empresa";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink">
      <Image
        src="/hero/fachada-concluida.webp"
        alt="Fachada de residência contemporânea executada pela RGR Construtora"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <div className="absolute inset-0 bg-ink/10" />

      <Container className="relative z-10 pb-24 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-7"
        >
          <span className="h-px w-10 bg-scarlet" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet">
            {empresa.regiao} · obras residenciais
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold text-[clamp(2.8rem,7vw,6.2rem)] leading-[0.95] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] max-w-4xl text-balance"
        >
          Obra residencial executada com controle do início à entrega.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-7 max-w-lg text-base md:text-lg text-white/85 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
        >
          Casas, reformas, piscinas e acabamentos no litoral norte, com
          acompanhamento direto de Rodrigo Guimarães.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/obras" variant="primary">
            Ver obras reais
          </Button>
          <Button href="/#contato" variant="outline-light">
            Falar com Rodrigo
          </Button>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 border-t border-paper/10"
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
