import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  challenge: string;
  headline: string;
  description: string;
  ctas: string[];
  heroImage: string;
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  challenge,
  headline,
  description,
  ctas,
  heroImage,
  onCtaClick = () => {},
}) => {
  const notificationBadges = [
    { id: 1, text: "88+", color: "bg-blue-500", position: { top: "20%", left: "10%" } },
    { id: 2, text: "92+", color: "bg-orange-500", position: { top: "15%", right: "15%" } },
    { id: 3, text: "76+", color: "bg-purple-500", position: { top: "40%", left: "5%" } },
    { id: 4, text: "95+", color: "bg-cyan-500", position: { top: "60%", right: "10%" } },
    { id: 5, text: "84+", color: "bg-red-500", position: { top: "70%", left: "15%" } },
    { id: 6, text: "91+", color: "bg-pink-500", position: { top: "30%", right: "25%" } },
    { id: 7, text: "87+", color: "bg-green-500", position: { top: "50%", left: "20%" } },
    { id: 8, text: "89+", color: "bg-yellow-500", position: { top: "25%", right: "5%" } },
    { id: 9, text: "93+", color: "bg-teal-500", position: { top: "65%", right: "20%" } },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 flex flex-col lg:flex-row items-center w-full">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 z-10 mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Done-For-You Service
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                We Manage Your Google Business Profile—You Get the Results
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Let our local SEO experts handle everything for you. No software to learn, no dashboards to manage. Just contact us and we'll do the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onCtaClick}
                className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg text-center min-h-[48px] sm:min-h-[56px] flex items-center justify-center"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex items-center space-x-3 sm:space-x-4 pt-4"
          >
            <div className="flex -space-x-1 sm:-space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white" />
              ))}
            </div>
            <div className="text-white">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-300">Trusted by 10,000+ businesses</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Hero Image with Animated Badges */}
        <div className="relative w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {heroImage && (
              <img
                src={heroImage}
                alt="LDM Dashboard"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto rounded-xl sm:rounded-2xl shadow-2xl"
              />
            )}
            
            {/* Animated Notification Badges - Hidden on very small screens */}
            <div className="hidden sm:block">
              {notificationBadges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.2 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  style={badge.position}
                  className="absolute"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 2,
                    }}
                    className={`${badge.color} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg backdrop-blur-sm`}
                  >
                    {badge.text}
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            {/* Floating elements around the image - Hidden on very small screens */}
            <div className="hidden sm:block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default HeroSection;
