import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGift, FiExternalLink, FiHeart, FiHome, FiCamera, FiMapPin } = FiIcons;

const Registry = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const registryItems = [
    {
      icon: FiHome,
      title: "Cozy Home Essentials",
      description: "Help us create a warm haven for snowy evenings",
      items: ["Soft throw blankets", "Scented candles", "Warm bedding sets"],
      link: "#",
      gradient: "from-aurora-blue to-aurora-ice"
    },
    {
      icon: FiCamera,
      title: "Adventure & Memories",
      description: "Gear for capturing our winter adventures",
      items: ["Photography equipment", "Travel accessories", "Memory books"],
      link: "#",
      gradient: "from-aurora-green to-aurora-lavender"
    },
    {
      icon: FiMapPin,
      title: "Future Travels",
      description: "Experiences for our journey together",
      items: ["Honeymoon fund", "Travel vouchers", "Experience gifts"],
      link: "#",
      gradient: "from-aurora-lavender to-aurora-blue"
    },
    {
      icon: FiHeart,
      title: "Acts of Kindness",
      description: "Donations to causes close to our hearts",
      items: ["Wildlife conservation", "Local food banks", "Winter shelters"],
      link: "#",
      gradient: "from-aurora-ice to-aurora-green"
    }
  ];

  return (
    <section 
      id="registry"
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
            Winter Gift Registry
          </h2>
          <p className="text-lg font-sans font-light text-aurora-blue dark:text-aurora-green max-w-3xl mx-auto">
            Your presence is the greatest gift, but if you'd like to help us start our journey together, 
            here are some thoughtful suggestions
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-aurora-blue to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Registry Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {registryItems.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="frosted-glass rounded-lg p-8 h-full hover:shadow-lg transition-all duration-300 float-animation"
                   style={{ animationDelay: `${index * 0.3}s` }}>
                
                {/* Category Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center text-white shadow-lg`}
                  >
                    <SafeIcon icon={category.icon} className="w-7 h-7" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm font-sans font-light text-aurora-blue dark:text-aurora-green">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-3 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + itemIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-aurora-blue dark:bg-aurora-green rounded-full opacity-60" />
                      <span className="text-aurora-navy dark:text-aurora-lavender font-sans font-light">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* View Registry Button */}
                <motion.a
                  href={category.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-aurora-blue dark:bg-aurora-green hover:bg-aurora-blue/80 dark:hover:bg-aurora-green/80 text-white font-sans font-medium rounded-lg transition-all duration-300 group-hover:shadow-lg"
                >
                  <SafeIcon icon={FiGift} className="w-4 h-4" />
                  <span>View Registry</span>
                  <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="frosted-glass rounded-lg p-8 max-w-3xl mx-auto">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-3xl text-aurora-blue dark:text-aurora-green opacity-70 mb-4"
            >
              ❄
            </motion.div>
            
            <h3 className="text-2xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow mb-4">
              A Note from Our Hearts
            </h3>
            
            <p className="text-lg font-sans font-light text-aurora-navy dark:text-aurora-lavender leading-relaxed">
              The greatest gift is having you celebrate with us on our special day. 
              These registries are simply suggestions to help us build our life together, 
              but your love and presence mean more than any material gift ever could.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mt-6">
              <div className="w-6 h-6 border-2 border-aurora-blue dark:border-aurora-green rotate-45 opacity-60" />
              <div className="w-2 h-2 bg-aurora-blue dark:bg-aurora-green rounded-full opacity-80" />
              <div className="w-6 h-6 border-2 border-aurora-blue dark:border-aurora-green rotate-45 opacity-60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;