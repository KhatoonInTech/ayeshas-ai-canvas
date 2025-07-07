
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Zap, Globe, Settings, Wrench, Cpu, Layers, Cloud, Monitor, Users } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Skills = () => {
  const { resolvedTheme } = useTheme();
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python 3.0', 'C/C++', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Frameworks',
      icon: Layers,
      skills: ['LangChain', 'LlamaIndex', 'Django', 'Flask', 'Streamlit', 'Laravel', 'NodeJs', 'Express JS'],
      color: 'from-green-600 to-blue-600'
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: ['Git/GitHub', 'VS Studio', 'PyCharm', 'DevC++', 'Anaconda', 'Jupyter', 'Google CoLab'],
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'Core Expertise',
      icon: Zap,
      skills: ['Full-stack Development', 'AI Engineering', 'Machine Learning', 'Deep Learning', 'RAG Systems'],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Passion', 'Resilience', 'Visionary', 'Leadership', 'Community Building'],
      color: 'from-teal-600 to-green-600'
    }
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
          resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
        }`}>Skills & Expertise</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        <p className={`max-w-3xl mx-auto transition-colors duration-500 ${
          resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
        }`}>
          A comprehensive skill set spanning AI, machine learning, full-stack development, 
          and modern technologies that power innovative solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className={`backdrop-blur-sm border rounded-xl p-6 h-full transition-all duration-200 hover:scale-105 ${
              resolvedTheme === 'light'
                ? 'bg-white/70 border-gray-200/50 hover:bg-white/80'
                : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
                resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className={`text-sm transition-colors duration-500 ${
                      resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
                    }`}>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className={`border rounded-xl p-8 transition-colors duration-500 ${
          resolvedTheme === 'light'
            ? 'bg-purple-100/50 border-purple-200/50'
            : 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2 transition-colors duration-500 ${
            resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>
            <Database className="w-6 h-6" />
            Recent Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center flex items-center gap-3">
              <Cloud className={`w-8 h-8 transition-colors duration-500 ${
                resolvedTheme === 'light' ? 'text-purple-600' : 'text-purple-300'
              }`} />
              <div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${
                  resolvedTheme === 'light' ? 'text-purple-700' : 'text-purple-300'
                }`}>AWS AI/ML Scholarship</h4>
                <p className={`text-sm transition-colors duration-500 ${
                  resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
                }`}>AI Programming with Python & AWS Fundamentals</p>
              </div>
            </div>
            <div className="text-center flex items-center gap-3">
              <Monitor className={`w-8 h-8 transition-colors duration-500 ${
                resolvedTheme === 'light' ? 'text-purple-600' : 'text-purple-300'
              }`} />
              <div>
                <h4 className={`text-lg font-semibold mb-2 transition-colors duration-500 ${
                  resolvedTheme === 'light' ? 'text-purple-700' : 'text-purple-300'
                }`}>Google Gemini API Expert</h4>
                <p className={`text-sm transition-colors duration-500 ${
                  resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
                }`}>Certified by Udacity</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
