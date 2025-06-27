import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, MessageSquare, HelpCircle, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  images?: string[];
  icon_src?: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'images':
        return <Star className="w-6 h-6" />;
      case 'reviews':
        return <MessageSquare className="w-6 h-6" />;
      case 'q&as':
        return <HelpCircle className="w-6 h-6" />;
      case 'google business posts':
        return <FileText className="w-6 h-6" />;
      default:
        return <Check className="w-6 h-6" />;
    }
  };

  const nextImage = () => {
    const currentFeature = features[activeTab];
    if (currentFeature?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % currentFeature.images.length);
    }
  };

  const prevImage = () => {
    const currentFeature = features[activeTab];
    if (currentFeature?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? currentFeature.images.length - 1 : prev - 1
      );
    }
  };

  const currentFeature = features[activeTab];

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            100% Automated Features
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Google Business Success
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            LDM handles all aspects of your Google Business Profile management with AI-powered automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Feature tabs */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => {
                  setActiveTab(index);
                  setCurrentImageIndex(0);
                }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-500/30 shadow-lg'
                    : 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`p-3 rounded-lg ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-blue-500 to-teal-500'
                        : 'bg-gray-700'
                    }`}
                  >
                    {feature.icon_src ? (
                      <img src={feature.icon_src} alt={feature.title} className="w-6 h-6" />
                    ) : (
                      getIcon(feature.title)
                    )}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeTab === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`${
                      activeTab === index ? 'text-gray-300' : 'text-gray-400'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                  
                  {activeTab === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Feature content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {currentFeature && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {currentFeature.images && currentFeature.images.length > 0 ? (
                    <div className="relative">
                      {/* Image carousel */}
                      <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
                        <motion.img
                          key={currentImageIndex}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          src={currentFeature.images[currentImageIndex]}
                          alt={`${currentFeature.title} ${currentImageIndex + 1}`}
                          className="w-full h-auto object-cover"
                        />
                        
                        {/* Navigation arrows */}
                        {currentFeature.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </>
                        )}
                        
                        {/* Image indicators */}
                        {currentFeature.images.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {currentFeature.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  index === currentImageIndex
                                    ? 'bg-white'
                                    : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    // Fallback design for features without images
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className="inline-flex p-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-6"
                        >
                          {currentFeature.icon_src ? (
                            <img src={currentFeature.icon_src} alt={currentFeature.title} className="w-12 h-12" />
                          ) : (
                            <div className="w-12 h-12 text-white">
                              {getIcon(currentFeature.title)}
                            </div>
                          )}
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {currentFeature.title}
                        </h3>
                        
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {currentFeature.description}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 shadow-lg"
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-80 shadow-lg"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
