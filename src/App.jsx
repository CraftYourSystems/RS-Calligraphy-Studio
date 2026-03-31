import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
