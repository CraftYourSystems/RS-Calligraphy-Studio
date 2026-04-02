const footerLinks = {
  Studio: [
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Workshops", href: "/workshops" },
    { label: "Contact", href: "/#contact" },
  ],
  Learn: ["Beginner Guide", "Script Styles", "Tools & Supplies", "FAQ"],
  Connect: ["Instagram", "Pinterest", "YouTube", "Newsletter"],
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1e1409] text-[#c8b89a]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
                <circle cx="18" cy="18" r="17" stroke="#b5924c" strokeWidth="1" />
                <path d="M10 26 C12 18, 18 10, 26 10" stroke="#f5f0e8" strokeWidth="2" strokeLinecap="round" />
                <circle cx="26" cy="10" r="2" fill="#b5924c" />
              </svg>
              <div>
                <p className="text-[#f5f0e8] text-base leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                  RS <em className="italic text-[#b5924c]">Calligraphy</em>
                </p>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#7a6248]" style={{ fontFamily: "Georgia, serif" }}>
                  Studio
                </p>
              </div>
            </div>

            <p className="text-sm leading-[1.85] font-light mb-8 max-w-[220px]" style={{ fontFamily: "Georgia, serif" }}>
              A space for mindful creativity, deliberate practice, and the timeless beauty of letterforms.
            </p>

            <div className="flex gap-3">
              {["IG", "PT", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-[#3d2e1e] hover:border-[#b5924c] text-[#7a6248] hover:text-[#b5924c] flex items-center justify-center text-[9px] tracking-widest transition-colors duration-200"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p
                className="text-[#f5f0e8] text-[10px] tracking-[0.35em] uppercase mb-6 font-semibold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {heading}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={typeof link === "string" ? link : link.href}>
                    <a
                      href={typeof link === "string" ? "#" : link.href}
                      className="text-sm font-light hover:text-[#b5924c] transition-colors duration-200"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {typeof link === "string" ? link : link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#2c1f0e]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-[#5c4030] tracking-[0.15em]" style={{ fontFamily: "Georgia, serif" }}>
          (c) {new Date().getFullYear()} RS Calligraphy Studio. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#3d2e1e]" />
          <svg width="7" height="7" viewBox="0 0 8 8">
            <rect x="1" y="1" width="6" height="6" stroke="#b5924c" strokeWidth="0.8" fill="none" transform="rotate(45 4 4)" />
          </svg>
          <p className="text-[11px] text-[#5c4030] tracking-[0.15em]" style={{ fontFamily: "Georgia, serif" }}>
            Crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
