import type { ReactNode } from "react";

/**
 * Pill kaca (DESIGN §3.2): putih 70% + backdrop-blur, teks --fg 14px,
 * miring, saling menimpa — hanya untuk kartu biru Keahlian.
 */
export default function GlassPill({
  children,
  rotate = 0,
  className = "",
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-[var(--on-white)] backdrop-blur-md ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      {children}
    </span>
  );
}
