
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
import MouseTrackingBackground from '../components/MouseTrackingBackground';

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showOtherSections, setShowOtherSections] = useState(false);

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

  const handleTearComplete = () => {
    setShowOtherSections(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 overflow-hidden" style={{ cursor: 'none' }}>
      <MouseTrackingBackground mousePosition={mousePosition} />
      <Background3D />
      <Navigation />
      
      <div 
        ref={scrollContainerRef}
        className="relative z-10 h-screen overflow-y-auto scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="snap-y snap-mandatory">
          <section id="hero" className="snap-start">
            <Hero mousePosition={mousePosition} onTearComplete={handleTearComplete} />
          </section>
          
          {showOtherSections && (
            <>
              <section id="about" className="snap-start min-h-screen flex items-center justify-center p-4">
                <motion.div 
                  className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <About />
                </motion.div>
              </section>
              
              <section id="experience" className="snap-start min-h-screen flex items-center justify-center p-4">
                <motion.div 
                  className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Experience />
                </motion.div>
              </section>
              
              <section id="projects" className="snap-start min-h-screen flex items-center justify-center p-4">
                <motion.div 
                  className="w-full max-w-7xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Projects />
                </motion.div>
              </section>
              
              <section id="skills" className="snap-start min-h-screen flex items-center justify-center p-4">
                <motion.div 
                  className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Skills />
                </motion.div>
              </section>
              
              <section id="contact" className="snap-start min-h-screen flex items-center justify-center p-4">
                <motion.div 
                  className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Contact />
                </motion.div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
