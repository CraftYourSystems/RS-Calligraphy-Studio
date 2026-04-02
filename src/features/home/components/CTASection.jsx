import { useState } from "react";

const CTASection = ({ onBookTrial }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="workshops" className="relative bg-[#2c1f0e] py-28 md:py-40 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute left-0 top-0 h-full opacity-[0.06]" viewBox="0 0 300 600" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M-20 580 C40 460, 20 340, 100 220 C180 100, 280 120, 300 20" stroke="#f5f0e8" strokeWidth="50" strokeLinecap="round" />
        </svg>
        <svg className="absolute right-0 bottom-0 h-full opacity-[0.05]" viewBox="0 0 300 600" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M320 20 C260 140, 280 260, 200 380 C120 500, 20 480, 0 580" stroke="#b5924c" strokeWidth="50" strokeLinecap="round" />
        </svg>
        {/* concentric rings */}
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] opacity-[0.04]" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="#f5f0e8" strokeWidth="1" />
          <circle cx="300" cy="300" r="230" stroke="#f5f0e8" strokeWidth="1" />
          <circle cx="300" cy="300" r="180" stroke="#f5f0e8" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Top ornament */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-[#5c4030]" />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
              stroke="#b5924c" strokeWidth="1" fill="#b5924c" fillOpacity="0.2" />
          </svg>
          <div className="h-px w-16 bg-[#5c4030]" />
        </div>

        <p
          className="text-[#b5924c] text-[10px] tracking-[0.42em] uppercase font-semibold mb-7"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Begin Your Practice
        </p>

        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-light text-[#f5f0e8] leading-[1.1] mb-8"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Start Your
          <br />
          <em className="italic text-[#c8a96e]">Calligraphy</em>
          <br />
          Journey Today
        </h2>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 bg-[#4a3520]" />
          <svg width="7" height="7" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="2" fill="#b5924c" />
          </svg>
          <div className="h-px w-12 bg-[#4a3520]" />
        </div>

        <p
          className="text-[#c8b89a] text-lg leading-[1.9] font-light max-w-xl mx-auto mb-14"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Pick up the pen. Quiet the noise. Join a small, intimate workshop designed to
          guide you from your very first stroke to flowing, confident letterforms.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-5 flex-col sm:flex-row">
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group inline-flex items-center gap-3 bg-[#b5924c] hover:bg-[#f5f0e8] text-xs tracking-[0.28em] uppercase px-12 py-5 shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-colors duration-300"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="!text-[#2c1f0e]">Join Workshop</span>
            <svg
              className={`!text-[#2c1f0e] transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={onBookTrial}
            className="group inline-flex items-center gap-3 justify-center bg-transparent border border-[#b5924c] hover:bg-[#b5924c] text-[#f5f0e8] hover:text-[#2c1f0e] text-xs tracking-[0.28em] uppercase px-12 py-5 transition-colors duration-300"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span>Book a Free Trial</span>
          </button>

          <a
            href="#gallery"
            className="group inline-flex items-center gap-3 justify-center bg-[#f5f0e8] border border-[#b5924c] hover:bg-[#b5924c] text-[#2c1f0e] hover:text-[#f5f0e8] text-xs tracking-[0.28em] uppercase px-12 py-5 transition-colors duration-300"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span>See Our Work</span>
            <svg
              className="!text-inherit transition-transform duration-300 group-hover:translate-x-1"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Bottom ornament */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-[#4a3520]" />
          <svg width="10" height="10" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="2" fill="#b5924c" />
            <circle cx="5" cy="5" r="4.5" stroke="#b5924c" strokeWidth="0.75" fill="none" />
          </svg>
          <div className="h-px w-10 bg-[#4a3520]" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
