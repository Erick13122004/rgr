import { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "outline-light" | "outline-dark" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  icon?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-scarlet text-paper hover:bg-bordeaux border border-scarlet hover:border-bordeaux",
  "outline-light":
    "bg-transparent text-paper border border-paper/30 hover:border-paper hover:bg-paper/5",
  "outline-dark":
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink/5",
  ghost: "bg-transparent text-paper hover:text-scarlet border border-transparent",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  icon = true,
  onClick,
  type = "button",
  target,
}: ButtonProps) {
  const classes = `group inline-flex items-center gap-2.5 px-7 py-3.5 text-[13px] tracking-[0.08em] uppercase font-medium transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
