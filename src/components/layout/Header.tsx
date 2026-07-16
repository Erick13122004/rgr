"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { empresa } from "@/lib/data/empresa";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/obras", label: "Obras" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-ink-line"
          : "bg-gradient-to-b from-ink/70 to-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-20">
        <Link href="/" className="flex items-center group" aria-label="RGR Construtora">
          <Image
            src="/brand/logo-rgr-header.png"
            alt="RGR Construtora"
            width={535}
            height={420}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.04em] text-paper/80 hover:text-scarlet transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`https://wa.me/${empresa.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] text-paper/85 hover:text-scarlet transition-colors"
          >
            <MessageCircle size={16} className="text-scarlet" />
            {empresa.telefoneExibicao}
          </a>
          <Button href="/#contato" variant="primary" className="!py-3">
            Solicitar orçamento
          </Button>
        </div>

        <button
          className="lg:hidden text-paper p-2"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={26} />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container className="flex items-center justify-between h-20">
              <Link
                href="/"
                className="flex items-center"
                aria-label="RGR Construtora"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/brand/logo-rgr-header.png"
                  alt="RGR Construtora"
                  width={535}
                  height={420}
                  priority
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <button
                className="text-paper p-2"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={26} />
              </button>
            </Container>
            <Container className="flex flex-col gap-1 mt-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 border-b border-ink-line font-display text-2xl text-paper hover:text-scarlet transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <Button href="/#contato" onClick={() => setOpen(false)}>
                  Solicitar orçamento
                </Button>
                <a
                  href={`https://wa.me/${empresa.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-paper/80"
                >
                  <MessageCircle size={18} className="text-scarlet" />
                  {empresa.telefoneExibicao}
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
