import React from 'react';
import { motion } from 'framer-motion';

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Primary Aurora Layer */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ 
          opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
          scale: [1, 1.1, 0.9, 1.05, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-aurora-blue/20 via-aurora-green/30 to-aurora-lavender/20 dark:from-aurora-blue/30 dark:via-aurora-green/40 dark:to-aurora-lavender/30"
      />
      
      {/* Secondary Aurora Layer */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ 
          opacity: [0.2, 0.5, 0.3, 0.4, 0.2],
          scale: [1.1, 0.9, 1.2, 1, 1.1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute inset-0 bg-gradient-to-tr from-aurora-green/15 via-aurora-blue/25 to-aurora-ice/20 dark:from-aurora-green/25 dark:via-aurora-blue/35 dark:to-aurora-ice/30"
      />
      
      {/* Tertiary Aurora Layer */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.2, 0.4, 0.1],
          scale: [0.9, 1.2, 1.1, 0.8, 0.9]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
        className="absolute inset-0 bg-gradient-to-bl from-aurora-lavender/10 via-aurora-ice/20 to-aurora-green/15 dark:from-aurora-lavender/20 dark:via-aurora-ice/30 dark:to-aurora-green/25"
      />
      
      {/* Shimmer Effect */}
      <motion.div
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-aurora-blue/10 to-transparent dark:via-aurora-green/15"
        style={{
          backgroundSize: '200% 200%'
        }}
      />
    </div>
  );
};

export default AuroraBackground;