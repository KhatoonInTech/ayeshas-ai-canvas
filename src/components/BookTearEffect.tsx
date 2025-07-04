
import React from 'react';
import { motion } from 'framer-motion';

interface BookTearEffectProps {
  isTearing: boolean;
}

const BookTearEffect = ({ isTearing }: BookTearEffectProps) => {
  if (!isTearing) return null;

  return (
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
  );
};

export default BookTearEffect;
