import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutPage from './AboutPage';
import VisionMissionPage from './VisionMissionPage';
import ObjectivesSection from '../components/sections/ObjectivesSection';
import SectorsPage from './SectorsPage';
import AudiencePage from './AudiencePage';
import SpeakersPage from './SpeakersPage';
import FAQPage from './FAQPage';

const HomePage = () => {
  return (
    <>
    <div className="min-h-screen ">
      <HeroSection />
      <AboutPage />
      <VisionMissionPage />
      <ObjectivesSection />
      <SectorsPage />
      <AudiencePage />
      <SpeakersPage />
      <FAQPage />
    </div>
    </>
  );
};

export default HomePage;