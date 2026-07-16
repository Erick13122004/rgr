import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <div
          className={`flex items-center gap-3 mb-5 ${isCenter ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-scarlet" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-scarlet">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`font-display font-semibold text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.04] text-balance ${
            light ? "text-ink" : "text-paper"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-[15px] md:text-base leading-relaxed ${
              light ? "text-stone" : "text-mist"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
