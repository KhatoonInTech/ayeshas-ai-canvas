
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'system') {
      return Monitor;
    }
    return resolvedTheme === 'light' ? Sun : Moon;
  };

  const Icon = getIcon();

  return (
    <motion.button
      onClick={cycleTheme}
      className={`p-2 rounded-lg transition-all duration-200 ${
        resolvedTheme === 'light'
          ? 'bg-white/20 hover:bg-white/30 text-gray-800'
          : 'bg-white/10 hover:bg-white/20 text-white'
      } backdrop-blur-md border border-white/20`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Current: ${theme} theme`}
    >
      <Icon size={18} />
    </motion.button>
  );
};

export default ThemeToggle;
