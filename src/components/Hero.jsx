import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aurora-frost/20 to-aurora-white/30 dark:from-transparent dark:via-aurora-twilight/20 dark:to-aurora-navy/30" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Couple Names */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="text-6xl md:text-8xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow tracking-wider"
            >
              Elena & Marcus
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : {}}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="h-px bg-gradient-to-r from-transparent via-aurora-blue to-transparent mx-auto max-w-xs"
            />
          </div>

          {/* Wedding Date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl font-sans font-light text-aurora-navy dark:text-aurora-lavender tracking-widest">
              DECEMBER 21, 2024
            </p>
            <p className="text-lg md:text-xl font-sans font-light text-aurora-blue dark:text-aurora-green">
              Winter Solstice • 6:00 PM
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
            className="space-y-2"
          >
            <p className="text-lg md:text-xl font-serif font-medium text-aurora-navy dark:text-aurora-ice">
              Aurora Lodge
            </p>
            <p className="text-base md:text-lg font-sans font-light text-aurora-blue dark:text-aurora-green">
              Fairbanks, Alaska
            </p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, delay: 2.1 }}
            className="flex items-center justify-center space-x-4 mt-12"
          >
            <div className="w-8 h-8 border-2 border-aurora-blue dark:border-aurora-green rotate-45 opacity-60" />
            <div className="w-2 h-2 bg-aurora-blue dark:bg-aurora-green rounded-full opacity-80" />
            <div className="w-8 h-8 border-2 border-aurora-blue dark:border-aurora-green rotate-45 opacity-60" />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-aurora-blue dark:border-aurora-green rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-aurora-blue dark:bg-aurora-green rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative snowflakes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: [0, -100, -200],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-4 h-4 text-aurora-blue dark:text-aurora-green opacity-40"
          >
            ❄
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;