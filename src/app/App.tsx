import React, { useState, useEffect, FC } from 'react';
import { Top } from '@/features/top/Top';
import { Profile } from '@/features/profile/Profile';
import { Skills } from '@/features/skills/Skills';
import { Tools } from '@/features/tools/Tools';
import { Expertise } from '@/features/expertise/Expertise';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CONSTANTS } from '@/constants/Constant';
import { SectionId } from '@/types/app';

const App: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(CONSTANTS.SECTION.TOP);

  useEffect(() => {
    const handleScroll = (): void => {
      const sections: SectionId[] = [
        CONSTANTS.SECTION.TOP, 
        CONSTANTS.SECTION.PROFILE, 
        CONSTANTS.SECTION.SKILLS,
        CONSTANTS.SECTION.TOOLS,
        CONSTANTS.SECTION.EXPERTISE
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
    if (element) element.scrollIntoView({ behavior: 'smooth' });;
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
        
        <section id="tools">
          <Tools />
        </section>

        <section id="expertise">
          <Expertise />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
