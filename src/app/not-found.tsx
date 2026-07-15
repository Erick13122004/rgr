import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BuildingMark from "@/components/illustrations/BuildingMark";

export default function NotFound() {
  return (
    <div className="min-h-[80svh] flex items-center bg-ink bp-grid pt-24">
      <Container className="text-center">
        <BuildingMark className="h-16 w-16 mx-auto mb-8" tone="scarlet" />
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet mb-4">
          Erro 404
        </p>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-paper">
          Esta página não foi encontrada.
        </h1>
        <p className="mt-5 text-mist max-w-md mx-auto">
          O conteúdo que você procura pode ter sido movido ou não existe mais.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button href="/">Voltar ao início</Button>
          <Link href="/obras" className="text-sm text-paper/70 hover:text-scarlet transition-colors">
            Ver obras
          </Link>
        </div>
      </Container>
    </div>
  );
}
