"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/lib/data";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const steps = [20, 45, 65, 80, 100];
    let idx = 0;
    const tick = () => {
      if (idx < steps.length) {
        setProgress(steps[idx]);
        idx++;
        setTimeout(tick, idx === steps.length ? 300 : 220 + Math.random() * 180);
      } else {
        setTimeout(() => setDone(true), 500);
      }
    };
    setTimeout(tick, 200);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.87, 0, 0.13, 1] } }}
        >
          {/* Big initials */}
          <motion.p
            className="font-display text-7xl md:text-9xl font-medium"
            style={{ color: "var(--accent)", lineHeight: 1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            RA
          </motion.p>

          <motion.p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--fg-muted)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
          >
            {profile.name}
          </motion.p>

          {/* Progress bar */}
          <div className="preloader-bar">
            <div className="preloader-fill" style={{ width: `${progress}%` }} />
          </div>

          <p
            className="font-mono text-xs"
            style={{ color: "var(--fg-muted)", fontVariantNumeric: "tabular-nums" }}
          >
            {String(progress).padStart(3, "0")}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
