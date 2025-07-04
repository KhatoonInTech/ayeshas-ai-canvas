
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Download } from 'lucide-react';

const BookContent = () => {
  return (
    <div className="w-1/2 h-full relative bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center p-12">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fill-opacity=\"0.03\"%3E%3Cpolygon fill=\"%23000\" points=\"50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40\"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="text-sm text-amber-700 mb-4 font-medium tracking-wider">
          Hello, I'm
        </div>

        <h1 className="text-5xl font-black text-gray-800 mb-6 tracking-tight leading-tight">
          AYESHA<br />NOREEN
        </h1>

        <h2 className="text-xl text-purple-700 mb-6 font-semibold">
          AI Engineer & Full Stack Developer
        </h2>

        <div className="flex items-center text-gray-600 mb-6 text-sm">
          <MapPin className="w-4 h-4 mr-2 text-purple-500" />
          <span>Multan, Punjab, Pakistan</span>
        </div>

        <p className="text-gray-700 mb-8 leading-relaxed text-sm max-w-sm">
          Passionate about creating intelligent solutions that bridge the gap between 
          artificial intelligence and user experience. Specializing in full-stack 
          development with a focus on AI integration.
        </p>

        <motion.button 
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-4 h-4" />
          Download CV
        </motion.button>
      </motion.div>
    </div>
  );
};

export default BookContent;
