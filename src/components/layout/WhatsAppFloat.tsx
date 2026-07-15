"use client";

import { MessageCircle } from "lucide-react";
import { empresa } from "@/lib/data/empresa";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(
        "Olá! Gostaria de solicitar um orçamento com a RGR Construtora."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-scarlet text-paper h-14 w-14 hover:w-56 rounded-full overflow-hidden shadow-[0_8px_30px_rgba(200,29,51,0.35)] transition-all duration-300 group"
    >
      <span className="h-14 w-14 flex items-center justify-center shrink-0">
        <MessageCircle size={24} />
      </span>
      <span className="whitespace-nowrap text-sm font-medium pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Falar no WhatsApp
      </span>
    </a>
  );
}
