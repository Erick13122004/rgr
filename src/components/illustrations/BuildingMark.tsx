export default function BuildingMark({
  className = "",
  tone = "scarlet",
}: {
  className?: string;
  tone?: "scarlet" | "paper" | "ink";
}) {
  const fill =
    tone === "scarlet"
      ? "var(--color-scarlet)"
      : tone === "paper"
      ? "var(--color-paper)"
      : "var(--color-ink)";

  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 22L14 10L26 22V38H2V22Z" fill={fill} opacity="0.55" />
      <path d="M13 18L27 4L41 18V38H13V18Z" fill={fill} />
      <rect x="21" y="24" width="6" height="14" fill="var(--color-ink)" />
      <path d="M27 4L41 18H33L27 12L21 18H13L27 4Z" fill={fill} />
    </svg>
  );
}
