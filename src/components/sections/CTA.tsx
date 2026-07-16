import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { empresa } from "@/lib/data/empresa";

export default function CTA() {
  return (
    <section className="relative bg-scarlet py-24 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bp-grid opacity-20" />
      <Container className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-paper/80 mb-4">
            Próximo passo
          </p>
          <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3.2rem)] leading-[1.04] text-paper text-balance">
            Fale direto com quem executa.
          </h2>
          <p className="mt-5 text-paper/85 text-base leading-relaxed">
            Envie localização, tipo de serviço e fotos do local para a RGR avaliar
            o melhor caminho.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Button
            href={`https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(
              "Olá! Gostaria de conversar com a RGR sobre uma obra em Osório, Atlântida Sul ou litoral norte."
            )}`}
            target="_blank"
            variant="outline-light"
            className="!border-paper !text-paper hover:!bg-paper hover:!text-scarlet"
            icon={false}
          >
            <span className="flex items-center gap-2">
              <MessageCircle size={16} /> Chamar no WhatsApp
            </span>
          </Button>
          <Button href="/#contato" variant="outline-light" className="!border-ink !bg-ink !text-paper hover:!bg-paper hover:!text-ink">
            Enviar detalhes
          </Button>
        </div>
      </Container>
    </section>
  );
}
