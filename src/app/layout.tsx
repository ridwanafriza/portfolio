import type { Metadata } from "next";
import { Playfair_Display, Poppins, DM_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/layout/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Ridwan Afriza Listiyono",
  description:
    "Portfolio Ridwan Afriza Listiyono — Mahasiswa D3 Teknologi Informasi Politeknik Negeri Madiun, passionate dalam web development dan cloud computing.",
  keywords: ["web developer", "portfolio", "Ridwan Afriza", "Politeknik Negeri Madiun", "IT student"],
  openGraph: {
    title: "Ridwan Afriza Listiyono — Web Developer",
    description: "Portfolio personal — web development, IoT, & teknologi informasi.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable} ${dmMono.variable}`}>
        {/* Noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Preloader */}
        <Preloader />

        {/* Smooth scroll wrapper */}
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
