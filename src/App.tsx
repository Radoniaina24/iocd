import React from "react";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import AboutSection from "./components/sections/AboutSection";
import ProgramSection from "./components/sections/ProgramSection";
import SpeakersSection from "./components/sections/SpeakersSection";
import ParticipantsSection from "./components/sections/ParticipantsSection";
import RegistrationSection from "./components/sections/RegistrationSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProgramSection />
        <SpeakersSection />
        {/* <ParticipantsSection /> */}
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
