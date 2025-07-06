import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'reviews', label: 'Reviews' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [...navItems, { id: 'hero', label: 'Home' }].map(item => {
        const element = document.getElementById(item.id);
        if (!element) return null;
        
        const rect = element.getBoundingClientRect();
        return {
          id: item.id,
          element,
          top: rect.top,
          bottom: rect.bottom,
          height: rect.height,
          offsetTop: element.offsetTop,
          offsetHeight: element.offsetHeight
        };
      }).filter(Boolean);

      if (sections.length === 0) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.3;
      
      let currentSection = 'hero';
      let maxVisibility = 0;
      
      for (const section of sections) {
        const visibleTop = Math.max(0, -section.top);
        const visibleBottom = Math.min(section.height, windowHeight - section.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio = visibleHeight / Math.min(section.height, windowHeight);
        
        const inSectionBounds = scrollPosition >= section.offsetTop - threshold && 
                               scrollPosition < section.offsetTop + section.offsetHeight - threshold;
        
        if ((visibilityRatio > maxVisibility && visibilityRatio > 0.3) || 
            (inSectionBounds && visibilityRatio > 0.1)) {
          maxVisibility = visibilityRatio;
          currentSection = section.id;
        }
      }

      console.log('Current section detected:', currentSection, 'Scroll position:', scrollPosition);
      setActiveSection(currentSection);
    };

    setTimeout(handleScroll, 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('Attempting to scroll to section:', sectionId);
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80;
      console.log('Scrolling to offset:', offsetTop);
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    } else {
      console.error('Element not found:', sectionId);
    }
    
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className={`text-3xl font-bold cursor-pointer relative transition-colors duration-300 ${
              resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
            }`}
            style={{ 
              fontFamily: "'Dancing Script', cursive",
              textShadow: resolvedTheme === 'light' ? '0 2px 4px rgba(0,0,0,0.1)' : '0 2px 4px rgba(255,255,255,0.1)'
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <span className="relative">
              Ayesha Noreen
              <motion.div 
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${
                  resolvedTheme === 'light' 
                    ? 'from-purple-600 via-pink-600 to-purple-600' 
                    : 'from-purple-400 via-pink-400 to-purple-400'
                }`}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.div 
                className={`absolute -bottom-2 left-1/2 w-16 h-0.5 bg-gradient-to-r ${
                  resolvedTheme === 'light' 
                    ? 'from-transparent via-purple-600 to-transparent' 
                    : 'from-transparent via-purple-400 to-transparent'
                } transform -translate-x-1/2`}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-purple-400' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop CTA Button */}
          <motion.a
            href="mailto:ayeshanoreen092@gmail.com"
            className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-purple-400' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:ayeshanoreen092@gmail.com"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-center mt-4"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
