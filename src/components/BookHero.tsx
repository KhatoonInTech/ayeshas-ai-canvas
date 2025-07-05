
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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
      setScrollY(currentScrollY);
      
      // Trigger curtain animation based on scroll
      if (currentScrollY > 100 && scrollDirection === 'down' && !isAnimating) {
        startCurtainFoldAnimation();
      } else if (currentScrollY < 50 && scrollDirection === 'up' && !isAnimating) {
        startCurtainUnfoldAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDirection, isAnimating]);

  const startCurtainFoldAnimation = async () => {
    setIsAnimating(true);
    
    // Fold upward like horizontal curtains
    await controls.start({
      scaleY: 0.1,
      y: -300,
      rotateX: -45,
      transformOrigin: "center top",
      transition: { 
        duration: 1.0, 
        ease: "easeInOut",
        type: "spring",
        stiffness: 100
      }
    });
    
    setTimeout(() => {
      onTearComplete();
      setIsAnimating(false);
    }, 1000);
  };

  const startCurtainUnfoldAnimation = async () => {
    setIsAnimating(true);
    
    // Unfold downward like curtains falling
    await controls.start({
      scaleY: 1,
      y: 0,
      rotateX: 0,
      transformOrigin: "center top",
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        type: "spring",
        stiffness: 80
      }
    });
    
    setIsAnimating(false);
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
          <BookTearEffect isTearing={isAnimating} />
        </div>
      </motion.div>
    </div>
  );
};

export default BookHero;
