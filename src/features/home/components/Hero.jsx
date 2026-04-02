import { useEffect, useState } from "react";

const Hero = ({ onBookTrial }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#f5f0e8] flex items-center overflow-hidden">
      {/* ── Large ink-stroke background SVG ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg
          className="absolute -right-20 top-0 h-full opacity-[0.055]"
          viewBox="0 0 500 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M460 40 C380 160, 240 100, 200 260 C160 420, 320 480, 260 640 C200 800, 80 820, 60 920"
            stroke="#2c1f0e"
            strokeWidth="70"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute left-0 bottom-0 w-72 opacity-[0.05]"
          viewBox="0 0 300 300"
          fill="none"
        >
          <path
            d="M20 280 C80 200, 60 120, 140 60 C220 0, 280 60, 300 20"
            stroke="#3d2e1e"
            strokeWidth="36"
            strokeLinecap="round"
          />
        </svg>
        {/* Decorative circle rings */}
        <svg className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[420px] opacity-[0.06]" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="190" stroke="#3d2e1e" strokeWidth="1" />
          <circle cx="200" cy="200" r="150" stroke="#3d2e1e" strokeWidth="1" />
          <circle cx="200" cy="200" r="110" stroke="#3d2e1e" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 pb-16">
        {/* ── Left: text content ── */}
        <div>
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="h-px w-10 bg-[#b5924c]" />
            <p
              className="text-[#b5924c] text-[10px] tracking-[0.4em] uppercase font-semibold"
              style={{ fontFamily: "Georgia, serif" }}
            >
              RS Calligraphy Studio
            </p>
          </div>

          {/* Headline */}
          <h1
            className={`text-[clamp(44px,6vw,80px)] font-light leading-[1.05] text-[#2c1f0e] mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontFamily: "Georgia, serif", transitionDelay: "120ms" }}
          >
            Learn
            <br />
            <em className="italic text-[#7a5c34]">Calligraphy</em>
            <br />
            from Scratch
          </h1>

          {/* Ornament rule */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "220ms" }}
          >
            <div className="h-px w-16 bg-[#d4c4a8]" />
            <svg width="8" height="8" viewBox="0 0 8 8">
              <rect x="1" y="1" width="6" height="6" stroke="#b5924c" strokeWidth="1" fill="none" transform="rotate(45 4 4)" />
            </svg>
            <div className="h-px w-8 bg-[#d4c4a8]" />
          </div>

          {/* Subtext */}
          <p
            className={`text-[#7a6248] text-lg leading-[1.9] font-light max-w-md mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ fontFamily: "Georgia, serif", transitionDelay: "300ms" }}
          >
            Discover the timeless art of letterforms. Whether you're a complete beginner
            or exploring a new creative outlet, our studio welcomes you — one deliberate
            stroke at a time.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-wrap items-center gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <a
              href="/workshops"
              className="group bg-[#2c1f0e] hover:bg-[#b5924c] text-xs tracking-[0.25em] uppercase px-10 py-4 transition-colors duration-300 flex items-center gap-3"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <span className="!text-[#f5f0e8] group-hover:!text-[#2c1f0e] transition-colors duration-300">
                Join Workshop
              </span>
              <svg
                className="!text-[#f5f0e8] group-hover:!text-[#2c1f0e] group-hover:translate-x-1 transition-all duration-300"
                width="14" height="14" viewBox="0 0 16 16" fill="none"
              >
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <button
              onClick={onBookTrial}
              className="text-[#5c4a34] hover:text-[#b5924c] text-xs tracking-[0.25em] uppercase border-b border-[#d4c4a8] hover:border-[#b5924c] pb-0.5 transition-colors duration-200"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Book a Free Trial
            </button>
            <a
              href="#about"
              className="text-[#5c4a34] hover:text-[#b5924c] text-xs tracking-[0.25em] uppercase border-b border-[#d4c4a8] hover:border-[#b5924c] pb-0.5 transition-colors duration-200"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Discover More
            </a>
          </div>

          {/* Stats strip */}
          <div
            className={`mt-16 flex flex-wrap gap-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "520ms" }}
          >
            {[
              { num: "5+", label: "Years of Practice" },
              { num: "200+", label: "Students Taught" },
              { num: "Daily", label: "Dedication" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl font-light text-[#2c1f0e] leading-none mb-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {s.num}
                </p>
                <p
                  className="text-[10px] tracking-[0.25em] uppercase text-[#9c8060]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: image placeholder with layered frame ── */}
        <div
          className={`relative flex justify-center lg:justify-end transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative">
            {/* Offset decorative frame */}
            <div className="absolute -top-5 -left-5 w-full h-full border border-[#b5924c] opacity-30 rounded-sm" />
            <div className="absolute -top-2 -left-2 w-full h-full border border-[#d4c4a8] opacity-40 rounded-sm" />

            {/* Main image placeholder */}
            <div className="relative w-[340px] sm:w-[400px] h-[480px] sm:h-[560px] bg-[#efe9de] rounded-sm overflow-hidden flex flex-col items-center justify-center">
              {/* Ink brush decorative SVG inside */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 560" fill="none">
                <path d="M60 500 C100 380, 80 280, 160 180 C240 80, 340 100, 360 40" stroke="#2c1f0e" strokeWidth="48" strokeLinecap="round" />
              </svg>
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="opacity-25 mb-4">
                <rect x="10" y="10" width="32" height="32" rx="2" stroke="#3d2e1e" strokeWidth="1.5" />
                <circle cx="20" cy="22" r="4" stroke="#3d2e1e" strokeWidth="1.2" />
                <path d="M10 36 L18 26 L24 32 L32 22 L42 36" stroke="#3d2e1e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p
                className="text-[#9c8060] text-[10px] tracking-[0.25em] uppercase opacity-60"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Hero Image
              </p>
            </div>

            {/* Floating tag */}
            <div
              className="absolute -bottom-6 -right-6 bg-[#2c1f0e] text-[#f5f0e8] px-5 py-4"
            >
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#b5924c] mb-1" style={{ fontFamily: "Georgia, serif" }}>Next Workshop</p>
              <p className="text-sm font-light" style={{ fontFamily: "Georgia, serif" }}>Enrolling Now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#5c4a34]" style={{ fontFamily: "Georgia, serif" }}>Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-[#b5924c] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
