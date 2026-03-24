"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, GraduationCap, Award } from "lucide-react";
import { profile, education, certifications } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left — portrait placeholder + stats */}
        <motion.div
          className="relative"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
        >
          {/* Avatar placeholder */}
          <div className="relative w-full max-w-sm mx-auto aspect-[4/5]">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,169,110,0.15) 0%, rgba(13,13,13,0.05) 100%)",
                border: "1px solid var(--border)",
              }}
            />
            {/* Monogram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-display text-9xl font-medium"
                style={{ color: "var(--accent)", opacity: 0.3 }}
              >
                RA
              </span>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                className="font-mono text-xs"
                style={{ color: "var(--fg-muted)" }}
              >
                Semester
              </p>
              <p
                className="font-display text-2xl font-medium"
                style={{ color: "var(--accent)" }}
              >
                4
              </p>
            </div>

            {/* Location badge */}
            <div
              className="absolute -top-4 -left-4 px-4 py-2 rounded-xl flex items-center gap-2"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                backdropFilter: "blur(12px)",
              }}
            >
              <MapPin size={16} strokeWidth={1.5} />
              <span
                className="font-mono text-xs"
                style={{ color: "var(--fg-muted)" }}
              >
                {profile.location}
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[
              { label: "Proyek", value: "4+" },
              { label: "Sertifikasi", value: "2" },
              { label: "Pengalaman", value: "1" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center p-4 rounded-xl"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="font-display text-2xl font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  {s.value}
                </p>
                <p
                  className="font-mono text-xs mt-1"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — bio + education */}
        <div>
          <motion.p
            className="section-label mb-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
          >
            Tentang Saya
          </motion.p>

          <motion.h2
            className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
          >
            Membangun Digital,{" "}
            <em style={{ color: "var(--accent)" }}>Belajar Tanpa Batas</em>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ color: "var(--fg-muted)" }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={3}
          >
            {profile.about}
          </motion.p>

          {/* Education */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={4}
          >
            <p
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Pendidikan
            </p>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(200,169,110,0.12)",
                      color: "var(--accent)",
                      fontSize: "1rem",
                    }}
                  >
                    <GraduationCap size={16} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-medium text-sm"
                      style={{ color: "var(--fg)" }}
                    >
                      {edu.institution}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {edu.degree}
                    </p>
                    {edu.note && (
                      <span
                        className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-mono"
                        style={{
                          background: "rgba(200,169,110,0.1)",
                          color: "var(--accent)",
                        }}
                      >
                        {edu.note}
                      </span>
                    )}
                  </div>
                  <p
                    className="font-mono text-xs flex-shrink-0"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certs */}
          <motion.div
            className="mt-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={5}
          >
            <p
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Sertifikasi
            </p>
            <div className="space-y-3">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;

                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="flex-shrink-0 text-[var(--accent)]"
                    />

                    <div className="flex-1 min-w-0">
                      <p
                        className="font-medium text-sm truncate"
                        style={{ color: "var(--fg)" }}
                      >
                        {cert.title}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {cert.issuer}
                      </p>
                    </div>

                    <span
                      className="font-mono text-xs flex-shrink-0"
                      style={{ color: "var(--accent)" }}
                    >
                      {cert.year}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
