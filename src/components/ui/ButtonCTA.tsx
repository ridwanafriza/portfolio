import type { MouseEvent, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/**
 * SATU pola tombol untuk seluruh situs (DESIGN §3.1):
 * pill + lingkaran panah menempel (gap 2px).
 * Varian: dark (latar terang) · light (latar navy) · whatsapp (lingkaran ikon WA).
 */
type Props = {
  children: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  variant?: "dark" | "light";
  size?: "nav" | "md" | "lg";
  whatsapp?: boolean;
  className?: string;
  ariaLabel?: string;
};

const SIZES = {
  nav: { pill: "h-11 px-4 text-sm", circle: "h-11 w-11", icon: 18 },
  md: { pill: "h-[50px] px-8 text-[15px]", circle: "h-[50px] w-[50px]", icon: 20 },
  lg: { pill: "h-14 px-7 text-base", circle: "h-14 w-14", icon: 24 },
} as const;

const VARIANTS = {
  dark: "bg-fg text-[var(--on-fg)] hover:bg-accent hover:text-white",
  light: "bg-white text-[var(--on-white)] hover:bg-accent hover:text-white",
} as const;

export default function ButtonCTA({
  children,
  href,
  onClick,
  variant = "dark",
  size = "md",
  whatsapp = false,
  className = "",
  ariaLabel,
}: Props) {
  const s = SIZES[size];
  const color = VARIANTS[variant];
  const group = `group inline-flex items-center gap-[2px] ${className}`;
  const pill = `inline-flex items-center rounded-full font-medium transition-colors ${s.pill} ${color}`;
  const circle = `inline-flex shrink-0 items-center justify-center rounded-full transition-colors ${s.circle} ${color}`;

  const inner = (
    <>
      <span className={pill}>{children}</span>
      <span className={circle}>
        {whatsapp ? (
          <FaWhatsapp size={s.icon} aria-hidden="true" />
        ) : (
          <ArrowRight
            size={20}
            strokeWidth={1.5}
            className="transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        )}
      </span>
    </>
  );

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={group}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={group} aria-label={ariaLabel}>
      {inner}
    </button>
  );}
