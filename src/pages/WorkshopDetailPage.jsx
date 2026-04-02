import Navbar from "../features/home/components/Navbar";
import Footer from "../features/home/components/Footer";
import WorkshopDetailFeature from "../features/workshops/pages/WorkshopDetail";

const WorkshopDetailPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WorkshopDetailFeature />
      <Footer />
    </div>
  );
};

export default WorkshopDetailPage;
