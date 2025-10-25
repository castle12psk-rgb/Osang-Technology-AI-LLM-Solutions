
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SolutionsSection from './components/SolutionsSection';
import TechSection from './components/TechSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import InsightSection from './components/InsightSection';
import CertsSection from './components/CertsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-navy overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <TechSection />
        <CaseStudiesSection />
        <InsightSection />
        <CertsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
