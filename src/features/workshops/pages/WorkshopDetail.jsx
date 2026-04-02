import { useState } from "react";
import { getWorkshopById } from "../data/workshopsData";
import { useParams, useNavigate } from "react-router-dom";
import EnrollForm from "../components/EnrollForm";
import TrialForm from "../components/TrialForm";

const serif = "Georgia, 'Times New Roman', serif";

const T = {
  parchment: "#f5f0e8",
  sand: "#f9f5ee",
  cream: "#efe9de",
  gold: "#b5924c",
  goldLight: "#c8a96e",
  espresso: "#2c1f0e",
  espressoMid: "#3a2b18",
  brown: "#5c4a34",
  brownLight: "#7a6248",
  tan: "#9c8060",
  beige: "#d4c4a8",
};

const levelColors = {
  Beginner: { bg: "#f0ece4", text: "#7a6248", dot: "#b5924c" },
  Intermediate: { bg: "#e8f0e8", text: "#4a6b4a", dot: "#6b8c6b" },
};

/**
 * WorkshopDetail
 */
const WorkshopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const workshop = getWorkshopById(id);

  if (!workshop) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: T.sand, padding: 24 }}>
        <p style={{ fontFamily: serif, fontSize: 14, color: T.tan, marginBottom: 20 }}>
          Workshop not found.
        </p>
        <button
          onClick={() => navigate("/workshops")}
          style={{ fontFamily: serif, background: T.espresso, color: T.parchment, border: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", padding: "12px 28px", cursor: "pointer" }}
        >
          ← Back to Workshops
        </button>
      </div>
    );
  }

  const level = levelColors[workshop.level] || levelColors.Beginner;

  return (
    <div style={{ minHeight: "100vh", background: T.sand }}>
      <div style={{ background: "#fff", borderBottom: "1px solid #f0ece4", padding: "0 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 52, display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={() => navigate("/workshops")}
            style={{ fontFamily: serif, background: "none", border: "none", color: T.tan, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: 0 }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Workshops
          </button>
          <span style={{ color: T.beige }}>›</span>
          <span style={{ fontFamily: serif, fontSize: 11, letterSpacing: "0.15em", color: T.brown }}>{workshop.title}</span>
        </div>
      </div>

      <div style={{ background: T.parchment, position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", right: 0, top: 0, height: "100%", opacity: 0.055, pointerEvents: "none" }} viewBox="0 0 400 500" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M380 20 C300 130, 200 70, 170 210 C140 350, 280 390, 210 520" stroke={T.espresso} strokeWidth="56" strokeLinecap="round" />
        </svg>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px", display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
          <div style={{ flex: "1 1 340px", maxWidth: 580 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              {workshop.badge && (
                <span style={{ fontFamily: serif, background: T.espresso, color: T.parchment, fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", padding: "5px 12px" }}>
                  {workshop.badge}
                </span>
              )}
              <span style={{ fontFamily: serif, background: level.bg, color: level.text, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 12px", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: level.dot, display: "inline-block" }} />
                {workshop.level}
              </span>
            </div>

            <h1 style={{ fontFamily: serif, fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, color: T.espresso, lineHeight: 1.15, margin: "0 0 24px" }}>
              {workshop.title}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ height: 1, width: 40, background: T.beige }} />
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.gold }} />
            </div>

            <p style={{ fontFamily: serif, fontSize: 17, color: T.brownLight, lineHeight: 1.9, fontWeight: 300, marginBottom: 0 }}>
              {workshop.shortDescription}
            </p>
          </div>

          <div style={{ flex: "0 0 auto" }}>
            <div style={{ background: "#fff", border: `1px solid #f0ece4`, padding: "36px 40px", minWidth: 240, boxShadow: "0 4px 24px rgba(44,31,14,0.06)", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: T.gold }} />

              <div style={{ marginBottom: 24 }}>
                <p style={{ fontFamily: serif, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: T.tan, margin: "0 0 6px" }}>Investment</p>
                <p style={{ fontFamily: serif, fontSize: 36, fontWeight: 300, color: T.espresso, margin: 0, lineHeight: 1 }}>{workshop.price.inr}</p>
                <p style={{ fontFamily: serif, fontSize: 14, color: T.tan, margin: "4px 0 0" }}>{workshop.price.usd}</p>
              </div>

              <div style={{ height: 1, background: "#f0ece4", margin: "0 0 20px" }} />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div>
                  <p style={{ fontFamily: serif, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: T.tan, margin: "0 0 4px" }}>Duration</p>
                  <p style={{ fontFamily: serif, fontSize: 15, color: T.espresso, fontWeight: 300, margin: 0 }}>{workshop.duration}</p>
                </div>
                <div>
                  <p style={{ fontFamily: serif, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: T.tan, margin: "0 0 4px" }}>Level</p>
                  <p style={{ fontFamily: serif, fontSize: 15, color: T.espresso, fontWeight: 300, margin: 0 }}>{workshop.level}</p>
                </div>
              </div>

              <button
                id="enroll-now-btn"
                onClick={() => setModalOpen(true)}
                style={{
                  width: "100%",
                  fontFamily: serif,
                  background: T.espresso,
                  color: T.parchment,
                  border: "none",
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  padding: "16px 0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#3d2b12")}
                onMouseLeave={(e) => (e.currentTarget.style.background = T.espresso)}
              >
                Enroll Now
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                id="book-trial-btn"
                onClick={() => setTrialModalOpen(true)}
                style={{
                  width: "100%",
                  fontFamily: serif,
                  background: "none",
                  color: T.brown,
                  border: `1px solid ${T.beige}`,
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  padding: "16px 0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "all 0.2s",
                  marginTop: 12,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T.gold;
                  e.currentTarget.style.color = T.gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = T.beige;
                  e.currentTarget.style.color = T.brown;
                }}
              >
                Book a Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px 80px", display: "flex", flexWrap: "wrap", gap: 60, alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 340px" }}>
          <p style={{ fontFamily: serif, fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 16 }}>
            About This Workshop
          </p>
          <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: T.espresso, lineHeight: 1.3, marginBottom: 20 }}>
            What you'll <em style={{ fontStyle: "italic" }}>learn</em>
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ height: 1, width: 36, background: T.beige }} />
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.gold }} />
          </div>

          <p style={{ fontFamily: serif, fontSize: 16, color: T.brown, lineHeight: 1.95, fontWeight: 300 }}>
            {workshop.fullDescription}
          </p>
        </div>

        <div style={{ flex: "0 1 340px", minWidth: 260 }}>
          <p style={{ fontFamily: serif, fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 16 }}>
            Curriculum
          </p>
          <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 300, color: T.espresso, marginBottom: 20 }}>
            Topics <em style={{ fontStyle: "italic" }}>covered</em>
          </h2>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ height: 1, width: 36, background: T.beige }} />
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: T.gold }} />
          </div>

          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {workshop.topics.map((topic, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "16px 0",
                  borderBottom: i < workshop.topics.length - 1 ? "1px solid #f0ece4" : "none",
                }}
              >
                <span style={{ fontFamily: serif, fontSize: 11, color: T.gold, minWidth: 20 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: serif, fontSize: 15, color: T.brown, fontWeight: 300 }}>
                  {topic}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ── Enroll Modal ──────────────────────────────────────────────── */}
      <EnrollForm
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        workshopId={workshop.id}
        workshopTitle={workshop.title}
      />
      <TrialForm
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        workshopTitle={workshop.title}
      />
    </div>
  );
};

export default WorkshopDetail;
