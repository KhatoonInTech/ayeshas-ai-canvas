
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const clients = [
  { id: 1, name: "TechCorp", initials: "TC" },
  { id: 2, name: "StartupHub", initials: "SH" },
  { id: 3, name: "InnovateLab", initials: "IL" },
  { id: 4, name: "DataFlow", initials: "DF" },
  { id: 5, name: "CloudSync", initials: "CS" },
  { id: 6, name: "AI Solutions", initials: "AS" }
];

const HappyClients = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className={`text-4xl font-bold mb-4 transition-colors duration-500 ${
          resolvedTheme === 'light' ? 'text-gray-800' : 'text-white'
        }`}>
          Happy Clients
        </h2>
        <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
          resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/70'
        }`}>
          Trusted by innovative companies worldwide to deliver exceptional AI and full-stack solutions.
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{
            x: [0, -1920]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* First set of logos */}
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-lg">{client.initials}</span>
            </motion.div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {clients.map((client) => (
            <motion.div
              key={`${client.id}-duplicate`}
              className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-lg">{client.initials}</span>
            </motion.div>
          ))}

          {/* Third set for extra smooth looping */}
          {clients.map((client) => (
            <motion.div
              key={`${client.id}-triple`}
              className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-lg">{client.initials}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className={`transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/70'
            }`}>
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">25+</div>
            <div className={`transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/70'
            }`}>
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
            <div className={`transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/70'
            }`}>
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
            <div className={`transition-colors duration-500 ${
              resolvedTheme === 'light' ? 'text-gray-600' : 'text-white/70'
            }`}>
              Client Satisfaction
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HappyClients;
