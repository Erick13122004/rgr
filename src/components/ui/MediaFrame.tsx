import { ReactNode } from "react";

export default function MediaFrame({
  children,
  ratio = "aspect-[4/5]",
  className = "",
  corner = true,
}: {
  children?: ReactNode;
  ratio?: string;
  className?: string;
  corner?: boolean;
}) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden bg-ink-soft border border-ink-line ${className}`}
    >
      <div className="absolute inset-0 bp-grid" />
      <div className="absolute inset-0 flex items-center justify-center text-paper/70">
        {children}
      </div>
      {corner && (
        <>
          <span className="absolute top-3 left-3 h-3 w-3 border-t border-l border-scarlet/70" />
          <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-scarlet/70" />
        </>
      )}
    </div>
  );
}
