import React from 'react';
import { motion } from 'framer-motion';

interface FeaturedLogosProps {
  logos: string[];
}

const FeaturedLogos: React.FC<FeaturedLogosProps> = ({ logos }) => {
  // Double the logos array for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Featured on
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted and featured by leading industry publications and organizations
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />
          
          {/* Scrolling logos */}
          <motion.div
            animate={{
              x: [-1920, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center space-x-16"
            style={{ width: 'fit-content' }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Featured Logo ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800"
        >
          {[
            { number: "55+", label: "Ranked business" },
            { number: "1500+", label: "Posts Generated" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: " Support" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + 0.1 * index, type: "spring" }}
                className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedLogos;
