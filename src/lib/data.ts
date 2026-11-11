// ── CV Data for Ridwan Afriza Listiyono ────────────────────────────────────
// Satu-satunya sumber konten (AGENTS.md §2.6). Isi hanya fakta nyata —
// jangan mengarang angka, klien, atau klaim.

export const profile = {
  name: "Ridwan Afriza Listiyono",
  nickname: "Iwan",
  greeting: "Halo, saya Ridwan Afriza Listiyono.",
  headline: "Web, Mobile & UI/UX Designer",
  // Statement About — boleh menyinggung latar teknik otomotif sebagai cara
  // berpikir sistematis (CONTENT.md §5), tanpa klaim baru.
  about:
    "Latar teknik otomotif membuat saya terbiasa berpikir sistematis. Saya membangun aplikasi web dan mobile serta merancang antarmuka UI/UX yang menjawab kebutuhan nyata efektif, terstruktur, dan mudah digunakan.",
  email: "ridwanafriza09@gmail.com",
  linkedin: "https://www.linkedin.com/in/ridwanafriza/",
  github: "https://github.com/ridwanafriza",
  instagram: "https://instagram.com/ridwan_afrizaa",
  // Nomor asli (diberikan pemilik 9 Nov 2026) — format 62 tanpa +/spasi/strip.
  whatsapp: "6285815617098",
} as const;

/** Link Click-to-Chat WhatsApp resmi (ketentuan tugas butir 4). */
export const waLink = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
  "Halo Ridwan, saya melihat portofolio kamu dan ingin berdiskusi.",
)}`;

/**
 * Sumber tunggal ikon sosial (CONTENT §4, DESIGN §3.5).
 * Entri tanpa `href` tidak dirender. Hero hanya memakai `linkedin` & `github`.
 */
export const socials = [
  { id: "whatsapp", label: "WhatsApp", href: waLink },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin },
  { id: "github", label: "GitHub", href: profile.github },
  { id: "instagram", label: "Instagram", href: profile.instagram },
  { id: "email", label: "Email", href: `mailto:${profile.email}` },
] as const;

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

export const interests = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
];
export const hobbies = [
  "Membangun proyek web",
  "Membangun aplikasi mobile",
  "Desain antarmuka",
];

export const skills = [
  {
    category: "Frontend",
    items: ["Next.js", "TypeScript", "PrimeReact", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Laravel", "Filament", "Express.js"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "Linux (Dasar)"],
  },
  {
    category: "Mobile & Tools",
    items: ["Flutter/Dart", "Kotlin", "Android Studio", "Git"],
  },
];

export const projects = [
  {
    title: "MyBakery Inventory",
    description:
      "Sistem manajemen stok bahan baku bakery multi-cabang. Pantau stok real-time, kelola beberapa cabang, dan lihat laporan otomatis lengkap dengan grafik.",
    tech: ["Next.js", "Tailwind CSS", "Recharts"],
    category: "Web",
    image: "/screens/my-bakery.png" as string | null,
    // Live site (diberikan pemilik 10 Nov 2026).
    url: "https://mybakery-inventory.vercel.app" as string | null,
  },
  {
    title: "Bramjono Transwisata",
    description:
      "Situs layanan wisata multi-halaman — open trip, custom trip, dan sewa travel — dengan pencarian paket, galeri, serta panel admin dan superadmin.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image: "/screens/bramjono.webp" as string | null,
    // Live site (diberikan pemilik 11 Nov 2026).
    url: "https://ridwanafriza.github.io/prototype-travel/" as string | null,
  },
  {
    title: "Timelyst",
    description:
      "Aplikasi mobile yang membantu sadari waktu yang terbuang dan mengatur kembali fokusmu. Prototipe Figma dengan alur onboarding, pagination, dan tombol skip/next.",
    tech: ["Figma"],
    category: "Mobile",
    image: "/screens/timelyst.png" as string | null,
    // Prototipe Figma (diberikan pemilik 10 Nov 2026).
    url: "https://www.figma.com/proto/ku1WmLXNAXOuF0b3qNc1K7/Timelyst.?node-id=604-1138&p=f&viewport=1049%2C243%2C0.45&t=YGD2q5706vp9Rqjt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=604%3A1138&show-proto-sidebar=1&page-id=" as string | null,
  },
  {
    title: "Kalkulator Konverter Suhu",
    description:
      "Aplikasi Android untuk mengonversi satuan suhu. Dibangun dengan Kotlin di Android Studio.",
    tech: ["Kotlin", "Android Studio"],
    category: "Mobile",
    image: null as string | null,
    url: null as string | null,
  },
  {
    title: "Kalkulator Sederhana",
    description:
      "Kalkulator berbasis web dengan tampilan bersih dan responsif untuk kebutuhan hitung harian.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image: null as string | null,
    url: null as string | null,
  },
  {
    title: "Website CRUD Rumah Makan",
    description:
      "Website pengelolaan data rumah makan — operasi tambah, ubah, hapus, dan tampil data dalam satu antarmuka.",
    tech: ["PHP", "MySQL"],
    category: "Web",
    image: null as string | null,
    url: null as string | null,
  },
];

export const certifications = [
  {
    title: "Junior Web Developer (BNSP)",
    issuer: "Sertifikasi Kompetensi Nasional",
    year: "2025",
  },
  {
    title: "Code Generation and Optimization Using IBM Granite",
    issuer: "IBM SkillsBuild",
    year: "2025",
  },
];

export const experience = [
  {
    org: "PT Marstech Global",
    role: "Web Developer Intern",
    period: "5 Jan 2026 – 30 Jun 2026",
    tasks: [
      "Mengembangkan sistem informasi Human Resource (HR) berbasis web",
      "Membangun fitur manajemen data karyawan (CRUD)",
      "Mengimplementasikan autentikasi dan pengelolaan akun pengguna",
      "Mengintegrasikan API pada sistem HR",
      "Mendesain UI menggunakan Next JS dan PrimeReact",
      "Melakukan debugging dan pengujian sistem",
    ],
  },
];

/** Stat hero — diturunkan dari data di atas, bukan angka karangan. */
export const stats = [
  { label: ["Proyek yang", "dikerjakan"], value: `${projects.length}+` },
  { label: ["Sertifikat", "diraih"], value: `${certifications.length}` },
];
