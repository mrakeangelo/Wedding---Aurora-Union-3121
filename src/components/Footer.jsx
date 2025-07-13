import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiMail, FiPhone, FiInstagram, FiTwitter } = FiIcons;

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <footer 
      ref={ref}
      className="relative py-16 px-4 sm:px-6 lg:px-8 mt-20"
    >
      <div className="frosted-glass rounded-lg p-8 max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow">
              Elena & Marcus
            </h3>
            
            <p className="text-lg font-sans font-light text-aurora-navy dark:text-aurora-lavender max-w-2xl mx-auto">
              Thank you for being part of our winter love story. We can't wait to celebrate 
              with you under the dancing northern lights.
            </p>
            
            <div className="flex items-center justify-center space-x-2">
              <SafeIcon icon={FiHeart} className="w-5 h-5 text-aurora-blue dark:text-aurora-green" />
              <span className="text-aurora-blue dark:text-aurora-green font-sans font-medium">
                December 21, 2024
              </span>
              <SafeIcon icon={FiHeart} className="w-5 h-5 text-aurora-blue dark:text-aurora-green" />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-4">
              <h4 className="text-lg font-serif font-bold text-aurora-navy dark:text-aurora-ice">
                Contact Us
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <SafeIcon icon={FiMail} className="w-4 h-4 text-aurora-blue dark:text-aurora-green" />
                  <span className="text-aurora-navy dark:text-aurora-lavender font-sans font-light">
                    elena.marcus@aurorawedding.com
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <SafeIcon icon={FiPhone} className="w-4 h-4 text-aurora-blue dark:text-aurora-green" />
                  <span className="text-aurora-navy dark:text-aurora-lavender font-sans font-light">
                    (555) 123-LOVE
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-serif font-bold text-aurora-navy dark:text-aurora-ice">
                Follow Our Journey
              </h4>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-aurora-blue dark:bg-aurora-green rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <SafeIcon icon={FiInstagram} className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-aurora-blue dark:bg-aurora-green rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <SafeIcon icon={FiTwitter} className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 text-aurora-blue dark:text-aurora-green opacity-60"
            >
              ❄
            </motion.div>
            <div className="w-2 h-2 bg-aurora-blue dark:bg-aurora-green rounded-full opacity-80" />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 text-aurora-blue dark:text-aurora-green opacity-60"
            >
              ❄
            </motion.div>
          </motion.div>

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 border-t border-aurora-blue/20 dark:border-aurora-green/20"
          >
            <p className="text-sm font-sans font-light text-aurora-blue dark:text-aurora-green">
              Aurora Union – A Winter Wedding Template by Mrake Agency
            </p>
            <p className="text-xs font-sans font-light text-aurora-navy dark:text-aurora-lavender mt-2">
              Made with love and winter magic ❄ © 2024
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;