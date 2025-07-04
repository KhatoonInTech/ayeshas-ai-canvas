
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Brain, Search, MessageSquare, FileText, Smartphone, Globe, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Projects = () => {
  const projectsByCategory = {
    'agentic-ai': [
      {
        title: 'DermaAI',
        description: 'Agentic AI & Automation System for dermatological diagnosis with search engine and chatbot capabilities.',
        icon: Brain,
        features: ['Langchain', 'FastAPI', 'Google Gemini API', 'Firebase', 'OCR'],
        impact: 'Advanced skin diagnosis through AI analysis of images, videos & lab reports',
        link: '#',
        color: 'from-purple-600 to-pink-600'
      },
      {
        title: 'YouTune',
        description: 'AI-powered YouTube automation system for content creation with one-click publishing.',
        icon: Zap,
        features: ['Langchain', 'YouTube Data API', 'Supabase', 'Google Cloud Run'],
        impact: 'Saves 90% time and 75% cost, enhances efficiency by 80%',
        link: '#',
        color: 'from-red-600 to-orange-600'
      },
      {
        title: 'WhatsApp Agent',
        description: 'AI automation system for managing emails, calendar events, and real-time web searches.',
        icon: Smartphone,
        features: ['n8n', 'OpenAI', 'WhatsApp API', 'Custom Knowledge Base'],
        impact: 'Saves 80% time and 85% cost, enhances efficiency by 65%',
        link: '#',
        color: 'from-blue-600 to-purple-600'
      }
    ],
    'machine-learning': [
      {
        title: 'Apollo 1-1',
        description: 'Retrieval Augmented Generation (RAG) model for NASA Apollo 11 Mission analysis.',
        icon: Search,
        features: ['Google Gemini API', 'ChromaDB', 'OCR', 'Document Analysis'],
        impact: 'Advanced analysis of NASA Apollo 11 documents, images & videos',
        link: '#',
        color: 'from-indigo-600 to-purple-600'
      },
      {
        title: 'NewsWire Generator',
        description: 'AI-powered news analyzer and classifier using advanced neural networks.',
        icon: Globe,
        features: ['RNN', 'DNN', 'BERT Transformers', '11,228 Reuters Dataset'],
        impact: 'Robust analysis and generation of news content',
        link: '#',
        color: 'from-teal-600 to-blue-600'
      }
    ],
    'deep-learning': [
      {
        title: 'Peaker Chatter',
        description: 'Themed chatbot inspired by "Peaky Blinders" with hate-speech detection.',
        icon: MessageSquare,
        features: ['Python', 'NLP', 'Content Moderation', 'Character-driven AI'],
        impact: 'Immersive chat experience with effective content filtering',
        link: '#',
        color: 'from-yellow-600 to-red-600'
      }
    ],
    'fullstack': [
      {
        title: 'SynopSync',
        description: 'Medical manuscript writing automation system for researchers and medical professionals.',
        icon: FileText,
        features: ['Langchain', 'FastAPI', 'Google Gemini API Integration'],
        impact: 'Saves 75% time and 90% cost, enhances efficiency by 85%',
        link: '#',
        color: 'from-green-600 to-blue-600'
      }
    ]
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
        <p className="text-white/80 max-w-3xl mx-auto">
          A showcase of innovative AI-powered solutions that automate processes, 
          enhance efficiency, and solve real-world problems across various domains.
        </p>
      </motion.div>

      <Tabs defaultValue="agentic-ai" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/10 border border-white/20 rounded-xl p-1 mb-8">
          <TabsTrigger 
            value="agentic-ai" 
            className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg transition-all"
          >
            Agentic AI & Automation
          </TabsTrigger>
          <TabsTrigger 
            value="machine-learning" 
            className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg transition-all"
          >
            Machine Learning
          </TabsTrigger>
          <TabsTrigger 
            value="deep-learning" 
            className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg transition-all"
          >
            Deep Learning
          </TabsTrigger>
          <TabsTrigger 
            value="fullstack" 
            className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg transition-all"
          >
            Full Stack Development
          </TabsTrigger>
        </TabsList>

        {Object.entries(projectsByCategory).map(([category, projects]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-all duration-200 hover:scale-105">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, fIndex) => (
                          <span
                            key={fIndex}
                            className="bg-white/10 text-white/80 px-2 py-1 rounded-md text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-300 mb-2">Impact:</h4>
                      <p className="text-white/70 text-sm">{project.impact}</p>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.link}
                        className={`flex items-center space-x-2 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/KhatoonInTech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
        >
          <Github className="w-5 h-5" />
          <span>View All Projects on GitHub</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
