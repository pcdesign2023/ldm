import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturedLogos from './components/FeaturedLogos';
import VideoDemo from './components/VideoDemo';
import ROICalculatorSection from './components/ROICalculatorSection';
import FeaturesSection from './components/FeaturesSection';
import OptimizationSection from './components/OptimizationSection';
import LocalMapSection from './components/LocalMapSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { loadAndProcessContent, ProcessedContent } from './utils/contentProcessor';
import BeforeAfterSliderSection from './components/BeforeAfterSliderSection';

function App() {
  const [content, setContent] = useState<ProcessedContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const processedContent = await loadAndProcessContent();
        setContent(processedContent);
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  const openModal = () => setModalOpen(true);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Content</h1>
          <p className="text-gray-400">Please refresh the page to try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden max-w-full">
      <Navigation
        logo={content.navigation.logo}
      />
      
      <HeroSection
        challenge={content.hero.challenge}
        headline={content.hero.headline}
        description={content.hero.description}
        ctas={content.hero.ctas}
        heroImage={content.hero.heroImage}
        onCtaClick={openModal}
      />
      
      <FeaturedLogos logos={content.featuredLogos} />
      
      <VideoDemo onCtaClick={openModal} />
      <BeforeAfterSliderSection />
      
      <ROICalculatorSection />
      
      <FeaturesSection features={content.features} />
      
      <OptimizationSection onCtaClick={openModal} />
      <LocalMapSection onCtaClick={openModal} />
      <TestimonialsSection onCtaClick={openModal} />
      
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
