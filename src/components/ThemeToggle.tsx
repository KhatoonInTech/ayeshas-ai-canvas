
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  const currentTheme = themeOptions.find(option => option.value === theme);

  return (
    <Select value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'system')}>
      <SelectTrigger className="w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          {currentTheme && <currentTheme.icon size={16} />}
          <SelectValue />
        </motion.div>
      </SelectTrigger>
      <SelectContent className="bg-black/90 backdrop-blur-md border border-white/20 text-white">
        {themeOptions.map((option) => (
          <SelectItem 
            key={option.value} 
            value={option.value}
            className="hover:bg-white/10 focus:bg-white/10 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <option.icon size={16} />
              <span>{option.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeToggle;
