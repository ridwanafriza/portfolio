"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="experience" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            className="section-label justify-center mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Pengalaman
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Perjalanan{" "}
            <em style={{ color: "var(--accent)" }}>Profesional</em>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 w-px h-full"
            style={{ background: "linear-gradient(to bottom, transparent, var(--accent), transparent)", opacity: 0.35, marginLeft: "1.75rem" }}
          />

          {experience.map((job, i) => (
            <motion.div
              key={i}
              className="relative pl-16 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Dot on timelinee */}
              <div
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full ml-[1.15rem]"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 0 4px var(--bg), 0 0 0 5px var(--accent)",
                }}
              />

              {/* Card */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-medium" style={{ color: "var(--fg)" }}>
                      {job.role}
                    </h3>
                    <p className="text-xs font-mono opacity-70">
                      {job.type === "it" ? " IT Experience" : " Technical Experience"}
                    </p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "var(--accent)" }}>
                      {job.company}
                    </p>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono self-start whitespace-nowrap"
                    style={{ background: "rgba(200,169,110,0.1)", color: "var(--accent)" }}
                  >
                    {job.period}
                  </span>
                </div>

                {/* Tasks */}
                <ul className="space-y-2">
                  {job.tasks.map((task, ti) => (
                    <li key={ti} className="flex items-start gap-3 text-sm" style={{ color: "var(--fg-muted)" }}>
                      <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* "Selanjutnya" placeholder */}
          <motion.div
            className="relative pl-16"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div
              className="absolute left-0 top-1.5 w-4 h-4 rounded-full ml-[1.15rem]"
              style={{
                background: "var(--bg)",
                border: "2px dashed var(--accent)",
                opacity: 0.5,
              }}
            />
            <div
              className="p-5 rounded-2xl"
              style={{ background: "var(--card-bg)", border: "1px dashed var(--border)", opacity: 0.6 }}
            >
              <p className="font-mono text-sm" style={{ color: "var(--fg-muted)" }}>
                ✨ Pengalaman berikutnya sedang dalam perjalanan...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
