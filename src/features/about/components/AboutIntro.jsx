import React from "react";

const AboutIntro = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Image placeholder */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <div className="relative">
              {/* Offset decorative border */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#b5924c] opacity-40 rounded-sm" />
              {/* Main image block */}
              <div className="relative w-72 h-96 md:w-80 md:h-[440px] bg-[#efe9de] rounded-sm overflow-hidden flex items-center justify-center">
                <div className="text-center px-6">
                  <svg
                    className="mx-auto mb-4 opacity-30"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                  >
                    <circle cx="28" cy="20" r="12" stroke="#3d2e1e" strokeWidth="1.5" />
                    <path
                      d="M8 52 C8 38 48 38 48 52"
                      stroke="#3d2e1e"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p
                    className="text-[#9c8060] text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Instructor Photo
                  </p>
                </div>
              </div>
              {/* Ink-dot accent */}
              <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-[#b5924c] opacity-60" />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="uppercase tracking-[0.3em] text-[#b5924c] text-xs font-semibold mb-5"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Meet the Artist
            </p>

            <h2
              className="text-4xl md:text-5xl font-light text-[#2c1f0e] leading-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Rupa <em className="italic">Suresh</em>
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <div className="h-px w-10 bg-[#b5924c]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#b5924c]" />
            </div>

            <p
              className="text-[#5c4a34] text-lg leading-[1.9] font-light max-w-lg"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              I'm Rupa Suresh, a passionate calligraphy artist with over five years of
              dedicated practice. Through every stroke and curve, I've cultivated a deep
              connection between intention and artistry — turning ink on paper into a
              language of beauty.
            </p>

            {/* Signature-style flourish */}
            <div className="mt-10 flex justify-center md:justify-start">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                <path
                  d="M10 30 C20 10, 40 8, 55 20 C70 32, 85 5, 110 15"
                  stroke="#b5924c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M8 34 C30 34, 90 34, 112 34"
                  stroke="#b5924c"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;