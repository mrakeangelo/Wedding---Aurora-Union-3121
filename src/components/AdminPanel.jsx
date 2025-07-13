import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock, FiEye, FiEyeOff, FiSave, FiSettings, FiUsers, FiMessageSquare, FiGift } = FiIcons;

const AdminPanel = ({ isAdmin, setIsAdmin, isPreview, setIsPreview }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onLogin = (data) => {
    // Simple password check - in production, use proper authentication
    if (data.password === 'aurora2024') {
      setIsAdmin(true);
      setActiveTab('dashboard');
    } else {
      alert('Invalid password');
    }
  };

  const adminTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: FiSettings },
    { id: 'rsvps', label: 'RSVPs', icon: FiUsers },
    { id: 'guestbook', label: 'Guestbook', icon: FiMessageSquare },
    { id: 'registry', label: 'Registry', icon: FiGift }
  ];

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-aurora-frost to-aurora-ice dark:from-aurora-twilight dark:to-aurora-navy flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="frosted-glass rounded-lg p-8 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-aurora-blue dark:bg-aurora-green rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiLock} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow">
              Admin Access
            </h1>
            <p className="text-aurora-blue dark:text-aurora-green font-sans font-light mt-2">
              Aurora Union Wedding Admin
            </p>
          </div>

          <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                Admin Password
              </label>
              <div className="relative">
                <input
                  {...register('password', { required: 'Password is required' })}
                  type={showPassword ? 'text' : 'password'}
                  className="w-full pl-4 pr-12 py-3 bg-white/50 dark:bg-aurora-navy/50 border border-aurora-blue/30 dark:border-aurora-green/30 rounded-lg focus:ring-2 focus:ring-aurora-blue dark:focus:ring-aurora-green focus:border-transparent transition-all duration-300 text-aurora-navy dark:text-aurora-ice"
                  placeholder="Enter admin password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <SafeIcon 
                    icon={showPassword ? FiEyeOff : FiEye} 
                    className="h-5 w-5 text-aurora-blue dark:text-aurora-green" 
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-aurora-blue dark:bg-aurora-green hover:bg-aurora-blue/80 dark:hover:bg-aurora-green/80 text-white font-sans font-medium rounded-lg transition-all duration-300"
            >
              Access Admin Panel
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-aurora-navy dark:text-aurora-lavender">
              Demo password: aurora2024
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-aurora-frost to-aurora-ice dark:from-aurora-twilight dark:to-aurora-navy">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="frosted-glass rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold text-aurora-navy dark:text-aurora-ice text-glow">
                Admin Dashboard
              </h1>
              <p className="text-aurora-blue dark:text-aurora-green font-sans font-light">
                Aurora Union Wedding Management
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPreview(!isPreview)}
                className={`px-4 py-2 rounded-lg font-sans font-medium transition-all duration-300 ${
                  isPreview 
                    ? 'bg-aurora-green text-white' 
                    : 'bg-aurora-blue text-white'
                }`}
              >
                {isPreview ? 'Exit Preview' : 'Preview Site'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAdmin(false)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-sans font-medium transition-all duration-300"
              >
                Logout
              </motion.button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="frosted-glass rounded-lg p-2 mb-6">
          <div className="flex space-x-2">
            {adminTabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-sans font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-aurora-blue dark:bg-aurora-green text-white'
                    : 'text-aurora-navy dark:text-aurora-ice hover:bg-aurora-blue/10 dark:hover:bg-aurora-green/10'
                }`}
              >
                <SafeIcon icon={tab.icon} className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="frosted-glass rounded-lg p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-aurora-navy dark:text-aurora-ice">
                Website Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-aurora-blue/10 dark:bg-aurora-green/10 rounded-lg p-6">
                  <h3 className="text-lg font-serif font-bold text-aurora-navy dark:text-aurora-ice mb-2">
                    Total RSVPs
                  </h3>
                  <p className="text-3xl font-sans font-bold text-aurora-blue dark:text-aurora-green">
                    47
                  </p>
                </div>
                <div className="bg-aurora-blue/10 dark:bg-aurora-green/10 rounded-lg p-6">
                  <h3 className="text-lg font-serif font-bold text-aurora-navy dark:text-aurora-ice mb-2">
                    Guestbook Entries
                  </h3>
                  <p className="text-3xl font-sans font-bold text-aurora-blue dark:text-aurora-green">
                    23
                  </p>
                </div>
                <div className="bg-aurora-blue/10 dark:bg-aurora-green/10 rounded-lg p-6">
                  <h3 className="text-lg font-serif font-bold text-aurora-navy dark:text-aurora-ice mb-2">
                    Days to Wedding
                  </h3>
                  <p className="text-3xl font-sans font-bold text-aurora-blue dark:text-aurora-green">
                    42
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rsvps' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-aurora-navy dark:text-aurora-ice">
                RSVP Management
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-aurora-blue/20 dark:border-aurora-green/20">
                      <th className="text-left py-3 px-4 font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                        Email
                      </th>
                      <th className="text-left py-3 px-4 font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                        Attending
                      </th>
                      <th className="text-left py-3 px-4 font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                        Guests
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-aurora-blue/10 dark:border-aurora-green/10">
                      <td className="py-3 px-4 text-aurora-navy dark:text-aurora-lavender">
                        Sarah Johnson
                      </td>
                      <td className="py-3 px-4 text-aurora-navy dark:text-aurora-lavender">
                        sarah@example.com
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          Yes
                        </span>
                      </td>
                      <td className="py-3 px-4 text-aurora-navy dark:text-aurora-lavender">
                        2
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'guestbook' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-aurora-navy dark:text-aurora-ice">
                Guestbook Messages
              </h2>
              <div className="space-y-4">
                <div className="bg-aurora-blue/10 dark:bg-aurora-green/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-sans font-medium text-aurora-navy dark:text-aurora-ice">
                      Sarah & Mike
                    </h3>
                    <span className="text-xs text-aurora-blue dark:text-aurora-green">
                      2 days ago
                    </span>
                  </div>
                  <p className="text-aurora-navy dark:text-aurora-lavender font-sans font-light">
                    Wishing you both a lifetime of love as beautiful as the northern lights!
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'registry' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-aurora-navy dark:text-aurora-ice">
                Registry Analytics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-aurora-blue/10 dark:bg-aurora-green/10 rounded-lg p-6">
                  <h3 className="text-lg font-serif font-bold text-aurora-navy dark:text-aurora-ice mb-2">
                    Most Popular Category
                  </h3>
                  <p className="text-xl font-sans font-bold text-aurora-blue dark:text-aurora-green">
                    Cozy Home Essentials
                  </p>
                </div>
                <div className="bg-aurora-blue/10 dark:bg-aurora-green/10 rounded-lg p-6">
                  <h3 className="text-lg font-serif font-bold text-aurora-navy dark:text-aurora-ice mb-2">
                    Registry Visits
                  </h3>
                  <p className="text-xl font-sans font-bold text-aurora-blue dark:text-aurora-green">
                    156
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;