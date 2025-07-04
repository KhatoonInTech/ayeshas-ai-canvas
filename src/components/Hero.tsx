
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';

interface HeroProps {
  mousePosition: { x: number; y: number };
}

const Hero = ({ mousePosition }: HeroProps) => {
  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) * 0.02,
    y: (mousePosition.y - window.innerHeight / 2) * 0.02,
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12"
            style={{
              transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
            }}
          >
            {/* Profile Image */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 flex items-center justify-center text-6xl font-black text-white relative overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 blur-xl opacity-30 animate-pulse"></div>
                <span className="relative z-10">AN</span>
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                className="text-sm text-purple-300 mb-2 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.div>

              <motion.h1 
                className="text-4xl lg:text-6xl font-black text-white mb-4 tracking-tight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Ayesha Noreen
              </motion.h1>

              <motion.h2
                className="text-xl lg:text-2xl text-purple-300 mb-6 font-medium"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                AI Engineer & Full Stack Developer
              </motion.h2>

              <motion.div
                className="flex items-center justify-center lg:justify-start text-white/70 mb-8 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                <span>Multan, Punjab, Pakistan</span>
              </motion.div>

              <motion.p
                className="text-white/80 mb-8 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Computer Engineer with 2+ years of experience in AI Engineering and Full Stack Development, 
                passionate about building innovative solutions that bridge AI and exceptional user experiences.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Info
                </motion.button>
              </motion.div>

              <motion.div
                className="flex justify-center lg:justify-start space-x-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { href: "https://linkedin.com/in/KhatoonInTech", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://github.com/KhatoonInTech", icon: Github, label: "GitHub" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
