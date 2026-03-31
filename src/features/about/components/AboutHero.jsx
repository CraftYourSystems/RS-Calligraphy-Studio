import React from "react";

const AboutHero = () => {
  return (
    <section className="relative bg-[#f5f0e8] overflow-hidden">
      {/* Decorative ink stroke background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-[420px] opacity-[0.07]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M380 20 C320 80, 200 60, 160 140 C120 220, 200 300, 140 380"
            stroke="#3d2e1e"
            strokeWidth="40"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[280px] opacity-[0.06]"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 280 C60 200, 40 140, 100 80 C160 20, 240 60, 280 20"
            stroke="#3d2e1e"
            strokeWidth="32"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-40 text-center">
        {/* Ornamental rule */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-[#b5924c]" />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="3" fill="#b5924c" />
            <circle cx="10" cy="10" r="7" stroke="#b5924c" strokeWidth="1" fill="none" />
          </svg>
          <div className="h-px w-16 bg-[#b5924c]" />
        </div>

        <p
          className="uppercase tracking-[0.35em] text-[#b5924c] text-xs font-semibold mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Our Story
        </p>

        <h1
          className="text-5xl md:text-7xl font-light text-[#2c1f0e] leading-[1.1] mb-8"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          About RS
          <br />
          <em className="italic font-normal">Calligraphy</em> Studio
        </h1>

        <p
          className="text-lg md:text-xl text-[#7a6248] max-w-xl mx-auto leading-relaxed font-light"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          A journey of discipline, passion, and artistic expression
        </p>

        {/* Bottom ornament */}
        <div className="mt-14 flex justify-center">
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
            <path d="M0 12 Q15 4 30 12 Q45 20 60 12" stroke="#b5924c" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;