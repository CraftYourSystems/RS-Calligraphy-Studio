import Navbar from "../features/home/components/Navbar";
import Hero from "../features/home/components/Hero";
import AboutPreview from "../features/home/components/AboutPreview";
import GalleryPreview from "../features/home/components/GalleryPreview";
import CTASection from "../features/home/components/CTASection";
import Footer from "../features/home/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutPreview />
      <GalleryPreview />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
