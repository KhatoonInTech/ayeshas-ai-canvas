
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Reviews from '../components/Reviews';
import HappyClients from '../components/HappyClients';
import Navigation from '../components/Navigation';
import Background3D from '../components/Background3D';
import MouseTrackingBackground from '../components/MouseTrackingBackground';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showOtherSections, setShowOtherSections] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
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
      
      <div className="relative z-10">
        <section id="hero" className="min-h-screen">
          <Hero mousePosition={mousePosition} onTearComplete={handleTearComplete} />
        </section>
        
        {/* About Section */}
        <motion.section 
          id="about" 
          className={`min-h-screen flex items-center justify-center p-4 transition-all duration-1000 ${
            showOtherSections ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={showOtherSections ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
            <About />
          </div>
        </motion.section>
        
        {/* Experience Section */}
        <section 
          id="experience" 
          className={`min-h-screen flex items-center justify-center p-4 transition-opacity duration-1000 ${
            showOtherSections ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <motion.div 
            className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={showOtherSections ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <Experience />
          </motion.div>
        </section>

        {/* Happy Clients Section */}
        <section 
          id="clients" 
          className={`min-h-screen flex items-center justify-center p-4 transition-opacity duration-1000 ${
            showOtherSections ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <motion.div 
            className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={showOtherSections ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <HappyClients />
          </motion.div>
        </section>
        
        {/* Projects Section */}
        <section 
          id="projects" 
          className={`min-h-screen flex items-center justify-center p-4 transition-opacity duration-1000 ${
            showOtherSections ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <motion.div 
            className="w-full max-w-7xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={showOtherSections ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.div>
        </section>
        
        {/* Skills Section */}
        <section 
          id="skills" 
          className={`min-h-screen flex items-center justify-center p-4 transition-opacity duration-1000 ${
            showOtherSections ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <motion.div 
            className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={showOtherSections ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <Skills />
          </motion.div>
        </section>

        {/* Reviews Section - Moved below Skills */}
        <section 
          id="reviews" 
          className={`min-h-screen flex items-center justify-center p-4 transition-opacity duration-1000 ${
            showOtherSections ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <motion.div 
            className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={showOtherSections ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <Reviews />
          </motion.div>
        </section>
        
        {/* Contact Section */}
        <section 
          id="contact" 
          className={`min-h-screen flex items-center justify-center p-4 transition-opacity duration-1000 ${
            showOtherSections ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <motion.div 
            className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={showOtherSections ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Index;
