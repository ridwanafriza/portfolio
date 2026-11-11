/**
 * Section label (DESIGN §3.3): ikon panah diagonal + teks 14px/500.
 * Bukan mono, bukan uppercase. Ikon panah = bahasa visual tombol (lingkaran
 * panah), bukan bintang 6 sudut seperti referensi. `onDark` → putih penuh.
 */
export default function SectionLabel({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <p className={`section-label${onDark ? " on-dark" : ""}`}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Panah diagonal ke kanan-atas */}
        <path d="M3.5 10.5 10.5 3.5" />
        <path d="M4.75 3.5h5.75v5.75" />
      </svg>
      {children}
    </p>
  );
}
