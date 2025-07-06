
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
      
      // Trigger curtain animation based on scroll - made more sensitive
      if (currentScrollY > 50 && scrollDirection === 'down' && !isAnimating) {
        startCurtainFoldAnimation();
      } else if (currentScrollY < 30 && scrollDirection === 'up' && !isAnimating) {
        startCurtainUnfoldAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDirection, isAnimating]);

  const startCurtainFoldAnimation = async () => {
    setIsAnimating(true);
    
    // More dramatic fold animation with rotation and scale
    await controls.start({
      scaleY: 0.05,
      scaleX: 0.8,
      y: -400,
      rotateX: -60,
      rotateZ: -5,
      opacity: 0.3,
      transformOrigin: "center top",
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "tween"
      }
    });
    
    setTimeout(() => {
      onTearComplete();
      setIsAnimating(false);
    }, 800);
  };

  const startCurtainUnfoldAnimation = async () => {
    setIsAnimating(true);
    
    // Dramatic unfold animation
    await controls.start({
      scaleY: 1,
      scaleX: 1,
      y: 0,
      rotateX: 0,
      rotateZ: 0,
      opacity: 1,
      transformOrigin: "center top",
      transition: { 
        duration: 1.0, 
        ease: [0.165, 0.84, 0.44, 1],
        type: "tween"
      }
    });
    
    setIsAnimating(false);
  };

  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) * 0.02,
    y: (mousePosition.y - window.innerHeight / 2) * 0.02
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <motion.div 
        className="relative"
        animate={controls}
        initial={{ scale: 1, y: 0, rotateX: 0, rotateZ: 0, opacity: 1 }}
        style={{
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`
        }}
      >
        {/* Book Container */}
        <div className="relative w-[900px] h-[600px] perspective-1000">
          {/* Book Pages with enhanced shadow and glow */}
          <div className="relative w-full h-full flex bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg shadow-2xl overflow-hidden border-4 border-amber-200/50">
            
            <BookProfile />
            <BookContent />

            {/* Enhanced Book Binding/Spine */}
            <div className="absolute left-1/2 top-0 w-6 h-full bg-gradient-to-b from-amber-800 to-amber-900 transform -translate-x-1/2 shadow-2xl border-l-2 border-r-2 border-amber-600">
              <div className="w-full h-full bg-gradient-to-r from-amber-700 to-amber-600 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent"></div>
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
