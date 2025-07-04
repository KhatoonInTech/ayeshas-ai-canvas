
import React from 'react';
import { motion } from 'framer-motion';

interface CursorTrackerProps {
  mousePosition: { x: number; y: number };
}

const CursorTracker = ({ mousePosition }: CursorTrackerProps) => {
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Trailing cursor */}
      <motion.div
        className="fixed w-1 h-1 bg-purple-400 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed w-20 h-20 rounded-full pointer-events-none z-30 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 69, 255, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      />
    </>
  );
};

export default CursorTracker;
