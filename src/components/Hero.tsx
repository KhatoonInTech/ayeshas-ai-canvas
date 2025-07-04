
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';

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
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
          style={{
            transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
          }}
        >
          {/* Premium Avatar with glow */}
          <motion.div
            className="w-40 h-40 mx-auto mb-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 flex items-center justify-center text-6xl font-black text-white relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 blur-xl opacity-50 animate-pulse"></div>
            <span className="relative z-10">AN</span>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-pulse" />
          </motion.div>
          
          {/* Premium Typography */}
          <motion.h1 
            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6 tracking-tighter leading-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.05em',
              textShadow: '0 0 40px rgba(139, 69, 255, 0.3)',
            }}
          >
            AYESHA
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4 tracking-wide"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            NOREEN
          </motion.h2>
          
          <motion.div 
            className="text-xl md:text-3xl text-purple-300 mb-3 font-medium tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '0.3em',
            }}
          >
            AI Engineer & Full Stack Developer
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center text-white/70 mb-12 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <MapPin className="w-5 h-5 mr-3 text-purple-400" />
            <span className="font-light tracking-wide">Multan, Punjab, Pakistan</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{
            lineHeight: '1.8',
            letterSpacing: '0.01em',
          }}
        >
          Computer Engineer with <span className="text-purple-300 font-semibold">2+ years</span> of experience in AI Engineering and Full Stack Development, 
          passionate about building <span className="text-pink-300 font-semibold">innovative solutions</span> that bridge the gap between artificial intelligence 
          and exceptional user experiences.
        </motion.div>

        <motion.div
          className="flex justify-center space-x-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { href: "https://github.com/KhatoonInTech", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/KhatoonInTech", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:ayeshanoreen092@gmail.com", icon: Mail, label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : "_blank"}
              rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
              className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all duration-300 border border-white/10 hover:border-purple-400/50 group backdrop-blur-sm"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <social.icon className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 border border-purple-500/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-white/5 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
