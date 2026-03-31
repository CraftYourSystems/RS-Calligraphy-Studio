import React from "react";

const credentials = [
  {
    id: 1,
    stat: "5+",
    unit: "Years",
    label: "of Experience",
    description:
      "Over half a decade of devoted daily practice, exploring scripts from modern calligraphy to classical letterforms.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="#b5924c" strokeWidth="1.5" />
        <path
          d="M16 8 L16 16 L22 20"
          stroke="#b5924c"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    stat: "365",
    unit: "Days",
    label: "Practice Discipline",
    description:
      "A commitment to daily practice — rain, travel, or busy schedules — that has shaped both skill and character.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="7" width="22" height="20" rx="2" stroke="#b5924c" strokeWidth="1.5" />
        <path d="M5 13 H27" stroke="#b5924c" strokeWidth="1.5" />
        <path d="M11 5 V9 M21 5 V9" stroke="#b5924c" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 19 L14 23 L22 17" stroke="#b5924c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 3,
    stat: "∞",
    unit: "",
    label: "Workshop Experience",
    description:
      "Guiding students through the meditative process of calligraphy — building confidence, patience, and joy in every session.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M4 26 C4 20 28 20 28 26"
          stroke="#b5924c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="12" r="6" stroke="#b5924c" strokeWidth="1.5" />
        <circle cx="6" cy="14" r="4" stroke="#b5924c" strokeWidth="1.25" />
        <circle cx="26" cy="14" r="4" stroke="#b5924c" strokeWidth="1.25" />
      </svg>
    ),
  },
];

const AboutCredibility = () => {
  return (
    <section className="bg-[#2c1f0e] py-24 md:py-32 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grain" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="0.8" fill="white" />
              <circle cx="10" cy="10" r="0.5" fill="white" />
              <circle cx="50" cy="50" r="0.6" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grain)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p
            className="uppercase tracking-[0.3em] text-[#b5924c] text-xs font-semibold mb-5"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Credentials & Expertise
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#f5f0e8]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Built on <em className="italic">Devotion</em>
          </h2>
        </div>

        {/* Credential cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((cred) => (
            <div
              key={cred.id}
              className="relative group border border-[#3d2e1e] bg-[#3a2b18] hover:bg-[#442f18] transition-colors duration-300 rounded-sm p-10 text-center"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-[#b5924c]" />

              {/* Icon */}
              <div className="flex justify-center mb-6">{cred.icon}</div>

              {/* Stat */}
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span
                  className="text-6xl font-light text-[#f5f0e8] leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {cred.stat}
                </span>
                {cred.unit && (
                  <span
                    className="text-xl text-[#b5924c] font-light"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {cred.unit}
                  </span>
                )}
              </div>

              <p
                className="text-sm uppercase tracking-widest text-[#b5924c] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {cred.label}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-[#5c4030] mx-auto mb-6" />

              <p
                className="text-[#c8b89a] text-sm leading-[1.9] font-light"
                style={{ fontFamily: "'Lora', Georgia, serif" }}
              >
                {cred.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCredibility;