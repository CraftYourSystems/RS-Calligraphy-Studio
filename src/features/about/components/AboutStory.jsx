const storyParagraphs = [
  {
    id: 1,
    pullQuote: "One stroke at a time.",
    text: "I'm Rupa Suresh, a passionate calligraphy artist with over five years of dedicated practice. My journey began with a simple commitment - to practice every single day. What started as discipline gradually transformed into a deep passion for the rhythm and flow of the pen.",
  },
  {
    id: 2,
    pullQuote: "Balance in motion.",
    text: "Alongside being a software professional and a proud mother of two teenagers, calligraphy has become my creative escape and constant companion. Whether at home or while exploring new places, my pens are always with me - helping me capture moments through ink and script.",
  },
  {
    id: 3,
    pullQuote: "Always a student.",
    text: "Over the years, I have immersed myself in continuous learning, refining both technique and understanding. I approach calligraphy not just as an art, but as a discipline - always staying a student to ensure what I teach is meaningful and practical.",
  },
  {
    id: 4,
    pullQuote: "Joy in every line.",
    text: "Today, I offer online workshops designed to help students experience the same joy, clarity, and technical precision that I've developed through years of consistent practice.",
  },
];

const AboutStory = () => (
  <section style={{ background: "#f9f5ee", padding: "96px 24px" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <p
          style={{
            fontFamily: "'Georgia', serif",
            letterSpacing: "0.3em",
            color: "#b5924c",
            fontSize: 11,
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          The Journey
        </p>
        <h2
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 300,
            color: "#2c1f0e",
            margin: 0,
          }}
        >
          My <em>Story</em>
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            marginTop: 24,
          }}
        >
          <div style={{ height: 1, width: 60, background: "#d4c4a8" }} />
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
          <div style={{ height: 1, width: 60, background: "#d4c4a8" }} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
        {storyParagraphs.map((para, i) => (
          <div
            key={para.id}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 40,
              flexDirection: i % 2 !== 0 ? "row-reverse" : "row",
            }}
          >
            <div
              style={{
                minWidth: 200,
                flex: "0 0 220px",
                position: "relative",
                paddingLeft: 20,
                borderLeft: "2px solid #b5924c",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: -14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "#b5924c",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontFamily: "Georgia, serif",
                  fontWeight: 600,
                }}
              >
                {para.id}
              </div>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 48,
                  color: "#e8dece",
                  lineHeight: 1,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 22,
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "#7a5c34",
                  lineHeight: 1.35,
                  marginTop: 4,
                }}
              >
                {para.pullQuote}
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 16,
                  color: "#5c4a34",
                  lineHeight: 2,
                  fontWeight: 300,
                }}
              >
                {para.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutStory;
