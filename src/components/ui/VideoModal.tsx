"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function VideoModal({
  open,
  onClose,
  titulo,
  descricao,
  src,
  poster,
}: {
  open: boolean;
  onClose: () => void;
  titulo: string;
  descricao?: string;
  src: string;
  poster?: string;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={titulo}
          className="fixed inset-0 z-[90] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Fechar vídeo"
            onClick={onClose}
            className="absolute inset-0 bg-ink/92 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <p className="font-display text-xl text-paper">{titulo}</p>
                {descricao && <p className="text-sm text-mist mt-1">{descricao}</p>}
              </div>
              <button
                onClick={onClose}
                aria-label="Fechar"
                className="p-2 border border-paper/20 hover:border-scarlet hover:text-scarlet transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-ink-soft border border-ink-line overflow-hidden">
              <video
                src={src}
                poster={poster}
                controls
                autoPlay
                playsInline
                className="h-full w-full bg-black object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
