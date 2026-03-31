import React from "react";
import AboutHero from "./components/AboutHero";
import AboutIntro from "./components/AboutIntro";
import AboutStory from "./components/AboutStory";
import AboutCredibility from "./components/AboutCredibility";
import AboutCTA from "./components/AboutCTA";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutCredibility />
      <AboutCTA />
    </main>
  );
};

export default AboutPage;