import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMessageSquare, FiHeart, FiSend } = FiIcons;

const Guestbook = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: "Sarah & Mike",
      message: "Wishing you both a lifetime of love as beautiful as the northern lights! Can't wait to celebrate with you.",
      timestamp: "2 days ago"
    },
    {
      id: 2,
      name: "Grandma Rose",
      message: "Elena, you've found your perfect match! Marcus, welcome to our family. May your love story be as magical as a winter fairy tale.",
      timestamp: "1 week ago"
    },
    {
      id: 3,
      name: "The Johnson Family",
      message: "We're so excited to witness your special day! Your love for each other shines brighter than any aurora.",
      timestamp: "2 weeks ago"
    }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newWish = {
      id: wishes.length + 1,
      name: data.name,
      message: data.message,
      timestamp: "just now"
    };
    
    setWishes([newWish, ...wishes]);
    setIsSubmitting(false);
    reset();
  };

  return (
    <section 
      id="guestbook"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow mb-4">
            Leave a Wish in the Winter Air
          </h2>
          <p className="text-lg font-sans font-light text-aurora-blue dark:text-aurora-green max-w-2xl mx-auto">
            Share your love, blessings, and excitement for our magical winter celebration
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-aurora-blue to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wish Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <div className="frosted-glass rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow mb-6">
                Share Your Wishes
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SafeIcon icon={FiUser} className="h-5 w-5 text-aurora-blue dark:text-aurora-green" />
                    </div>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-aurora-navy/50 border border-aurora-blue/30 dark:border-aurora-green/30 rounded-lg focus:ring-2 focus:ring-aurora-blue dark:focus:ring-aurora-green focus:border-transparent transition-all duration-300 text-aurora-navy dark:text-aurora-ice placeholder-aurora-blue/60 dark:placeholder-aurora-green/60"
                      placeholder="Your name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                    Your Winter Wish *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <SafeIcon icon={FiMessageSquare} className="h-5 w-5 text-aurora-blue dark:text-aurora-green" />
                    </div>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-aurora-navy/50 border border-aurora-blue/30 dark:border-aurora-green/30 rounded-lg focus:ring-2 focus:ring-aurora-blue dark:focus:ring-aurora-green focus:border-transparent transition-all duration-300 text-aurora-navy dark:text-aurora-ice placeholder-aurora-blue/60 dark:placeholder-aurora-green/60 resize-none"
                      placeholder="Share your wishes, blessings, or favorite memory..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-aurora-blue dark:bg-aurora-green hover:bg-aurora-blue/80 dark:hover:bg-aurora-green/80 text-white font-sans font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed aurora-glow"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending your wish...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <SafeIcon icon={FiSend} className="w-5 h-5" />
                      <span>Send Winter Wish</span>
                    </div>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Wishes Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="frosted-glass rounded-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow mb-6">
                Wishes from Loved Ones
              </h3>
              
              <div className="space-y-6 max-h-96 overflow-y-auto">
                {wishes.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/30 dark:bg-aurora-navy/30 rounded-lg p-6 border border-aurora-blue/20 dark:border-aurora-green/20"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-aurora-blue dark:bg-aurora-green rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiHeart} className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                            {wish.name}
                          </h4>
                          <span className="text-xs text-aurora-blue dark:text-aurora-green">
                            {wish.timestamp}
                          </span>
                        </div>
                        
                        <p className="text-sm font-sans font-light text-aurora-navy dark:text-aurora-lavender leading-relaxed">
                          {wish.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center space-x-6 mt-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 text-aurora-blue dark:text-aurora-green opacity-60"
          >
            ❄
          </motion.div>
          <div className="w-3 h-3 bg-aurora-blue dark:bg-aurora-green rounded-full opacity-80" />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 text-aurora-blue dark:text-aurora-green opacity-60"
          >
            ❄
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guestbook;