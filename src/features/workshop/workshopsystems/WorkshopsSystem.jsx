import { useState } from "react";

/* ═══════════════════════════════════════════════════════════
   DATA LAYER  –  workshopsData.js
═══════════════════════════════════════════════════════════ */
const workshops = [
  {
    id: "modern-calligraphy-foundations",
    title: "Modern Calligraphy Foundations",
    tagline: "Where every stroke finds its voice",
    price: { inr: "₹1,499", usd: "$18" },
    duration: "4 Weeks", sessions: "8 Sessions", level: "Beginner",
    badge: "Most Popular",
    shortDescription: "Learn the fundamentals of modern calligraphy — from holding your pen correctly to forming fluid, expressive letters with confidence.",
    fullDescription: "Modern Calligraphy Foundations is the perfect starting point for anyone who has ever been drawn to the art of beautiful writing. Over four weeks and eight guided sessions, you'll build a strong technical foundation while developing your own natural style. We begin with the basics — understanding your tools, the angle of your nib, and the pressure behind each stroke. From there, we move into letterform construction, connecting letters fluidly, and writing your first complete words and phrases. Every session is designed to be calm, encouraging, and deeply practical. You'll leave with a complete lowercase and uppercase alphabet, the confidence to practice independently, and a genuine love for the art.",
    topics: ["Introduction to tools: nibs, ink, and paper", "Pen angle, pressure, and posture", "Upstrokes, downstrokes, and oval mastery", "Lowercase alphabet — letterform construction", "Uppercase alphabet — with flourish basics", "Connecting letters into words", "Spacing, rhythm, and visual balance", "Writing your first complete phrase"],
    gradientBg: "linear-gradient(135deg, #efe9de 0%, #e8dece 100%)",
  },
  {
    id: "pointed-pen-copperplate",
    title: "Pointed Pen & Copperplate",
    tagline: "The elegance of a classical hand",
    price: { inr: "₹2,199", usd: "$27" },
    duration: "6 Weeks", sessions: "12 Sessions", level: "Intermediate",
    badge: "New",
    shortDescription: "Explore the timeless world of Copperplate script with a pointed pen — mastering shade, hairline, and the discipline of a classical hand.",
    fullDescription: "Copperplate is one of the most refined and demanding scripts in the calligraphy world, and this course gives you the tools to approach it with clarity and confidence. Using a pointed dip pen and traditional ink, you'll learn how shading and hairlines are created through pressure variation alone. The course covers the oval system that underpins all Copperplate letterforms, guides you through each letter family, and teaches you how to achieve the precise slant and rhythm that makes this script so recognizable. By the end of six weeks, you'll be writing polished Copperplate phrases with genuine elegance.",
    topics: ["Pointed pen anatomy and nib selection", "Ink preparation and paper grain", "The oval system and slant guidelines", "Shade and hairline: pressure control", "Lowercase letter families (a-group, n-group, etc.)", "Uppercase majuscules with oval entries", "Connecting words with consistent slant", "Flourishing: entry and exit strokes", "Writing full sentences and compositions", "Common errors and how to correct them"],
    gradientBg: "linear-gradient(135deg, #f0ebe0 0%, #e5ddd0 100%)",
  },
  {
    id: "brush-lettering-essentials",
    title: "Brush Lettering Essentials",
    tagline: "Bold strokes, expressive forms",
    price: { inr: "₹1,299", usd: "$16" },
    duration: "3 Weeks", sessions: "6 Sessions", level: "Beginner",
    badge: null,
    shortDescription: "Discover the expressive world of brush lettering using brush pens — playful, bold, and deeply satisfying for beginners.",
    fullDescription: "Brush Lettering Essentials introduces you to one of the most accessible and expressive forms of calligraphy. Using brush pens, you'll develop the core skills of pressure-based letterforms at the heart of modern lettering culture. The course moves at a comfortable pace, spending the first week entirely on foundational strokes before moving into letters, words, and compositions. You'll also learn how to apply your skills to greeting cards, quotes, and decorative pieces. This is a wonderful first step into hand-lettering for anyone who loves making things by hand.",
    topics: ["Brush pen types: soft vs. firm tips", "The eight foundational strokes", "Thick-to-thin transitions and pressure maps", "Lowercase alphabet in brush style", "Uppercase with bounce and personality", "Word spacing and visual flow", "Creating greeting card compositions", "Combining lettering with simple illustration"],
    gradientBg: "linear-gradient(135deg, #f5f0e8 0%, #ece6da 100%)",
  },
  {
    id: "italic-calligraphy-workshop",
    title: "Italic Calligraphy Workshop",
    tagline: "Discipline, rhythm, and grace",
    price: { inr: "₹1,799", usd: "$22" },
    duration: "5 Weeks", sessions: "10 Sessions", level: "Intermediate",
    badge: null,
    shortDescription: "Master the structured beauty of Italic script — a versatile, readable hand rooted in Renaissance tradition.",
    fullDescription: "Italic calligraphy is among the most practical and beautiful scripts you can learn. Rooted in the humanist writing of Renaissance Italy, it is structured yet fluid, disciplined yet expressive. This five-week workshop teaches how Italic letterforms are constructed from a consistent skeleton of ellipses and straight strokes, how to use a broad-nib pen with correct pen angle, and how rhythm is as important as the letter shapes themselves. You'll develop a working Italic hand that is both fast enough for daily use and refined enough for formal pieces.",
    topics: ["Broad-nib pens: nibs, holders, and ink", "Pen angle: 45° and its optical effects", "The elliptical oval as a structural foundation", "Italic minuscules: construction and rhythm", "Italic majuscules: classical vs. flourished forms", "Inter-letter and inter-word spacing", "Line spacing and page layout principles", "Informal vs. formal Italic styles", "Writing practice: quotes and short texts", "Final composition: a full-page piece"],
    gradientBg: "linear-gradient(135deg, #ede7db 0%, #e2dace 100%)",
  },
  {
    id: "composition-and-layout",
    title: "Composition & Layout",
    tagline: "Turn words into visual art",
    price: { inr: "₹2,499", usd: "$30" },
    duration: "4 Weeks", sessions: "8 Sessions", level: "Intermediate",
    badge: "Advanced Pick",
    shortDescription: "Go beyond letterforms — learn how to arrange text beautifully on the page, combining scripts, scale, and white space.",
    fullDescription: "Great calligraphy is not just about beautiful letters — it's about how those letters live together on the page. This advanced workshop is for calligraphers who already have a working script and want to elevate their work into full compositions. You'll learn the fundamentals of visual hierarchy, how to mix scripts and weights effectively, how to use white space as an active design element, and how to plan a piece from concept to final execution. By the end, you'll have a portfolio of five finished compositions.",
    topics: ["Visual hierarchy: what the eye reads first", "Contrast in weight, size, and script style", "Mixing modern and classical scripts", "White space as a design element", "Grid systems for calligraphy layouts", "Thumbnail sketching and iteration", "Working with color: ink and watercolor", "Borders, frames, and decorative elements", "Preparing artwork for print and digital", "Portfolio: five completed compositions"],
    gradientBg: "linear-gradient(135deg, #ece7de 0%, #dfd8cc 100%)",
  },
];

const getWorkshopById = (id) => workshops.find((w) => w.id === id);

/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════ */
const serif = "Georgia, 'Times New Roman', serif";
const T = {
  parchment: "#f5f0e8", sand: "#f9f5ee", cream: "#efe9de",
  gold: "#b5924c", goldLight: "#c8a96e",
  espresso: "#2c1f0e", espressoDark: "#1e1409",
  brown: "#5c4a34", brownLight: "#7a6248", tan: "#9c8060",
  beige: "#d4c4a8", beigeLight: "#ede7db",
  white: "#ffffff",
};

/* ═══════════════════════════════════════════════════════════
   SHARED UI ATOMS
═══════════════════════════════════════════════════════════ */
const Eyebrow = ({ children, style = {} }) => (
  <p style={{ fontFamily: serif, letterSpacing: "0.38em", color: T.gold, fontSize: 10, textTransform: "uppercase", fontWeight: 600, margin: "0 0 16px", ...style }}>
    {children}
  </p>
);

const DiamondRule = ({ width = 56 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div style={{ height: 1, width, background: T.beige }} />
    <svg width="8" height="8" viewBox="0 0 8 8">
      <rect x="1" y="1" width="6" height="6" stroke={T.gold} strokeWidth="1" fill="none" transform="rotate(45 4 4)" />
    </svg>
    <div style={{ height: 1, width: width / 2, background: T.beige }} />
  </div>
);

const LevelBadge = ({ level }) => {
  const styles = {
    Beginner: { bg: "#f0ebe0", text: "#7a5c34", border: "#d4c4a8" },
    Intermediate: { bg: T.espresso, text: T.goldLight, border: "#3d2e1e" },
  };
  const s = styles[level] || styles.Beginner;
  return (
    <span style={{ fontFamily: serif, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", background: s.bg, color: s.text, border: `1px solid ${s.border}`, padding: "3px 9px" }}>
      {level}
    </span>
  );
};

/* ═══════════════════════════════════════════════════════════
   MINI NAVBAR
═══════════════════════════════════════════════════════════ */
const Navbar = ({ currentPage, onNavigate }) => (
  <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(250,247,242,0.97)", backdropFilter: "blur(8px)", boxShadow: "0 1px 24px rgba(44,31,14,0.07)", borderBottom: "1px solid #ede7db" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <button onClick={() => onNavigate("home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
        <svg viewBox="0 0 36 36" fill="none" style={{ width: 30, height: 30 }}>
          <circle cx="18" cy="18" r="17" stroke={T.gold} strokeWidth="1" />
          <path d="M10 26 C12 18, 18 10, 26 10" stroke={T.espresso} strokeWidth="2" strokeLinecap="round" />
          <circle cx="26" cy="10" r="2" fill={T.gold} />
        </svg>
        <div style={{ textAlign: "left" }}>
          <p style={{ fontFamily: serif, color: T.espresso, fontSize: 14, margin: 0, lineHeight: 1.2 }}>RS <em style={{ color: T.gold }}>Calligraphy</em></p>
          <p style={{ fontFamily: serif, color: T.tan, fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", margin: 0 }}>Studio</p>
        </div>
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {["home", "workshops"].map(page => (
          <button key={page} onClick={() => onNavigate(page)} style={{ fontFamily: serif, fontSize: 11, letterSpacing: "0.2em", textTransform: "capitalize", color: currentPage === page ? T.gold : T.brown, background: "none", border: "none", cursor: "pointer", borderBottom: currentPage === page ? `1px solid ${T.gold}` : "none", paddingBottom: 1 }}>
            {page}
          </button>
        ))}
        <button style={{ fontFamily: serif, background: T.espresso, color: T.parchment, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", padding: "9px 18px", border: "none", cursor: "pointer" }}
          onMouseEnter={e => e.target.style.background = T.gold}
          onMouseLeave={e => e.target.style.background = T.espresso}
        >Join Workshop</button>
      </div>
    </div>
  </header>
);

/* ═══════════════════════════════════════════════════════════
   WORKSHOP HERO
═══════════════════════════════════════════════════════════ */
const WorkshopHero = () => (
  <section style={{ background: T.parchment, position: "relative", overflow: "hidden" }}>
    <svg style={{ position: "absolute", right: 0, top: 0, height: "100%", opacity: 0.055, pointerEvents: "none" }} viewBox="0 0 460 600" fill="none" preserveAspectRatio="xMidYMid slice">
      <path d="M420 30 C350 140, 210 90, 170 230 C130 370, 290 430, 220 580 C150 730, 60 720, 40 800" stroke={T.espresso} strokeWidth="65" strokeLinecap="round" />
    </svg>
    <svg style={{ position: "absolute", left: 0, bottom: 0, width: 220, opacity: 0.05, pointerEvents: "none" }} viewBox="0 0 280 280" fill="none">
      <path d="M20 260 C70 180, 50 120, 130 60 C210 0, 270 50, 280 20" stroke="#3d2e1e" strokeWidth="34" strokeLinecap="round" />
    </svg>
    <svg style={{ position: "absolute", left: "10%", top: "50%", transform: "translateY(-50%)", width: 300, opacity: 0.04, pointerEvents: "none" }} viewBox="0 0 340 340" fill="none">
      <circle cx="170" cy="170" r="160" stroke="#3d2e1e" strokeWidth="1" />
      <circle cx="170" cy="170" r="120" stroke="#3d2e1e" strokeWidth="0.8" />
      <circle cx="170" cy="170" r="82" stroke="#3d2e1e" strokeWidth="0.5" />
    </svg>

    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 24px 80px", position: "relative" }}>
      <div style={{ maxWidth: 580 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div style={{ height: 1, width: 36, background: T.gold }} />
          <Eyebrow style={{ margin: 0 }}>RS Calligraphy Studio</Eyebrow>
        </div>
        <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 5.5vw, 68px)", fontWeight: 300, color: T.espresso, lineHeight: 1.06, margin: "0 0 24px" }}>
          Our <em style={{ fontStyle: "italic", color: "#7a5c34" }}>Workshops</em>
        </h1>
        <div style={{ marginBottom: 24 }}><DiamondRule /></div>
        <p style={{ fontFamily: serif, fontSize: 16, color: T.brownLight, lineHeight: 1.9, fontWeight: 300, maxWidth: 500, marginBottom: 40 }}>
          Explore our calligraphy workshops — each one crafted to meet you where you are and carry you further than you thought possible. From your very first stroke to full page compositions, there is a course for every stage of your journey.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          {[["5", "Workshops"], ["Beginner–Inter.", "All Levels"], ["Live + Recorded", "Sessions"]].map(([num, label]) => (
            <div key={label}>
              <p style={{ fontFamily: serif, fontSize: 26, fontWeight: 300, color: T.espresso, lineHeight: 1, margin: "0 0 4px" }}>{num}</p>
              <p style={{ fontFamily: serif, fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: T.tan, margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════
   WORKSHOP CARD
═══════════════════════════════════════════════════════════ */
const WorkshopCard = ({ workshop, onViewDetails }) => {
  const [hovered, setHovered] = useState(false);
  const { title, tagline, price, duration, sessions, level, badge, shortDescription, gradientBg } = workshop;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: T.white, display: "flex", flexDirection: "column", height: "100%", position: "relative",
        boxShadow: hovered ? "0 16px 52px rgba(44,31,14,0.15)" : "0 2px 20px rgba(44,31,14,0.07)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "box-shadow 0.35s ease, transform 0.35s ease",
      }}
    >
      {/* Top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: hovered ? T.gold : T.beige, transition: "background 0.35s" }} />

      {/* Image / gradient block */}
      <div style={{ position: "relative", height: 168, background: gradientBg, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }} viewBox="0 0 380 168" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M20 150 C80 90, 60 55, 160 28 C260 0, 340 55, 380 18" stroke={T.espresso} strokeWidth="38" strokeLinecap="round" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, position: "relative" }}>
          <svg width="32" height="32" viewBox="0 0 52 52" fill="none" style={{ opacity: 0.22 }}>
            <path d="M12 40 C14 28, 22 16, 36 12" stroke={T.espresso} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="36" cy="12" r="3" fill={T.espresso} fillOpacity="0.4" />
          </svg>
          <span style={{ fontFamily: serif, fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: T.espresso, opacity: 0.28 }}>Workshop Image</span>
        </div>
        {badge && (
          <div style={{ position: "absolute", top: 10, right: 10 }}>
            <span style={{ fontFamily: serif, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", background: T.espresso, color: T.goldLight, padding: "3px 9px" }}>{badge}</span>
          </div>
        )}
        <div style={{ position: "absolute", bottom: 10, left: 10 }}><LevelBadge level={level} /></div>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "24px 24px 24px" }}>
        <Eyebrow style={{ marginBottom: 10 }}>{tagline}</Eyebrow>
        <h3 style={{ fontFamily: serif, fontSize: 18, fontWeight: 300, color: T.espresso, lineHeight: 1.35, margin: "0 0 14px" }}>{title}</h3>
        <div style={{ marginBottom: 14 }}><DiamondRule width={32} /></div>
        <p style={{ fontFamily: serif, fontSize: 13, color: T.brownLight, lineHeight: 1.85, fontWeight: 300, flex: 1, marginBottom: 20 }}>{shortDescription}</p>

        {/* Meta strip */}
        <div style={{ display: "flex", gap: 20, marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${T.beigeLight}` }}>
          {[["Duration", duration], ["Sessions", sessions], ["Price", price.inr]].map(([label, val]) => (
            <div key={label}>
              <p style={{ fontFamily: serif, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: T.tan, margin: "0 0 2px" }}>{label}</p>
              <p style={{ fontFamily: serif, fontSize: 13, color: T.espresso, fontWeight: 300, margin: 0 }}>{val}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onViewDetails(workshop.id)}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 18px", border: `1px solid ${T.espresso}`, background: hovered ? T.espresso : "transparent", cursor: "pointer", transition: "background 0.3s" }}
        >
          <span style={{ fontFamily: serif, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: hovered ? T.parchment : T.espresso, transition: "color 0.3s" }}>View Details</span>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M9 4L13 8L9 12" stroke={hovered ? T.goldLight : T.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  );
};

/* ═══════════════════════════════════════════════════════════
   WORKSHOP LIST
═══════════════════════════════════════════════════════════ */
const WorkshopList = ({ onSelectWorkshop }) => (
  <section style={{ background: T.sand, padding: "72px 24px 96px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 52 }}>
        <div style={{ height: 1, flex: 1, background: "#e8dece" }} />
        <p style={{ fontFamily: serif, fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: T.tan, margin: 0 }}>{workshops.length} Workshops Available</p>
        <div style={{ height: 1, flex: 1, background: "#e8dece" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
        {workshops.map((w, i) => (
          <div key={w.id} style={{ opacity: 1, animation: `fadeUp 0.5s ease ${i * 80}ms both` }}>
            <WorkshopCard workshop={w} onViewDetails={onSelectWorkshop} />
          </div>
        ))}
      </div>

      <div style={{ marginTop: 72, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
        <div style={{ height: 1, width: 52, background: T.beige }} />
        <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="2" fill={T.gold} /><circle cx="5" cy="5" r="4.5" stroke={T.gold} strokeWidth="0.75" fill="none" /></svg>
        <div style={{ height: 1, width: 52, background: T.beige }} />
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════
   WORKSHOP DETAIL PAGE
═══════════════════════════════════════════════════════════ */
const WorkshopDetail = ({ workshopId, onBack }) => {
  const [enrollHovered, setEnrollHovered] = useState(false);
  const workshop = getWorkshopById(workshopId);

  if (!workshop) return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, background: T.sand }}>
      <p style={{ fontFamily: serif, fontSize: 64, fontWeight: 300, color: T.beige, margin: 0 }}>404</p>
      <p style={{ fontFamily: serif, fontSize: 16, color: T.brownLight, fontWeight: 300 }}>Workshop not found.</p>
      <button onClick={onBack} style={{ fontFamily: serif, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", background: "none", border: "none", color: T.espresso, borderBottom: `1px solid ${T.gold}`, paddingBottom: 2, cursor: "pointer" }}>← Back to Workshops</button>
    </div>
  );

  const { title, tagline, price, duration, sessions, level, badge, fullDescription, topics, gradientBg } = workshop;
  const lvlLabel = level === "Intermediate" ? "Intermediate Level" : "Beginner Friendly";

  return (
    <div>
      {/* Hero */}
      <section style={{ background: gradientBg, position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", right: 0, top: 0, height: "100%", opacity: 0.07, pointerEvents: "none" }} viewBox="0 0 400 500" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M360 20 C300 140, 180 100, 160 240 C140 380, 280 420, 200 520" stroke={T.espresso} strokeWidth="58" strokeLinecap="round" />
        </svg>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px 64px", position: "relative" }}>
          {/* Back */}
          <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "#7a5c34", marginBottom: 36, fontFamily: serif }}
            onMouseEnter={e => e.currentTarget.style.color = T.gold}
            onMouseLeave={e => e.currentTarget.style.color = "#7a5c34"}
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase" }}>All Workshops</span>
          </button>

          <div style={{ maxWidth: 660 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
              <LevelBadge level={level} />
              {badge && <span style={{ fontFamily: serif, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", background: T.espresso, color: T.goldLight, padding: "3px 9px" }}>{badge}</span>}
            </div>
            <Eyebrow>{tagline}</Eyebrow>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 300, color: T.espresso, lineHeight: 1.1, margin: "0 0 28px" }}>{title}</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
              {[["Duration", duration], ["Sessions", sessions], ["Level", level], ["Price (INR)", price.inr], ["Price (USD)", price.usd]].map(([label, val]) => (
                <div key={label}>
                  <p style={{ fontFamily: serif, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: T.tan, margin: "0 0 3px" }}>{label}</p>
                  <p style={{ fontFamily: serif, fontSize: 15, color: T.espresso, fontWeight: 300, margin: 0 }}>{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px 80px", display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 320px", gap: 48, alignItems: "start" }}>
          {/* Left */}
          <div>
            {/* Description */}
            <div style={{ marginBottom: 52 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{ height: 1, width: 36, background: T.gold }} />
                <Eyebrow style={{ margin: 0 }}>About This Workshop</Eyebrow>
              </div>
              <p style={{ fontFamily: serif, fontSize: 16, color: T.brown, lineHeight: 2, fontWeight: 300 }}>{fullDescription}</p>
            </div>

            {/* Topics */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{ height: 1, width: 36, background: T.gold }} />
                <Eyebrow style={{ margin: 0 }}>What You'll Learn</Eyebrow>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {topics.map((topic, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0, marginTop: 3 }}>
                      <span style={{ fontFamily: serif, fontSize: 9, color: T.gold, fontWeight: 600, minWidth: 16 }}>{String(i + 1).padStart(2, "0")}</span>
                      <div style={{ height: 1, width: 16, background: T.beige }} />
                    </div>
                    <p style={{ fontFamily: serif, fontSize: 14, color: T.brown, lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sticky enrollment card */}
          <div style={{ position: "sticky", top: 80 }}>
            <div style={{ background: T.white, boxShadow: "0 4px 36px rgba(44,31,14,0.1)", position: "relative", overflow: "hidden" }}>
              <div style={{ height: 3, background: T.gold }} />
              <div style={{ padding: "28px 28px 32px" }}>
                <Eyebrow>Enroll Today</Eyebrow>
                <h3 style={{ fontFamily: serif, fontSize: 20, fontWeight: 300, color: T.espresso, margin: "0 0 20px", lineHeight: 1.3 }}>{title}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
                  <span style={{ fontFamily: serif, fontSize: 38, fontWeight: 300, color: T.espresso, lineHeight: 1 }}>{price.inr}</span>
                </div>
                <p style={{ fontFamily: serif, fontSize: 13, color: T.tan, marginBottom: 24 }}>{price.usd} · One-time payment</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24, paddingBottom: 24, borderBottom: `1px solid ${T.beigeLight}` }}>
                  {[["Duration", duration], ["Sessions", sessions], ["Level", level]].map(([label, val]) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: serif, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: T.tan }}>{label}</span>
                      <span style={{ fontFamily: serif, fontSize: 13, color: T.brown, fontWeight: 300 }}>{val}</span>
                    </div>
                  ))}
                </div>

                <button
                  onMouseEnter={() => setEnrollHovered(true)}
                  onMouseLeave={() => setEnrollHovered(false)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 20px", background: enrollHovered ? T.gold : T.espresso, border: "none", cursor: "pointer", transition: "background 0.3s", marginBottom: 14 }}
                >
                  <span style={{ fontFamily: serif, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: T.parchment }}>Enroll Now</span>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke={T.parchment} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <p style={{ fontFamily: serif, fontSize: 11, color: T.tan, textAlign: "center", lineHeight: 1.7, margin: 0 }}>
                  Small group sizes · Personal feedback<br />Recordings included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   WORKSHOPS PAGE (listing)
═══════════════════════════════════════════════════════════ */
const WorkshopsPage = ({ onSelectWorkshop }) => (
  <main>
    <WorkshopHero />
    <WorkshopList onSelectWorkshop={onSelectWorkshop} />
  </main>
);

/* ═══════════════════════════════════════════════════════════
   APP ROOT — client-side routing via state
═══════════════════════════════════════════════════════════ */
export default function App() {
  // route: "home" | "workshops" | "detail"
  const [route, setRoute] = useState("workshops");
  const [selectedId, setSelectedId] = useState(null);

  const navigate = (page) => { setRoute(page); setSelectedId(null); window.scrollTo?.(0, 0); };
  const openDetail = (id) => { setSelectedId(id); setRoute("detail"); window.scrollTo?.(0, 0); };
  const goBack = () => { setRoute("workshops"); setSelectedId(null); window.scrollTo?.(0, 0); };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f9f5ee; }
      `}</style>
      <div style={{ minHeight: "100vh", background: T.sand }}>
        <Navbar currentPage={route === "detail" ? "workshops" : route} onNavigate={navigate} />
        {route === "workshops" && <WorkshopsPage onSelectWorkshop={openDetail} />}
        {route === "detail" && <WorkshopDetail workshopId={selectedId} onBack={goBack} />}
        {route === "home" && (
          <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, background: T.parchment }}>
            <p style={{ fontFamily: serif, fontSize: 40, fontWeight: 300, color: T.espresso }}>RS <em style={{ fontStyle: "italic", color: T.gold }}>Calligraphy</em> Studio</p>
            <p style={{ fontFamily: serif, fontSize: 14, color: T.brownLight, fontWeight: 300 }}>Home page — navigate to Workshops to explore.</p>
            <button onClick={() => navigate("workshops")} style={{ fontFamily: serif, background: T.espresso, color: T.parchment, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", padding: "12px 28px", border: "none", cursor: "pointer" }}>Browse Workshops</button>
          </div>
        )}

        {/* Footer */}
        <footer style={{ background: "#1e1409", padding: "36px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <p style={{ fontFamily: serif, fontSize: 11, color: "#5c4030", letterSpacing: "0.15em" }}>
              © {new Date().getFullYear()} RS Calligraphy Studio. All rights reserved.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ height: 1, width: 24, background: "#3d2e1e" }} />
              <svg width="7" height="7" viewBox="0 0 8 8"><rect x="1" y="1" width="6" height="6" stroke={T.gold} strokeWidth="0.8" fill="none" transform="rotate(45 4 4)" /></svg>
              <p style={{ fontFamily: serif, fontSize: 11, color: "#5c4030", letterSpacing: "0.15em" }}>Crafted with care</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}