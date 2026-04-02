import { useState } from "react";

const serif = "Georgia, 'Times New Roman', serif";

const T = {
  parchment: "#f5f0e8",
  gold: "#b5924c",
  espresso: "#2c1f0e",
  brown: "#5c4a34",
  brownLight: "#7a6248",
  tan: "#9c8060",
  beige: "#d4c4a8",
  cream: "#efe9de",
};

const levelColors = {
  Beginner: { bg: "#f0ece4", text: "#7a6248", dot: "#b5924c" },
  Intermediate: { bg: "#e8f0e8", text: "#4a6b4a", dot: "#6b8c6b" },
};

/**
 * WorkshopCard
 */
const WorkshopCard = ({ workshop, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  const level = levelColors[workshop.level] || levelColors.Beginner;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? T.beige : "#f0ece4"}`,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 48px rgba(44,31,14,0.10)"
          : "0 2px 12px rgba(44,31,14,0.04)",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: hovered ? T.gold : "transparent",
          transition: "background 0.3s",
        }}
      />

      {/* Image area */}
      <div style={{ position: "relative", overflow: "hidden", height: 200, background: T.cream, flexShrink: 0 }}>
        <img
          src={workshop.image}
          alt={workshop.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `rgba(44,31,14,${hovered ? 0.06 : 0})`,
            transition: "background 0.4s",
          }}
        />

        {/* Badge */}
        {workshop.badge && (
          <div
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              background: T.espresso,
              color: T.parchment,
              fontFamily: serif,
              fontSize: 9,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "5px 12px",
            }}
          >
            {workshop.badge}
          </div>
        )}

        {/* Level badge */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: level.bg,
            color: level.text,
            fontFamily: serif,
            fontSize: 9,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: level.dot }} />
          {workshop.level}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "28px 28px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke={T.tan} strokeWidth="1.2" />
              <path d="M8 4.5 V8 L10.5 10" stroke={T.tan} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontFamily: serif, fontSize: 11, letterSpacing: "0.15em", color: T.tan, textTransform: "uppercase" }}>
              {workshop.duration}
            </span>
          </div>
          <div style={{ width: 3, height: 3, borderRadius: "50%", background: T.beige }} />
          <span style={{ fontFamily: serif, fontSize: 11, letterSpacing: "0.15em", color: T.gold, textTransform: "uppercase" }}>
            {workshop.price.inr}
          </span>
        </div>

        <h3
          style={{
            fontFamily: serif,
            fontSize: 20,
            fontWeight: 300,
            color: T.espresso,
            lineHeight: 1.3,
            margin: "0 0 14px",
          }}
        >
          {workshop.title}
        </h3>

        <div style={{ height: 1, background: "#f0ece4", marginBottom: 14 }} />

        <p
          style={{
            fontFamily: serif,
            fontSize: 14,
            color: T.brownLight,
            lineHeight: 1.85,
            fontWeight: 300,
            flex: 1,
            marginBottom: 24,
          }}
        >
          {workshop.shortDescription}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: serif, fontSize: 18, fontWeight: 300, color: T.espresso, margin: 0 }}>
              {workshop.price.inr}
            </p>
            <p style={{ fontFamily: serif, fontSize: 11, color: T.tan, margin: 0 }}>
              {workshop.price.usd}
            </p>
          </div>

          <button
            onClick={() => onSelect && onSelect(workshop.id)}
            style={{
              fontFamily: serif,
              background: hovered ? T.espresso : "transparent",
              color: hovered ? T.parchment : T.espresso,
              border: `1px solid ${T.espresso}`,
              fontSize: 10,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "10px 22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "background 0.3s, color 0.3s",
            }}
          >
            Details
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default WorkshopCard;
