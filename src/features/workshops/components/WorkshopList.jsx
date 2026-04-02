import WorkshopCard from "./WorkshopCard";

/**
 * WorkshopList
 */
const WorkshopList = ({ workshops, onSelect, filter = "all" }) => {
  const filteredWorkshops =
    filter === "all"
      ? workshops
      : workshops.filter((w) => w.level === filter);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 32,
      }}
    >
      {filteredWorkshops.map((workshop) => (
        <WorkshopCard
          key={workshop.id}
          workshop={workshop}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default WorkshopList;
