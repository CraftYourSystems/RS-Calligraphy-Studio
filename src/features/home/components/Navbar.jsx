import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Workshops", href: "/#workshops" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const getIsActive = (href) => {
    const currentPath = location.pathname;
    const currentHash = location.hash || "";

    if (href === "/") return currentPath === "/";
    if (href.startsWith("/#")) return currentPath === "/" && currentHash === href.slice(1);
    if (href.startsWith("#")) return currentPath === "/" && currentHash === href;
    return currentPath === href;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf7f2]/95 backdrop-blur-sm shadow-[0_1px_24px_rgba(44,31,14,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
              <circle cx="18" cy="18" r="17" stroke="#b5924c" strokeWidth="1" />
              <path
                d="M10 26 C12 18, 18 10, 26 10"
                stroke="#2c1f0e"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="26" cy="10" r="2" fill="#b5924c" />
            </svg>
          </div>
          <div>
            <p
              className="text-[#2c1f0e] text-lg leading-tight tracking-wide"
              style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}
            >
              RS <em className="italic text-[#b5924c]">Calligraphy</em>
            </p>
            <p
              className="text-[#9c8060] text-[9px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Studio
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = getIsActive(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-[#b5924c] border-b border-[#b5924c] pb-1"
                    : "text-[#5c4a34] hover:text-[#b5924c]"
                }`}
                style={{ fontFamily: "Georgia, serif" }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/#workshops"
            className="group bg-[#2c1f0e] hover:bg-[#b5924c] text-xs tracking-[0.25em] uppercase px-6 py-3 transition-colors duration-300"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="!text-[#f5f0e8] group-hover:!text-[#2c1f0e] transition-colors duration-300">
              Join Workshop
            </span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-[#2c1f0e] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-[#2c1f0e] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-[#2c1f0e] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#faf7f2] border-t border-[#e8dece] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = getIsActive(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs tracking-[0.2em] uppercase ${
                  isActive
                    ? "text-[#b5924c]"
                    : "text-[#5c4a34] hover:text-[#b5924c]"
                }`}
                style={{ fontFamily: "Georgia, serif" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/#workshops"
            className="mt-2 bg-[#2c1f0e] text-xs tracking-[0.25em] uppercase px-6 py-3 text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="!text-[#f5f0e8]">Join Workshop</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
