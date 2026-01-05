import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Skills } from './components/Skills';
import { Navigation } from './components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'profile', 'skills'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
      
      <main>
        <section id="top">
          <Hero />
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
          <p>&copy; 2026 Frontend Engineer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
