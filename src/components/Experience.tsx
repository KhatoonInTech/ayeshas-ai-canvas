
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Experience = () => {
  const { resolvedTheme } = useTheme();
  
  const experiences = [
    {
      title: 'Agentic AI & Automation Engineer',
      company: 'DevRolin',
      location: 'Remote',
      period: 'February 2025 - Present',
      achievements: [
        'Worked on the Backend of a Youtube Automation Platform in Django (Python) & Langchain',
        'Documented the entire project for future developments',
        'Utilized Agentic AI approach to automate Youtube from ideation to content creation'
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Software Engineer',
      company: 'Confiniti Labs',
      location: 'Remote',
      period: 'August 2024 - October 2024',
      achievements: [
        'Created the Backend of a SAAS Cross Social Media Platform in NodeJs & ExpressJS',
        'Documented the entire project for future developments',
        'Integrated APIs of Social Media (Youtube, LinkedIn, Facebook, Threads, Instagram, TikTok) & Stripe'
      ],
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'ML/DL Engineer',
      company: 'ByteWise Ltd.',
      location: 'Remote',
      period: 'July 2024 - Sep 2024',
      achievements: [
        'Built various Machine Learning & Deep Learning Projects',
        'Achieved excellence with ML algorithms: Linear/Logistic Regression, Random Forest',
        'Implemented Deep Learning models: ANN, DNN, CNN, RNN & BERT Transformer'
      ],
      color: 'from-green-600 to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
            resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className={`max-w-2xl mx-auto transition-colors duration-500 ${
            resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
          }`}>
            My professional journey spans across AI Engineering, Full Stack Development, 
            and Machine Learning with a focus on automation and innovation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`backdrop-blur-sm border rounded-xl p-8 transition-all duration-200 ${
                resolvedTheme === 'light'
                  ? 'bg-white/70 border-gray-200/50 hover:bg-white/80'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                      resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
                    }`}>{exp.title}</h3>
                    <div className="flex items-center text-purple-300 mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:text-right">
                    <div className={`flex items-center mb-1 transition-colors duration-500 ${
                      resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/70'
                    }`}>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className={`flex items-center transition-colors duration-500 ${
                      resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/70'
                    }`}>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 mr-4 flex-shrink-0`}></div>
                      <p className={`leading-relaxed transition-colors duration-500 ${
                        resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
                      }`}>{achievement}</p>
                    </div>
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
          className="mt-16 text-center"
        >
          <div className={`border rounded-xl p-8 transition-colors duration-500 ${
            resolvedTheme === 'light'
              ? 'bg-purple-100/50 border-purple-200/50'
              : 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30'
          }`}>
            <h3 className={`text-xl font-bold mb-4 transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>Leadership & Community</h3>
            <p className={`mb-4 transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
            }`}>
              <strong>AI Lead</strong> at The Youth Matrix Multan
            </p>
            <p className={`transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
            }`}>
              Host 2000+ computer science enthusiasts through WhatsApp channels 
              "Cybernatic Society of Indelers" & "FoolsInTech"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
