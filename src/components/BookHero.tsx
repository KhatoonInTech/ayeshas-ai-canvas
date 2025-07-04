
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin, MapPin, Download, ChevronDown } from 'lucide-react';

interface BookHeroProps {
  mousePosition: {
    x: number;
    y: number;
  };
  onTearComplete: () => void;
}

const BookHero = ({ mousePosition, onTearComplete }: BookHeroProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isTearing, setIsTearing] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      if (currentScrollY > 50 && !isTearing) {
        setIsTearing(true);
        startTearAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTearing]);

  const startTearAnimation = async () => {
    await controls.start({
      rotateX: 45,
      y: -200,
      scale: 0.8,
      transition: { duration: 1.2, ease: "easeInOut" }
    });
    
    setTimeout(() => {
      onTearComplete();
    }, 1200);
  };

  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) * 0.01,
    y: (mousePosition.y - window.innerHeight / 2) * 0.01
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <motion.div 
        className="relative"
        animate={controls}
        style={{
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`
        }}
      >
        {/* Book Container */}
        <div className="relative w-[900px] h-[600px] perspective-1000">
          {/* Book Pages */}
          <div className="relative w-full h-full flex bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg shadow-2xl overflow-hidden">
            
            {/* Left Page - Profile Picture */}
            <div className="w-1/2 h-full relative bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center border-r-2 border-amber-200">
              {/* Paper texture overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fill-opacity=\"0.03\"%3E%3Cpolygon fill=\"%23000\" points=\"50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40\"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              {/* Profile Section */}
              <motion.div 
                className="relative z-10 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 flex items-center justify-center text-6xl font-black text-white relative overflow-hidden mb-6 shadow-xl">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 blur-xl opacity-30 animate-pulse"></div>
                  <span className="relative z-10">AN</span>
                </div>
                
                <div className="flex justify-center space-x-4">
                  {[
                    { href: "https://linkedin.com/in/KhatoonInTech", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://github.com/KhatoonInTech", icon: Github, label: "GitHub" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                      whileHover={{ y: -2 }}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Page - Introduction Text */}
            <div className="w-1/2 h-full relative bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center p-12">
              {/* Paper texture overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fill-opacity=\"0.03\"%3E%3Cpolygon fill=\"%23000\" points=\"50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40\"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              {/* Content */}
              <motion.div 
                className="relative z-10 text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="text-sm text-amber-700 mb-4 font-medium tracking-wider">
                  Hello, I'm
                </div>

                <h1 className="text-5xl font-black text-gray-800 mb-6 tracking-tight leading-tight">
                  AYESHA<br />NOREEN
                </h1>

                <h2 className="text-xl text-purple-700 mb-6 font-semibold">
                  AI Engineer & Full Stack Developer
                </h2>

                <div className="flex items-center text-gray-600 mb-6 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Multan, Punjab, Pakistan</span>
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed text-sm max-w-sm">
                  Passionate about creating intelligent solutions that bridge the gap between 
                  artificial intelligence and user experience. Specializing in full-stack 
                  development with a focus on AI integration.
                </p>

                <motion.button 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.button>
              </motion.div>
            </div>

            {/* Book Binding/Spine */}
            <div className="absolute left-1/2 top-0 w-4 h-full bg-gradient-to-b from-amber-800 to-amber-900 transform -translate-x-1/2 shadow-lg">
              <div className="w-full h-full bg-gradient-to-r from-amber-700 to-amber-600 opacity-50"></div>
            </div>
          </div>

          {/* Zip Element */}
          <motion.div 
            className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-20"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full shadow-lg border-2 border-yellow-300 cursor-pointer hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                <ChevronDown className="w-4 h-4 animate-bounce" />
                <span>Drag me down</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </div>
            </div>
          </motion.div>

          {/* Tear Effect Overlay */}
          {isTearing && (
            <motion.div
              className="absolute inset-0 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full bg-gradient-to-b from-transparent via-amber-200 to-amber-400 opacity-80">
                {/* Torn paper effect */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-600 to-transparent">
                  <svg 
                    className="absolute bottom-0 w-full h-16" 
                    viewBox="0 0 1200 100" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0,50 C150,10 350,90 600,50 C850,10 1050,90 1200,50 L1200,100 L0,100 Z" 
                      fill="currentColor" 
                      className="text-amber-600"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BookHero;
