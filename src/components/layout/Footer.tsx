"use client";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 relative">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />

      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-medium"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <span style={{ color: "var(--accent)" }}>R</span>A
        </a>

        Center note
        <p className="font-mono text-xs text-center" style={{ color: "var(--fg-muted)" }}>
          © {year} {profile.name} 
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--fg-muted)" }}
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.1-.77.42-1.29.76-1.59-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--fg-muted)" }}
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM6.9 20.45H3.55V9H6.9v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0z"/>
            </svg>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--fg-muted)" }}
            aria-label="Email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
