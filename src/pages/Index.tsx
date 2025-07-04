
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Background3D from '../components/Background3D';
import CursorTracker from '../components/CursorTracker';
import ElectricBackground from '../components/ElectricBackground';

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop += e.deltaY;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 overflow-hidden">
      <ElectricBackground mousePosition={mousePosition} />
      <Background3D />
      <CursorTracker mousePosition={mousePosition} />
      <Navigation />
      
      <div 
        ref={scrollContainerRef}
        className="relative z-10 h-screen overflow-y-auto scroll-smooth cursor-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="snap-y snap-mandatory">
          <section id="hero" className="snap-start">
            <Hero mousePosition={mousePosition} />
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
