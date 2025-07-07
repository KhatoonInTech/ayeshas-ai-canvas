
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Zap } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const About = () => {
  const { resolvedTheme } = useTheme();
  
  const stats = [
    { icon: GraduationCap, label: 'CGPA', value: '3.98/4.0' },
    { icon: Award, label: 'Years Experience', value: '2+' },
    { icon: Users, label: 'Community Members', value: '2000+' },
    { icon: Zap, label: 'Projects Completed', value: '8+' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
            resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              Passionate about AI & Innovation
            </h3>
            <p className={`mb-6 leading-relaxed transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
            }`}>
              Currently pursuing my Bachelor's in Computer Engineering at Bahauddin Zakariya University 
              with an outstanding CGPA of 3.98/4.0. I specialize in building AI-powered solutions that 
              solve real-world problems.
            </p>
            <p className={`mb-6 leading-relaxed transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
            }`}>
              My expertise spans across Agentic AI, Full Stack Development, Machine Learning, and Deep Learning. 
              I've worked on automation systems that save up to 90% of time and 85% of costs for businesses.
            </p>
            <p className={`mb-8 leading-relaxed transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
            }`}>
              Beyond coding, I'm passionate about building communities and sharing knowledge. I host over 
              2000+ computer science enthusiasts through my WhatsApp channels and serve as the AI Lead 
              at The Youth Matrix Multan.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Passionate', 'Resilient', 'Visionary'].map((trait) => (
                <span
                  key={trait}
                  className={`border px-4 py-2 rounded-full text-sm font-medium transition-colors duration-500 ${
                    resolvedTheme === 'light'
                      ? 'bg-purple-100/80 border-purple-300/50 text-purple-700'
                      : 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 text-purple-300'
                  }`}
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`backdrop-blur-sm border rounded-xl p-6 text-center transition-all duration-200 hover:scale-105 ${
                  resolvedTheme === 'light'
                    ? 'bg-white/70 border-gray-200/50 hover:bg-white/80'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <div className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                  resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
                }`}>{stat.value}</div>
                <div className={`text-sm transition-colors duration-500 ${
                  resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/70'
                }`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
            resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>Current Focus</h3>
          <p className={`max-w-3xl mx-auto transition-colors duration-500 ${
            resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
          }`}>
            Seeking full-time Software Engineering roles where I can leverage my expertise in AI, 
            automation, and full-stack development to create innovative solutions that make a real impact.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
