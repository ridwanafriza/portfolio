"use client";
import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scroll (amandemen AGENTS §3.4 — keputusan pemilik 8 Nov 2026).
 * Instansi singleton dipakai Navbar & BackToTop lewat scrollToId/scrollToTop
 * supaya navigasi ikut rasa scroll Lenis. Mati saat prefers-reduced-motion.
 */
let lenisInstance: Lenis | null = null;

function prefersReduced(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Scroll halus ke section (offset menghormati nav 72px + jarak 84px). */
export function scrollToId(href: string) {
  const el = document.querySelector<HTMLElement>(href);
  if (!el) return;
  if (lenisInstance && !prefersReduced()) {
    lenisInstance.scrollTo(el, { offset: -84 });
  } else {
    el.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth" });
  }
}

/** Kembali ke puncak halaman. */
export function scrollToTop() {
  if (lenisInstance && !prefersReduced()) {
    lenisInstance.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: prefersReduced() ? "auto" : "smooth" });
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReduced()) return;

    const instance = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisInstance = instance;

    let frame = 0;
    const raf = (time: number) => {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      instance.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
