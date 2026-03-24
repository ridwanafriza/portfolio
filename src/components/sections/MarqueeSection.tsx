"use client";
import { marqueeItems } from "@/lib/data";

const allItems = [...marqueeItems, ...marqueeItems];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="marquee-track py-3">
      <div className={`marquee-inner ${reverse ? "reverse" : ""}`}>
        {allItems.concat(allItems).map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6 font-mono text-sm tracking-widest uppercase whitespace-nowrap"
            style={{ color: i % 3 === 0 ? "var(--accent)" : "var(--fg-muted)" }}
          >
            {item}
            <span style={{ color: "var(--accent)", opacity: 0.4 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="py-8 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      {/* Left / right fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
      />

      <MarqueeRow />
      <MarqueeRow reverse />
    </section>
  );
}
