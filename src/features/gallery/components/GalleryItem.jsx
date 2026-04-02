const GalleryItem = ({ item }) => (
  <div className="group cursor-pointer">
    {/* Image container */}
    <div className="relative overflow-hidden rounded-sm">
      <div
        className={`relative ${item.aspect || "aspect-[4/5]"} overflow-hidden ${item.accent || "bg-[#efe9de]"}`}
      >
        {/* Placeholder artwork / actual image */}
        {item.image ? (
          <img
            src={item.image}
            alt={item.label}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <>
            {/* SVG stroke placeholder */}
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.12] transition-opacity duration-500 group-hover:opacity-[0.18]"
              viewBox="0 0 360 320"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d={
                  item.svgPath ||
                  "M40 280 C80 200, 60 140, 140 80 C220 20, 300 60, 340 30"
                }
                stroke="#2c1f0e"
                strokeWidth={item.strokeW || 44}
                strokeLinecap="round"
              />
            </svg>

            {/* Center icon */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 52 52"
                fill="none"
                className="mb-2 opacity-20"
              >
                <rect
                  x="6"
                  y="6"
                  width="40"
                  height="40"
                  rx="2"
                  stroke="#3d2e1e"
                  strokeWidth="1.5"
                />
                <circle
                  cx="18"
                  cy="20"
                  r="5"
                  stroke="#3d2e1e"
                  strokeWidth="1.2"
                />
                <path
                  d="M6 36 L16 24 L24 32 L34 20 L46 36"
                  stroke="#3d2e1e"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                className="text-[10px] uppercase tracking-[0.2em] text-[#9c8060] opacity-50"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {item.label}
              </p>
            </div>
          </>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#2c1f0e] opacity-0 transition-opacity duration-500 group-hover:opacity-25" />

        {/* Number badge — top-left */}
        {item.id && (
          <div className="absolute left-4 top-4">
            <span
              className="border border-[#b5924c] px-2 py-0.5 text-[10px] tracking-[0.2em] text-[#b5924c]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {String(item.id).padStart(2, "0")}
            </span>
          </div>
        )}

        {/* Bottom info overlay (appears on hover) */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-[#2c1f0e]/70 to-transparent px-5 pb-5 pt-14 transition-transform duration-500 ease-out group-hover:translate-y-0">
          <p
            className="text-sm font-light tracking-wide text-[#f5f0e8]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {item.label}
          </p>
          {item.desc && (
            <p
              className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[#d4c4a8]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {item.desc}
            </p>
          )}
        </div>
      </div>
    </div>

    {/* Caption below card */}
    <div className="flex items-center justify-between pb-2 pt-4">
      <div>
        <p
          className="text-sm font-light tracking-wide text-[#2c1f0e]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {item.label}
        </p>
        {item.desc && (
          <p
            className="mt-0.5 text-[11px] uppercase tracking-[0.15em] text-[#9c8060]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {item.desc}
          </p>
        )}
      </div>
      <svg
        className="opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-70"
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3 8H13M9 4L13 8L9 12"
          stroke="#2c1f0e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* Bottom accent line */}
    <div className="h-px bg-[#d4c4a8] transition-colors duration-300 group-hover:bg-[#b5924c]" />
  </div>
);

export default GalleryItem;
