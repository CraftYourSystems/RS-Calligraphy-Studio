const GalleryHeader = () => (
  <section className="relative overflow-hidden bg-[#f5f0e8] pt-32 pb-20 md:pt-40 md:pb-28">
    {/* Decorative background strokes */}
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="absolute -right-8 top-0 w-80 opacity-[0.06]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M380 20 C320 80, 200 60, 160 140 C120 220, 200 300, 140 380"
          stroke="#3d2e1e"
          strokeWidth="40"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-64 opacity-[0.05]"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M20 280 C60 200, 40 140, 100 80 C160 20, 240 60, 280 20"
          stroke="#3d2e1e"
          strokeWidth="32"
          strokeLinecap="round"
        />
      </svg>
    </div>

    <div className="relative mx-auto max-w-4xl px-6 text-center">
      {/* Decorative divider */}
      <div className="mb-10 flex items-center justify-center gap-4">
        <div className="h-px w-14 bg-[#b5924c]" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="3" fill="#b5924c" />
          <circle
            cx="10"
            cy="10"
            r="7"
            stroke="#b5924c"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        <div className="h-px w-14 bg-[#b5924c]" />
      </div>

      {/* Label */}
      <p
        className="mb-5 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#b5924c]"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Portfolio
      </p>

      {/* Title */}
      <h1
        className="mb-5 text-4xl font-light leading-tight text-[#2c1f0e] md:text-5xl lg:text-6xl"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <em className="italic">Gallery</em>
      </h1>

      {/* Subtitle */}
      <p
        className="mx-auto max-w-lg text-base font-light leading-relaxed text-[#7a6248] md:text-lg"
        style={{ fontFamily: "Georgia, serif", lineHeight: 1.8 }}
      >
        A collection of calligraphy works and creative expressions
      </p>

      {/* Bottom flourish */}
      <div className="mt-12 flex justify-center">
        <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
          <path
            d="M0 12 Q15 4 30 12 Q45 20 60 12"
            stroke="#b5924c"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  </section>
);

export default GalleryHeader;
