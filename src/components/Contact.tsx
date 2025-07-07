
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Award } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Contact = () => {
  const { resolvedTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ayeshanoreen092@gmail.com',
      link: 'mailto:ayeshanoreen092@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0334 60666637',
      link: 'tel:+923346066637'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Multan, Punjab, Pakistan',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/KhatoonInTech',
      color: resolvedTheme === 'light' ? 'hover:bg-gray-600 hover:text-white' : 'hover:bg-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/KhatoonInTech',
      color: resolvedTheme === 'light' ? 'hover:bg-blue-600 hover:text-white' : 'hover:bg-blue-600'
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
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500 ${
            resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className={`max-w-3xl mx-auto transition-colors duration-500 ${
            resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
          }`}>
            I'm currently seeking full-time Software Engineering roles. Let's discuss how my expertise 
            in AI, automation, and full-stack development can contribute to your team's success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-500 ${
                resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className={`text-sm transition-colors duration-500 ${
                        resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/70'
                      }`}>{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className={`font-medium transition-colors duration-500 ${
                            resolvedTheme === 'light' 
                              ? 'text-gray-800 hover:text-purple-600' 
                              : 'text-white hover:text-purple-300'
                          }`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className={`font-medium transition-colors duration-500 ${
                          resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
                        }`}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className={`text-lg font-semibold mb-4 transition-colors duration-500 ${
                resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                      resolvedTheme === 'light'
                        ? 'bg-gray-100 text-gray-700 hover:shadow-lg'
                        : 'bg-white/10 text-white'
                    } ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className={`border rounded-xl p-6 transition-colors duration-500 ${
              resolvedTheme === 'light'
                ? 'bg-purple-50/80 border-purple-200/50'
                : 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30'
            }`}>
              <div className="flex items-center space-x-3 mb-4">
                <Award className={`w-6 h-6 transition-colors duration-500 ${
                  resolvedTheme === 'light' ? 'text-purple-600' : 'text-purple-300'
                }`} />
                <h4 className={`text-lg font-semibold transition-colors duration-500 ${
                  resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
                }`}>Currently Available</h4>
              </div>
              <p className={`text-sm transition-colors duration-500 ${
                resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
              }`}>
                Actively seeking full-time Software Engineering opportunities to contribute to 
                innovative projects in AI, automation, and full-stack development.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`backdrop-blur-sm border rounded-xl p-8 transition-colors duration-500 ${
              resolvedTheme === 'light'
                ? 'bg-white/70 border-gray-200/50'
                : 'bg-white/5 border-white/10'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-500 ${
                resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border rounded-lg px-4 py-3 transition-colors duration-500 focus:outline-none focus:border-purple-500 ${
                      resolvedTheme === 'light'
                        ? 'bg-white/80 border-gray-300 text-gray-800 placeholder-gray-500'
                        : 'bg-white/10 border-white/20 text-white placeholder-white/50'
                    }`}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border rounded-lg px-4 py-3 transition-colors duration-500 focus:outline-none focus:border-purple-500 ${
                      resolvedTheme === 'light'
                        ? 'bg-white/80 border-gray-300 text-gray-800 placeholder-gray-500'
                        : 'bg-white/10 border-white/20 text-white placeholder-white/50'
                    }`}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                    resolvedTheme === 'light' ? 'text-gray-700' : 'text-white/80'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full border rounded-lg px-4 py-3 transition-colors duration-500 focus:outline-none focus:border-purple-500 resize-none ${
                      resolvedTheme === 'light'
                        ? 'bg-white/80 border-gray-300 text-gray-800 placeholder-gray-500'
                        : 'bg-white/10 border-white/20 text-white placeholder-white/50'
                    }`}
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className={`text-sm transition-colors duration-500 ${
            resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/60'
          }`}>
            © 2024 Ayesha Noreen. Built with React, Three.js, and lots of ☕
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
