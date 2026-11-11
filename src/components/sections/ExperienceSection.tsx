"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";
import Chip from "@/components/ui/Chip";
import { experience } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Pengalaman — **komposisi dimodifikasi dari referensi** (ATM):
 * referensi memakai kartu bertumpuk; versi ini memakai **baris hairline**
 * (peran + organisasi + poin di kiri, chip periode di kanan) tanpa kartu —
 * lebih ramping, dan konsisten dengan larangan "semua elemen dibungkus kartu".
 */
export default function ExperienceSection() {
  const ref = useRef(null);
  // once:false — animasi mengulang tiap section masuk layar (permintaan 11 Nov)
  const inView = useInView(ref, { once: false, margin: "-15%" });

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.6, ease },
  });

  return (
    <section id="experience" ref={ref} className="section-alt bg-bg-alt py-24 md:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-x-6">
        {/* Kiri: label */}
        <motion.div className="lg:col-span-4" {...rise(0)}>
          <SectionLabel>Pengalaman</SectionLabel>
        </motion.div>

        <div className="lg:col-span-8">
          <motion.h2
            className="mb-10 text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.025em]"
            {...rise(0.08)}
          >
            Pengalaman magang sebagai Web Developer.
          </motion.h2>

          {/* Baris hairline — bukan kartu */}
          <div className="border-t border-line">
            {experience.map((job, i) => (
              <motion.article
                key={job.org}
                className="grid gap-3 border-b border-line py-7 md:grid-cols-[1fr_auto] md:items-start md:gap-8"
                {...rise(0.16 + i * 0.08)}
              >
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted">{job.org}</p>

                  <ul className="mt-4 space-y-2">
                    {job.tasks.slice(0, 3).map((task) => (
                      <li
                        key={task}
                        className="text-[15px] leading-relaxed text-fg-muted"
                      >
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                {job.period && (
                  <Chip className="w-fit shrink-0 md:mt-1">{job.period}</Chip>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
