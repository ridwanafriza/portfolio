# 📋 CONTENT.md — Ketentuan Tugas, Konten & Copywriting (v2.3)

> Memastikan **semua ketentuan tugas individu** terpenuhi. Desain mengikuti `DESIGN.md`;
> dokumen ini soal **apa yang harus ada** dan **apa yang boleh ditulis**.

**Tugas:** Landing Page Profil Pribadi (satu halaman)
**Deadline:** 🚨 **17 November 2026** — dikumpulkan via link spreadsheet, harus **Public**

---

## 1. Pemetaan Ketentuan → Realisasi

| # | Ketentuan | Lokasi di website | Status |
|---|---|---|---|
| 1a | Foto profil (sopan, jelas, profesional) | Hero (arch) + About (kartu foto) — `public/avatar.webp` cutout | ⚠️ Ganti foto sendiri |
| 1b | Nama lengkap | Hero sapaan "Halo, saya Ridwan Afriza Listiyono." + `<title>` + footer | ✅ |
| 1c | Julukan singkat | Hero H1 "Web Developer & IT Enthusiast" | ✅ |
| 1d | Ringkasan 1–2 kalimat | Hero paragraf di bawah H1 | ✅ |
| 1e | Tautan LinkedIn & GitHub di halaman awal (permintaan pemilik) | Hero — `HeroLinks` di bawah ringkasan (DESIGN §5.1) | ⬜ |
| 2 | About: pendidikan, minat, hobi relevan | `#about` — statement + kartu Pendidikan + kartu Minat & Hobi | ⬜ |
| 3a | Daftar keahlian | `#skills` — bento navy (Frontend, Backend, Database, Mobile & Tools + kartu CTA) | ⬜ |
| 3b | Karya / sertifikat / proyek | `#projects` + `#certificates` + `#experience` | ⬜ |
| 4 | CTA WhatsApp di bagian paling bawah | `#contact` — tombol putih besar + footer | ⚠️ Nomor asli terpasang — uji di HP |
| 4 | Tombol jelas & menonjol | `ButtonCTA light whatsapp` di latar navy | ⬜ |
| 4 | Link resmi `wa.me` | `https://wa.me/<NOMOR>?text=<pesan>` | ⚠️ Nomor asli terpasang — uji di HP |
| 4+ | Ikon/link sosial (nilai tambah) | Kartu tautan + footer bar di `#contact`, menu mobile | ⬜ |
| 5 | Responsif | Mobile-first; uji 375 / 768 / 1440 | ⬜ |
| 5 | Link publik | Deploy Vercel/Netlify | ⬜ |

---

## 2. ⚠️ TODO WAJIB SEBELUM SUBMIT

- [x] **Foto cutout** transparan (lihat `DESIGN.md` §5.1) → `public/screens/profil_ridwan.png`
- [x] **Nomor WhatsApp asli** sudah diberikan → `profile.whatsapp = "6285815617098"` (dari `085815617098`; format `62…` tanpa `+`, spasi, strip, dan tanpa `0` depan)
- [x] **URL sosial asli** sudah diberikan (lihat §4 `socials`). Jangan isi `#`; entri tanpa URL tidak dirender.
- [x] **Email asli** sudah diberikan → `ridwanafriza09@gmail.com` (`mailto:` di `socials`, tampil di Kontak, footer, menu mobile)
- [ ] **Gambar proyek** (screenshot) & gambar sertifikat bila ada
- [ ] **Uji link WhatsApp** dari halaman live (WA Web & HP) — pesan awal terisi
- [ ] **Deploy public** → salin link ke spreadsheet pengumpulan
- [ ] `<title>` & meta description memuat nama lengkap

Pesan awal WhatsApp: `Halo Ridwan, saya melihat portofolio kamu dan ingin berdiskusi.`

---

## 3. Struktur Halaman

```
Navbar (sticky) + toggle tema (transisi halus)
Preloader singkat (sekali per sesi)
 1. Hero         — foto cutout, nama, julukan, ringkasan, tautan LinkedIn & GitHub
 2. Tentang      — statement + CTA + bento (foto, stat, pendidikan, minat & hobi)
 3. Keahlian     — latar navy, bento kartu biru/putih
 4. Proyek       — grid 2 kolom: media 16:10 di atas, meta bernomor, judul, chip teknologi
 5. Pengalaman   — kartu list + chip periode
 6. Sertifikasi  — kartu gambar + chip penerbit
 7. Kontak       — latar navy: CTA WhatsApp ⭐ + kartu tautan + footer sosial
```

---

## 4. Data di `src/lib/data.ts` (hanya fakta nyata)

- `profile`: `name` (Ridwan Afriza Listiyono), `headline` ("Web, Mobile & UI/UX Designer"), `about`,
  `whatsapp`, `email`.
- **`socials`**: array `{ id, label, href }` dengan `id` ∈ `whatsapp | email | linkedin | github | instagram | x | youtube | facebook`.
  - `whatsapp` memakai `waLink`; `email` memakai `mailto:`. Entri tanpa `href` di-skip saat render.
  - Dipetakan ke ikon `react-icons` lewat `<SocialIcon id>` (lihat `DESIGN.md` §3.5).
  - **Data asli (diberikan pemilik, 9 Nov 2026):**

```ts
export const profile = {
  // ...
  whatsapp: "6285815617098", // dari 085815617098
  email: "ridwanafriza09@gmail.com",
};

export const socials = [
  { id: "whatsapp",  label: "WhatsApp",  href: waLink },                                   // https://wa.me/6285815617098?text=...
  { id: "linkedin",  label: "LinkedIn",  href: "https://www.linkedin.com/in/ridwanafriza/" },
  { id: "github",    label: "GitHub",    href: "https://github.com/ridwanafriza" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ridwan_afrizaa" },
  { id: "email",     label: "Email",     href: "mailto:ridwanafriza09@gmail.com" },
];
```
  - Instagram: URL asli dari pemilik memuat parameter berbagi `?srtk=…`; dipangkas ke profil bersih (tautan tetap membuka akun yang sama).
  - WhatsApp: pakai **`https://wa.me/6285815617098?text=<pesan>`** (format resmi yang diminta tugas + pesan awal terisi).
    Tautan QR `https://wa.me/qr/JOQILNX5LTY7G1` tidak mendukung pesan awal; simpan hanya sebagai cadangan, jangan jadi tautan utama.
  - **Hero** hanya menampilkan `linkedin` dan `github`; **Kontak + Footer** menampilkan semua yang punya `href`.
- `education`: D3 Teknologi Informasi — Politeknik Negeri Madiun; SMK Negeri 1 Madiun (otomotif).
- `interests` & `hobbies`: yang benar-benar relevan (dipakai kartu "Minat & Hobi").
- `skills` per kategori: Frontend, Backend, Database, Mobile & Tools (sesuaikan yang dikuasai; kategori lama
  "IoT & Mobile"/"Tools" menyusut setelah amandemen pemilik 9 Nov 2026 — fokus web, mobile, UI/UX).
- `projects`: judul, deskripsi (masalah → yang dibangun), teknologi, kategori, gambar, `url?`.
  *Catatan 10 Nov:* kartu proyek versi baru **tidak menampilkan deskripsi** (meniru referensi yang dikirim pemilik);
  deskripsi tetap tersimpan di `data.ts` dan bisa dipakai kembali bila pemilik menghendaki.
  *Catatan 11 Nov:* tambahan **Bramjono Transwisata** (`https://ridwanafriza.github.io/prototype-travel/`,
  thumbnail `docs/screens/bramjono.png` disalin ke `public/screens/`) — situs statis multi-halaman
  (HTML/CSS/JavaScript): layanan open trip, custom trip, sewa travel + panel admin/superadmin.
- `certifications`: judul, penerbit, tahun, gambar?.
- `experience`: magang Web Developer PT. Marstech Global (**saja** — peran ketua/organisasi dihapus atas
  permintaan pemilik 11 Nov 2026: "cukup pengalaman magang doang").
- `stats`: hanya dari data di atas (jumlah proyek, sertifikat, bulan magang).

---

## 5. Copywriting (Bahasa Indonesia, nada profesional-hangat, kalimat pendek, spesifik)

| Tempat | Teks |
|---|---|
| Sapaan hero | `Halo, saya Ridwan Afriza Listiyono.` |
| H1 hero | `Web, Mobile & UI/UX Designer` (pecah 2 baris di `&`) |
| Tombol nav & About | `Hubungi Saya` |
| Label section | `Tentang Saya` · `Keahlian` · `Proyek` · `Pengalaman` · `Sertifikasi` · `Kontak` |
| H2 Keahlian | `Bahasa dan alat yang saya pakai untuk membangun.` |
| H2 Proyek | `Karya dari kelas dan proyek pribadi.` |
| Kartu CTA Keahlian | `Ayo Berkolaborasi` (chip: `Siap berkolaborasi`) |
| H2 Kontak | `Punya proyek atau ide? / Ayo ngobrol.` |
| Tombol utama | `Hubungi Saya via WhatsApp` |
| Teks bantu | `Balasan biasanya cepat.` |
| Footer | `© 2026 Ridwan Afriza Listiyono.` |

**Pola penulisan**
- Statement About (kini 2 kalimat, di `profile.about`): *"Latar teknik otomotif membuat saya terbiasa berpikir
  sistematis. Saya membangun aplikasi web dan mobile serta merancang antarmuka UI/UX yang menjawab kebutuhan
  nyata — efektif, terstruktur, dan mudah digunakan."* (menyinggung latar otomotif sebagai cara berpikir sistematis,
  tanpa klaim baru; ringkasan hero terpisah sudah dihapus dari hero — tugas 1d kini dijawab ringkasan ini).
- Deskripsi proyek: **masalah → apa yang dibangun**, maks 3 kalimat; teknologi di baris terpisah.
- Deskripsi kartu keahlian: 1 kalimat tentang cara memakai teknologi itu, bukan daftar.

**❌ Hindari:** "passionate", "solusi digital yang bermakna", "inovatif", "cutting-edge", "seamless",
"membangun masa depan", teks Inggris acak ("Get In Touch" → "Hubungi Saya"), angka karangan, emoji sebagai ikon, lorem ipsum.

---

## 6. SEO & Meta
- `<title>`: `Ridwan Afriza Listiyono — Web Developer & IT Enthusiast`
- `meta description` ≤ 155 karakter (dari ringkasan hero), `lang="id"`, `og:image` 1200×630 (tangkapan hero), favicon monogram.