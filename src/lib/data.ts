// ── CV Data for Ridwan Afriza Listiyono ────────────────────────────────────
// All data sourced directly from uploaded CV. No fabricated information.

import {
  Thermometer,
  Calculator,
  Utensils,
  Fan,
  Globe,
  Monitor,
  Code,
  Palette,
  Award,
  Medal,
} from "lucide-react";

export const profile = {
  name: "Ridwan Afriza Listiyono",
  tagline: "Mahasiswa D3 Teknologi Informasi",
  subtitle: "Web Developer & IT Enthusiast",
  about: `Mahasiswa aktif semester 4 program studi D3 Teknologi Informasi Politeknik Negeri Madiun yang tertarik mendalami pemrograman web dan serta aktif berorganisasi di UKM. Siap berkembang dan beradaptasi dengan lingkungan baru, serta berkomitmen untuk terus meningkatkan keterampilan teknis maupun soft skill demi mendukung karier di bidang teknologi informasi.`,
  phone: "+(62)858-1561-7098",
  email: "ridwanafriza05@gmail.com",
  location: "Magetan, Jawa Timur",
  linkedin: "https://www.linkedin.com/in/ridwanafriza",
  github: "https://github.com/ridwanafriza",
  whatsapp: "6285815617098",
} as const;

export const education = [
  {
    institution: "Politeknik Negeri Madiun",
    degree: "D3 Teknologi Informasi",
    period: "2024 – sekarang",
    note: "On-going, Semester 4",
  },
  {
    institution: "SMKN 1 Madiun",
    degree: "Teknik Kendaraan Ringan Otomotif",
    period: "2021 – 2024",
    note: null,
  },
];

export const experience = [
  {
    company: "PT Marstech Global",
    role: "Web Developer Intern",
    period: "5 Jan 2026 – Present",
    type: "it",
    tasks: [
      "Mengembangkan sistem informasi Human Resource (HR) berbasis web",
      "Membangun fitur manajemen data karyawan (CRUD)",
      "Mengimplementasikan autentikasi dan pengelolaan akun pengguna",
      "Mengintegrasikan API pada sistem HR",
      "Mendesain UI menggunakan HTML, CSS, dan Bootstrap",
      "Melakukan debugging dan pengujian sistem",
    ],
  },
  {
    company: "PT Gunung Mas Bersinar",
    role: "Body Fabrication Intern",
    period: "Jan 2023 – April 2023",
    type: "non-it",
    tasks: [
      "Membantu proses produksi dan perakitan karoseri bus",
      "Melakukan pengecekan kualitas komponen sesuai standar",
      "Bekerja sama dalam tim produksi",
    ],
  },
  {
    company: "Bengkel Eko Motor",
    role: "Teknisi Magang",
    period: "2022 – 2023",
    type: "non-it",
    tasks: [
      "Melakukan servis dan perawatan kendaraan",
      "Mendiagnosis masalah dasar pada kendaraan",
      "Membantu perbaikan dan penggantian komponen",
    ],
  },
];

export const projects = [
  {
    title: "Kalkulator Konverter Suhu",
    description:
      "Proyek mini sistem kalkulator konverter suhu menggunakan Kotlin untuk platform Android.",
    tech: ["Kotlin", "Android Studio"],
    category: "Mobile",
    icon: Thermometer,
  },
  {
    title: "Kalkulator Sederhana",
    description:
      "Proyek mini kalkulator sederhana berbasis web dengan tampilan bersih dan responsif.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    icon: Calculator,
  },
  {
    title: "Website CRUD Rumah Makan",
    description:
      "Website CRUD sederhana untuk manajemen data rumah makan dengan operasi Create, Read, Update, Delete.",
    tech: ["PHP", "MySQL"],
    category: "Web",
    icon: Utensils,
  },
  {
    title: "Simulasi Kipas Angin Otomatis",
    description:
      "Proyek mini IoT simulasi sistem kipas angin otomatis berbasis sensor suhu menggunakan platform Wokwi.",
    tech: ["IoT", "Wokwi", "Sensor Suhu"],
    category: "IoT",
    icon: Fan,
  },
];

export const skills = [
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    icon: Globe,
  },
  {
    category: "Linux & Networking",
    items: ["Linux (Dasar)", "Sistem Komunikasi Optik"],
    icon: Monitor,
  },
  {
    category: "Programming",
    items: ["Python (Basic)", "Kotlin (Basic)", "Android Studio"],
    icon: Code,
  },
  {
    category: "Design & Soft Skills",
    items: ["UI/UX Design", "Teamwork", "Communication"],
    icon: Palette,
  },
];

export const certifications = [
  {
    title: "Junior Web Developer (BNSP)",
    issuer: "Sertifikasi Kompetensi Nasional",
    year: "2025",
    icon: Award,
  },
  {
    title: "Code Generation and Optimization Using IBM Granite",
    issuer: "IBM SkillsBuild",
    year: "2025",
    icon: Medal,
  },
];

// Marquee items - derived from skills & profile
export const marqueeItems = [
  "Web Development",
  "PHP & MySQL",
  "HTML · CSS · JS",
  "Kotlin",
  "IoT Simulation",
  "Linux",
  "UI/UX Design",
  "Cloud Computing",
  "Android Studio",
  "Python",
];
