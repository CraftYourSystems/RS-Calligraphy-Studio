import Navbar from "../features/home/components/Navbar";
import Footer from "../features/home/components/Footer";
import WorkshopsPageFeature from "../features/workshops/pages/WorkshopsPage";

const WorkshopsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WorkshopsPageFeature />
      <Footer />
    </div>
  );
};

export default WorkshopsPage;
