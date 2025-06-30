import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  logo: string;
}

const Navigation: React.FC<NavigationProps> = ({ logo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' 
          : 'bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="flex justify-center items-center h-14 sm:h-16 lg:h-20 w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <img 
              src={logo || 'https://localdigitalmarketing.us/wp-content/uploads/2024/11/xLocal-SEO-in-Revere-MA-1.png.pagespeed.ic.RLBzAjNqlr.png'} 
              alt="LDM" 
              className="h-6 sm:h-8 lg:h-10 w-auto max-w-[100px] sm:max-w-[120px] lg:max-w-[140px]"
              onError={(e) => {
                e.currentTarget.src = 'https://localdigitalmarketing.us/wp-content/uploads/2024/11/xLocal-SEO-in-Revere-MA-1.png.pagespeed.ic.RLBzAjNqlr.png';
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
