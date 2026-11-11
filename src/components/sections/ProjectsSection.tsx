"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";
import type { projects as ProjectsType } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

type Project = (typeof ProjectsType)[number];

/**
 * Konfigurasi thumbnail (public/screens/*.png): dimensi asli untuk rasio
 * intrinsik next/image + cara pas di slot 16:10 (DESIGN §5.4).
 * Screenshot lebar (dashboard) pakai `contain` agar tampilan utuh tidak terpotong.
 */
const THUMB: Record<string, { w: number; h: number; fit?: "cover" | "contain" }> = {
  "/screens/timelyst.png": { w: 1674, h: 949 },
  "/screens/my-bakery.png": { w: 1919, h: 996, fit: "contain" },
  "/screens/bramjono.webp": { w: 1919, h: 990, fit: "contain" },
};

/** Media kosong (tanpa screenshot): gradasi biru + mock UI sederhana (DESIGN §5.4). */
function MockWindow() {
  return (
    <div
      className="absolute inset-x-[14%] top-[22%] bottom-0 rounded-t-2xl p-4 md:p-5"
      style={{ background: "var(--surface)", boxShadow: "var(--shadow-sm)" }}
      aria-hidden="true"
    >
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--border)" }} />
      </div>
      <div className="mt-3 h-3 w-1/2 rounded-full" style={{ background: "var(--border)" }} />
      <div className="mt-3 h-2 w-5/6 rounded-full" style={{ background: "var(--border)" }} />
      <div className="mt-2 h-2 w-2/3 rounded-full" style={{ background: "var(--border)" }} />
      <div className="mt-3 grid grid-cols-3 gap-2">
        <span className="h-8 rounded-md" style={{ background: "var(--accent-soft)" }} />
        <span className="h-8 rounded-md" style={{ background: "var(--accent-soft)" }} />
        <span className="h-8 rounded-md" style={{ background: "var(--accent-soft)" }} />
      </div>
      <div className="mt-3 h-7 w-24 rounded-full" style={{ background: "var(--accent)" }} />
    </div>
  );
}

/** Blok media 16:10 — screenshot / mock, + lingkaran panah bila punya URL. */
function Media({ project, sizes }: { project: Project; sizes: string }) {
  const thumb = project.image ? THUMB[project.image] : undefined;

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-[18px] ${
        project.image ? "" : "project-visual"
      }`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`Tampilan proyek ${project.title}`}
          width={thumb?.w ?? 1200}
          height={thumb?.h ?? 900}
          sizes={sizes}
          className={`h-full w-full ${
            thumb?.fit === "contain" ? "object-contain" : "object-cover"
          }`}
        />
      ) : (
        <MockWindow />
      )}

      {project.url && (
        <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-surface text-fg shadow-sm transition-colors group-hover:bg-accent group-hover:text-white">
          <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
        </span>
      )}
    </div>
  );
}

/** Chip teknologi — pil outline. */
function Chips({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full border border-line px-3 py-1 text-[13px] font-medium text-fg-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Meta: kategori kiri · nomor urut kanan. */
function Meta({ project, index }: { project: Project; index: number }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <p className="text-[13px] font-medium text-fg-muted">{project.category}</p>
      <span className="text-sm tabular text-[var(--number-ghost)]" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

/**
 * Proyek — semua kartu SERAGAM (permintaan pemilik 11 Nov: "disamakan"):
 * header pola A (label kiri · H2 kanan rata kiri, sama seperti About &
 * Pengalaman) + grid 2 kolom **container penuh 1140px** — tiap kartu ≈ 2×
 * lebih besar dari versi kolom 8/12.
 */
export default function ProjectsSection() {
  const ref = useRef(null);
  // once:false — animasi mengulang tiap section masuk layar (permintaan 11 Nov)
  const inView = useInView(ref, { once: false, margin: "-10%" });

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.6, ease },
  });

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32">
      <div className="wrap">
        {/* Header pola A — label kiri · H2 kanan rata kiri (konsisten dengan
            About & Pengalaman; "disamakan" atas permintaan pemilik 11 Nov) */}
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-x-6">
          <motion.div className="lg:col-span-4" {...rise(0)}>
            <SectionLabel>Proyek</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.025em] lg:col-span-8"
            {...rise(0.06)}
          >
            Karya dari kelas dan proyek pribadi.
          </motion.h2>
        </div>

        {/* Semua kartu SERAGAM — 2 kolom lebar penuh (tidak ada kartu unggulan
            dengan ukuran berbeda, supaya rapi) */}
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article key={project.title} className="group" {...rise(0.22 + i * 0.08)}>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka proyek ${project.title} (tab baru)`}
                  className="block"
                >
                  <Media project={project} sizes="(min-width: 640px) 50vw, 100vw" />
                </a>
              ) : (
                <Media project={project} sizes="(min-width: 640px) 50vw, 100vw" />
              )}

              <div className="mt-5">
                <Meta project={project} index={i} />
              </div>

              <h3 className="mt-1 text-[clamp(1.375rem,2vw,1.75rem)] font-medium leading-snug tracking-[-0.02em]">
                {project.title}
              </h3>

              <div className="mt-4">
                <Chips tech={project.tech} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
