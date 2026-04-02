import GalleryItem from "./GalleryItem";
import ItalicImg from "../../../assets/images/Italic.png";

/* ─── Sample gallery data ─── */
const galleryItems = [
  {
    id: 1,
    label: "Modern Script",
    desc: "Fluid letterforms",
    accent: "bg-[#efe9de]",
    svgPath: "M40 280 C80 200, 60 140, 140 80 C220 20, 300 60, 340 30",
    strokeW: 44,
  },
  {
    id: 2,
    label: "Classical Italic",
    desc: "Timeless elegance",
    accent: "bg-[#e8e0d5]",
    image: ItalicImg,
    svgPath: "M320 260 C260 180, 280 120, 200 70 C120 20, 60 60, 30 20",
    strokeW: 38,
  },
  {
    id: 3,
    label: "Copperplate",
    desc: "Refined precision",
    accent: "bg-[#ebe5da]",
    svgPath: "M30 30 C90 100, 180 40, 240 120 C300 200, 200 280, 330 300",
    strokeW: 36,
  },
  {
    id: 4,
    label: "Brush Lettering",
    desc: "Expressive strokes",
    accent: "bg-[#e6dfd3]",
    svgPath: "M50 300 C100 200, 200 250, 250 150 C300 50, 350 100, 310 280",
    strokeW: 50,
  },
  {
    id: 5,
    label: "Flourished Capitals",
    desc: "Ornamental beauty",
    accent: "bg-[#efe9de]",
    svgPath: "M20 160 C80 60, 160 260, 240 60 C320 260, 340 100, 360 180",
    strokeW: 32,
  },
  {
    id: 6,
    label: "Pointed Pen",
    desc: "Delicate contrast",
    accent: "bg-[#e8e0d5]",
    svgPath: "M340 30 C280 100, 200 80, 150 160 C100 240, 60 180, 20 280",
    strokeW: 40,
  },
];

const GalleryGrid = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>

      {/* ─── "More coming soon" ─── */}
      <div className="mt-24 text-center">
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#d4c4a8]" />
          <svg width="8" height="8" viewBox="0 0 8 8">
            <rect
              x="1"
              y="1"
              width="6"
              height="6"
              stroke="#b5924c"
              strokeWidth="1"
              fill="none"
              transform="rotate(45 4 4)"
            />
          </svg>
          <div className="h-px w-12 bg-[#d4c4a8]" />
        </div>

        <p
          className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#b5924c]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Stay Tuned
        </p>

        <h3
          className="mt-4 text-2xl font-light text-[#2c1f0e] md:text-3xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          More <em className="italic">coming soon</em>
        </h3>

        <p
          className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-[#7a6248]"
          style={{ fontFamily: "Georgia, serif", lineHeight: 1.9 }}
        >
          New works are added regularly. Follow along to see the latest pieces
          as they unfold — each stroke a continuation of the journey.
        </p>

        <div className="mt-10 flex justify-center">
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
    </div>
  </section>
);

export default GalleryGrid;
