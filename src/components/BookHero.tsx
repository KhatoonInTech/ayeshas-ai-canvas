
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
      </motion.div>
    </div>
  );
};

export default BookHero;
