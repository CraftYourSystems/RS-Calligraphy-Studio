const galleryItems = [
  {
    id: 1,
    label: "Modern Script",
    desc: "Fluid letterforms",
    aspect: "h-80",
    accent: "bg-[#efe9de]",
    svgPath: "M40 280 C80 200, 60 140, 140 80 C220 20, 300 60, 340 30",
    strokeW: 44,
  },
  {
    id: 2,
    label: "Classical Italic",
    desc: "Timeless elegance",
    aspect: "h-80",
    accent: "bg-[#e8e0d5]",
    svgPath: "M320 260 C260 180, 280 120, 200 70 C120 20, 60 60, 30 20",
    strokeW: 38,
  },
];

const GalleryPreview = () => {
  return (
    <section id="gallery" className="bg-[#f9f5ee] py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p
              className="text-[#b5924c] text-[10px] tracking-[0.38em] uppercase font-semibold mb-5"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Portfolio
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2c1f0e] leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              A glimpse of the <em className="italic">art</em>
            </h2>
          </div>
          <a
            href="/gallery"
            className="group self-start sm:self-auto inline-flex items-center gap-3 bg-[#2c1f0e] hover:bg-[#b5924c] text-[10px] tracking-[0.25em] uppercase px-8 py-3.5 transition-colors duration-300"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <span className="!text-[#f5f0e8] group-hover:!text-[#2c1f0e] transition-colors duration-300">
              View Gallery
            </span>
            <svg
              className="!text-[#f5f0e8] group-hover:!text-[#2c1f0e] group-hover:translate-x-1 transition-all"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden cursor-pointer">
              <div className={`relative ${item.aspect} ${item.accent} overflow-hidden`}>
                <svg
                  className="absolute inset-0 w-full h-full opacity-[0.12] group-hover:opacity-[0.18] transition-opacity duration-500"
                  viewBox="0 0 360 320"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <path
                    d={item.svgPath}
                    stroke="#2c1f0e"
                    strokeWidth={item.strokeW}
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 52 52" fill="none" className="opacity-20 mb-2">
                    <rect x="6" y="6" width="40" height="40" rx="2" stroke="#3d2e1e" strokeWidth="1.5" />
                    <circle cx="18" cy="20" r="5" stroke="#3d2e1e" strokeWidth="1.2" />
                    <path d="M6 36 L16 24 L24 32 L34 20 L46 36" stroke="#3d2e1e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#9c8060] text-[10px] tracking-[0.2em] uppercase opacity-50" style={{ fontFamily: "Georgia, serif" }}>
                    Work {item.id}
                  </p>
                </div>

                <div className="absolute inset-0 bg-[#2c1f0e] opacity-0 group-hover:opacity-20 transition-opacity duration-400" />

                <div className="absolute top-4 left-4">
                  <span
                    className="text-[10px] tracking-[0.2em] text-[#b5924c] border border-[#b5924c] px-2 py-0.5"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    0{item.id}
                  </span>
                </div>
              </div>

              <div className="pt-4 pb-2 flex items-center justify-between">
                <div>
                  <p
                    className="text-[#2c1f0e] text-sm font-light tracking-wide"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-[#9c8060] text-[11px] tracking-[0.15em] uppercase mt-0.5"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
                <svg
                  className="opacity-30 group-hover:opacity-70 group-hover:translate-x-1 transition-all duration-300"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="#2c1f0e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="h-px bg-[#d4c4a8] group-hover:bg-[#b5924c] transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
