# 🎨 Portfolio — Ridwan Afriza Listiyono

Website portfolio personal premium berbasis **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Motion (Framer Motion v11)**, dan **Lenis** smooth scroll.

---

## ✨ Fitur

- **Preloader** animasi dengan progress bar
- **Custom cursor** dengan efek hover
- **Smooth scroll** via Lenis
- **Dark / Light mode** toggle dengan persistence
- **Navbar sticky** responsif dengan mobile menu fullscreen
- **Hero Section** dengan particle canvas + animasi stagger
- **About Section** dengan education & sertifikasi cards
- **Marquee** teks berjalan dua arah
- **Skills Section** dengan filter & pill animasi
- **Projects Section** dengan filter kategori & hover card
- **Experience Section** dengan timeline animasi
- **Contact Section** dengan form, peta Magetan, dan WhatsApp CTA
- **Footer** minimalis
- **Noise texture overlay** untuk kesan premium
- **Scroll reveal** pada semua section
- Fully **responsive** (mobile, tablet, desktop)

---

## 📦 Prasyarat

Pastikan sudah terinstall:

| Tool | Versi Minimum |
|------|--------------|
| [Node.js](https://nodejs.org) | **18.17** atau lebih baru |
| npm | **9.x** atau lebih baru |

Cek versi yang terpasang:
```bash
node -v
npm -v
```

---

## 🚀 Instalasi Lengkap (Step by Step)

### Langkah 1 — Clone / Extract Project

Jika menggunakan ZIP yang diunduh:
```bash
# Extract ZIP ke folder pilihan Anda, lalu masuk ke direktori project
cd ridwan-portfolio
```

Jika menggunakan Git (opsional):
```bash
git clone <repo-url>
cd ridwan-portfolio
```

---

### Langkah 2 — Install Dependensi

```bash
npm install
```

Proses ini akan mengunduh semua package yang dibutuhkan:
- `next` — Framework React
- `motion` — Animasi (Framer Motion v11)
- `lenis` — Smooth scroll
- `tailwindcss` — CSS utility framework
- Dan lainnya...

> ⏳ Proses install biasanya memakan waktu 1–3 menit tergantung koneksi internet.

---

### Langkah 3 — Jalankan Development Server

```bash
npm run dev
```

Buka browser dan akses:
```
http://localhost:3000
```

Anda akan melihat portfolio berjalan secara lokal! 🎉

---

### Langkah 4 — (Opsional) Build untuk Production

```bash
npm run build
```

Lalu jalankan versi production:
```bash
npm start
```

---

## 📁 Struktur Project

```
ridwan-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (fonts, metadata, providers)
│   │   └── page.tsx            ← Halaman utama (merakit semua section)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      ← Navigasi sticky + dark mode toggle
│   │   │   ├── Footer.tsx      ← Footer minimalis
│   │   │   └── SmoothScroll.tsx← Lenis smooth scroll provider
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      ← Halaman utama dengan particle canvas
│   │   │   ├── AboutSection.tsx     ← Tentang saya, pendidikan, sertifikasi
│   │   │   ├── SkillsSection.tsx    ← Keahlian dengan pill animasi
│   │   │   ├── MarqueeSection.tsx   ← Teks berjalan dua arah
│   │   │   ├── ProjectsSection.tsx  ← Proyek dengan filter kategori
│   │   │   ├── ExperienceSection.tsx← Timeline pengalaman kerja
│   │   │   └── ContactSection.tsx   ← Form kontak + peta + WhatsApp
│   │   └── ui/
│   │       ├── CustomCursor.tsx     ← Custom cursor dengan efek hover
│   │       ├── Preloader.tsx        ← Loading screen animasi
│   │       └── ThemeToggle.tsx      ← Toggle dark/light mode
│   ├── hooks/
│   │   └── useReveal.ts        ← Hook scroll reveal
│   ├── lib/
│   │   └── data.ts             ← Data CV (edit di sini untuk update konten)
│   └── styles/
│       └── globals.css         ← CSS global, design tokens, animasi
├── public/                     ← Aset statis (tambahkan foto profil di sini)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ✏️ Cara Mengubah Konten

Semua data CV tersimpan di satu file:

```
src/lib/data.ts
```

Edit file tersebut untuk mengubah:
- **Nama, email, telepon, lokasi** → objek `profile`
- **Pendidikan** → array `education`
- **Pengalaman kerja** → array `experience`
- **Proyek** → array `projects`
- **Keahlian** → array `skills`
- **Sertifikasi** → array `certifications`
- **Marquee items** → array `marqueeItems`

---

## 🖼️ Menambahkan Foto Profil

1. Siapkan foto dengan rasio **4:5** (portrait), format `.jpg` atau `.webp`
2. Simpan di folder `public/` dengan nama `avatar.jpg`
3. Buka `src/components/sections/AboutSection.tsx`
4. Ganti bagian monogram RA dengan:

```tsx
import Image from "next/image";

// Ganti blok <div className="absolute inset-0 flex items-center justify-center">
// dengan:
<Image
  src="/avatar.jpg"
  alt="Ridwan Afriza Listiyono"
  fill
  className="object-cover rounded-2xl"
  priority
/>
```

---

## 🌐 Deploy ke Vercel (Gratis)

1. Daftar / login di [vercel.com](https://vercel.com)
2. Klik **"Add New Project"**
3. Import repository GitHub Anda (push project ini ke GitHub terlebih dahulu)
4. Klik **Deploy** — Vercel otomatis mendeteksi Next.js

Website Anda akan live di URL seperti:
```
https://ridwan-portfolio.vercel.app
```

---

## 🌐 Deploy ke Netlify (Alternatif)

```bash
npm run build
```

Upload folder `.next` ke Netlify, atau gunakan Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

---

## 🐛 Troubleshooting

### Error: `Module not found`
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Error: `Port 3000 already in use`
```bash
npm run dev -- -p 3001
# Akses di http://localhost:3001
```

### Error: Font tidak tampil
Pastikan koneksi internet aktif saat development (font diunduh dari Google Fonts).
Untuk offline, unduh font secara manual dan simpan di `public/fonts/`.

### Dark mode tidak tersimpan
Pastikan browser Anda tidak memblokir `localStorage`. Mode akan tersimpan antar session.

---

## 🛠️ Tech Stack

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| Next.js | 14.2 | Framework React (App Router) |
| TypeScript | 5.5 | Type safety |
| Tailwind CSS | 3.4 | Utility-first styling |
| Motion | 11.x | Animasi (Framer Motion v11) |
| Lenis | 1.1 | Smooth scroll |
| Google Fonts | — | Playfair Display + DM Sans + DM Mono |

---

## 📄 Lisensi

Project ini dibuat untuk keperluan portfolio pribadi Ridwan Afriza Listiyono.
Bebas dimodifikasi untuk keperluan personal.

---

> Dibuat dengan ❤️ menggunakan Next.js & Tailwind CSS
