import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, TrendingUp, Award } from 'lucide-react';

const TestimonialsSection: React.FC<{ onCtaClick?: () => void }> = ({ onCtaClick = () => {} }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Restaurant Owner",
      business: "Johnson's Bistro",
      rating: 5,
      text: "LDM has completely transformed our Google Business Profile. We've seen a 300% increase in calls and our restaurant is now ranking #1 for local searches. The AI does everything automatically - it's like having a full-time marketing team!",
      results: { ranking: "From #15 to #1", calls: "+300%", reviews: "4.8 stars" },
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "Digital Marketing Agency Owner",
      business: "Chen Digital",
      rating: 5,
      text: "As an agency managing 50+ local businesses, LDM has been a game-changer. It automatically handles all the Google Business Profile optimization for our clients. We've increased our capacity 10x without hiring more staff.",
      results: { clients: "50+ businesses", time: "80% saved", revenue: "+250%" },
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Fitness Studio Owner",
      business: "FitLife Studios",
      rating: 5,
      text: "The automated review responses and Q&A generation are incredible. LDM responds to reviews instantly and creates relevant questions that potential customers actually ask. Our online engagement has skyrocketed!",
      results: { engagement: "+400%", bookings: "+180%", reviews: "150+ new" },
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Kim",
      title: "Local Service Provider",
      business: "Kim's Plumbing",
      rating: 5,
      text: "I was spending hours every week trying to manage my Google Business Profile. Now LDM does everything - posts content, responds to reviews, updates my services. My phone hasn't stopped ringing since I started using it!",
      results: { calls: "+500%", ranking: "Top 3", leads: "+350%" },
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextTestimonial = () => {
    setAutoPlay(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoPlay(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </motion.div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Real Results from{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h2>
          
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
            See how LDM has transformed local businesses across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left side - Testimonial */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center"
                >
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-gray-700 shadow-2xl">
                  {/* Star Rating */}
                  <div className="flex items-center mb-2 sm:mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                    <span className="ml-2 text-gray-400 text-xs sm:text-sm">{current.rating}.0</span>
                  </div>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed"
                  >
                    "{current.text}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center"
                  >
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">{current.name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">{current.title}</p>
                      <p className="text-blue-400 text-xs sm:text-sm font-medium">{current.business}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 sm:mt-8">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              {/* Dots indicator */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setAutoPlay(false);
                    }}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? 'bg-blue-500'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Results */}
          <div className="mt-10 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-8 text-center">
                  {current.business} Results
                </h3>

                {Object.entries(current.results).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-4 sm:p-6 border border-gray-600"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide mb-1">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </p>
                        <p className="text-lg sm:text-2xl font-bold text-white">{value}</p>
                      </div>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 sm:mt-16"
        >
          <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg">Ready to get results like these?</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg"
            onClick={onCtaClick}
          >
            Ready to grow? Contact us for your free consultation!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
