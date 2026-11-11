# 🚀 PROGRESS.md — Checklist Pengerjaan (v2.4)

> File kerja. Centang setelah selesai dan `npm run build` lolos. Tanpa screenshot otomatis.
> Acuan: `AGENTS.md` · `REFERENCE.md` + gambar · `DESIGN.md` (v2.4) · `CONTENT.md` (v2.3).

**Deadline: 17 Nov 2026** · **Status: 🟢 Fase A–G selesai (10 Nov 2026, build bersih); tersisa Fase H (QA cek pemilik) + Fase I (deploy)**

## 🆕 Tambahan v2.3 (9 Nov 2026) — ringkas
1. **Hero:** tambah `HeroLinks` — hanya 2 tautan + logo **LinkedIn & GitHub** di samping logo ada nama linkedin / github  (`DESIGN.md` §5.1). Ikon sosial lain hanya di Kontak/Footer/menu mobile.
2. **Toggle tema:** ganti tema harus **transisi halus** (View Transitions + fallback `theme-transition`, mati di reduced-motion) — `DESIGN.md` §9.1.
3. **Data sosial asli** sudah ada di `CONTENT.md` §4 (WhatsApp, LinkedIn, GitHub, Instagram). Email asli juga sudah ada (`ridwanafriza09@gmail.com`, `mailto:`).
4. **Pendekatan ATM** (`AGENTS.md` §2b): pola ditiru, aset/teks/kode wajib asli; tulis kredit inspirasi di `README.md`.

## ⚠️ Catatan serah-terima (agent sebelumnya kehabisan token di tengah Fase 7)
1. Dokumen berubah dari v2 → **v2.2**: section About/Keahlian/Proyek/Pengalaman/Kontak/Footer kini meniru referensi lengkap
   (bento, panel navy, kartu bernomor). Implementasi v2 (baris hairline, kartu CTA biru tunggal) **harus ditulis ulang**.
2. Hero + Navbar (Fase 2) **dipertahankan**; hanya perlu penyesuaian kecil (lihat Fase C).
3. Fase 7 (amandemen) mungkin **setengah jadi**. **Audit dulu**: cek apakah ada `SmoothScroll.tsx`, `CustomCursor.tsx`,
   `ThemeToggle.tsx`, `Preloader.tsx`, paket `lenis` di `package.json`, kelas `dark` di `globals.css`, script anti-flash di `layout.tsx`.
   Selesaikan yang belum, perbaiki yang rusak, jangan menulis ulang yang sudah benar.

| Fase | Isi | Status |
|---|---|---|
| A | Audit repo + selesaikan 4 fitur amandemen | ✅ |
| B | Token & komponen dasar v2.2 (navy, card, chip, ButtonCTA, SocialIcon, react-icons) | ✅ |
| C | Penyesuaian Hero + Navbar ke v2.2 | ✅ |
| D | Tentang (bento) | ✅ |
| E | Keahlian (navy) | ✅ |
| F | Proyek + Pengalaman + Sertifikasi | ✅ |
| G | Kontak + Footer + sosial | ✅ |
| H | QA + audit anti-slop + dark mode AA | ⬜ — cek pemilik di browser |
| I | Foto/nomor/URL asli, deploy, kumpul (≤ 17 Nov) | ⬜ |

---

## Riwayat selesai (v2) — jangan dikerjakan ulang
- [x] Fase 1: hapus partikel/noise/marquee/scroll indicator/DM Mono; token disampling dari referensi; `docs/reference/` dibuat;
      `data.ts` + `waLink`; `:focus-visible`, reduced-motion; hex di komponen dibersihkan
- [x] Fase 2: Hero + Navbar sesuai v2 (ghost text, arch memudar, cutout placeholder SVG, 2 pill, teks kiri-bawah, 2 stat, nav, mobile menu + focus-trap)
- [x] Fase 5 sebagian: `npm run build` bersih, `npm run lint` 0 error (`.eslintrc.json`), kontras AA (`--fg-muted` `#505462`), audit anti-slop kode
- [x] Fase 3–4 versi v2 (About/Skills/Projects/Experience/Contact/Footer) — **digantikan oleh Fase D–G**

---

## Fase A — Audit repo + 4 fitur amandemen
- [x] Audit: daftar berkas komponen & dependensi yang ada; catat di "Catatan Eksplorasi"
- [x] `lenis` terpasang; `fx/SmoothScroll.tsx` bekerja, mati saat reduced-motion, tidak bentrok `scroll-behavior`, anchor nav tetap jalan
- [x] `fx/CustomCursor.tsx`: dot + ring, `pointer:fine`, `aria-hidden`, kursor bawaan tetap, mati saat reduced-motion
- [x] `layout/ThemeToggle.tsx` di nav (kiri CTA), `localStorage` `theme`, default light, script anti-flash di `<head>`
- [x] **Transisi halus ganti tema** (DESIGN §9.1): `startViewTransition` + fallback kelas `theme-transition` 450ms, CSS `::view-transition-*`, klik beruntun diabaikan, mati di reduced-motion, tidak aktif saat load pertama; ikon Sun↔Moon rotate+fade 250ms
- [x] Token dark di `html.dark` (DESIGN §9) + token baru `--on-accent`, `--on-fg`, `--nav-bg`, `--stat-*`; **lolos AA**
- [x] `fx/Preloader.tsx`: ≤ 600ms, sekali per sesi, tidak menunda LCP, mati saat reduced-motion
- [x] Semua tetap bersih dari hex di komponen

## Fase B — Token & komponen dasar v2.2
- [x] Tambah token DESIGN §2.1 (`--card`, `--chip`, `--navy`, `--navy-edge`, `--navy-bg`, `--blue-card`, `--glass`, `--number-ghost`) + versi dark
- [x] Tailwind: daftarkan token baru; container `1140 / 1026 / 855`
  — catat: container via kelas CSS `.wrap` (1140) / `.wrap-md` (1026) / `.wrap-sm` (855),
  bukan `maxWidth` Tailwind (dipakai konsisten di semua section); radius disamakan ke §2.3 (r-lg 24, r-xl 28)
- [x] Install `react-icons` (alasan: logo sosial/teknologi) — impor hanya `fa6` & `si`
- [x] `data.ts`: `socials` sesuai CONTENT §4, `whatsapp = "6285815617098"`, `email = ridwanafriza09@gmail.com`, `summary` terisi, `interests`/`hobbies`/`stats` ada
- [x] Komponen: `ButtonCTA` (dark/light/whatsapp), `Chip`, `GlassPill`, `SocialIcon`, `TechBadge`

## Fase C — Hero + Navbar → v2.3
- [x] Navbar: logo kotak biru 32px "R" + nama "Ridwan" 21px/500, link tepat di sebelah logo (gap 24px), CTA = `ButtonCTA` (pill + lingkaran menempel)
- [x] Ikon sosial di menu mobile (baris bulat 44px, semua `socials`)
- [x] **`HeroLinks`** di hero (di bawah ringkasan): pill tegak LinkedIn + GitHub, logo `FaLinkedinIn`/`FaGithub`, hover `--accent`, `target="_blank" rel="noopener noreferrer"`, `aria-label` tab baru; cek tidak menabrak arch/pill di 1024px
- [x] Ganti foto placeholder dengan cutout asli → `public/screens/profil_ridwan.png` (latar sudah transparan; versi `-cutout` lama berhenti setinggi dada)
- [x] Token hero tetap hasil sampling (`#C7CCD8`)

## Fase D — Tentang (bento) → `02-about.png`
- [x] Pola A + `ButtonCTA` ("Hubungi Saya" → `#contact`); bento: kartu foto cutout terpotong dasar, 2 stat,
  kartu Pendidikan (D3 + SMK, klaster badge logo teknologi terpotong tepi kanan), kartu Minat & Hobi (chip + daftar hobi)
- [x] **Deviasi:** chip miring −50° di kartu Minat & Hobi **tidak dibuat** — Uji Count (AGENTS §3.6): elemen dekoratif tanpa fungsi harus 0

## Fase E — Keahlian (navy) → `03-services.png`
- [x] `--navy-bg`, panel kaca, **5 kartu** (Frontend, Backend, Database, Mobile & Tools, CTA tinggi 2 baris);
  kartu biru = 2 kategori pertama (pill kaca), kartu putih = gambar inset `--inset-gradient` + busur konsentris
  dengan badge Flutter/Kotlin/Android/Git; teks putih hanya di area kontras AA

## Fase F — Proyek, Pengalaman, Sertifikasi → `04-portfolio.png`, `05-blog.png`
- [x] **Proyek — kartu versi referensi baru (amandemen pemilik 10 Nov):** grid 2 kolom, media `16:10` radius 18 di atas
  (lingkaran panah hanya bila `url`), baris meta (kategori kiri · nomor `01` kanan), judul, chip teknologi outline.
  **Tanpa `.card` pembungkus & tanpa deskripsi** — meniru referensi yang dikirim pemilik (ATM)
- [x] Pengalaman: kartu bertumpuk + chip periode (periode `null` tidak dirender)
- [x] Sertifikasi: kartu gambar (gradasi `--cta-gradient` + penerbit) + judul + chip tahun

## Fase G — Kontak + Footer + Sosial → `06-footer-cta.png`
- [x] Section navy `--navy-bg` + `wrap-sm`: H2 putih 2 baris, teks bantu, `ButtonCTA light size=lg whatsapp` → `waLink`,
  5 kartu tautan outline (ikon + label), hairline, **footer bar** (© tahun nama + tombol sosial bulat 40px)
- [x] `Footer.tsx` terpisah **dihapus** dari `layout.tsx` (footer bar hidup di dalam `#contact`)
- [x] Tidak ada `href="#"`; entri tanpa URL tidak dirender

## Fase H — QA
- [ ] `npm run build` + `npm run lint` bersih
- [ ] 375 / 768 / 1440 tanpa scroll horizontal — **cek pemilik**
- [ ] Keyboard nav, focus ring (putih di navy), reduced-motion mematikan 4 fitur — **cek pemilik**
- [ ] Ganti tema 5× beruntun di semua section: tidak ada kilatan, warna tertinggal, atau gangguan Lenis/cursor — **cek pemilik**
- [ ] Semua tautan sosial (hero, kontak, footer, menu mobile) membuka URL benar; tidak ada `href="#"`
- [ ] Kontras AA light **dan** dark (termasuk teks putih di kartu biru & navy)
- [ ] Lighthouse mobile ≥ 90
- [ ] Audit anti-slop (`AGENTS.md` §3); centang `CONTENT.md` §1

## Fase I — Deploy & Kumpul
- [x] Nomor WA asli & URL sosial asli sudah diberikan pemilik (9 Nov) — tinggal dipasang di `data.ts`
- [ ] Foto cutout asli, gambar proyek/sertifikat
- [ ] `README.md` memuat kredit inspirasi Portfon (AGENTS §2b); lolos Uji ATM
- [ ] `metadataBase` diisi URL production (warning build saat ini)
- [ ] Push GitHub → Vercel → link public; uji WA di HP; buka di incognito
- [ ] Isi spreadsheet sebelum **17 Nov 2026**

---

## Catatan Eksplorasi (isi oleh agent)
- Dribbble `27379252-Personal-Portfolio-Website-Design` — target utama; sampling piksel lokal (Pillow) → hero `#C7CCD8`, halaman `#E9EDF2`, arch memudar menyatu latar pada y≈80% tinggi hero.
- Referensi live `portfon.framer.website` — dipakai untuk bento About, panel Keahlian, kartu Proyek, CTA navy (lihat `REFERENCE.md`).
- **Audit repo 9 Nov 2026 (Fase A):** `lenis` ✓, `fx/{SmoothScroll,CustomCursor,Preloader}.tsx` ✓,
  `layout/ThemeToggle.tsx` ✓ (sebelumnya masih di `ui/` — dipindah), script anti-flash ✓, token `html.dark` ✓.
  Yang diperbaiki: `data.ts` (`summary` kosong, email/nomor WA dummy → asli, `socials` belum ada),
  transisi halus tema belum ada → ditambah (§9.1), `react-icons` belum terpasang → diinstall,
  file dipindah ke `fx/` + `layout/` agar cocok DESIGN §11, radius & container disamakan ke §2.3/§2.4.
- **Modifikasi pemilik (9 Nov 2026):** (a) semua rujukan IoT dihapus → fokus **web, mobile, UI/UX**
  (headline hero jadi "Web, Mobile & UI/UX Designer", interests/hobbies diganti, proyek IoT dihapus —
  jadi 3 proyek & stat `3+`, pengalaman Samsung tanpa label IoT, `about`/metadata ikut disesuaikan);
  (b) pill miring hero jadi **3**: Web Development · Mobile Development · UI/UX Design (`.pill-third`);
  (c) footer: link teks → **tombol sosial bulat** (sama dengan baris ikon di menu atas, semua `socials`);
  (d) **lokasi dihapus** (`profile.location` dibuang dari data & Kontak);
  (e) kartu proyek dirombak → **kartu lebar bertumpuk** DESIGN §5.4 (judul kiri-atas, nomor ghost kanan-atas,
  deskripsi + baris teknologi kiri-bawah, gambar/mock 392×342 kanan-bawah) biar padat, tanpa sel kosong;
  (f) caption ringkasan hero (`summary`) dihapus — hero kini sapaan + H1 + 2 tautan;
  (g) reveal saat scroll diseragamkan: y 20px, durasi 0.6s, stagger 0.1s di semua section.

## Keputusan & Deviasi dari Referensi
- Ringkasan 1–2 kalimat ditambahkan di hero — wajib ketentuan tugas.
- `public/avatar.jpg` (foto stok pria lain) ditolak (AGENTS §3.5); hero memakai placeholder cutout SVG netral sampai foto asli ada.
- `--arch-gradient` memudar ke latar; `--cta-gradient` biru pekat terpisah agar teks putih lolos AA.
- Posisi pill dikoreksi dari gambar: kiri `top:32%`, kanan `top:12%`.
- `.hero-figure` `max-height: calc(100svh - 110px)` (≥768px) agar arch tidak menyentuh nav di layar pendek.
- `--fg-muted` digelapkan `#5E6270`→`#505462` (AA); `.eslintrc.json` dibuat.
- **Amandemen pemilik:** Lenis, custom cursor, toggle tema dark/light, preloader singkat dikembalikan; desain UI tidak berubah.
- v2.1/v2.2: section lain dirombak mengikuti referensi lengkap; klaster avatar → klaster badge logo teknologi; visual tangan di CTA → gradasi biru abstrak; Blog → Sertifikasi.
- `metadataBase` belum di-set (warning build) — Fase I.

- v2.3: URL Instagram dari pemilik memuat parameter berbagi `?srtk=…` → dipangkas ke profil bersih. Tautan QR WhatsApp tidak mendukung pesan awal → tautan utama tetap `wa.me/6285815617098?text=…`.
- v2.3: hero memuat LinkedIn & GitHub = deviasi sengaja dari referensi (amandemen pemilik), dicatat di AGENTS §3.2/§3.7 dan REFERENCE.

## Catatan Perubahan
- 11 Nov 2026 (lanjutan 3) — **3 permintaan pemilik:** (1) *Transisi gradasi antar section* — kelas
  `.blend-from-hero` / `.section-navy` / `.section-navy-top` / `.section-alt` di `globals.css`
  (`background-image`, di bawah konten); batas putih↔navy kini meleleh, terutama menuju navy (DESIGN §6c).
  (2) *Animasi scroll berulang* — `once:true` → `once:false` di semua section (bila terasa berkedik, mudah
  dikembalikan). (3) *Halaman lambat saat refresh* — penyebab: foto hero PNG 2.68MB + thumbnail Bramjono
  1.92MB diproses ulang tiap request → dikonversi ke **WebP 109KB / 158KB** (`sharp`) dan referensi diperbarui;
  `sharp` juga dipakai Next untuk optimasi gambar. **Alasan dependensi `sharp` (AGENTS §6):** alat optimasi
  gambar bawaan ekosistem Next.js — bukan library UI/animasi; dipakai sekali untuk konversi + runtime
  optimasi gambar, tanpa mengubah desain. PNG asli tetap disimpan di `public/screens/`. Build bersih.
- 11 Nov 2026 (lanjutan 2) — **Navbar & proyek baru:** (1) Garis bawah nav dibuat **meluncur halus** — satu
  elemen `absolute` di `ul`, posisi/lebar diukur dari tombol aktif, `transition-all 500ms cubic-bezier(.16,1,.3,1)`,
  fade out saat berada di section di luar nav; menu mobile pakai animasi `scale-x`. (2) Proyek baru
  **Bramjono Transwisata** (live `prototype-travel`, HTML/CSS/JS, thumbnail `docs/screens/bramjono.png` →
  disalin ke `public/screens/`) — kini 6 kartu. Docs: DESIGN §4/§5.4, CONTENT §4. Build bersih.
- 11 Nov 2026 (lanjutan) — **Proyek & Keahlian dirapikan:** (1) Proyek — kartu unggulan feature dihapus, semua
  kartu kini seragam 2 kolom lebar penuh + header pola A (label kiri/H2 kanan) agar konsisten dengan About &
  Pengalaman. (2) Keahlian — CTA `sm:col-span-2`, `min-h-[280px]` dihapus, blok inset Database diisi chip
  (dulu kosong), panel selebar `wrap` 1140px. Docs: DESIGN §5.3/§5.4/§12. Build bersih.
- 11 Nov 2026 — **Perbaikan bug + permintaan pemilik (5 poin):** (1) `ExperienceSection` tidak punya `ref` di
  `<section>` → `useInView` tak pernah aktif → section tampil kosong total di browser (bug pada screenshot);
  ref dicek ulang di semua section, semuanya terpasang. (2) Footer: tombol sosial bulat dihapus — daftar tautan
  di atas sudah cukup (UX: ikon ganda dengan tujuan sama). (3) Pengalaman kini **hanya magang PT Marstech Global**
  (SIC & UKM PALS dihapus dari `data.ts` sesuai permintaan). (4) Nav aktif diberi **garis bawah selebar teks**
  (`border-b-2 border-current`, tidak aktif `border-transparent` supaya tidak geser). (5) **Kartu proyek diperbesar**
  (grid penuh 1140px, bukan kolom 8/12; feature `57%_1fr`; judul lebih besar). (6) Pill hero ke-3 **UI/UX Designer**
  di bawah Mobile Development (sejajar, lebih rendah). Ghost text mode gelap dinaikkan `.08` → `.13`.
  `DESIGN.md` v2.6 (§4, §5.1, §5.4, §5.5, §5.7, §12) & `CONTENT.md` disinkronkan. Build bersih.
- 10 Nov 2026 (lanjutan) — **Perbaikan dark mode:** teks/ikon di atas latar putih (`ButtonCTA` varian `light`,
  `GlassPill`, tombol sosial bulat footer) memakai `--fg` yang di mode gelap jadi terang → **putih-di-putih, tak
  terlihat** (dilaporkan pemilik lewat screenshot). Diperbaiki dengan token baru `--on-white: #0B0B0F`
  (sama di kedua tema).
- 10 Nov 2026 (lanjutan) — **ATM jilid 3: modifikasi komposisi** karena hasil dinilai "plek ketiplek" dengan
  referensi. Bahasa visual dipertahankan, susunan blok diubah: **About** foto ke kanan · **Keahlian** grid 2 kolom
  (atas 2 biru, bawah 2 putih) + kartu CTA strip horizontal · **Proyek** unggulan jadi feature lebar penuh
  (media kiri, teks kanan) + 4 sisanya 2 kolom · **Pengalaman** baris hairline tanpa kartu · **Sertifikasi** baris
  kartu lebar (visual kiri, judul+chip kanan) · **Kontak** dua kolom (H2+tombol kiri, daftar tautan baris kanan).
  Tabel perbandingan ada di `DESIGN.md` §6b; changelog v2.5 di §12. `npm run build` bersih.
- 10 Nov 2026 — **ATM jilid 2 (v2.4, Fase A–G selesai, `npm run build` bersih):** (1) **palet digeser** dari sampel referensi agar tidak identik piksel demi piksel — aksen `#3558FF`→`#0A62D8` (hue 230°→214°), navy `#03297A`→`#063D78`, `--hero-bg/--bg/--bg-alt` digeser tipis, dark `#4563F5`→`#1F70E8`; semua token gradasi ikut; kontras AA dicek ulang. (2) **ghost text** `DEVELOPER`→**`RIDWAN`** (`font-size` dihitung ulang `clamp(4.5rem,23vw,30rem)` agar lebar ≈94%). (3) **ikon SectionLabel** bintang 6 sudut → panah diagonal. (4) pill ke-3 hero dihapus (spesifikasi = 2). (5) **Kartu proyek ditulis ulang sesuai referensi baru yang dikirim pemilik** (portfolio-falich): media di atas 16:10 + baris meta + judul + chip outline, tanpa `.card`, tanpa deskripsi. (6) **About** bento + CTA. (7) **Keahlian** navy bento (kategori ikut `data.ts`: Frontend/Backend/Database/Mobile & Tools + kartu CTA; token baru `--inset-gradient`, icon `SiKotlin`/`SiAndroid` ditambahkan). (8) **Pengalaman** kartu + chip periode; **Sertifikasi** section terpisah (pola B). (9) **Kontak** navy penuh + kartu tautan outline + footer bar; `Footer.tsx` dihapus dari `layout.tsx`. (10) CSS mati dibersihkan: `.card`, `.btn-primary`, `.btn-outline`, `.btn-wa`, `.hairline`, `.cta-card`. (11) Teks About menyebut latar SMK Otomotif sebagai cara berpikir sistematis (motif AGENTS §2b #5, tanpa klaim baru).
- 10 Nov 2026 — Foto profil hero: placeholder SVG diganti `public/screens/profil_ridwan.png` (1402×1122, latar sudah dihapus/alpha 0; `profil_ridwan-cutout.png` versi lama berhenti setinggi dada sehingga baju terlihat kepotong). `next/image`, `priority`, alt bermakna. Skala sempat 125% `.photo` → bahu keluar arch (pemilik menilai aneh), diturunkan ke **90% `.photo`** (97% lebar arch) agar seluruh orang muat di dalam arch, lalu **dinaikkan `translateY(-28%)`** karena kepala terlalu rendah; mask bawah dilunakkan 72%→84%. `DESIGN.md` §5.1 diperbarui; `--cutout-fill` kini tak terpakai.
- 10 Nov 2026 — Proyek **MyBakery Inventory** (urutan kedua) ditambahkan: thumbnail `public/screens/my-bakery.png` (disalin dari `docs/screens/`), link live `https://mybakery-inventory.vercel.app`, stack diverifikasi dari situs (Next.js + Tailwind + Recharts). Thumbnail dashboard lebar memakai `object-contain` agar tidak terpotong; konfigurasi per-thumb di `ProjectsSection.THUMB`.
- 10 Nov 2026 — Proyek **Timelyst** ditambahkan (urutan pertama): thumbnail `public/screens/timelyst.png` (disalin dari `docs/screens/`), `ProjectsSection` kini merender `next/image` bila `project.image` ada, dan tombol "Lihat Proyek" menampilkan prototipe Figma. Stat hero otomatis jadi 4+.
- 9 Nov 2026 — v2.3: HeroLinks (LinkedIn+GitHub), transisi halus toggle tema, data sosial asli, pendekatan ATM; AGENTS/REFERENCE disinkronkan agar tidak lagi menyuruh mulai dari nol.
- 8 Nov 2026 — v2 dibuat; Fase 1–2 selesai, Fase 3–5 sebagian (agent sebelumnya).
- 8 Nov 2026 — v2.1: referensi lengkap + ikon sosial. v2.2: gabung token sampling + amandemen 4 fitur; rencana Fase A–I.