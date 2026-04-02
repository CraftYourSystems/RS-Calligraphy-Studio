import Navbar from "../features/home/components/Navbar";
import Footer from "../features/home/components/Footer";
import GalleryHeader from "../features/gallery/components/GalleryHeader";
import GalleryGrid from "../features/gallery/components/GalleryGrid";

const GalleryPage = () => (
  <main className="min-h-screen" style={{ fontFamily: "Georgia, serif" }}>
    <Navbar />
    <GalleryHeader />
    <GalleryGrid />
    <Footer />
  </main>
);

export default GalleryPage;
