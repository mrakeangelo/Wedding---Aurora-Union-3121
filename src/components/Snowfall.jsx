import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes = [];
      const flakeCount = window.innerWidth < 768 ? 30 : 50;
      
      for (let i = 0; i < flakeCount; i++) {
        flakes.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.6 + 0.2,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 20
        });
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();
    
    const handleResize = () => {
      generateSnowflakes();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          initial={{ 
            x: flake.x,
            y: -20,
            opacity: 0,
            rotate: 0
          }}
          animate={{
            y: window.innerHeight + 20,
            opacity: [0, flake.opacity, flake.opacity, 0],
            rotate: [0, 360, 720],
            x: [
              flake.x,
              flake.x + Math.sin(Date.now() * 0.001) * 50,
              flake.x + Math.sin(Date.now() * 0.002) * 100
            ]
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute text-white dark:text-aurora-ice"
          style={{
            fontSize: `${flake.size}px`,
            left: 0,
            top: 0
          }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
};

export default Snowfall;