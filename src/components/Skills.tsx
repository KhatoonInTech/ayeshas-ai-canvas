
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Zap, Globe, Settings } from 'lucide-react';

const Skills = () => {
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
      icon: Settings,
      skills: ['LangChain', 'LlamaIndex', 'Django', 'Flask', 'Streamlit', 'Laravel', 'NodeJs', 'Express JS'],
      color: 'from-green-600 to-blue-600'
    },
    {
      title: 'Developer Tools',
      icon: Settings,
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
      icon: Globe,
      skills: ['Passion', 'Resilience', 'Visionary', 'Leadership', 'Community Building'],
      color: 'from-teal-600 to-green-600'
    }
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            A comprehensive skill set spanning AI, machine learning, full-stack development, 
            and modern technologies that power innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-all duration-200 hover:scale-105">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-white/80 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Recent Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">AWS AI/ML Scholarship</h4>
                <p className="text-white/80 text-sm">AI Programming with Python & AWS Fundamentals</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Google Gemini API Expert</h4>
                <p className="text-white/80 text-sm">Certified by Udacity</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
