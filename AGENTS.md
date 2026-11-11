# 🤖 AGENTS.md — Aturan Kerja untuk AI Agent

> **Baca file ini PERTAMA, sebelum menyentuh kode.** Ini kontrak kerja antara kamu
> (AI agent) dan pemilik proyek. Kalau ada konflik antar dokumen, urutan prioritasnya:
> `AGENTS.md` > `REFERENCE.md` + gambar referensi > `DESIGN.md` > `CONTENT.md` > `PROGRESS.md`.

## 0. Misi

Bangun **landing page profil pribadi satu halaman** yang tampil **seperti hasil desainer
manusia berkelas SaaS/studio**, bukan template AI. Target visual: **mengamati, meniru pola (struktur,
proporsi, nuansa), lalu memodifikasinya (§2b)** dari gambar referensi "Portfon" (Dribbble), lalu menerapkannya pada
konten Ridwan. Proyek ini **sudah berjalan dan dilanjutkan** (lihat `PROGRESS.md`), bukan dibangun dari nol.
Versi v1 dibuang karena terasa "AI slop" dan tidak mirip referensi. Jangan ulangi kesalahan itu.

## 1. Urutan baca wajib

1. `AGENTS.md` (ini)
2. `REFERENCE.md` — bedah tertulis gambar referensi, bagian per bagian
3. `DESIGN.md` — token, tipografi, layout, spesifikasi komponen (angka pasti)
4. `CONTENT.md` — ketentuan tugas kampus + copywriting + data
5. `PROGRESS.md` — checklist & status

Gambar yang harus dilihat (taruh di `docs/reference/`, daftar lengkap di `REFERENCE.md` §0):
- `01-hero.png` → Hero + Navbar (**target**) — di repo sudah ada sebagai `docs/reference/reference-portfon.webp`; tidak perlu diganti namanya
- `02-about.png` → Tentang (statement + bento foto/stat/chip)
- `03-services.png` → Keahlian (bento di latar navy)
- `04-portfolio.png` → Proyek (kartu lebar bernomor)
- `05-blog.png` → Kartu gambar (dipakai Sertifikasi)
- `06-footer-cta.png` → Kontak + Footer (navy, kartu tautan, ikon sosial)
- `00-current-slop.png` → **contoh yang SALAH** (hasil lama). Pelajari bedanya, jangan ulangi.

Kalau kamu tidak bisa melihat gambar, `REFERENCE.md` adalah pengganti tertulisnya.
Jika kamu punya akses browser, buka juga link Dribbble di `DESIGN.md` untuk memeriksa detail.

### Jika melanjutkan pekerjaan yang sudah berjalan
Proyek sudah dikerjakan sebagian (lihat `PROGRESS.md`). **Audit repo dulu** (berkas apa yang ada, token di `globals.css`),
jangan menulis ulang yang sudah benar. **Hemat token:** baca dokumen sekali per sesi, kerjakan satu section sekali jalan,
edit berkas yang ada alih-alih membuat ulang, dan jangan menjalankan perintah berat tanpa perlu.

## 2. Aturan emas

1. **Ikuti pola referensi dengan prinsip ATM (Amati, Tiru, Modifikasi)** — lihat §2b.
   Komposisi & hierarki mengikuti referensi; aset, copy, dan detail identitas harus milik Ridwan.
   Section lain mengikuti *bahasa visual yang sama* (lihat DESIGN §6).
2. **Gambar menang atas teks.** Kalau angka di `DESIGN.md` bertentangan dengan gambar
   referensi, ikuti gambar, lalu **perbarui DESIGN.md** (catat di Catatan Perubahan).
3. **Setiap elemen harus bisa dijelaskan alasannya.** Jika tidak bisa menjawab "elemen
   ini membantu pengunjung/ketentuan tugas bagaimana?", **hapus**.
4. **Lebih sedikit = lebih mahal.** Hero hanya punya: nav, ghost text, arch + foto,
   2 pill, 2 stat card, sapaan, headline, ringkasan, dan 2 tautan (LinkedIn & GitHub). Section lain hanya memakai komponen yang ada di
   referensi (bento About, panel navy Keahlian, kartu proyek bernomor, kartu artikel, CTA navy).
   Jangan tambah dekorasi.
5. **Satu aksen** (biru), satu keluarga font, satu skala radius, satu skala shadow.
6. **Konten hanya dari `src/lib/data.ts`.** Tidak boleh mengarang angka, klien, atau klaim.
7. **UI berbahasa Indonesia**, kode/komentar boleh Inggris.
8. Tidak ada library baru tanpa alasan tertulis di PROGRESS.md.

## 2b. Prinsip ATM — Amati, Tiru, Modifikasi (BUKAN copy plek)

Referensi dipakai untuk **belajar pola**, bukan untuk diduplikasi. Alasan: aset, teks, dan kode
sebuah desain dilindungi hak cipta, dan tugas kampus menuntut karya orisiniil.
(Ini panduan praktis, bukan nasihat hukum.)

**Boleh ditiru (ide & pola, tidak dilindungi sebagai ide):**
- Urutan section, hierarki tipografi, pola header (A/B/C), pola bento, pola kartu bernomor
- Gaya tombol pill + lingkaran, bentuk arch, ghost text, pill miring, vinyet navy
- Proporsi dan ritme spasi secara umum

**WAJIB asli / milik sendiri (jangan ambil dari referensi atau Framer):**
- Foto, ilustrasi, render 3D, mockup, gambar tangan/avatar, ikon custom, logo & nama "Portfon"
- Seluruh teks/copy (headline, deskripsi, label) — tulis sendiri dalam Bahasa Indonesia
- Kode, CSS, struktur DOM, dan aset hasil ekspor Framer (jangan "inspect element lalu salin")
- Foto Ridwan, logo/monogram Ridwan, gambar proyek & sertifikat Ridwan

**Modifikasi wajib (minimal 6 ini harus terlihat berbeda dari referensi):**
1. Nama, monogram/logo, dan seluruh copy berbeda (sudah dalam Bahasa Indonesia)
2. Isi pill hero, kartu stat, dan chip berasal dari data Ridwan
3. Susunan bento Keahlian & About memuat konten yang berbeda (Pendidikan, Minat & Hobi, Tools, IoT)
4. Section berbeda: Pengalaman & Sertifikasi (pengganti Blog), tanpa Pricing
5. Motif identitas Ridwan: sentuhan teknik otomotif → IoT/web (mis. pada kartu Pendidikan & teks About), bukan generik
6. Nilai warna, radius, dan jarak disetel sendiri (sampling hanya sebagai titik awal, boleh bergeser tipis
   agar tidak identik piksel demi piksel)
7. Aset visual dibuat sendiri (gradasi CSS, badge logo teknologi, foto sendiri)

**Kredit:** cantumkan di `README.md` (bukan di halaman): *"Layout terinspirasi dari desain 'Personal Portfolio
Website Design' (Portfon) di Dribbble. Seluruh aset, teks, dan kode dibuat ulang."*

**Uji ATM:** letakkan hasil berdampingan dengan referensi. Orang yang tahu referensinya harus mengenali
*pola/inspirasinya*, tetapi tidak ada gambar, kalimat, atau potongan kode yang sama.

## 3. 🚫 Katalog AI Slop (DILARANG)

Ini ciri khas desain "buatan AI" yang membuat hasil terlihat murahan. **Semua ini dilarang**
kecuali DESIGN.md secara eksplisit memintanya.

### 3.1 Tipografi
- ❌ Label kecil **monospace huruf kapital + letter-spacing lebar** di mana-mana
  (`HALO, SAYA`, `WEB DEVELOPER & IT ENTHUSIAST`, `PROYEK`, `SCROLL`). Ini slop #1.
- ❌ Nama dibelah dua warna (baris 1 hitam, baris 2 biru) atau **gradient text** di headline.
- ❌ Tiga ukuran font "sedang" yang nyaris sama. Hierarki harus tegas: besar sekali vs kecil.
- ❌ Teks muted terlalu pucat / kontras rendah.
- ❌ Heading berbeda keluarga font tanpa alasan.

### 3.2 Layout & komponen
- ❌ Grid **3–4 kartu identik** berisi *ikon dalam kotak tint + judul + deskripsi* untuk
  semua section. (Bento di referensi **berbeda**: tiap kartu ukuran, warna, dan isinya
  berlainan — ikuti `DESIGN.md` §5.2 dan §5.3, itu BUKAN slop.)
- ❌ Gaya tombol yang berbeda-beda. Semua tombol = **pill + lingkaran panah menempel** (`ButtonCTA`).
- ❌ Semua elemen dibungkus kartu `rounded-2xl border shadow`. Tidak semuanya perlu kartu.
- ❌ Badge status ala template ("● Terbuka untuk Kolaborasi") di atas headline hero.
- ❌ Hero center-aligned generik: badge → H1 → paragraf → 2 tombol → deretan ikon sosial.
  *(Pengecualian amandemen 9 Nov 2026: hero kiri-bawah boleh memuat **tepat 2 tautan** — LinkedIn & GitHub — lihat DESIGN §5.1 `HeroLinks`.)*
- ❌ Indikator `SCROLL` + garis vertikal di bawah hero.
- ❌ Marquee teks berjalan, ticker, "trusted by" logo palsu.
- ❌ Foto kotak persegi dengan border tebal dimasukkan ke dalam bentuk arch (arch harus
  jadi **latar**, orangnya **cutout** — lihat DESIGN §5.1).

### 3.3 Warna & efek
- ❌ Glow, blur blob warna-warni, shadow berwarna, neon border.
- ❌ Gradasi ungu-biru ke mana-mana. Gradasi hanya boleh di: **arch hero**, **kartu biru Keahlian**,
  dan **latar navy** (Keahlian & Kontak).
- ❌ Glassmorphism di semua kartu. Blur hanya untuk nav sticky, stat card hero, dan panel kaca Keahlian.
- ❌ Noise/grain overlay, partikel canvas, mesh gradient.
- ❌ Warna hex hardcode di komponen (pakai token).

### 3.4 Interaksi
- ❌ Cursor follower berlebihan. *(Custom cursor dot+ring **diizinkan** lewat amandemen di bawah.)*
- ❌ Preloader lama/berat. *(Preloader singkat **diizinkan** lewat amandemen di bawah.)*
- ❌ Hover `scale-105` di semua elemen, animasi bounce/pulse/wiggle tanpa fungsi.
- ❌ Animasi masuk yang membuat konten tidak terlihat >0.8 detik.
- ❌ Smooth-scroll selain Lenis, atau Lenis yang bentrok dengan `scroll-behavior` native. *(Lenis **diizinkan** lewat amandemen.)*

> **Amandemen pemilik (8 Nov 2026):** pemilik memutuskan memakai 4 fitur berikut **tanpa mengubah desain UI**:
> (1) **Lenis** smooth scroll, (2) **custom cursor** dot+ring, (3) **toggle tema** dark/light di nav, (4) **preloader** singkat.
> Aturan: Lenis hanya penghalus scroll & mati saat `prefers-reduced-motion`; cursor hanya `pointer:fine`, `aria-hidden`,
> kursor bawaan tetap ada; tema default **light**, tersimpan di `localStorage`, tanpa flash, palet dark lolos AA;
> preloader ≤ ~600ms, sekali per sesi, tidak menunda LCP. Spesifikasi: `DESIGN.md` §8.1 dan §9.
> **Tambahan 9 Nov 2026:** (a) ganti tema wajib punya **transisi halus** (View Transitions + fallback kelas sementara, mati di reduced-motion) — `DESIGN.md` §9.1;
> (b) hero memuat 2 tautan LinkedIn & GitHub — `DESIGN.md` §5.1. Keduanya tidak mengubah komposisi hero.
> Di luar keempatnya, katalog §3.4 berlaku penuh. Uji "Count test" (§3.6) **mengecualikan** keempat fitur ini.

### 3.5 Copywriting & konten
- ❌ Kalimat kosong: *"passionate dalam…"*, *"solusi digital yang bermakna"*,
  *"membangun masa depan"*, *"inovatif"*, *"cutting-edge"*, *"seamless"*.
- ❌ Emoji sebagai ikon UI, ✦ ditabur sembarangan.
- ❌ Angka/statistik karangan (klien 20+, rating, dsb.).
- ❌ Lorem ipsum, "Your Name Here", foto stok berlatar gelap/studio yang tak cocok.
- ❌ Campur bahasa acak ("Get In Touch" di situs berbahasa Indonesia). Pakai **"Hubungi Saya"**.

### 3.6 Uji cepat "bau AI"
Sebelum bilang selesai, jawab jujur:
1. **Squint test** — sipitkan mata membayangkan tampilan halaman. Apakah komposisinya (blok besar: ghost text,
   arch biru, headline kiri-bawah, stat kanan-bawah) mirip referensi? Jika tidak → ulangi.
2. **Swap test** — kalau nama diganti orang lain, apakah halaman ini bisa jadi template
   siapa pun? Itu tidak masalah untuk layout, tapi copy & foto harus spesifik Ridwan.
3. **Count test** — hitung elemen dekoratif tanpa fungsi (di luar 4 fitur amandemen). Harus **0**.
4. **Font test** — ada font mono atau lebih dari 1 keluarga di UI? Harus **tidak ada**.
5. **Hover test** — apakah semua hover cuma perubahan warna/geser ≤4px? Harus **ya**.

### 3.7 Ikon & tautan sosial
- ❌ Link sosial placeholder (`href="#"`, `href=""`) atau ikon tanpa tujuan. Entri tanpa URL **tidak dirender**.
- ❌ Emoji sebagai ikon sosial/teknologi. Pakai logo brand dari `react-icons` (`fa6`, `si`).
- ❌ Ikon sosial lain di Hero. Di Hero **hanya LinkedIn + GitHub** (amandemen 9 Nov 2026, `HeroLinks`). Sisanya (WhatsApp, Instagram, Email, dst.) hanya di **Kontak** (kartu tautan + footer bar) dan menu mobile.
- ✅ Wajib ada: WhatsApp, LinkedIn, GitHub, Instagram, Email (+ X/YouTube/Facebook jika ada URL).
  Semua `target="_blank" rel="noopener noreferrer"` (kecuali `mailto:`) dan punya `aria-label`.

## 4. Eksplorasi web (OPSIONAL — hanya jika terblokir)

Kamu boleh memakai akses web/browser untuk:
- Membuka link Dribbble di `DESIGN.md` dan menelaah detail (spacing, urutan layer).
- Membuka referensi live https://portfon.framer.website (anchor `#about`, `#service`, halaman
  `/my-portfolio` dan `/blogs`) untuk melihat spacing, hover, dan perilaku responsif.
  Hanya acuan visual: jangan salin aset, teks, atau kode.
- Mencari **inspirasi pola** portofolio/landing SaaS modern (Awwwards, Framer templates,
  Godly, Land-book, Dribbble) untuk section selain hero — **ambil pola, bukan salin aset/kode**.
- Mencek dokumentasi (Next.js, Tailwind, `motion`, `next/font`, remove-bg tool).
- Mengambil warna dari gambar referensi memakai eyedropper/script (sampling piksel) untuk
  memvalidasi token DESIGN.md.

Batasan:
- ❌ Jangan menyalin kode, gambar, atau teks dari situs lain (hak cipta).
- ❌ Jangan menambah dependensi besar hanya demi efek.
- ✅ Catat sumber inspirasi di `PROGRESS.md` → "Catatan Eksplorasi" (URL + satu kalimat
  apa yang dipelajari).

## 5. Loop kerja (tanpa screenshot)

Jangan menjalankan Playwright/puppeteer atau mengambil screenshot (berat). Verifikasi
dilakukan lewat kode dan oleh pemilik proyek:

```
1. Implementasi 1 bagian (mis. Hero) mengikuti angka & layer di DESIGN.md
2. Cocokkan kode dengan REFERENCE.md + DESIGN.md: posisi, ukuran, warna, font, jarak
3. Jalankan `npm run build` (atau lint) untuk memastikan tidak ada error
4. Tulis daftar "yang sudah sesuai" dan "yang mungkin masih beda" terhadap referensi
5. Berhenti dan minta pemilik proyek mengecek tampilan di browser
6. Perbaiki berdasarkan feedback pemilik, ulangi
```

Perhatikan terutama pada Hero: posisi arch, ghost text *di belakang* arch, rotasi pill,
fade bawah foto, dan 2 stat card bertumpuk di kanan-bawah.

---

## 6. Batasan teknis

| Hal | Aturan |
|---|---|
| Framework | Next.js (App Router) + TypeScript + Tailwind CSS |
| Animasi | `motion/react` — hanya fade-up ringan (DESIGN §8) |
| Font | `next/font/google` — **Inter Tight** saja (400/500/600/700) |
| Ikon | `lucide-react` (stroke 1.5) untuk ikon UI; **`react-icons`** (`fa6`, `si`) khusus logo sosial & teknologi — satu-satunya dependensi tambahan yang disetujui |
| Fitur amandemen | `lenis` (SmoothScroll), `CustomCursor`, `ThemeToggle`, `Preloader` — spesifikasi `DESIGN.md` §8.1 & §9 |
| Warna | CSS variable di `globals.css` → dipetakan ke Tailwind; no hex di komponen |
| Konten | `src/lib/data.ts` satu-satunya sumber |
| Gambar | `next/image`, `width/height` eksplisit, `priority` untuk foto hero |
| Aksesibilitas | `alt` bermakna, `:focus-visible`, `prefers-reduced-motion`, kontras AA |
| Performa | LCP foto hero ≤ 2.5s; tidak ada CLS; WebP/AVIF |

## 6b. Kecepatan (penting)

Pemilik proyek menginginkan hasil **cepat**. Karena itu:
- Lanjutkan repo yang ada: audit singkat (Fase A), edit berkas yang sudah benar, jangan menulis ulang.
- Tulis tiap komponen **sekali jalan**, rapi, tanpa refactor berulang.
- Jangan browsing kecuali benar-benar perlu; dokumen ini sudah cukup lengkap.
- Jangan menambah fitur/section di luar `DESIGN.md`.
- Jangan screenshot / Playwright. Cukup `npm run build` lalu minta pemilik cek di browser.
- Kerjakan per fase (lihat `PROGRESS.md`, Fase A–I) dan **berhenti di akhir tiap fase** agar pemilik bisa cek browser.

## 6c. Setup awal (HANYA jika folder belum berisi proyek Next.js — repo ini sudah ada, lewati)

1. Jika folder belum berisi proyek Next.js: inisialisasi dengan
   `npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"`
   (jika ada konflik file, pindahkan `.md` dokumen sementara, lalu kembalikan).
2. Install hanya: `motion`, `lucide-react`. Tidak ada library lain.
3. Konfigurasi font Inter Tight (`next/font/google`), token di `globals.css`, `tailwind.config`.
4. Buat `src/lib/data.ts` sesuai `CONTENT.md` §4.
5. Buat `.gitignore` standar (jangan commit `node_modules`, `.next`, `.env*`).

---

## 7. Komunikasi

- Jangan bertanya hal kecil. Ambil keputusan terbaik sesuai dokumen, catat di PROGRESS.md.
- Bertanya hanya bila **terblokir** (mis. butuh foto asli, nomor WA asli).
- Laporan akhir tiap fase: (1) apa yang berubah, (2) selisih yang mungkin tersisa
  terhadap referensi, (3) apa yang butuh input pemilik.

## 8. Definition of Done

- [ ] Hero di desktop **langsung dikenali** sebagai versi Ridwan dari referensi Portfon
- [ ] Setiap section lain meniru pola referensinya (DESIGN §5.2–5.7), bukan layout generik
- [ ] Hero memuat tautan LinkedIn & GitHub yang benar; ganti tema punya transisi halus (tanpa kilatan)
- [ ] Empat fitur amandemen berfungsi dan punya pengaman (reduced-motion, pointer:fine, default light, sekali per sesi)
- [ ] Semua ikon sosial/WA/LinkedIn/GitHub/Instagram/Email berfungsi dan terlihat di Kontak + Footer
- [ ] Lolos semua "Uji cepat bau AI" (§3.6)
- [ ] Semua ketentuan tugas di `CONTENT.md` §1 terpenuhi
- [ ] `npm run build` bersih, Lighthouse mobile ≥ 90 (Performance & Accessibility)
- [ ] Responsif 375 / 768 / 1440 tanpa scroll horizontal
- [ ] Foto & nomor WhatsApp asli sudah terpasang, link `wa.me` diuji
- [ ] Tidak ada elemen dari daftar terlarang §3
- [ ] Lolos Uji ATM (§2b): tidak ada aset/teks/kode referensi yang terbawa; README memuat kredit inspirasi