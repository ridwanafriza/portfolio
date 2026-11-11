import type { ReactNode } from "react";

/** Chip abu (DESIGN §3.2): --chip, r-full, 14px — dipakai di dalam kartu. */
export default function Chip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`chip ${className}`}>{children}</span>;
}
