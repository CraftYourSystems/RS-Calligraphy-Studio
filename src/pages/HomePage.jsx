import { useState } from "react";
import Navbar from "../features/home/components/Navbar";
import Hero from "../features/home/components/Hero";
import AboutPreview from "../features/home/components/AboutPreview";
import GalleryPreview from "../features/home/components/GalleryPreview";
import CTASection from "../features/home/components/CTASection";
import Footer from "../features/home/components/Footer";
import TrialForm from "../features/workshops/components/TrialForm";

const HomePage = () => {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onBookTrial={() => setTrialModalOpen(true)} />
      <AboutPreview />
      <GalleryPreview />
      <CTASection onBookTrial={() => setTrialModalOpen(true)} />
      <Footer />

      <TrialForm
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;
