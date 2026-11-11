import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import BackToTop from "@/components/ui/BackToTop";
import SmoothScroll from "@/components/fx/SmoothScroll";
import CustomCursor from "@/components/fx/CustomCursor";
import Preloader from "@/components/fx/Preloader";

// Pra-render SEBELUM paint: terapkan tema tersimpan + status preloader
// (anti-flash & pengunjung sesi berikutnya tidak melihat preloader).
const preRenderScript = `(function(){try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark");if(sessionStorage.getItem("pl"))document.documentElement.classList.add("pl-done");}catch(e){}})();`;

// Satu-satunya font: Inter Tight (DESIGN.md §2.2) — tidak ada font mono.
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ridwan Afriza Listiyono — Web, Mobile & UI/UX Designer",
  description:
    "Portofolio Ridwan Afriza Listiyono — pengembang web & mobile serta desainer UI/UX.",
  keywords: [
    "web developer",
    "mobile developer",
    "UI/UX designer",
    "portfolio",
    "Ridwan Afriza Listiyono",
    "Politeknik Negeri Madiun",
  ],
  openGraph: {
    title: "Ridwan Afriza Listiyono — Web, Mobile & UI/UX Designer",
    description:
      "Portofolio Ridwan Afriza Listiyono — pengembang web & mobile serta desainer UI/UX.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preRenderScript }} />
        <noscript>
          <style>{`.preloader{display:none}`}</style>
        </noscript>
      </head>
      <body className={interTight.variable}>
        <SmoothScroll />
        <CustomCursor />
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
