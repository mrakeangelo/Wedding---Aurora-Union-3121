import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiMessageSquare, FiCoffee, FiCheck } = FiIcons;

const RSVP = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('RSVP Data:', data);
    setIsSubmitted(true);
    setIsLoading(false);
    reset();
  };

  const drinkOptions = [
    { value: 'coffee', label: 'Hot Coffee', icon: '☕' },
    { value: 'cocoa', label: 'Hot Cocoa', icon: '🍫' },
    { value: 'tea', label: 'Herbal Tea', icon: '🍵' },
    { value: 'cider', label: 'Warm Cider', icon: '🍎' }
  ];

  if (isSubmitted) {
    return (
      <section 
        id="rsvp"
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="frosted-glass rounded-lg p-12 space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-20 h-20 bg-aurora-green rounded-full flex items-center justify-center mx-auto"
            >
              <SafeIcon icon={FiCheck} className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-3xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow">
              Thank You!
            </h2>
            
            <p className="text-lg font-sans font-light text-aurora-navy dark:text-aurora-lavender">
              We're so excited to celebrate with you under the northern lights! 
              You'll receive a confirmation email soon with more details.
            </p>
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-4xl text-aurora-blue dark:text-aurora-green opacity-70"
            >
              ❄
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="rsvp"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow mb-4">
            Join Our Celebration
          </h2>
          <p className="text-lg font-sans font-light text-aurora-blue dark:text-aurora-green">
            Let us know if you'll be joining us for this magical winter evening
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-aurora-blue to-transparent mx-auto mt-6" />
        </motion.div>

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="frosted-glass rounded-lg p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                Full Name *
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

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SafeIcon icon={FiMail} className="h-5 w-5 text-aurora-blue dark:text-aurora-green" />
                </div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-aurora-navy/50 border border-aurora-blue/30 dark:border-aurora-green/30 rounded-lg focus:ring-2 focus:ring-aurora-blue dark:focus:ring-aurora-green focus:border-transparent transition-all duration-300 text-aurora-navy dark:text-aurora-ice placeholder-aurora-blue/60 dark:placeholder-aurora-green/60"
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Attendance */}
            <div className="space-y-2">
              <label className="block text-sm font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    {...register('attendance', { required: 'Please select your attendance' })}
                    type="radio"
                    value="yes"
                    className="w-4 h-4 text-aurora-blue dark:text-aurora-green focus:ring-aurora-blue dark:focus:ring-aurora-green"
                  />
                  <span className="text-aurora-navy dark:text-aurora-ice">Yes, I'll be there! ❄</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    {...register('attendance', { required: 'Please select your attendance' })}
                    type="radio"
                    value="no"
                    className="w-4 h-4 text-aurora-blue dark:text-aurora-green focus:ring-aurora-blue dark:focus:ring-aurora-green"
                  />
                  <span className="text-aurora-navy dark:text-aurora-ice">Sorry, can't make it</span>
                </label>
              </div>
              {errors.attendance && (
                <p className="text-red-500 text-sm">{errors.attendance.message}</p>
              )}
            </div>

            {/* Guest Count */}
            <div className="space-y-2">
              <label className="block text-sm font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                Number of Guests
              </label>
              <select
                {...register('guestCount')}
                className="w-full px-4 py-3 bg-white/50 dark:bg-aurora-navy/50 border border-aurora-blue/30 dark:border-aurora-green/30 rounded-lg focus:ring-2 focus:ring-aurora-blue dark:focus:ring-aurora-green focus:border-transparent transition-all duration-300 text-aurora-navy dark:text-aurora-ice"
              >
                <option value="1">Just me</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
              </select>
            </div>

            {/* Warm Drink Preference */}
            <div className="space-y-2">
              <label className="block text-sm font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                Preferred Warm Drink
              </label>
              <div className="grid grid-cols-2 gap-3">
                {drinkOptions.map((drink) => (
                  <label key={drink.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      {...register('drinkPreference')}
                      type="radio"
                      value={drink.value}
                      className="w-4 h-4 text-aurora-blue dark:text-aurora-green focus:ring-aurora-blue dark:focus:ring-aurora-green"
                    />
                    <span className="text-aurora-navy dark:text-aurora-ice text-sm">
                      {drink.icon} {drink.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                Special Message (Optional)
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <SafeIcon icon={FiMessageSquare} className="h-5 w-5 text-aurora-blue dark:text-aurora-green" />
                </div>
                <textarea
                  {...register('message')}
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-aurora-navy/50 border border-aurora-blue/30 dark:border-aurora-green/30 rounded-lg focus:ring-2 focus:ring-aurora-blue dark:focus:ring-aurora-green focus:border-transparent transition-all duration-300 text-aurora-navy dark:text-aurora-ice placeholder-aurora-blue/60 dark:placeholder-aurora-green/60 resize-none"
                  placeholder="Share your excitement or any special requests..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-aurora-blue dark:bg-aurora-green hover:bg-aurora-blue/80 dark:hover:bg-aurora-green/80 text-white font-sans font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed aurora-glow"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : (
                'Send RSVP'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;