
import React from 'react';
import { useTheme } from './ThemeProvider';
import BookHero from './BookHero';

interface HeroProps {
  mousePosition: {
    x: number;
    y: number;
  };
  onTearComplete?: () => void;
}

const Hero = ({ mousePosition, onTearComplete = () => {} }: HeroProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      resolvedTheme === 'light' 
        ? 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50' 
        : 'bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950'
    }`}>
      <BookHero 
        mousePosition={mousePosition} 
        onTearComplete={onTearComplete}
      />
    </div>
  );
};

export default Hero;
