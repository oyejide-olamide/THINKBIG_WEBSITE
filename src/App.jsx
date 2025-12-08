import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VisionMissionPage from './pages/VisionMissionPage';
import ObjectivesPage from './pages/ObjectivesPage';
import SectorsPage from './pages/SectorsPage';
import AudiencePage from './pages/AudiencePage';
import SpeakersPage from './pages/SpeakersPage';
import FAQPage from './pages/FAQPage';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col ">
          <Navigation />
          <main className="flex-grow ">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/vision-mission" element={<VisionMissionPage />} />
              <Route path="/objectives" element={<ObjectivesPage />} />
              <Route path="/sectors" element={<SectorsPage />} />
              <Route path="/audience" element={<AudiencePage />} />
              <Route path="/speakers" element={<SpeakersPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;