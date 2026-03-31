import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section id="about" className="bg-white py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
          <div className="relative flex-shrink-0">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#b5924c] opacity-35" />
            <div className="w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] bg-[#efe9de] flex flex-col items-center justify-center relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 320 420" fill="none">
                <path d="M280 30 C220 100, 100 80, 80 180 C60 280, 160 320, 100 420" stroke="#2c1f0e" strokeWidth="52" strokeLinecap="round" />
              </svg>
              <svg width="44" height="44" viewBox="0 0 56 56" fill="none" className="opacity-25 mb-3">
                <circle cx="28" cy="20" r="11" stroke="#3d2e1e" strokeWidth="1.5" />
                <path d="M8 52 C8 38 48 38 48 52" stroke="#3d2e1e" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="text-[#9c8060] text-[10px] tracking-[0.25em] uppercase opacity-60" style={{ fontFamily: "Georgia, serif" }}>
                Instructor Photo
              </p>
            </div>
            <div className="absolute -bottom-3 -right-3 w-5 h-5 rounded-full bg-[#b5924c] opacity-70" />
          </div>

          <div className="flex-1 max-w-xl">
            <p
              className="text-[#b5924c] text-[10px] tracking-[0.38em] uppercase font-semibold mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              About the Artist
            </p>

            <h2
              className="text-4xl md:text-5xl font-light text-[#2c1f0e] leading-tight mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Meet <em className="italic">Rupa Suresh</em>
            </h2>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#b5924c]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#b5924c]" />
            </div>

            <p
              className="text-[#5c4a34] text-lg leading-[1.95] font-light mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              I'm Rupa Suresh - a software professional, a mother, and a calligraphy artist
              with over five years of daily practice. Calligraphy found me at a point when I
              needed stillness, and it has been my most faithful companion ever since.
            </p>

            <p
              className="text-[#7a6248] text-base leading-[1.9] font-light mb-10"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Through my workshops, I share not just technique, but the meditative joy of
              slowing down and making something beautiful with your own hands.
            </p>

            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-[#2c1f0e] hover:text-[#b5924c] text-xs tracking-[0.25em] uppercase border-b border-[#d4c4a8] hover:border-[#b5924c] pb-0.5 transition-colors duration-200"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Read Full Story
              <svg
                className="group-hover:translate-x-1 transition-transform"
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
