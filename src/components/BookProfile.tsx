
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const BookProfile = () => {
  return (
    <div className="w-1/2 h-full relative bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center border-r-2 border-amber-200">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"%3E%3Cg fill-opacity=\"0.03\"%3E%3Cpolygon fill=\"%23000\" points=\"50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40\"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Profile Section */}
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 flex items-center justify-center text-6xl font-black text-white relative overflow-hidden mb-6 shadow-xl">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 blur-xl opacity-30 animate-pulse"></div>
          <span className="relative z-10">AN</span>
        </div>
        
        <div className="flex justify-center space-x-4">
          {[
            { href: "https://linkedin.com/in/KhatoonInTech", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/KhatoonInTech", icon: Github, label: "GitHub" }
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              whileHover={{ y: -2 }}
            >
              <social.icon className="w-6 h-6 text-white" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BookProfile;
