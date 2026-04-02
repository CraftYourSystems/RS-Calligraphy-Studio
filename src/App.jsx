import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import WorkshopDetailPage from "./pages/WorkshopDetailPage";

const FONT_STYLESHEET_ID = "calligraphy-google-fonts";
const FONT_STYLESHEET_HREF =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Lora:wght@300;400&display=swap";

export default function App() {
  useEffect(() => {
    if (document.getElementById(FONT_STYLESHEET_ID)) {
      return undefined;
    }

    const link = document.createElement("link");
    link.id = FONT_STYLESHEET_ID;
    link.rel = "stylesheet";
    link.href = FONT_STYLESHEET_HREF;
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/workshops/:id" element={<WorkshopDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
