import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CallButton: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="tel:+17818050003"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
        aria-label="Call us now"
      >
        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full opacity-75"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.75, 0, 0.75],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Call Us Now
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default CallButton; 