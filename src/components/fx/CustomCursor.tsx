"use client";
import { useEffect, useRef } from "react";

/**
 * Custom cursor dot+ring (amandemen AGENTS §3.4 — keputusan pemilik 8 Nov 2026).
 * Hanya penanda tambahan: penanda posisi bawaan browser TETAP ada
 * (cursor tidak di-hidden). Hanya pointer presisi (mouse); mati di sentuh
 * dan saat prefers-reduced-motion (lihat media query di globals.css).
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("cursor-active");

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const target = e.target as Element | null;
      const interactive = !!target?.closest("a, button, input, textarea, select, [role='button']");
      document.documentElement.classList.toggle("cursor-hover", interactive);
    };

    // Ring mengikuti dengan jeda halus (lerp) — tanpa efek lain
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("cursor-active", "cursor-hover");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
