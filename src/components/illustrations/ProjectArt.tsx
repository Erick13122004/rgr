const variants = [
  // 0 — casa térrea com telhado
  (
    <>
      <path d="M40 190 V110 H180 V190" />
      <path d="M40 110 L110 60 L180 110" />
      <rect x="95" y="140" width="30" height="50" />
      <rect x="60" y="130" width="20" height="20" />
      <rect x="140" y="130" width="20" height="20" />
      <path d="M0 190 H220" strokeOpacity={0.5} />
    </>
  ),
  // 1 — sobrado duplex
  (
    <>
      <path d="M30 190 V70 H120 V190" />
      <path d="M120 190 V100 H190 V190" />
      <rect x="50" y="90" width="18" height="18" />
      <rect x="85" y="90" width="18" height="18" />
      <rect x="50" y="130" width="18" height="18" />
      <rect x="140" y="120" width="18" height="18" />
      <rect x="95" y="150" width="24" height="40" />
      <path d="M0 190 H220" strokeOpacity={0.5} />
    </>
  ),
  // 2 — edifício vertical
  (
    <>
      <rect x="70" y="30" width="80" height="160" />
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 3 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={82 + c * 24} y={44 + r * 24} width="14" height="14" />
        ))
      )}
      <path d="M0 190 H220" strokeOpacity={0.5} />
    </>
  ),
  // 3 — galpão / comercial
  (
    <>
      <path d="M20 190 V110 L110 65 L200 110 V190" />
      <path d="M20 110 H200" />
      <rect x="45" y="140" width="40" height="50" />
      <rect x="135" y="140" width="40" height="50" />
      <path d="M0 190 H220" strokeOpacity={0.5} />
    </>
  ),
  // 4 — obra em construção (guindaste)
  (
    <>
      <path d="M40 190 V120 H160 V190" strokeDasharray="4 4" />
      <path d="M150 190 V60 M150 60 H210 M150 85 L180 60 M200 60 V85" />
      <path d="M0 190 H220" strokeOpacity={0.5} />
    </>
  ),
];

export default function ProjectArt({
  variant = 0,
  className = "",
}: {
  variant?: number;
  className?: string;
}) {
  const v = variants[variant % variants.length];
  return (
    <svg
      viewBox="0 0 220 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {v}
    </svg>
  );
}
