const serif = "Georgia, 'Times New Roman', serif";

const T = {
  parchment: "#f5f0e8",
  gold: "#b5924c",
  espresso: "#2c1f0e",
  brown: "#5c4a34",
  brownLight: "#7a6248",
  beige: "#d4c4a8",
  cream: "#efe9de",
};

/**
 * WorkshopHero
 */
const WorkshopHero = ({ title = "Workshops", subtitle = "Explore our calligraphy workshops", count }) => {
  return (
    <section
      style={{
        background: T.parchment,
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}
    >
      {/* Background ink strokes */}
      <svg
        style={{ position: "absolute", right: -30, top: 0, height: "100%", opacity: 0.05, pointerEvents: "none" }}
        viewBox="0 0 400 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M380 30 C300 150, 160 80, 140 220 C120 360, 260 400, 200 540 C140 680, 40 680, 20 780"
          stroke={T.espresso}
          strokeWidth="60"
          strokeLinecap="round"
        />
      </svg>
      <svg
        style={{ position: "absolute", left: 0, bottom: 0, width: 220, opacity: 0.045, pointerEvents: "none" }}
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M20 280 C80 200, 60 120, 140 60 C220 0, 280 60, 300 20"
          stroke="#3d2e1e"
          strokeWidth="36"
          strokeLinecap="round"
        />
      </svg>

      <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
        {/* Eyebrow ornament */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 28 }}>
          <div style={{ height: 1, width: 48, background: T.beige }} />
          <svg width="8" height="8" viewBox="0 0 8 8">
            <rect x="1" y="1" width="6" height="6" stroke={T.gold} strokeWidth="1" fill="none" transform="rotate(45 4 4)" />
          </svg>
          <div style={{ height: 1, width: 48, background: T.beige }} />
        </div>

        <p
          style={{
            fontFamily: serif,
            letterSpacing: "0.38em",
            color: T.gold,
            fontSize: 10,
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 18,
          }}
        >
          RS Calligraphy Studio
        </p>

        <h1
          style={{
            fontFamily: serif,
            fontSize: "clamp(38px, 6vw, 64px)",
            fontWeight: 300,
            color: T.espresso,
            lineHeight: 1.1,
            margin: "0 0 20px",
          }}
        >
          {title.split(" ").map((word, i) =>
            i === title.split(" ").length - 1 ? (
              <em key={i} style={{ fontStyle: "italic", color: "#7a5c34" }}>
                {word}
              </em>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>

        <p
          style={{
            fontFamily: serif,
            fontSize: 17,
            color: T.brownLight,
            lineHeight: 1.85,
            fontWeight: 300,
            marginBottom: 32,
          }}
        >
          {subtitle}
        </p>

        {/* Workshop count pill */}
        {count !== undefined && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: `1px solid ${T.beige}`,
              padding: "8px 20px",
              marginBottom: 0,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.gold }} />
            <span
              style={{
                fontFamily: serif,
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: T.brown,
              }}
            >
              {count} Workshop{count !== 1 ? "s" : ""} Available
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkshopHero;
