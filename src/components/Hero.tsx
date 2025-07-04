
import React from 'react';
import BookHero from './BookHero';

interface HeroProps {
  mousePosition: {
    x: number;
    y: number;
  };
  onTearComplete?: () => void;
}

const Hero = ({ mousePosition, onTearComplete = () => {} }: HeroProps) => {
  return (
    <BookHero 
      mousePosition={mousePosition} 
      onTearComplete={onTearComplete}
    />
  );
};

export default Hero;
