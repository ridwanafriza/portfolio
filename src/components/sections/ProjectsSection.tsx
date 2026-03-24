"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { projects } from "@/lib/data";

const categories = ["Semua", "Web", "Mobile", "IoT"];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 md:py-36 relative">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--bg-alt)" }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-12" ref={ref}>
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Proyek
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 justify-between">
            <motion.h2
              className="font-display text-4xl md:text-5xl font-medium leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Karya & <em style={{ color: "var(--accent)" }}>Proyek Kuliah</em>
            </motion.h2>

            {/* Filter pills */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-200"
                  style={{
                    background:
                      activeCategory === cat
                        ? "var(--accent)"
                        : "var(--card-bg)",
                    color:
                      activeCategory === cat ? "#0d0d0d" : "var(--fg-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              className="group p-7 rounded-2xl project-card cursor-default"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "rgba(200,169,110,0.12)" }}
                >
                  {(() => {
                    const Icon = project.icon;
                    return (
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[var(--accent)]"
                      />
                    );
                  })()}
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono"
                  style={{
                    background: "rgba(200,169,110,0.1)",
                    color: "var(--accent)",
                    border: "1px solid rgba(200,169,110,0.2)",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <h3
                className="font-display text-xl font-medium mb-2"
                style={{ color: "var(--fg)" }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--fg-muted)" }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono"
                    style={{
                      background: "rgba(13,13,13,0.05)",
                      color: "var(--fg-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Arrow indicator on hover */}
              <div
                className="mt-4 flex items-center gap-2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "var(--accent)" }}
              >
                <span>Proyek Kuliah</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-center mt-10 text-sm font-mono"
          style={{ color: "var(--fg-muted)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Semua proyek merupakan karya kuliah dan pribadi selama studi.
        </motion.p>
      </div>
    </section>
  );
}
