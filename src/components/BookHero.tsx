
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import BookProfile from './BookProfile';
import BookContent from './BookContent';
import BookZipElement from './BookZipElement';
import BookTearEffect from './BookTearEffect';

interface BookHeroProps {
  mousePosition: {
    x: number;
    y: number;
  };
  onTearComplete: () => void;
}

const BookHero = ({ mousePosition, onTearComplete }: BookHeroProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTearing, setIsTearing] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollY(currentScrollY);
      setScrollDirection(direction);
      setLastScrollY(currentScrollY);
      
      if (currentScrollY > 50 && !isTearing) {
        setIsTearing(true);
        startTearAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isTearing]);

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

  // Calculate fold transformation based on scroll
  const foldIntensity = Math.min(scrollY / 300, 1); // Max fold at 300px scroll
  const foldTransform = scrollDirection === 'down' 
    ? `perspective(2000px) rotateX(${foldIntensity * 45}deg) translateY(${foldIntensity * -50}px)`
    : `perspective(2000px) rotateX(${foldIntensity * -15}deg) translateY(${foldIntensity * 20}px)`;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <motion.div 
        className="relative transition-transform duration-500 ease-out"
        animate={controls}
        style={{
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px) ${scrollY > 0 ? foldTransform : 'none'}`,
          transformOrigin: 'center bottom'
        }}
      >
        {/* Book Container */}
        <div className="relative w-[900px] h-[600px] perspective-1000">
          {/* Book Pages */}
          <div className="relative w-full h-full flex bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg shadow-2xl overflow-hidden">
            
            <BookProfile />
            <BookContent />

            {/* Book Binding/Spine */}
            <div className="absolute left-1/2 top-0 w-4 h-full bg-gradient-to-b from-amber-800 to-amber-900 transform -translate-x-1/2 shadow-lg">
              <div className="w-full h-full bg-gradient-to-r from-amber-700 to-amber-600 opacity-50"></div>
            </div>
          </div>

          <BookZipElement />
          <BookTearEffect isTearing={isTearing} />
        </div>

        {/* Newspaper fold crease effect */}
        {scrollY > 0 && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent ${50 - foldIntensity * 20}%, rgba(0,0,0,0.1) ${50}%, transparent ${50 + foldIntensity * 20}%)`,
              opacity: foldIntensity * 0.5
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default BookHero;
