# 🖼️ REFERENCE.md — Bedah Gambar Referensi "Portfon" (Lengkap, 6 gambar)

> Deskripsi tertulis semua gambar referensi. Dipakai agent sebagai pendamping/pengganti gambar.
> Sumber: Dribbble https://dribbble.com/shots/27379252-Personal-Portfolio-Website-Design
> dan situs live https://portfon.framer.website (anchor `#about`, `#service`, `/my-portfolio`, `/blogs`).
> Angka = perkiraan pada viewport 1920px; terjemahkan ke persen / `clamp()`, jangan piksel mati.

> **Catatan ATM (lihat `AGENTS.md` §2b):** dokumen ini hanya untuk **mengamati pola**. Jangan menyalin aset, teks, atau kode.
> **Deviasi sengaja dari referensi:** hero Ridwan memuat ringkasan 1–2 kalimat (wajib tugas) dan 2 tautan **LinkedIn + GitHub**
> (permintaan pemilik, 9 Nov 2026; `DESIGN.md` §5.1). Referensi aslinya tidak punya keduanya. Toggle tema di nav juga amandemen pemilik.

## 0. Daftar gambar (taruh di `docs/reference/`; ekstensi boleh `.png` atau `.webp`)

| File | Isi | Dipakai untuk |
|---|---|---|
| `00-current-slop.png` | Hasil build lama (SALAH) | contoh yang jangan diulang |
| `01-hero.png` | Hero Portfon (Dribbble) — di repo sudah ada sebagai `reference-portfon.webp` | Hero + Navbar |
| `02-about.png` | `#about` — statement + bento foto/stat | Section Tentang |
| `03-services.png` | `#service` — bento di latar navy | Section Keahlian |
| `04-portfolio.png` | `/my-portfolio` — kartu proyek bernomor | Section Proyek |
| `05-blog.png` | `/blogs` — kartu artikel + tombol Load More | Section Sertifikasi / pola kartu gambar |
| `06-footer-cta.png` | Akhir halaman: artikel + CTA navy + footer | Section Kontak + Footer |

## 1. Kesan keseluruhan

Bersih, lapang, tenang. **Satu aksen biru** + **navy dalam** untuk dua section gelap. Sisanya abu-biru
dingin, putih kebiruan, dan hampir-hitam. Tipografi sans geometris **sangat rapat** (tracking sekitar −0.04em).
Bentuk: arch, pill, lingkaran, kartu radius besar. Pola tombol konsisten di seluruh situs:
**pill hitam + lingkaran hitam berisi panah, menempel berdampingan**. Dekorasi minim; gambar & tipografi
yang bekerja.

## 2. Hero + Navbar (`01-hero.png`)

### 2.1 Latar
Panel hero abu-biru dingin (± `#C9CCD8`), lebih gelap dari section sesudahnya. Section berikut lebih terang.

### 2.2 Navbar
- Kiri: logo kotak biru rounded (glyph putih) + **nama brand ± 22px, weight 500** (bukan bold tebal),
  lalu link **tepat di sebelah logo** (bukan di tengah): `About Services Portfolio Blog Pricing`
  (14–15px, hitam/abu gelap; link aktif sedikit lebih tegas). Tidak ada highlight pill.
- Kanan: **pill hitam "Get In Touch" + lingkaran hitam berisi panah** (menempel, jarak ≈ 1–2px).
- Tanpa toggle tema, tanpa border/shadow di atas hero.
- Pada halaman non-hero, nav berada di atas latar `#EAEDF4` dengan container sempit (± 1026px).

### 2.3 Ghost text raksasa ("DESIGNER")
Satu baris kapital bold, lebar ± 94% hero. **Putih semi-transparan memudar ke bawah** (lebih terang dari
latar). Di **belakang** arch: bagian tengah tertutup arch & kepala. Dimulai ± 15% dari atas hero.

### 2.4 Arch + foto
Arch setengah-lingkaran atas, lebar ± 44% hero, tinggi ± 1.25× lebar, di tengah, menyentuh dasar hero.
Gradasi vertikal biru jenuh (atas) → periwinkle pucat (bawah). Orang = **foto cutout** setengah badan,
tersenyum; bahu sedikit keluar arch; bawah **memudar** ke latar. Tanpa border/bingkai.

### 2.5 Pill melayang
Dua pill putih, miring (± −25° kiri-bawah, ± +15° kanan-atas), menimpa tepi arch. Font sans (bukan mono).

### 2.6 Teks kiri-bawah
"Hey, I'm Arion." (15px abu) + headline **bidang keahlian** dua baris (± 56–66px, weight 600,
tracking −0.03em). Tanpa paragraf, tombol, atau sosial.

### 2.7 Stat card kanan-bawah
Dua kartu putih translusen bertumpuk; label dua baris kecil di kiri, angka besar di kanan; kartu kedua memudar.

## 3. About (`02-about.png`) — latar `#EAEDF4`

**Baris 1 (statement):**
- Kiri (x≈383): ikon bintang 6 sudut biru + "About Me" (16px, hitam, bukan mono).
- Kanan (mulai x≈773, ≈ 34% dari lebar container): pernyataan besar ± 48px, weight 500, tracking sangat rapat,
  line-height ≈ 1.1, 3 baris: *"I create thoughtful digital experiences that connect strategy, usability, and visual clarity."*
- Di bawahnya (jarak ≈ 32px): tombol **"Get In Touch" pill hitam + lingkaran panah** (tinggi ≈ 50px).

**Baris 2 (bento, jarak ≈ 64px dari tombol), container ± 1140px:**
- **Kartu foto** (kiri, ± 35% lebar, tinggi ± 490px): latar putih kebiruan `#F7F8FC`, radius ± 24px.
  Foto cutout setengah badan (tangan bersilang), **menempel dasar kartu** dan terpotong lurus oleh sudut
  kartu (tidak memudar).
- **Klaster kanan** (± 60% lebar, jarak ke kartu foto ≈ 46px, **rata bawah** dengan kartu foto), grid 2×2 gap ≈ 12px:
  - Baris 1 (tinggi ≈ 100px): 2 kartu stat — label 2 baris 16px di kiri ("Years Crafting / Digital Products"),
    angka besar ≈ 36px/500 di kanan ("5+", "20+").
  - Baris 2 (tinggi ≈ 245px): 
    - Kartu "**120+** / Client Satisfaction Score": angka besar kiri-atas, di dasar kiri chip rating
      (bintang kuning + "4.8"), di kanan-bawah **klaster avatar bulat** saling menimpa (terpotong tepi kartu).
    - Kartu "**Strategic Thinking, Clean Execution.**" (28px/500, 2 baris), di bawahnya 3 chip pill abu
      (`Interface Design`, `Product Strategy`, `No code development`) tersusun vertikal, dan 1 chip
      **miring ≈ −50°** ("Branding") di kanan, sebagian terpotong.
- Semua kartu: latar `#F7F8FC`, radius ≈ 20–24px, **tanpa border & tanpa shadow tebal**.

## 4. Services (`03-services.png`) — latar **navy** gradasi tepi

- Latar section: navy dalam (± `#03297A`), **tepi kiri-kanan (dan atas) lebih terang** periwinkle
  (± `#7D8FCB`) memudar ke navy di tengah — seperti vinyet.
- Header **di tengah**: "Design Solutions / Built For Growth" putih ≈ 44px, weight 500, 2 baris.
- **Panel kaca** (radius ≈ 28px, putih ≈ 7% transparan, lebar ≈ 1026px, padding ≈ 24px) berisi bento 3 kolom:
  - **Kolom 1:** dua kartu **gradasi biru** ("Brand Identity", "Web Experience"). Judul putih 28px/500,
    deskripsi 2 baris putih 85%. Bagian bawah berisi **pill putih translusen miring-miring** yang saling
    menimpa & terpotong tepi kartu ("Visual Identity", "Brand Strategy", "Typography"…). Kartu kedua
    menampilkan baris thumbnail mockup terpotong di dasar.
  - **Kolom 2:** dua kartu **putih** ("UI/UX Design" dengan gambar inset bergaris tepi radius ≈ 10px;
    "Development" dengan **busur konsentris biru** di dasar dan **5 badge ikon bulat** (Behance, Framer,
    Ai, Figma, …) berjajar mengikuti busur, sebagian terpotong tepi).
  - **Kolom 3:** satu kartu putih **tinggi** (menyatukan 2 baris): atas = visual gradasi biru
    (foto tangan), garis tipis, chip "Trusted By Global Partners", judul "Let's Create Impact" 28px/500,
    deskripsi, tombol **"Start A Project" pill hitam + lingkaran panah**.
- Radius kartu ≈ 20px, gap antar kartu ≈ 11–12px, padding kartu ≈ 22px.

## 5. Portfolio (`04-portfolio.png`) — latar `#EAEDF4`, container ± 1026px

- Nav sama (logo + 5 link kiri, CTA kanan).
- Heading **kiri**: "Design Moves / Brands Forward" ≈ 64px, **weight 600**, 2 baris; subjudul 15px di bawahnya.
- Kartu proyek **ditumpuk vertikal**, lebar penuh container, tinggi ≈ 470px, latar `#F7F8FC`, radius ≈ 24px, padding ≈ 22px:
  - Kiri-atas: judul proyek 28px/500.
  - **Kanan-atas: nomor besar "01"** ≈ 52px/500, warna abu sangat terang `#D3D8E3`.
  - Kiri-bawah: deskripsi 15px (lebar ≈ 300px) + tombol **"Explore Project" pill hitam + lingkaran panah**.
  - **Kanan-bawah: gambar** ≈ 392×342px, radius ≈ 18px (3D render/mockup berwarna).
- Jarak antar kartu ≈ 20px.

## 6. Blog / Kartu Gambar (`05-blog.png`, `06-footer-cta.png` bagian atas)

- Halaman `/blogs`: heading **di tengah** "Design Insights & Creative Thinking" ≈ 52px/500, subjudul kecil di tengah.
- Grid kartu (container ≈ 855px): baris 1 = 2 kartu, baris 2 = 3 kartu; gap ≈ 15px.
  Kartu putih `#FFFFFF`, radius ≈ 20px, **padding ≈ 9px**, gambar radius ≈ 14px, di bawahnya judul 17px/500 di kiri
  dan **chip tag abu** ("Popular", "Featured", "Trending", "New") di kanan.
- Tombol tengah **"Load More" pill hitam + lingkaran panah**.
- Versi di home: label bintang kecil di tengah ("Latest Articles") + H2 tengah ≈ 36px ("Where strategy meets creativity") + 3 kartu.

## 7. CTA + Footer (`06-footer-cta.png`) — latar navy

- Section navy, **atas & tepi lebih terang** lalu memudar ke navy (vinyet), tinggi ≈ 530px, container ≈ 855px rata kiri.
- H2 putih ≈ 44px/500, 2 baris: "Ready To Start / Something Great?".
- Tombol **terbalik warna**: pill **putih** (teks gelap, 16px) + lingkaran putih berisi panah hitam.
- **4 kartu tautan outline** (± 142×92px, radius ≈ 14px, border 1px putih ≈ 70%, transparan): ikon putih kecil
  kiri-atas, label ≈ 18px/500 putih kiri-bawah ("Home", "Services", "About", "Contact").
- Garis tipis putih ≈ 25% transparan.
- Baris bawah: kiri teks kredit 14px putih; kanan **4 tombol sosial bulat putih ≈ 40px** (Facebook, LinkedIn, X, Instagram)
  dengan ikon gelap.

## 8. Kosakata visual (ringkas)

| Elemen | Ciri |
|---|---|
| Font | Sans geometris sangat rapat, 1 keluarga; judul 500–600, tracking ≈ −0.04em |
| Warna | Biru `#3558FF`, navy `#03297A`, abu-biru `#EAEDF4`, kartu `#F7F8FC`, hitam `#0B0B0F` |
| Tombol | **Selalu** pill + lingkaran panah menempel (hitam di latar terang, putih di latar navy) |
| Kartu | Putih kebiruan, radius 20–28, tanpa border, shadow nyaris tidak ada |
| Header section | (A) label kiri + statement kanan · (B) label tengah + H2 tengah · (C) H2 besar kiri + subjudul |
| Bentuk khas | Arch, pill miring, lingkaran avatar/ikon yang saling menimpa & terpotong tepi kartu |
| Latar gelap | Navy dengan tepi lebih terang (vinyet), dipakai hanya untuk Keahlian & Kontak |

## 9. Selisih hasil lama vs referensi (HARUS diperbaiki)

| # | Referensi | Hasil lama (slop) |
|---|---|---|
| 1 | Latar hero abu-biru dingin | Hampir putih netral |
| 2 | Ghost text putih memudar | Abu gelap solid |
| 3 | Foto cutout di arch gradasi, bawah memudar | Foto persegi + border ungu |
| 4 | Headline = bidang keahlian kiri-bawah | Nama dibelah dua warna |
| 5 | Sapaan polos | Label mono kapital |
| 6 | Tanpa badge/status/tombol/sosial di hero | Badge + 2 tombol + sosial |
| 7 | Pill sans, miring, menimpa arch | Pill mono, tegak |
| 8 | 2 stat card bertumpuk, ke-2 memudar | 1 kartu menimpa foto |
| 9 | Nav: logo + link di kiri, CTA pill+lingkaran kanan | Link di tengah, toggle tema |
| 10 | About = label kiri + statement besar + tombol + **bento foto/stat/chip** | Kartu + statistik + ikon |
| 11 | Keahlian = **bento di latar navy** dengan kartu biru/putih & pill miring | Grid kartu ikon seragam |
| 12 | Proyek = **kartu lebar bernomor**, gambar kanan-bawah | Grid kartu kecil + filter |
| 13 | Kontak/footer = **navy**, tombol putih, kartu tautan outline, sosial bulat | Form/kartu gradasi generik |
| 14 | Semua tombol pola pill + lingkaran panah | Tombol berbeda-beda |
| 15 | Tanpa dekorasi (partikel, cursor, noise, marquee, scroll indicator) | Semua ada |