import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import Registry from './components/Registry';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Snowfall from './components/Snowfall';
import AuroraBackground from './components/AuroraBackground';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  const [theme, setTheme] = useState('snowlight');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('aurora-theme') || 'snowlight';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme === 'starlight' ? 'dark' : '';
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'snowlight' ? 'starlight' : 'snowlight';
    setTheme(newTheme);
    localStorage.setItem('aurora-theme', newTheme);
    document.documentElement.className = newTheme === 'starlight' ? 'dark' : '';
  };

  const MainContent = () => (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <Snowfall />
      <Header />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <OurStory />
        <WeddingInfo />
        <Countdown />
        <Gallery />
        <RSVP />
        <Registry />
        <Guestbook />
      </main>
      
      <Footer />
    </div>
  );

  return (
    <Router>
      <div className="app-container">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route 
              path="/admin" 
              element={
                <AdminPanel 
                  isAdmin={isAdmin} 
                  setIsAdmin={setIsAdmin}
                  isPreview={isPreview}
                  setIsPreview={setIsPreview}
                />
              } 
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;