import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiClock, FiThermometer, FiGift } = FiIcons;

const WeddingInfo = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const infoCards = [
    {
      icon: FiMapPin,
      title: "Ceremony Location",
      content: "Aurora Lodge, Fairbanks, Alaska",
      details: "A magical venue surrounded by snow-covered pines with panoramic views of the northern sky",
      extra: "Shuttle service available from downtown hotels"
    },
    {
      icon: FiClock,
      title: "Timeline",
      content: "December 21, 2024 • 6:00 PM",
      details: "Ceremony at sunset, followed by dinner and dancing under the stars",
      extra: "Reception until midnight with aurora viewing breaks"
    },
    {
      icon: FiThermometer,
      title: "Weather & Attire",
      content: "Expected: -10°F to 5°F",
      details: "Formal winter attire recommended. Venue is heated, but bring warm coats for outdoor moments",
      extra: "Blankets and hand warmers provided"
    },
    {
      icon: FiGift,
      title: "Special Instructions",
      content: "Bring your sense of wonder",
      details: "Hot cocoa and warm cider will be served throughout the evening",
      extra: "Aurora viewing telescope available on the terrace"
    }
  ];

  return (
    <section 
      id="details"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow mb-4">
            Wedding Details
          </h2>
          <p className="text-lg font-sans font-light text-aurora-blue dark:text-aurora-green max-w-2xl mx-auto">
            Everything you need to know for our magical winter celebration
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-aurora-blue to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="frosted-glass rounded-lg p-8 hover:shadow-lg transition-all duration-300 float-animation"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-12 h-12 bg-aurora-blue dark:bg-aurora-green rounded-full flex items-center justify-center text-white"
                >
                  <SafeIcon icon={card.icon} className="w-6 h-6" />
                </motion.div>
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow">
                    {card.title}
                  </h3>
                  
                  <p className="text-lg font-sans font-medium text-aurora-blue dark:text-aurora-green">
                    {card.content}
                  </p>
                  
                  <p className="text-base font-sans font-light text-aurora-navy dark:text-aurora-lavender leading-relaxed">
                    {card.details}
                  </p>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    className="text-sm font-sans font-light text-aurora-blue dark:text-aurora-green italic"
                  >
                    {card.extra}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Notes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="frosted-glass rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow mb-4">
              A Note from Elena & Marcus
            </h3>
            <p className="text-lg font-sans font-light text-aurora-navy dark:text-aurora-lavender leading-relaxed">
              We chose to celebrate our union during the winter solstice, the longest night of the year, 
              because like the aurora borealis, our love illuminates even the darkest moments. 
              We can't wait to share this magical evening with you under the dancing northern lights.
            </p>
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="mt-6 text-3xl text-aurora-blue dark:text-aurora-green opacity-70"
            >
              ❄
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;