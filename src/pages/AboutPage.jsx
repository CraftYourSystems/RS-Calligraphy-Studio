import { useState } from "react";
import Navbar from "../features/home/components/Navbar";

/* ─────────────────────────────────────────
   AboutHero
───────────────────────────────────────── */
const AboutHero = () => (
  <section style={{ background: "#f5f0e8", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <svg style={{ position: "absolute", top: 0, right: 0, width: 380, opacity: 0.07 }} viewBox="0 0 400 400" fill="none">
        <path d="M380 20 C320 80, 200 60, 160 140 C120 220, 200 300, 140 380" stroke="#3d2e1e" strokeWidth="40" strokeLinecap="round" />
      </svg>
      <svg style={{ position: "absolute", bottom: 0, left: 0, width: 260, opacity: 0.06 }} viewBox="0 0 300 300" fill="none">
        <path d="M20 280 C60 200, 40 140, 100 80 C160 20, 240 60, 280 20" stroke="#3d2e1e" strokeWidth="32" strokeLinecap="round" />
      </svg>
    </div>

    <div style={{ maxWidth: 900, margin: "0 auto", padding: "120px 24px", textAlign: "center", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 36 }}>
        <div style={{ height: 1, width: 60, background: "#b5924c" }} />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="3" fill="#b5924c" />
          <circle cx="10" cy="10" r="7" stroke="#b5924c" strokeWidth="1" fill="none" />
        </svg>
        <div style={{ height: 1, width: 60, background: "#b5924c" }} />
      </div>

      <p style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.3em", color: "#b5924c", fontSize: 11, textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>
        Our Story
      </p>

      <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(34px, 4.8vw, 58px)", fontWeight: 300, color: "#2c1f0e", lineHeight: 1.1, margin: "0 0 24px", whiteSpace: "nowrap" }}>
        About RS Calligraphy Studio
      </h1>

      <p style={{ fontFamily: "'Georgia', serif", fontSize: 18, color: "#7a6248", maxWidth: 480, margin: "0 auto", lineHeight: 1.8, fontWeight: 300 }}>
        A journey of discipline, passion, and artistic expression
      </p>

      <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
        <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
          <path d="M0 12 Q15 4 30 12 Q45 20 60 12" stroke="#b5924c" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   AboutIntro
───────────────────────────────────────── */
const AboutIntro = () => (
  <section style={{ background: "#fff", padding: "96px 24px" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 80, justifyContent: "center" }}>
      {/* Image placeholder */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div style={{ position: "absolute", top: -14, left: -14, width: "100%", height: "100%", border: "1px solid #b5924c", opacity: 0.4 }} />
        <div style={{ width: 280, height: 380, background: "#efe9de", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <svg width="52" height="52" viewBox="0 0 56 56" fill="none" style={{ opacity: 0.3, marginBottom: 12 }}>
            <circle cx="28" cy="20" r="12" stroke="#3d2e1e" strokeWidth="1.5" />
            <path d="M8 52 C8 38 48 38 48 52" stroke="#3d2e1e" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p style={{ fontFamily: "'Georgia', serif", color: "#9c8060", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Instructor Photo</p>
        </div>
        <div style={{ position: "absolute", bottom: -10, right: -10, width: 22, height: 22, borderRadius: "50%", background: "#b5924c", opacity: 0.6 }} />
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 260 }}>
        <p style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.3em", color: "#b5924c", fontSize: 11, textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>
          Meet the Artist
        </p>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "#2c1f0e", margin: "0 0 24px", lineHeight: 1.2 }}>
          Rupa <em>Suresh</em>
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ height: 1, width: 40, background: "#b5924c" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#b5924c" }} />
        </div>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: 16, color: "#5c4a34", lineHeight: 1.95, fontWeight: 300, maxWidth: 440 }}>
          I'm Rupa Suresh, a passionate calligraphy artist with over five years of dedicated practice. Through every stroke and curve, I've cultivated a deep connection between intention and artistry — turning ink on paper into a language of beauty.
        </p>
        <div style={{ marginTop: 32 }}>
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path d="M10 30 C20 10, 40 8, 55 20 C70 32, 85 5, 110 15" stroke="#b5924c" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M8 34 C30 34, 90 34, 112 34" stroke="#b5924c" strokeWidth="0.75" strokeLinecap="round" opacity="0.4" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   AboutStory
───────────────────────────────────────── */
const storyParagraphs = [
  {
    id: 1, pullQuote: "One stroke at a time.",
    text: "My journey began with a simple commitment — to practice every single day. No matter how long or short the session, consistency became my teacher. What started as quiet curiosity grew into an enduring love for the art of letterforms, each day revealing a new depth to this ancient craft.",
  },
  {
    id: 2, pullQuote: "Balance in motion.",
    text: "Alongside being a software professional and a proud mother, calligraphy became my sanctuary — a mindful pause in the rhythm of a full life. It taught me that beauty is found not in perfection, but in the honest effort of showing up, pen in hand, day after day.",
  },
  {
    id: 3, pullQuote: "Art without boundaries.",
    text: "Whether at home or while exploring new places, my practice has followed me everywhere. A sketchbook on a café table, ink pressed to paper in quiet hotel mornings — the studio is wherever the nib meets the page. This portability of art is one of its greatest gifts.",
  },
];

const AboutStory = () => (
  <section style={{ background: "#f9f5ee", padding: "96px 24px" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <p style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.3em", color: "#b5924c", fontSize: 11, textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>The Journey</p>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "#2c1f0e", margin: 0 }}>
          My <em>Story</em>
        </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 24 }}>
          <div style={{ height: 1, width: 60, background: "#d4c4a8" }} />
          <svg width="8" height="8" viewBox="0 0 8 8">
            <rect x="1" y="1" width="6" height="6" stroke="#b5924c" strokeWidth="1" fill="none" transform="rotate(45 4 4)" />
          </svg>
          <div style={{ height: 1, width: 60, background: "#d4c4a8" }} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
        {storyParagraphs.map((para, i) => (
          <div key={para.id} style={{ display: "flex", flexWrap: "wrap", gap: 40, flexDirection: i % 2 !== 0 ? "row-reverse" : "row" }}>
            <div style={{ minWidth: 200, flex: "0 0 220px", position: "relative", paddingLeft: 20, borderLeft: "2px solid #b5924c" }}>
              <div style={{ position: "absolute", left: -14, top: "50%", transform: "translateY(-50%)", width: 26, height: 26, borderRadius: "50%", background: "#b5924c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontFamily: "Georgia, serif", fontWeight: 600 }}>
                {para.id}
              </div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 48, color: "#e8dece", lineHeight: 1 }}>"</div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 22, fontStyle: "italic", fontWeight: 300, color: "#7a5c34", lineHeight: 1.35, marginTop: 4 }}>{para.pullQuote}</p>
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 16, color: "#5c4a34", lineHeight: 2, fontWeight: 300 }}>{para.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   AboutCredibility
───────────────────────────────────────── */
const credentials = [
  {
    id: 1, stat: "5+", unit: "Years", label: "of Experience",
    description: "Over half a decade of devoted daily practice, exploring scripts from modern calligraphy to classical letterforms.",
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="13" stroke="#b5924c" strokeWidth="1.5" /><path d="M16 8 L16 16 L22 20" stroke="#b5924c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    id: 2, stat: "365", unit: "Days", label: "Practice Discipline",
    description: "A commitment to daily practice — rain, travel, or busy schedules — that has shaped both skill and character.",
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="5" y="7" width="22" height="20" rx="2" stroke="#b5924c" strokeWidth="1.5" /><path d="M5 13 H27" stroke="#b5924c" strokeWidth="1.5" /><path d="M11 5 V9 M21 5 V9" stroke="#b5924c" strokeWidth="1.5" strokeLinecap="round" /><path d="M10 19 L14 23 L22 17" stroke="#b5924c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    id: 3, stat: "∞", unit: "", label: "Workshop Experience",
    description: "Guiding students through the meditative process of calligraphy — building confidence, patience, and joy in every session.",
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 26 C4 20 28 20 28 26" stroke="#b5924c" strokeWidth="1.5" strokeLinecap="round" /><circle cx="16" cy="12" r="6" stroke="#b5924c" strokeWidth="1.5" /><circle cx="6" cy="14" r="4" stroke="#b5924c" strokeWidth="1.25" /><circle cx="26" cy="14" r="4" stroke="#b5924c" strokeWidth="1.25" /></svg>,
  },
];

const AboutCredibility = () => (
  <section style={{ background: "#2c1f0e", padding: "96px 24px", position: "relative" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <p style={{ fontFamily: "Georgia, serif", letterSpacing: "0.3em", color: "#b5924c", fontSize: 11, textTransform: "uppercase", fontWeight: 600, marginBottom: 16 }}>Credentials & Expertise</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "#f5f0e8", margin: 0 }}>
          Built on <em>Devotion</em>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
        {credentials.map((cred) => (
          <div key={cred.id} style={{ background: "#3a2b18", border: "1px solid #3d2e1e", padding: "44px 32px", textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 48, height: 1, background: "#b5924c" }} />
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{cred.icon}</div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4, marginBottom: 4 }}>
              <span style={{ fontFamily: "Georgia, serif", fontSize: 56, fontWeight: 300, color: "#f5f0e8", lineHeight: 1 }}>{cred.stat}</span>
              {cred.unit && <span style={{ fontFamily: "Georgia, serif", fontSize: 18, color: "#b5924c", fontWeight: 300 }}>{cred.unit}</span>}
            </div>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "#b5924c", marginBottom: 20 }}>{cred.label}</p>
            <div style={{ width: 32, height: 1, background: "#5c4030", margin: "0 auto 20px" }} />
            <p style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#c8b89a", lineHeight: 1.9, fontWeight: 300 }}>{cred.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────
   AboutCTA
───────────────────────────────────────── */
const AboutCTA = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <section style={{ background: "#f5f0e8", padding: "110px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <svg style={{ width: 560, opacity: 0.045 }} viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="#3d2e1e" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" stroke="#3d2e1e" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" stroke="#3d2e1e" strokeWidth="1" />
        </svg>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 40 }}>
          <div style={{ height: 1, width: 52, background: "#d4c4a8" }} />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" stroke="#b5924c" strokeWidth="1" fill="#b5924c" fillOpacity="0.15" />
          </svg>
          <div style={{ height: 1, width: 52, background: "#d4c4a8" }} />
        </div>

        <p style={{ fontFamily: "Georgia, serif", letterSpacing: "0.3em", color: "#b5924c", fontSize: 11, textTransform: "uppercase", fontWeight: 600, marginBottom: 18 }}>Begin Your Practice</p>

        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 300, color: "#2c1f0e", lineHeight: 1.2, margin: "0 0 20px" }}>
          Ready to find your<br />
          <em style={{ color: "#7a5c34" }}>voice in ink?</em>
        </h2>

        <p style={{ fontFamily: "Georgia, serif", fontSize: 16, color: "#7a6248", lineHeight: 1.9, marginBottom: 52, fontWeight: 300 }}>
          Join a small-group workshop and discover the meditative joy of calligraphy. All levels welcome — no experience necessary, only curiosity.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 20 }}>
          <a
            href="/#workshops"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              background: hovered ? "#b5924c" : "#2c1f0e",
              color: hovered ? "#2c1f0e" : "#f5f0e8",
              border: "none",
              padding: "18px 48px",
              fontSize: 12,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontFamily: "Georgia, serif",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              transition: "background 0.3s, color 0.3s",
            }}
          >
            Join a Workshop
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ transform: hovered ? "translateX(3px)" : "none", transition: "transform 0.3s" }}>
              <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a href="/#gallery" style={{ background: "none", border: "none", borderBottom: "1px solid #b5924c", color: "#7a6248", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "Georgia, serif", cursor: "pointer", paddingBottom: 2, textDecoration: "none" }}>
            View Gallery
          </a>
        </div>

        <div style={{ marginTop: 72, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <div style={{ height: 1, width: 40, background: "#d4c4a8" }} />
          <svg width="10" height="10" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="2" fill="#b5924c" />
            <circle cx="5" cy="5" r="4.5" stroke="#b5924c" strokeWidth="0.75" fill="none" />
          </svg>
          <div style={{ height: 1, width: 40, background: "#d4c4a8" }} />
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   AboutPage (root export)
───────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", fontFamily: "Georgia, serif" }}>
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutCredibility />
      <AboutCTA />
    </main>
  );
}
