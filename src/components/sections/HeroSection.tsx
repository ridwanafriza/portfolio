"use client";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { profile } from "@/lib/data";

const words = profile.name.split(" ");

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,110,${d.a})`;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(200,169,110,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.5 }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,169,110,0.10) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase"
            style={{ background: "rgba(200,169,110,0.12)", color: "var(--accent)", border: "1px solid rgba(200,169,110,0.3)" }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-2 align-middle" style={{ animation: "pulse 2s infinite" }} />
            Terbuka untuk Kolaborasi
          </span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-4">
          <h1 className="font-display font-medium leading-none" style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}>
            {words.map((word, wi) => (
              <span key={wi} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4 + wi * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ color: wi === 1 ? "var(--accent)" : "var(--fg)" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="font-mono text-sm md:text-base tracking-widest uppercase mb-8"
          style={{ color: "var(--fg-muted)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {profile.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-12"
          style={{ color: "var(--fg-muted)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          Mahasiswa D3 Teknologi Informasi yang passionate dalam{" "}
          <span style={{ color: "var(--accent)" }}>web development</span> dan{" "} berkomitmen membangun solusi digital yang bermakna.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <button
            className="btn-primary"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hubungi Saya
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button
            className="btn-outline"
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Lihat Proyek
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono transition-colors hover:text-accent"
            style={{ color: "var(--fg-muted)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.1-.77.42-1.29.76-1.59-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <span style={{ color: "var(--border)", userSelect: "none" }}>|</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono transition-colors hover:text-accent"
            style={{ color: "var(--fg-muted)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM6.9 20.45H3.55V9H6.9v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0z"/>
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--fg-muted)" }}>Scroll</span>
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
