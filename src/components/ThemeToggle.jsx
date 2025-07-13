import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-20 right-6 z-40"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className="frosted-glass rounded-full p-3 hover:shadow-lg transition-all duration-300 group"
        title={theme === 'snowlight' ? 'Switch to Starlight' : 'Switch to Snowlight'}
      >
        <div className="relative w-6 h-6">
          <motion.div
            initial={false}
            animate={{ 
              rotate: theme === 'snowlight' ? 0 : 180,
              opacity: theme === 'snowlight' ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <SafeIcon 
              icon={FiSun} 
              className="w-6 h-6 text-aurora-blue group-hover:text-aurora-navy transition-colors duration-300" 
            />
          </motion.div>
          
          <motion.div
            initial={false}
            animate={{ 
              rotate: theme === 'starlight' ? 0 : -180,
              opacity: theme === 'starlight' ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <SafeIcon 
              icon={FiMoon} 
              className="w-6 h-6 text-aurora-green group-hover:text-aurora-ice transition-colors duration-300" 
            />
          </motion.div>
        </div>
      </motion.button>
      
      {/* Theme Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center mt-2"
      >
        <span className="text-xs font-sans font-medium text-aurora-navy dark:text-aurora-ice">
          {theme === 'snowlight' ? 'Snowlight' : 'Starlight'}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;