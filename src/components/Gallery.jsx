import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac5?w=600&h=400&fit=crop",
      alt: "Winter engagement session",
      title: "First Winter Together"
    },
    {
      src: "https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?w=600&h=400&fit=crop",
      alt: "Cozy coffee shop moment",
      title: "Where We Met"
    },
    {
      src: "https://images.unsplash.com/photo-1548777123-93d6c0d87cd5?w=600&h=400&fit=crop",
      alt: "Winter walk in the park",
      title: "Our First Date"
    },
    {
      src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop",
      alt: "Northern lights proposal",
      title: "The Proposal"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      alt: "Snowy mountain adventure",
      title: "Adventures Together"
    },
    {
      src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600&h=400&fit=crop",
      alt: "Cozy cabin evening",
      title: "Quiet Moments"
    },
    {
      src: "https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=600&h=400&fit=crop",
      alt: "Winter wonderland",
      title: "Our Happy Place"
    },
    {
      src: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=600&h=400&fit=crop",
      alt: "Engagement celebration",
      title: "Celebrating Love"
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage.index;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage({ ...images[newIndex], index: newIndex });
  };

  return (
    <section 
      id="gallery"
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
            Our Winter Journey
          </h2>
          <p className="text-lg font-sans font-light text-aurora-blue dark:text-aurora-green max-w-2xl mx-auto">
            Moments captured in frost and light, memories made in the magic of winter
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-aurora-blue to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              <div className="relative overflow-hidden rounded-lg frosted-glass p-3 hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aurora-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-aurora-blue dark:bg-aurora-green rounded-full flex items-center justify-center text-white shadow-lg">
                      <span className="text-xl">+</span>
                    </div>
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="text-sm font-sans font-medium text-aurora-navy dark:text-aurora-ice text-center mt-3"
                >
                  {image.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl mx-4 bg-white dark:bg-aurora-navy rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <SafeIcon icon={FiX} className="w-5 h-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <SafeIcon icon={FiChevronRight} className="w-5 h-5" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Title */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-aurora-navy dark:text-aurora-ice">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;