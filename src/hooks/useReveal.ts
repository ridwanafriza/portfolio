"use client";
import { useEffect, useRef, useState } from "react";

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function useRevealList(count: number, threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            setVisibleIndex(i);
            i++;
            if (i >= count) clearInterval(interval);
          }, 100);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, threshold]);

  return { ref, visibleIndex };
}
