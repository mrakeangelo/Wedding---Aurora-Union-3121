import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurStory = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const storyChapters = [
    {
      title: "First Snow",
      date: "December 2019",
      content: "We met during the first snowfall of winter, both seeking shelter in the same coffee shop. Elena was reading by the window, and Marcus couldn't help but notice how the snowflakes seemed to dance around her like magic.",
      image: "https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?w=600&h=400&fit=crop"
    },
    {
      title: "Winter Walks",
      date: "January 2020",
      content: "Our first dates were long walks through snow-covered parks, sharing hot cocoa and discovering we both loved the quiet beauty of winter. We'd watch our breath create clouds in the cold air and dream of adventures together.",
      image: "https://images.unsplash.com/photo-1548777123-93d6c0d87cd5?w=600&h=400&fit=crop"
    },
    {
      title: "Northern Lights",
      date: "March 2023",
      content: "Marcus proposed during our trip to see the Northern Lights in Iceland. As the aurora danced across the sky in brilliant greens and blues, he got down on one knee in the snow, saying Elena was his own personal aurora.",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section 
      id="story"
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
            Our Winter Love Story
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-aurora-blue to-transparent mx-auto" />
        </motion.div>

        {/* Story Chapters */}
        <div className="space-y-20">
          {storyChapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 border-2 border-aurora-blue dark:border-aurora-green rotate-45 opacity-60" />
                    <span className="text-aurora-blue dark:text-aurora-green font-sans font-medium tracking-wide">
                      {chapter.date}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow">
                    {chapter.title}
                  </h3>
                  
                  <p className="text-lg font-sans font-light text-aurora-navy dark:text-aurora-lavender leading-relaxed">
                    {chapter.content}
                  </p>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 + 0.4 }}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="relative overflow-hidden rounded-lg frosted-glass p-4">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aurora-blue/20 to-transparent rounded-lg" />
                </div>
                
                {/* Decorative snowflake */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 text-4xl text-aurora-blue dark:text-aurora-green opacity-60"
                >
                  ❄
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex items-center justify-center space-x-6 mt-20"
        >
          <div className="w-12 h-12 border-2 border-aurora-blue dark:border-aurora-green rotate-45 opacity-40" />
          <div className="w-3 h-3 bg-aurora-blue dark:bg-aurora-green rounded-full opacity-60" />
          <div className="w-6 h-6 border-2 border-aurora-blue dark:border-aurora-green rotate-45 opacity-50" />
          <div className="w-3 h-3 bg-aurora-blue dark:bg-aurora-green rounded-full opacity-60" />
          <div className="w-12 h-12 border-2 border-aurora-blue dark:border-aurora-green rotate-45 opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;