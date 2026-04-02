import { useState } from "react";
import WorkshopHero from "../components/WorkshopHero";
import WorkshopList from "../components/WorkshopList";
import { workshops } from "../data/workshopsData";
import { useNavigate } from "react-router-dom";

const serif = "Georgia, 'Times New Roman', serif";

const T = {
  parchment: "#f5f0e8",
  sand: "#f9f5ee",
  gold: "#b5924c",
  espresso: "#2c1f0e",
  brown: "#5c4a34",
  brownLight: "#7a6248",
  tan: "#9c8060",
  beige: "#d4c4a8",
};

const filters = ["All", "Beginner", "Intermediate"];

/**
 * WorkshopsPage
 */
const WorkshopsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: T.sand }}>
      <WorkshopHero
        title="Our Workshops"
        subtitle="Explore our calligraphy workshops — from beginner foundations to advanced scripts."
        count={workshops.length}
      />

      <div style={{ background: "#fff", borderBottom: "1px solid #f0ece4" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: 4,
            overflowX: "auto",
          }}
        >
          {filters.map((f) => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: serif,
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  padding: "18px 20px",
                  background: "none",
                  border: "none",
                  borderBottom: `2px solid ${active ? T.gold : "transparent"}`,
                  color: active ? T.espresso : T.tan,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {f}
              </button>
            );
          })}

          <div style={{ flex: 1 }} />
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px 80px" }}>
        <WorkshopList
          workshops={workshops}
          onSelect={(id) => navigate(`/workshops/${id}`)}
          filter={activeFilter === "All" ? "all" : activeFilter}
        />
      </div>

      <div style={{ background: T.espresso, padding: "60px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: serif, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: T.gold, marginBottom: 12 }}>
          Not sure where to start?
        </p>
        <p style={{ fontFamily: serif, fontSize: 20, fontWeight: 300, color: T.parchment, marginBottom: 28 }}>
          Beginners can start with{" "}
          <em style={{ fontStyle: "italic", color: "#c8a96e" }}>Foundations of Calligraphy</em>
        </p>
        <button
          onClick={() => navigate("/workshops/foundations-of-calligraphy")}
          style={{
            fontFamily: serif,
            background: T.gold,
            color: T.espresso,
            border: "none",
            fontSize: 11,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            padding: "14px 36px",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = T.parchment)}
          onMouseLeave={(e) => (e.target.style.background = T.gold)}
        >
          View Foundations Workshop
        </button>
      </div>
    </div>
  );
};

export default WorkshopsPage;
