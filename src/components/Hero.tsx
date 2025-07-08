
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
    <div className={`min-h-screen relative overflow-hidden transition-all duration-700 ${
      resolvedTheme === 'light' 
        ? 'bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100' 
        : 'bg-gradient-to-br from-slate-900 via-purple-900/30 to-indigo-900/40'
    }`}>
      {/* Animated gradient overlay for extra depth */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${
        resolvedTheme === 'light'
          ? 'bg-gradient-to-tr from-violet-200/30 via-transparent to-rose-200/30'
          : 'bg-gradient-to-tr from-violet-600/10 via-transparent to-rose-600/10'
      }`} />
      
      {/* Enhanced animated background pattern - now more visible in light theme */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${
        resolvedTheme === 'light' ? 'opacity-70' : 'opacity-10'
      }`}>
        <div className={`absolute top-10 left-10 w-72 h-72 rounded-full filter blur-xl animate-pulse ${
          resolvedTheme === 'light' 
            ? 'bg-purple-400/80 mix-blend-multiply' 
            : 'bg-purple-300 mix-blend-multiply'
        }`} />
        <div className={`absolute top-20 right-10 w-72 h-72 rounded-full filter blur-xl animate-pulse delay-1000 ${
          resolvedTheme === 'light' 
            ? 'bg-yellow-400/80 mix-blend-multiply' 
            : 'bg-yellow-300 mix-blend-multiply'
        }`} />
        <div className={`absolute bottom-10 left-20 w-72 h-72 rounded-full filter blur-xl animate-pulse delay-2000 ${
          resolvedTheme === 'light' 
            ? 'bg-pink-400/80 mix-blend-multiply' 
            : 'bg-pink-300 mix-blend-multiply'
        }`} />
      </div>
      
      <div className="relative z-10">
        <BookHero 
          mousePosition={mousePosition} 
          onTearComplete={onTearComplete}
        />
      </div>
    </div>
  );
};

export default Hero;
