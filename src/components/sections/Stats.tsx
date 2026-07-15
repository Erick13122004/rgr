import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { numeros } from "@/lib/data/empresa";

export default function Stats() {
  return (
    <section id="numeros" className="relative bg-paper text-ink py-24 bp-grid-dim">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {numeros.map((n, i) => (
            <Reveal key={n.id} delay={i * 0.08}>
              <div className="border-l border-ink/15 pl-5">
                <p
                  className={`font-display leading-none text-bordeaux ${
                    typeof n.valor === "string"
                      ? "text-[clamp(1.65rem,4vw,2.6rem)]"
                      : "text-[clamp(2.2rem,5vw,3.6rem)]"
                  }`}
                >
                  <Counter value={n.valor} suffix={n.sufixo} />
                </p>
                <p className="mt-3 text-[13px] tracking-wide text-stone">{n.rotulo}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
