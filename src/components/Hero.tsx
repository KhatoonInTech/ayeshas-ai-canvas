
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-4xl font-bold text-white">
            AN
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Ayesha Noreen
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-purple-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            AI Engineer & Full Stack Developer
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center text-white/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span>Multan, Punjab, Pakistan</span>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Computer Engineer with 2+ years of experience in AI Engineering and Full Stack Development, 
          passionate about building innovative solutions that bridge the gap between artificial intelligence 
          and user experience.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://github.com/KhatoonInTech"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-200 hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/KhatoonInTech"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-200 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:ayeshanoreen092@gmail.com"
            className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-200 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-200 hover:scale-105"
          >
            Let's Connect
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
