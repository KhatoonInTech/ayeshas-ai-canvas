
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const BookZipElement = () => {
  return (
    <motion.div 
      className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-20"
      animate={{ 
        y: [0, 10, 0],
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full shadow-lg border-2 border-yellow-300 cursor-pointer hover:scale-105 transition-transform">
        <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
          <ChevronDown className="w-4 h-4 animate-bounce" />
          <span>Drag me down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </motion.div>
  );
};

export default BookZipElement;
