
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Background3D from '../components/Background3D';

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop += e.deltaY;
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <Background3D />
      <Navigation />
      
      <div 
        ref={scrollContainerRef}
        className="relative z-10 h-screen overflow-y-auto scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="snap-y snap-mandatory">
          <section id="hero" className="snap-start">
            <Hero />
          </section>
          
          <section id="about" className="snap-start">
            <About />
          </section>
          
          <section id="experience" className="snap-start">
            <Experience />
          </section>
          
          <section id="projects" className="snap-start">
            <Projects />
          </section>
          
          <section id="skills" className="snap-start">
            <Skills />
          </section>
          
          <section id="contact" className="snap-start">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
