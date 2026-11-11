# 🎨 DESIGN.md — Sumber Kebenaran Desain (v2.3)

> Patokan tunggal UI. Baca `AGENTS.md` dan `REFERENCE.md` dulu.
> Angka adalah **titik awal**; jika gambar referensi berbeda, **gambar menang** dan dokumen ini diperbarui.

- **Referensi:** "Portfon" — Dribbble https://dribbble.com/shots/27379252-Personal-Portfolio-Website-Design
  dan situs live https://portfon.framer.website (hanya acuan visual, jangan salin aset/kode)
- **Pendekatan:** ATM (Amati, Tiru, Modifikasi) — lihat `AGENTS.md` §2b. Pola boleh ditiru; aset, teks, dan kode harus asli.
- **Versi:** 2.3 (v2.2 + amandemen 9 Nov 2026: link LinkedIn & GitHub di hero, transisi halus toggle tema, data sosial asli)
- **Terakhir diperbarui:** 9 Nov 2026

---

## 1. Prinsip

1. **Tiru komposisi referensi di setiap section**, bukan hanya hero (lihat §5).
2. **Tipografi adalah desain.** Kontras ukuran tegas, tracking sangat rapat.
3. **Satu aksen biru + satu navy.** Navy hanya untuk Keahlian & Kontak.
4. **Satu pola tombol:** pill + lingkaran panah menempel (§3.1). Tidak ada gaya tombol lain.
5. **Bento itu sah** jika meniru referensi: ukuran & isi tiap kartu *berbeda* (bukan 4 kartu identik).
6. **Hapus, jangan tambah.** Dekorasi tanpa fungsi = slop.
7. **Light-first.** Default selalu light (fidelity ke referensi). Dark mode ada lewat toggle di nav (§9) tanpa mengubah layout.
8. **Empat fitur amandemen pemilik** (Lenis, custom cursor, toggle tema, preloader) adalah lapisan fitur, bukan perubahan desain (§8).

---

## 2. Design Tokens

### 2.1 Warna

> **Palet digeser dari sampel referensi (10 Nov 2026, v2.4)** — supaya tidak identik piksel demi piksel
> (AGENTS §2b #6): hue biru 230° → 214° (azure), abu-biru digeser tipis. Kontras AA di kedua tema.

| Token | Nilai | Pemakaian |
|---|---|---|
| `--hero-bg` | `#C3CDDC` | Latar hero (digeser dari sampel `#C7CCD8`) |
| `--bg` | `#E9EEF5` | Latar halaman (About, Proyek, Pengalaman, Sertifikasi) |
| `--bg-alt` | `#E3E9F2` | Section berselang-seling (mis. Pengalaman vs Sertifikasi) |
| `--card` | `#F7F8FC` | Kartu bento & proyek (putih kebiruan) |
| `--surface` | `#FFFFFF` | Kartu artikel/sertifikat, pill hero, badge ikon |
| `--chip` | `#E9ECF3` | Chip abu di dalam kartu |
| `--fg` | `#0B0B0F` | Teks utama, tombol hitam |
| `--fg-muted` | `#505462` | Teks sekunder (AA ≥4.5:1 di hero/bg/bg-alt; dipergelap dari `#5E6270` saat audit) |
| `--number-ghost` | `#D3D8E3` | Nomor proyek "01" |
| `--border` | `rgba(11,11,15,0.10)` | Hairline |
| `--accent` | `#0A62D8` | Aksen biru tunggal (azure; ikon label, hover, gradasi) |
| `--accent-strong` | `#084FAF` | Hover |
| `--navy` | `#063D78` | Latar section gelap |
| `--navy-edge` | `#7E9AC8` | Tepi terang vinyet navy |
| `--arch-gradient` | `linear-gradient(180deg,#0A62D8 0%,#93B4EE 68%,var(--hero-bg) 92%)` | **Hanya** arch hero — memudar menyatu ke latar |
| `--blue-card` | `radial-gradient(60% 45% at 70% 70%,rgba(255,255,255,.5),transparent 70%), linear-gradient(160deg,#0A62D8 0%,#1A72E0 40%,#6FA0EE 70%,#BCD3F8 100%)` | Kartu biru Keahlian. **Teks putih hanya di ≤40% bagian atas kartu** (AA); pill kaca di bagian terang memakai teks gelap |
| `--ghost-gradient` | `linear-gradient(180deg,rgba(255,255,255,.85) 0%,rgba(255,255,255,0) 90%)` | Ghost text hero |
| `--navy-bg` | `linear-gradient(180deg,rgba(125,143,203,.85) 0%,transparent 16%), linear-gradient(90deg,rgba(125,143,203,.8) 0%,transparent 22%,transparent 78%,rgba(125,143,203,.8) 100%), var(--navy)` | Latar section navy (vinyet) |
| `--glass` | `rgba(255,255,255,0.07)` | Panel kaca di Keahlian |
| `--cta-gradient` | `linear-gradient(180deg,#0A62D8 0%,#0A5AC4 55%,#08499F 100%)` | Blok biru pepat (visual kartu CTA Keahlian, placeholder sertifikat) — ujung gelap agar teks putih tetap AA |
| `--project-gradient` | `linear-gradient(180deg,#0A62D8 0%,rgba(116,160,234,.55) 100%)` | Placeholder gambar proyek bila belum ada screenshot |
| `--inset-gradient` | `radial-gradient(70% 90% at 80% 100%,rgba(10,98,216,.18),transparent 70%), linear-gradient(160deg,#EDF3FC 0%,#DCE8F9 100%)` | Gambar inset kartu Keahlian "Database" (versi dark: `rgba(31,112,232,.28)` + `#1B2030→#171B26`) |
| `--on-accent` | `#FFFFFF` | Teks di atas `--accent` / biru |
| `--on-white` | `#0B0B0F` (light **dan** dark) | Teks/ikon di atas latar putih murni: `ButtonCTA` varian `light`, `GlassPill`, tombol sosial footer — **tidak berubah antar tema** (tanpa ini mode gelap jadi putih-di-putih) |
| `--on-fg` | light `#FFFFFF` · dark `#0E1014` | Teks di atas tombol `--fg` (pill hitam → di dark jadi terang) |
| `--nav-bg` | light `rgba(233,237,242,.75)` · dark `rgba(14,16,20,.75)` | Latar navbar saat scroll |
| `--stat-bg` / `--stat-border` | light `rgba(255,255,255,.75)` / `rgba(255,255,255,.6)` · dark `rgba(28,31,39,.7)` / `rgba(255,255,255,.1)` | Stat card hero |
| `--cutout-fill` | netral | Isi placeholder foto sebelum foto asli ada |

> Token dark mode: lihat §9. **Jika nilai di `globals.css` repo sudah berbeda dari tabel (hasil sampling/audit AA agent), nilai repo menang** — perbarui tabel ini, jangan sebaliknya.

Aturan: **tidak ada hex di komponen**; semua lewat token. Nilai di atas perkiraan dari gambar —
sampling ulang dengan eyedropper bila perlu, lalu perbarui tabel ini.

### 2.2 Tipografi

**Satu keluarga: Inter Tight** (via `next/font/google`, `--font-sans`). **Tanpa font mono.**
Judul memakai `letter-spacing: -0.04em` (referensi sangat rapat).

| Peran | Ukuran | Weight | Tracking | Line-height |
|---|---|---|---|---|
| Ghost text **"RIDWAN"** (6 huruf) | `clamp(4.5rem,23vw,30rem)` | 700 | `-0.04em` | 0.85 |
| H1 hero | `clamp(2.5rem,4.6vw,4.5rem)` | 600 | `-0.04em` | 1.02 |
| H1 section (Proyek) | `clamp(2.5rem,4.4vw,4rem)` | 600 | `-0.04em` | 1.05 |
| Statement About | `clamp(2rem,3.4vw,3rem)` | 500 | `-0.04em` | 1.1 |
| H2 tengah (Keahlian, Pengalaman, Sertifikasi, Kontak) | `clamp(2rem,3.2vw,2.75rem)` | 500 | `-0.04em` | 1.1 |
| Judul kartu | `1.75rem` (28px) | 500 | `-0.03em` | 1.15 |
| Nomor proyek | `clamp(2.5rem,3.5vw,3.25rem)` | 500 | `-0.02em` | 1 |
| Angka stat | `2.25rem` | 500 | `-0.02em` | 1 |
| Judul kartu artikel | `1.0625rem` (17px) | 500 | `-0.02em` | 1.3 |
| Body besar | `1.0625rem` | 400 | 0 | 1.6 |
| Body / label kartu | `1rem` / `0.9375rem` | 400 | 0 | 1.6 |
| Nav / label / chip | `0.875rem`–`0.9375rem` | 400–500 | 0 | 1.4 |

Larangan: uppercase+tracking lebar, gradient text, italic dekoratif.

### 2.3 Radius, Shadow, Spacing

| Token | Nilai | Pemakaian |
|---|---|---|
| `r-sm` | `10–14px` | gambar inset, kartu tautan |
| `r-md` | `20px` | stat card, kartu bento kecil, kartu artikel |
| `r-lg` | `24px` | kartu foto, kartu proyek |
| `r-xl` | `28px` | panel kaca Keahlian |
| `r-full` | `9999px` | tombol, pill, chip, arch (atas) |
| `shadow-sm` | `0 1px 2px rgba(15,18,40,.04), 0 6px 20px rgba(15,18,40,.05)` | pill hero, stat hero, badge ikon |

Kartu bento/proyek **tanpa shadow & tanpa border** (hanya beda warna dengan latar). Grid 8px.

### 2.4 Layout

| Hal | Nilai |
|---|---|
| Container utama | `max-w-[1140px] mx-auto px-5 md:px-8` (Nav, Hero, About) |
| Container sempit | `max-w-[1026px]` (Keahlian panel, Proyek, Pengalaman) |
| Container kecil | `max-w-[855px]` (Sertifikasi, Kontak) |
| Section padding | `py-24 md:py-32` (hero khusus §5.1) |
| Gap bento/kartu | `12px` (artikel `15px`; proyek antar kartu `20px`) |
| Breakpoint | `sm 640` · `md 768` · `lg 1024` · `xl 1280` |

### 2.5 Pola Header Section
- **(A) Label kiri + statement kanan** — About. Label `col 1–4`, statement mulai `col 5/6` (≈ 34% container).
- **(B) Label tengah + H2 tengah** — Keahlian (putih), Pengalaman, Sertifikasi, Kontak.
- **(C) H1 besar kiri + subjudul 15px** — Proyek.

---

## 3. Komponen Dasar

### 3.1 Tombol (SATU pola untuk semua)
`<ButtonCTA>` = **pill + lingkaran panah menempel** (gap 2px), tinggi 50px (nav 44px).
- Varian `dark` (latar terang): pill `--fg`, teks putih 15–16px/500, padding-x 32–36px; lingkaran `--fg` + `ArrowRight` putih 20px.
- Varian `light` (latar navy): pill putih teks `--fg`; lingkaran putih + panah `--fg`.
- Hover: kedua bagian → `--accent`; panah geser 2px ke kanan. Tanpa scale/glow.
- Varian WhatsApp: sama, lingkaran berisi ikon WhatsApp (bukan panah).

### 3.2 Pill & chip
- **Pill putih hero:** `--surface`, `r-full`, 15px/500, padding 10×20, `shadow-sm`, miring.
- **Chip kartu:** `--chip`, `r-full`, 14px, padding 7×16, tanpa shadow (Minat/Hobi, tag keahlian, periode, penerbit).
- **Pill kaca (di kartu biru):** `rgba(255,255,255,.7)` + `backdrop-blur`, teks `--fg` 14px, miring ±10–30°, saling menimpa, boleh terpotong tepi kartu.

### 3.3 Section label
Ikon panah diagonal ke kanan-atas (SVG inline, 14px, stroke 1.6, `--accent`; putih di latar navy) + teks 14px/500. Bukan mono/uppercase.

### 3.4 Kartu
Lihat tiap section. Aturan umum: `r-md`/`r-lg`, warna `--card` atau `--surface`, hover `translateY(-4px)` 200ms saja.

### 3.5 Ikon brand & sosial
- `lucide-react` (stroke 1.5) untuk ikon UI umum (panah, mail, menu, close).
- **`react-icons`** untuk logo brand: sosial dari `react-icons/fa6` (`FaWhatsapp`, `FaLinkedinIn`, `FaGithub`,
  `FaInstagram`, `FaXTwitter`, `FaYoutube`, `FaFacebookF`), teknologi dari `react-icons/si`
  (`SiNextdotjs`, `SiLaravel`, `SiMysql`, `SiTypescript`, `SiFlutter`, `SiGit`, `SiTailwindcss`, `SiExpress`, `SiFigma`).
- **Satu sumber:** `socials` di `data.ts` → komponen `<SocialIcon id>` memetakan id→ikon. Entri tanpa `href` **tidak dirender**.
- Link sosial: `target="_blank" rel="noopener noreferrer"`, `aria-label="LinkedIn Ridwan"`; `mailto:` tanpa `target`.
- Ukuran tombol ikon ≥ 40px.
- **Hero hanya memakai 2 id: `linkedin` dan `github`** (amandemen 9 Nov 2026, lihat §5.1 `HeroLinks`). Id lain tidak tampil di hero.

### 3.6 Hairline
`1px var(--border)` hanya bila perlu (mis. garis di kartu CTA Keahlian).

---

## 4. Navbar

- `sticky top-0`, tinggi 72px, z-50, container utama. Awal **transparan**; saat scroll >24px: `bg-[var(--nav-bg)] backdrop-blur-md` + border bawah hairline.
- **Kiri:** logo kotak biru `r-sm` 32px berisi monogram "R" putih + nama **"Ridwan"** 20–22px/500
  (tulis nama lengkap di `<title>` dan hero, bukan di nav). Lalu link **tepat di sebelah logo** (gap 24px):
  `Beranda · Tentang · Keahlian · Proyek · Pengalaman` — 14–15px `--fg`, aktif = lebih tegas (weight 600)
  **+ garis bawah 2px yang MELUNCUR halus ke link aktif** (satu elemen `absolute` di dalam `ul`, posisi/lebar
  diukur dari tombol aktif, `transition-all 500ms cubic-bezier(.16,1,.3,1)`; permintaan pemilik 11 Nov 2026 —
  versi sebelumnya muncul-hilang mendadak dianggap kaku). Di section luar nav garis menghilang (fade).
  Menu mobile: garis `scale-x` tumbuh dari kiri. **Tanpa pill**.
- **Kanan:** `<ThemeToggle>` (ikon Sun/Moon lucide 18px, hanya ikon, lingkaran 40px, `aria-label="Ganti tema"`) di kiri CTA, lalu `<ButtonCTA dark size="nav">Hubungi Saya</ButtonCTA>` → `#contact`.
- **Mobile (<768px):** logo + tombol hamburger lingkaran; overlay penuh, link 28px/500, CTA di bawah, **baris ikon sosial** paling bawah. Fokus-trap + `Esc`.
- Toggle tema = amandemen pemilik (§9). Selain itu nav sama persis dengan referensi.

---

## 5. Spesifikasi Per Section

Urutan & id: `#hero` → `#about` → `#skills` (navy) → `#projects` → `#experience` → `#certificates` → `#contact` (navy + footer).

### 5.1 Hero (`#hero`) — meniru `01-hero.png`

Tinggi `min-height:min(100svh,880px)`, `overflow:hidden`, `background:var(--hero-bg)`. Nav menimpa bagian atas.

**Layer (bawah→atas):** latar → ghost text → arch → foto cutout → pill → teks kiri-bawah + stat kanan-bawah.

**Ghost text** `RIDWAN` (digeser dari `DEVELOPER`, 10 Nov 2026 — kata sendiri, bukan milik referensi): uppercase 700, lebar ≈ 94%, rata tengah, top ≈ 14%; isi `--ghost-gradient` via `background-clip:text`;
`aria-hidden`, `pointer-events:none`, `user-select:none`.

**Arch:** `absolute; left:50%; translateX(-50%); bottom:0`; `width:clamp(280px,40vw,580px); aspect-ratio:1/1.28`;
`border-radius:9999px 9999px 0 0; background:var(--arch-gradient)`; puncak ≈ 12–15% dari atas hero.

**Foto cutout:** `public/screens/profil_ridwan.png` (1402×1122, latar sudah transparan, bbox orang nyaris selebar frame);
`width:90%` dari `.photo` (108% lebar arch → 97% lebar arch) sehingga **seluruh orang muat di dalam arch** (bahu tidak keluar),
`transform:translateY(-28%)` agar kepala tidak terlalu rendah (≈26% tinggi arch), `height:auto`;
`mask-image:linear-gradient(to bottom,#000 84%,transparent 100%)`;
baju memudar ke biru arch sebelum dasar arch; tanpa border/shadow. `next/image` + `priority`.

**Pill (3):** kiri `Web Development` `rotate(-25deg)`; kanan atas `Mobile Development` `rotate(15deg)` (`left:76%; top:12%`);
kanan bawah **`UI/UX Designer`** `rotate(15deg)` (`left:76%; top:33%`) — sejajar dengan pill kanan tapi lebih rendah
(permintaan pemilik 11 Nov 2026). Gaya §3.2. Float ±6px.

**Teks kiri-bawah** (`absolute; left:container-edge; bottom:72px; max-w ≈46%`):
1. `Halo, saya Ridwan Afriza Listiyono.` 15px `--fg-muted`
2. H1 `Web, Mobile & UI/UX Designer` (dipecah 2 baris di tanda `&`, satu warna)
3. Ringkasan 1–2 kalimat (16px muted, `max-w-[26rem]`, mt 16px) — tambahan wajib tugas (tidak ada di referensi)
4. **`HeroLinks` — 2 tautan LinkedIn + GitHub** (amandemen pemilik 9 Nov 2026; lihat di bawah)
- **Tanpa** badge, tombol, scroll indicator, atau ikon sosial lain (hanya LinkedIn & GitHub).

**HeroLinks (LinkedIn + GitHub)** — baris di bawah ringkasan, `mt 20px`, `flex gap-3`, rata kiri:
- Dua tautan pill **tidak miring**, tinggi 40px, `padding: 0 16px 0 12px`, `gap 8px`, `r-full`, latar `--surface`, `shadow-sm`
  (keluarga yang sama dengan pill hero, tapi tegak agar jelas bisa diklik).
- Isi: logo brand 16px (`FaLinkedinIn`, `FaGithub` dari `react-icons/fa6`) + label 14px/500 `--fg` ("LinkedIn", "GitHub").
- Hover/fokus: latar `--accent`, teks & ikon `--on-accent`, transisi warna 150ms (tanpa scale). `:focus-visible` ring 2px `--accent`.
- Sumber: `socials` di `data.ts` (id `linkedin`, `github`); entri tanpa `href` **tidak dirender**.
- Atribut: `href` asli, `target="_blank" rel="noopener noreferrer"`, `aria-label="LinkedIn Ridwan Afriza (tab baru)"` / `"GitHub Ridwan Afriza (tab baru)"`.
- Posisi: karena blok teks menempel `bottom:72px`, penambahan baris ini **menumbuhkan blok ke atas**; pastikan tidak menabrak arch/pill di 1024px
  (kalau mepet, turunkan `bottom` ke 56px atau kecilkan `mt` — jangan menggeser hero lain).
- Mobile (<768px): tetap di bawah ringkasan, boleh `flex-wrap`; target sentuh ≥ 40px.

**Stat card kanan-bawah** (`absolute; right:container-edge; bottom:72px; width:clamp(220px,26vw,300px)`):
kartu 1 "Proyek yang / dikerjakan" **`${projects.length}+`** (kini `5+`); kartu 2 (gap 10px) "Sertifikat / diraih"
**`${certifications.length}`** (kini `2`), `mask-image` memudar. Angka selalu diturunkan dari `data.ts`.
Gaya: `rgba(255,255,255,.75)` + `blur(12px)`, `r-md`, `shadow-sm`, border `1px rgba(255,255,255,.6)`, padding 18×20.
Angka hanya dari `data.ts`.

**Responsif:** `≥1024` penuh · `768–1023` arch `46vw`, stat 240px · `<768` stack: ghost (`22vw`) → arch+foto (78vw) →
teks kiri → 2 stat berdampingan (tanpa fade); padding bawah 48px.

### 5.2 Tentang (`#about`) — meniru `02-about.png`

Latar `--bg`, `py-32`, container utama.

**Baris 1 (pola A):** label "Tentang Saya" kiri; statement (H §2.2, 3–4 baris, `max-w ≈ 660px`) mulai kolom 5/6;
di bawahnya (mt 32px) `<ButtonCTA dark>Hubungi Saya</ButtonCTA>` → `#contact`.
Statement = 2–3 kalimat spesifik tentang Ridwan (lihat `CONTENT.md` §5).

**Baris 2 (bento, mt 64px):** `grid lg:grid-cols-[35%_1fr] gap-12`; mobile 1 kolom.
- **Kartu foto:** `--card`, `r-lg`, tinggi ≈ 490px (`aspect-[4/5]` di mobile), foto cutout setengah badan
  **menempel dasar & terpotong lurus oleh kartu** (`overflow:hidden`, `object-position:bottom`, tanpa fade). Foto yang sama dengan hero, crop berbeda boleh.
- **Klaster kanan** (`self-end`, grid 2 kolom, gap 12px):
  - **Stat A** (tinggi ≈ 100px): label kiri 2 baris 16px + angka kanan 36px/500 — "Proyek yang dikerjakan" `4+`.
  - **Stat B:** "Sertifikat diraih" `2` (atau "Bulan magang full-stack" `6` jika data mendukung).
  - **Kartu Pendidikan** (tinggi ≈ 245px): judul 28px/500 "D3 Teknologi Informasi", baris muted "Politeknik Negeri Madiun",
    chip "Latar SMK Otomotif"; di kanan-bawah **klaster 4–5 badge bulat logo teknologi** (Next.js, Laravel, MySQL, TypeScript, Flutter)
    saling menimpa & terpotong tepi kartu (pengganti klaster avatar referensi).
  - **Kartu Minat & Hobi:** judul 28px/500 "Minat & Hobi", 3 chip abu vertikal (dari `data.ts`), + 1 chip **miring ≈ −50°** di kanan, terpotong sebagian.
- Semua kartu `--card`, `r-md`/`r-lg`, tanpa border/shadow.
- Data pendidikan/minat/hobi **wajib** tampil (ketentuan tugas).

### 5.3 Keahlian (`#skills`) — meniru `03-services.png`

Latar `--navy-bg`, `py-28`. **Pola B** (label putih + H2 putih tengah, mis. "Keahlian yang Saya Bawa ke Setiap Proyek").

**Panel kaca:** lebar container penuh `wrap` 1140px (dinaikkan dari `wrap-md` 1026px, 11 Nov 2026), `--glass`,
border `1px rgba(255,255,255,.08)`, `r-xl`, padding 16–24px, `backdrop-blur-sm`.
Di dalamnya grid **2 kolom** `gap-3` (mobile 1 kolom), kartu `r-md` (20px), padding 22px,
**tanpa tinggi minimum** (tinggi mengikuti isi — menghilangkan ruang kosong, 11 Nov 2026):

| Posisi | Kartu | Gaya | Isi |
|---|---|---|---|
| Baris 1 kiri | **Frontend** | `--blue-card`, teks putih | judul 28px/500, 1 kalimat 16px putih 85%, di bawah **pill kaca miring** saling menimpa (Next.js, TypeScript, PrimeReact, HTML, CSS) |
| Baris 1 kanan | **Backend** | `--blue-card` | sama; pill: Laravel, Filament, Express.js |
| Baris 2 kiri | **Database** | `--surface` | judul + deskripsi; di bawah **blok inset** `--inset-gradient` berisi **chip teknologi** (MySQL, PostgreSQL, Linux (Dasar)) — sebelumnya kosong & nyaris tak terlihat di mode gelap |
| Baris 2 kanan | **Mobile & Tools** | `--surface` | judul + deskripsi; dasar kartu: **busur konsentris biru** (border bergradasi opasitas) + 4 **badge bulat logo** (Flutter, Kotlin, Android, Git) 40px putih `shadow-sm` di atas busur |
| Baris 3, **`sm:col-span-2`** | **CTA strip** | `--surface` | strip horizontal **membentang 2 kolom penuh** (sebelumnya 1 kolom → lubang kosong di kanan): blok `--blue-card` kiri 40%, kanan chip "Siap berkolaborasi" + judul "Ayo Berkolaborasi" 28px/500 + 1 kalimat + `<ButtonCTA>Hubungi Saya</ButtonCTA>` |

Nama kartu mengikuti `skills` di `data.ts` (kategori → kartu) — kategori "IoT & Mobile"/"Tools" lama
diganti **Mobile & Tools** setelah amandemen pemilik 9 Nov 2026 (fokus web, mobile, UI/UX).
Kartu biru = 2 kategori pertama, sisanya `--surface`. Tanpa ikon-dalam-kotak-tint.

### 5.4 Proyek (`#projects`) — meniru `04-portfolio.png`

Latar `--bg`, `py-32`, **container penuh 1140px**. **Header pola A** (konsisten dengan About & Pengalaman,
permintaan pemilik "disamakan" 11 Nov 2026): label "Proyek" kiri (kol 4) · H2 satu kalimat kanan (kol 8, rata kiri).

**Semua kartu SERAGAM** — grid 2 kolom lebar penuh (mobile 1), gap-x 32 / gap-y 56, **tanpa kartu unggulan
berbeda ukuran**, tanpa `.card` pembungkus, tanpa deskripsi. **6 kartu** (ke-6: **Bramjono Transwisata**,
ditambahkan 11 Nov 2026 — `url` live + thumbnail `public/screens/bramjono.png` 1919×990 `object-contain`):
- **Media di atas:** `aspect-[16/10]`, radius 18px. Screenshot bila ada (`object-cover`; screenshot
  lebar pakai `object-contain`), kalau belum ada → `--project-gradient` + mock UI CSS sederhana.
- **Lingkaran panah kanan-atas media** (`bg-surface`, 44px, hover → aksen) **hanya bila proyek punya `url`**.
- **Baris meta:** kiri kategori 13px/500 `--fg-muted`, kanan **nomor urut** `01`, `02`… token `--number-ghost`
  (ordinal fungsional — bukan tahun, karena tidak ada data tahun di `data.ts`).
- **Judul** `clamp(1.375rem,2vw,1.75rem)`/500.
- **Chip teknologi** = pil outline (`border-line`, r-full, 13px) — bukan tombol, bukan mono.
- Seluruh kartu = `<motion.article class="group">`; media jadi link hanya bila ada `url`.
- Tanpa filter tab.

### 5.5 Pengalaman (`#experience`)
Latar `--bg-alt`, container utama. **Baris hairline tanpa kartu** (deviasi ATM §6b): teks kiri (peran 20px/500 +
organisasi 15px muted + maks 3 poin), **chip periode** kanan-atas; garis `border-t`/`border-b` `--border`.
Isi: **hanya magang PT. Marstech Global** — peran ketua/organisasi (SIC, UKM PALS) dihapus atas permintaan
pemilik 11 Nov 2026.

### 5.6 Sertifikasi (`#certificates`) — meniru `05-blog.png`
Latar `--bg`, container kecil. **Pola B** (label tengah + H2 tengah). Grid kartu (2–3 kolom, gap 15px):
kartu `--surface`, `r-md`, **padding 9px**, gambar sertifikat `r-sm` 14px (`aspect ≈ 1.7`), di bawah judul 17px/500 kiri + **chip penerbit/tahun** kanan.
Tanpa gambar → blok gradasi lembut + judul. Jika sertifikat hanya 1–2, kartu tetap di tengah.

### 5.7 Kontak + Footer (`#contact`) — meniru `06-footer-cta.png` ⚠️ wajib tugas

Satu section navy penuh lebar: `--navy-bg`, `py-28`, container kecil (855px), rata kiri.
1. H2 putih 2 baris: **"Punya proyek atau ide? / Ayo ngobrol."**
2. ~~Teks bantu 1 kalimat (putih 80%): "Balasan biasanya cepat."~~ **Dihapus** (permintaan pemilik 11 Nov 2026) — H2 langsung ke tombol WhatsApp.
3. **Tombol utama:** `<ButtonCTA light whatsapp>Hubungi Saya via WhatsApp</ButtonCTA>` — ukuran besar (tinggi 56px),
   `href=waLink`, `target="_blank"`, `rel="noopener noreferrer"`. **Elemen paling kontras di halaman.**
4. **Daftar tautan** (kolom kanan, deviasi ATM §6b): baris `border-t` + baris terakhir `border-b`
   `rgba(255,255,255,.25)`; tiap baris = ikon brand 20px + label 17px/500 putih + panah `ArrowUpRight` di kanan,
   hover `bg-white/10`, `:focus-visible` ring putih. Urut: WhatsApp · LinkedIn · GitHub · Instagram · Email
   (hanya yang punya `href`, semua link sungguhan).
5. Hairline `rgba(255,255,255,.25)` membentang penuh.
6. **Footer bar:** hanya "© 2026 Ridwan Afriza Listiyono." 14px putih 85%.
   **Tombol sosial bulat dihapus (11 Nov 2026)** — pemilik menilai deret ikon ganda membingungkan (tujuan sama);
   ikon sosial cukup sekali, di daftar tautan atas (+ menu mobile).
- Tidak ada form. Tidak ada CTA ganda selain yang di atas.

### 5.8 Dihapus total vs Dikembalikan
**Dihapus total:** noise overlay, particles, marquee, scroll indicator, badge status, mono labels, gradient text,
filter proyek, kartu ikon seragam, form kontak.

**Dikembalikan (amandemen pemilik, 8 Nov 2026)** — lapisan fitur saja, desain UI tidak berubah:
`SmoothScroll` (Lenis), `CustomCursor`, `ThemeToggle`, `Preloader` — spesifikasi di §8 dan §9.

Opsional: **BackToTop** (bulat 44px, `--fg`, muncul setelah scroll 600px).

---

## 6. Konsistensi lintas section
1. Latar bergantian: hero → `--bg` → **navy** → `--bg` … → **navy**; **batas tidak terpotong tajam** —
   ujung tiap section diberi gradien penyambung (§6c), jadi warna meleleh antar section, terutama
   menuju/dari navy.
2. Gunakan hanya pola header A/B/C.
3. Kartu = `--card`/`--surface`, radius token, tanpa border/shadow.
4. Tombol = `ButtonCTA` saja. Chip = `--chip`.
5. Elemen "khas Portfon" (arch, pill miring, badge bulat menimpa, potong tepi kartu) dipakai di tempat yang ada di referensi — jangan ditaburkan di tempat lain.

### 6b. Modifikasi komposisi (ATM jilid 3 — 10 Nov 2026, permintaan pemilik)

Pemilik menilai hasil sebelumnya "plek ketiplek" dengan referensi. Bahasa visual (warna, tipografi,
komponen, radius, shadow) **tidak berubah**; yang diubah adalah **susunan blok**:

| Section | Referensi | Versi sekarang |
|---|---|---|
| About | foto 35% di kiri + klaster kanan | **klaster kiri (1fr) + foto 35% di kanan** (mobile tetap foto dulu) |
| Keahlian | grid 3 kolom: 2 kolom biru/putih + kolom CTA 2 baris | **grid 2 kolom** (baris 1 dua kartu biru, baris 2 dua kartu putih) + **kartu CTA strip horizontal** di bawah |
| Proyek | grid seragam 2 kolom semua kartu | **proyek unggulan = feature lebar penuh** (media kiri · meta+judul+chip kanan), 4 sisanya grid 2 kolom |
| Pengalaman | kartu bertumpuk + chip | **baris hairline** tanpa kartu (teks kiri, chip periode kanan) |
| Sertifikasi | grid 2 kolom kartu gambar | **baris kartu lebar**: visual kiri (300px) · judul + chip kanan |
| Kontak | H2 lebar + grid 5 kotak outline | **dua kolom**: kiri label+H2+tombol WA, kanan **daftar tautan baris** (ikon · nama · panah, hairline) — footer bar tetap penuh di bawah |

---

### 6c. Transisi gradasi antar section (permintaan pemilik 11 Nov 2026)

Tujuan: saat scroll, perpindahan warna (→ navy, ← navy, dan section berselang) **tidak terlihat
kepotong** — ada gradien penyambung ±130px (atas) / 100px (bawah). Implementasi: kelas `background`
di `globals.css` (§ Utility), dipakai sebagai `background-image` sehingga selalu di **bawah** konten:

| Section | Kelas | Sambung |
|---|---|---|
| Tentang | `.blend-from-hero` | atas: `--hero-bg` → transparan (130px) |
| Keahlian | `.section-navy` | atas: `--bg` → navy (130px); bawah: navy → `--bg` (100px) |
| Pengalaman | `.section-alt` (+ `bg-bg-alt`) | atas: `--bg` → `--bg-alt`; bawah: `--bg-alt` → `--bg` |
| Kontak | `.section-navy-top` | atas: `--bg` → navy (130px); section terakhir |
| Proyek / Sertifikasi | — | tidak perlu: ujung section sebelumnya sudah berakhir di `--bg` |

Batas atas navy 130px — berakhir sebelum isi section (padding 96/112px), label putih masih di atas
campuran ≥74% navy → kontras AA tetap terpenuhi. Bawah Keahlian 100px — pas di bawah panel kaca
(padding 96/112px), tidak menembus panel.

---

## 7. Foto Profil
Cutout transparan (PNG/WebP), setengah badan, pakaian rapi, ekspresi ramah, pencahayaan merata, ≥ 1200×1500.
Dipakai di **Hero** (arch + fade bawah) dan **About** (kartu foto, terpotong dasar). Hapus latar via remove.bg/Photoroom.
Jangan pakai foto stok berlatar gelap.

---

## 8. Motion
| Elemen | Efek | Durasi/easing |
|---|---|---|
| Hero (nav, ghost, arch, teks, stat) | fade + translateY 16px, stagger 60ms | 600ms `cubic-bezier(.16,1,.3,1)` |
| Section lain | fade + translateY 12px, **berulang setiap masuk viewport** (`once:false`, permintaan pemilik 11 Nov) | 500ms |
| Tombol | warna 150ms; panah geser 2px | — |
| Kartu | `translateY(-4px)` | 200ms |
| Pill hero / pill kaca | float ±6px opsional | 6s |
| **Ganti tema** | crossfade seluruh halaman (§9.1) | 400ms `cubic-bezier(.4,0,.2,1)` |
| Ikon toggle tema | Sun↔Moon: rotate 90° + fade | 250ms |

`prefers-reduced-motion: reduce` → matikan semua kecuali perubahan warna (termasuk empat fitur di bawah).
Tanpa parallax, tilt 3D, scroll-jacking.

### 8.1 Empat fitur amandemen pemilik
| Fitur | Berkas | Aturan |
|---|---|---|
| **Lenis smooth scroll** | `fx/SmoothScroll.tsx` (paket `lenis`) | Hanya penghalus scroll; `duration ≈ 1.1`, easing standar. Mati saat reduced-motion. Saat aktif, anchor nav memakai API Lenis (`scrollTo`) atau tetap native tanpa bentrok — tidak boleh ada dua scroll-smooth bersamaan (`scroll-behavior:auto` pada `html.lenis`). |
| **Custom cursor** | `fx/CustomCursor.tsx` | Dot 8px `--accent` + ring 36px border `--accent`/40%, ring membesar ±1.4× di atas link/tombol. Hanya `pointer: fine`, `aria-hidden`, kursor bawaan **tetap terlihat**, mati saat reduced-motion. Warna lewat token (di navy: tetap terbaca). |
| **Toggle tema** | `layout/ThemeToggle.tsx` | §9. |
| **Preloader** | `fx/Preloader.tsx` | Overlay `--bg` berisi monogram + nama + bar tipis `--accent`. **Maks ≈ 600ms, sekali per sesi** (`sessionStorage`), konten tetap dirender di bawah overlay (tidak menunda LCP), fade-out 300ms. Mati saat reduced-motion. |

---

## 9. Dark Mode (DALAM LINGKUP — amandemen pemilik)

- **Default selalu light.** Toggle di nav (§4). Preferensi di `localStorage` key `theme` (`"light" | "dark"`).
- **Tanpa flash:** script inline di `<head>` `layout.tsx` membaca `localStorage` sebelum paint dan menambah kelas `dark` pada `<html>`.
- Implementasi: `darkMode:"class"` (Tailwind) + override token di `html.dark` (`globals.css`). **Komponen tidak diubah** — semua pakai `var(--token)`.
- Semua pasangan teks **lolos AA 4.5:1** (teks besar ≥ 3:1), diverifikasi skrip Pillow, bukan selera.
- Hero light tetap rujukan utama; jangan mengorbankannya demi dark.

| Token | Dark |
|---|---|
| `--bg` | `#0E1014` |
| `--bg-alt` | `#15171D` |
| `--hero-bg` | `#1A1D26` (hero tetap panel yang berbeda dari halaman) |
| `--card` | `#181B22` |
| `--surface` | `#1C1F27` |
| `--chip` | `#262A36` |
| `--number-ghost` | `#2C3140` (dekoratif, `aria-hidden`) |
| `--fg` | `#F2F3F7` |
| `--fg-muted` | `#A3A9B8` |
| `--border` | `rgba(255,255,255,0.12)` |
| `--accent` / `--accent-strong` | `#4563F5` / `#5B77FF` |
| `--arch-gradient` | biru → memudar ke `--hero-bg` gelap |
| `--ghost-gradient` | putih 8% → transparan |
| `--navy` / `--navy-edge` | `#03297A` dipertahankan / `#3A4D8F` (tepi vinyet dikurangi terangnya) |
| `--blue-card`, `--cta-gradient` | dipertahankan (teks putih tetap AA) |
| `--glass` | `rgba(255,255,255,0.05)` |

### 9.1 Transisi halus saat ganti tema (amandemen 9 Nov 2026)

Tujuan: perpindahan light↔dark terasa mulus (tanpa kilatan/kedipan), termasuk elemen yang memakai **gradient** (arch, ghost text, `--navy-bg`)
yang tidak bisa dianimasikan oleh `transition` CSS biasa.

**Strategi dua lapis (urutan prioritas):**
1. **View Transitions API** (utama) — crossfade snapshot seluruh halaman; gradient ikut halus.
2. **Fallback kelas sementara `theme-transition`** — transisi warna biasa selama ±450ms di browser tanpa View Transitions.
3. `prefers-reduced-motion: reduce` → **tanpa animasi** (ganti tema langsung).

```ts
// ThemeToggle.tsx — inti logika (acuan, sesuaikan dengan kode yang ada)
function applyTheme(next: "light" | "dark") {
  const html = document.documentElement;
  html.classList.toggle("dark", next === "dark");
  try { localStorage.setItem("theme", next); } catch {}
  setTheme(next); // state ikon
}

function toggleTheme() {
  const next = theme === "dark" ? "light" : "dark";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return applyTheme(next);

  if ("startViewTransition" in document) {
    (document as any).startViewTransition(() => applyTheme(next));
  } else {
    const html = document.documentElement;
    html.classList.add("theme-transition");
    applyTheme(next);
    window.setTimeout(() => html.classList.remove("theme-transition"), 450);
  }
}
```

```css
/* globals.css */
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Fallback (tanpa View Transitions): hanya aktif sebentar saat toggle */
html.theme-transition,
html.theme-transition *,
html.theme-transition *::before,
html.theme-transition *::after {
  transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease,
    fill 0.4s ease, stroke 0.4s ease, box-shadow 0.4s ease !important;
}
/* jangan ganggu elemen cursor kustom */
html.theme-transition .cursor-dot, html.theme-transition .cursor-ring { transition: none !important; }

html.dark { color-scheme: dark; }

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) { animation: none !important; }
}
```

**Aturan:**
- Kelas `theme-transition` / View Transition **hanya** dipicu klik toggle — **bukan** saat load pertama (anti-flash `<head>` tetap bekerja tanpa animasi).
- Abaikan klik beruntun selama transisi berjalan (mis. simpan `transition.finished` / kunci 450ms) agar tidak berkedip.
- Gradient (arch, ghost text, `--navy-bg`) di fallback boleh "snap" — itu diterima; di browser dengan View Transitions harus halus.
- Ikon toggle: Sun dan Moon ditumpuk, yang aktif `opacity:1; rotate(0)`, yang nonaktif `opacity:0; rotate(90deg)`, transisi 250ms (mati di reduced-motion).
- Jangan menambah `transition` global permanen pada `*` (merusak performa & animasi lain); hanya lewat kelas sementara.
- Uji: ganti tema 5× beruntun di semua section → tidak ada elemen yang tertinggal warna lama, tidak ada kilatan putih, Lenis/cursor tetap normal.

Section navy (Keahlian & Kontak) **tidak berubah banyak** di dark — memang sudah gelap; cukup pastikan kartu putih di dalamnya memakai `--surface`.

---

## 10. Aksesibilitas & Performa
Kontras ≥ 4.5:1 (cek putih-di-atas navy tepi terang); ghost text `aria-hidden`; `:focus-visible` ring 2px `--accent` offset 2px
(putih di latar navy); target sentuh ≥ 44px; satu H1; `alt` bermakna; foto hero `priority`; tanpa CLS; font `display:swap`.
**Gambar besar → WebP** (11 Nov 2026): foto hero `profil_ridwan.webp` 109KB (dari PNG 2.68MB), thumbnail
`bramjono.webp` 158KB (dari PNG 1.92MB) — konversi via `sharp`; `sharp` juga dipakai Next untuk optimasi
gambar agar buka-ulang halaman cepat. PNG asli masih disimpan di `public/screens/` sebagai arsip.

---

## 11. Struktur Berkas
```
src/
  app/ (layout.tsx, page.tsx, globals.css)
  components/
    ui/ (ButtonCTA, Chip, GlassPill, SectionLabel, SocialIcon, TechBadge, StatCard, Reveal)
    layout/ (Navbar, MobileMenu, BackToTop, ThemeToggle)
    fx/ (SmoothScroll, CustomCursor, Preloader)
    sections/ (Hero, About, Skills, Projects, Experience, Certificates, Contact)
  lib/data.ts
public/ (avatar.webp, og.png, project-*.webp, cert-*.webp)
docs/reference/ (00…06 sesuai REFERENCE.md §0)
```

---

## 12. Catatan Perubahan
- v2.8 · 11 Nov 2026 — revisi kecil setelah cek live Vercel: (a) teks bantu Kontak **"Balasan biasanya
  cepat." dihapus** (§5.7); (b) **logo Flutter di kartu Pendidikan tidak lagi terpotong** — bleed `-mr-10`
  dihapus, klaster badge rata di dalam kartu (§5.2); (c) pill hero **`UI/UX Designer` digeser turun**
  `top:27%` → `33%` (§5.1).
- v2.7 · 11 Nov 2026 — (a) **Transisi gradasi antar section** (§6c): batas warna tidak terpotong tajam —
  `.blend-from-hero`, `.section-navy`, `.section-navy-top`, `.section-alt` (gradien `background-image` di bawah
  konten). (b) **Animasi scroll mengulang** — `useInView` semua section `once:true` → `once:false` (§8).
  (c) **Performa buka-ulang**: foto hero 2.68MB PNG → **109KB WebP**, Bramjono 1.92MB → **158KB WebP**;
  dependensi `sharp` ditambahkan (alasan: optimasi gambar Next + konversi; §10).
- v2.6 · 11 Nov 2026 (lanjutan) — (h) **Proyek "disamakan":** kartu unggulan feature dihapus → **semua 5 kartu
  seragam** grid 2 kolom lebar penuh; header kini **pola A** (label kiri kol 4 · H2 kanan kol 8 rata kiri), sama
  seperti About & Pengalaman (§5.4). (i) **Keahlian kosong:** kartu CTA diberi `sm:col-span-2` (lubang kanan hilang),
  `min-h-[280px]` dihapus (tinggi ikut isi), blok inset Database kini **diisi chip teknologi** (terlihat di mode
  gelap), panel `wrap-md` → `wrap` 1140px (§5.3).
- v2.6 · 11 Nov 2026 — (a) **Bug section kosong:** `ExperienceSection` kehilangan `ref={ref}` di `<section>` →
  `useInView` tak pernah aktif → seluruh isi tetap `opacity:0` (hanya garis `border-t` yang terlihat). Diperbaiki
  & dicek ulang ke semua section. (b) Footer: **tombol sosial bulat dihapus** (deret ikon ganda). (c) Pengalaman
  **hanya magang PT Marstech Global** (peran ketua/organisasi dihapus dari `data.ts`). (d) Nav aktif diberi
  **garis bawah selebar teks** (`border-b-2 border-current`, desktop + menu mobile). (e) **Kartu proyek diperbesar**
  — grid keluar dari kolom 8/12 jadi container penuh; judul & gap ikut naik (§5.4). (f) Pill ke-3 hero
  **`UI/UX Designer`** di bawah "Mobile Development" (sejajar, `top:27%`). (g) Ghost text dark mode `.08` → `.13`
  supaya tidak hilang sama sekali.
- v2.5 · 10 Nov 2026 — (a) **Perbaikan dark mode:** token `--on-white` (`#0B0B0F` di kedua tema) + dipakai di
  `ButtonCTA` varian `light`, `GlassPill`, dan tombol sosial footer — sebelumnya teks/ikon memakai `--fg`
  sehingga jadi putih-di-putih saat mode gelap. (b) **Modifikasi komposisi ATM jilid 3** (permintaan pemilik:
  "jangan plek ketiplek") — lihat §6b: About foto ke kanan, Keahlian 2 kolom + CTA strip, Proyek feature lebar,
  Pengalaman baris hairline, Sertifikasi baris lebar, Kontak dua kolom + daftar tautan.
- v2.4 · 10 Nov 2026 — **ATM jilid 2 (mengurangi kesan menyalin referensi)** — palet digeser (azure `#0A62D8`, navy `#063D78`, latar digeser tipis; §2.1), ghost text `DEVELOPER` → **`RIDWAN`** (§2.2), ikon label bintang → **panah diagonal** (§3.3), pill ke-3 hero dihapus, **kartu proyek** mengikuti referensi baru: media di atas 16:10 + baris meta + judul + chip outline tanpa `.card` (§5.4), **About** bento + CTA, **Keahlian** navy bento (Frontend/Backend/Database/Mobile & Tools/CTA), **Pengalaman** kartu + chip periode, **Sertifikasi** terpisah (pola B), **Kontak** navy penuh + kartu tautan + footer bar di dalam section (Footer terpisah dihapus), token `--inset-gradient`, CSS mati dibersihkan (`.card`, `.btn-primary/outline/wa`, `.hairline`, `.cta-card`).
- v2.3 · 9 Nov 2026 — Amandemen pemilik: (a) hero memuat 2 tautan + logo **LinkedIn & GitHub** (`HeroLinks`, §5.1); (b) **transisi halus** ganti tema via View Transitions + fallback (§9.1); (c) id sosial di hero dibatasi ke `linkedin` & `github`.
- v2.2 · 8 Nov 2026 — Gabungan: (a) token hasil sampling agent (`--hero-bg #C7CCD8`, `--bg #E9EDF2`, `--fg-muted #505462`, arch memudar, `--cta-gradient`, `--project-gradient`); (b) amandemen pemilik: Lenis, custom cursor, toggle tema/dark mode, preloader singkat (§8.1, §9); (c) token dark untuk komponen v2.1 (`--card`, `--chip`, `--number-ghost`, navy).
- v2.1 · 8 Nov 2026 — Tambah spesifikasi About bento, Keahlian navy, Proyek bernomor, Sertifikasi, Kontak+Footer navy
  dengan ikon sosial; pola tombol tunggal; token navy/kartu/chip; `react-icons` untuk logo brand.
- v2.0 · 8 Nov 2026 — Rombak total: hero ala Portfon, font tunggal, hapus dekorasi.