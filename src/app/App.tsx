import React, { useState, useEffect, FC } from 'react';
import { Top } from './components/Top';
import { Profile } from './components/Profile';
import { Skills } from './components/Skills';
import { Navigation } from './components/Navigation';
import { CONSTANTS } from './constants/Constant';

type SectionId = typeof CONSTANTS.SECTION[keyof typeof CONSTANTS.SECTION];

const App: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(CONSTANTS.SECTION.TOP);

  useEffect(() => {
    const handleScroll = (): void => {
      const sections: SectionId[] = [
        CONSTANTS.SECTION.TOP, 
        CONSTANTS.SECTION.PROFILE, 
        CONSTANTS.SECTION.SKILLS
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop: elementOffsetTop, offsetHeight: elementOffsetHeight } = element;
          if (scrollPosition >= elementOffsetTop && scrollPosition < elementOffsetTop + elementOffsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: SectionId): void => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
      
      <main>
        <section id="top">
          <Top />
        </section>
        
        <section id="profile">
          <Profile />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
      </main>
      
      <footer className="bg-black border-t border-orange-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2026 TM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
