"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            className="section-label justify-center mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Keahlian
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Teknologi yang Saya{" "}
            <em style={{ color: "var(--accent)" }}>Kuasai</em>
          </motion.h2>
        </div>

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              className="p-6 rounded-2xl project-card"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + gi * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(200,169,110,0.12)" }}
                >
                  {(() => {
                    const Icon = group.icon;
                    return (
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[var(--accent)]"
                      />
                    );
                  })()}
                </span>
                <h3 className="font-medium" style={{ color: "var(--fg)" }}>
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="skill-pill"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + gi * 0.1 + si * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative bottom bar */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div
            className="h-px flex-1"
            style={{ background: "var(--border)" }}
          />
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--fg-muted)" }}
          >
            & terus berkembang
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "var(--border)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
