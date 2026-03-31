import React, { useState } from "react";

const AboutCTA = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-[#f5f0e8] py-24 md:py-36 relative overflow-hidden">
      {/* Background flourish */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-[600px] opacity-[0.045]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="180" stroke="#3d2e1e" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" stroke="#3d2e1e" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" stroke="#3d2e1e" strokeWidth="1" />
          <path
            d="M200 20 C260 80, 380 100, 380 200 C380 300, 260 320, 200 380 C140 320, 20 300, 20 200 C20 100, 140 80, 200 20Z"
            stroke="#3d2e1e"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Ornament top */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-[#d4c4a8]" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" stroke="#b5924c" strokeWidth="1" fill="#b5924c" fillOpacity="0.15" />
          </svg>
          <div className="h-px w-16 bg-[#d4c4a8]" />
        </div>

        <p
          className="uppercase tracking-[0.3em] text-[#b5924c] text-xs font-semibold mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Begin Your Practice
        </p>

        <h2
          className="text-4xl md:text-6xl font-light text-[#2c1f0e] leading-tight mb-8"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Ready to find your
          <br />
          <em className="italic text-[#7a5c34]">voice in ink?</em>
        </h2>

        <p
          className="text-[#7a6248] text-lg leading-[1.9] mb-14 max-w-xl mx-auto font-light"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          Join a small-group workshop and discover the meditative joy of calligraphy.
          All levels welcome — no experience necessary, only curiosity.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="relative overflow-hidden group bg-[#2c1f0e] text-[#f5f0e8] hover:text-[#2c1f0e] px-12 py-5 text-sm uppercase tracking-[0.25em] transition-all duration-300 hover:bg-[#b5924c] rounded-none"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span className="relative z-10 flex items-center gap-3">
              Join a Workshop
              <svg
                className={`transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8 H13 M9 4 L13 8 L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <button
            className="text-[#7a6248] text-sm uppercase tracking-[0.25em] border-b border-[#b5924c] pb-0.5 hover:text-[#b5924c] transition-colors duration-200"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            View Gallery
          </button>
        </div>

        {/* Bottom ornament */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#d4c4a8]" />
          <svg width="10" height="10" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="2" fill="#b5924c" />
            <circle cx="5" cy="5" r="4.5" stroke="#b5924c" strokeWidth="0.75" fill="none" />
          </svg>
          <div className="h-px w-12 bg-[#d4c4a8]" />
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
