import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Phone, Clock, ChevronRight, TrendingUp, Award, Users, ArrowRight } from 'lucide-react';

interface Business {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  category: string;
  distance: string;
  phone: string;
  hours: string;
  position: number;
  isClient?: boolean;
}

const LocalMapSection: React.FC<{ onCtaClick?: () => void }> = ({ onCtaClick = () => {} }) => {
  const [showAfter, setShowAfter] = useState(false);
  const [selectedCity, setSelectedCity] = useState('chicago');

  const businessData = {
    chicago: {
      search: "plumbers near Chicago, IL",
      before: [
        {
          id: "1",
          name: "Quick Fix Plumbing",
          rating: 4.2,
          reviews: 48,
          category: "Plumber",
          distance: "2.1 mi",
          phone: "(312) 555-0123",
          hours: "Open 24 hours",
          position: 1
        },
        {
          id: "2", 
          name: "Chicago Drain Masters",
          rating: 4.1,
          reviews: 32,
          category: "Plumber",
          distance: "3.4 mi", 
          phone: "(312) 555-0156",
          hours: "Open ⋅ Closes 6 PM",
          position: 2
        },
        {
          id: "3",
          name: "Reliable Plumbing Co",
          rating: 3.9,
          reviews: 67,
          category: "Plumber", 
          distance: "4.2 mi",
          phone: "(312) 555-0189",
          hours: "Open ⋅ Closes 5 PM", 
          position: 3
        },
        {
          id: "4",
          name: "Chen's Plumbing Services",
          rating: 3.7,
          reviews: 23,
          category: "Plumber",
          distance: "5.8 mi",
          phone: "(312) 555-0201",
          hours: "Closed ⋅ Opens 8 AM",
          position: 15,
          isClient: true
        }
      ],
      after: [
        {
          id: "4",
          name: "Chen's Plumbing Services",
          rating: 4.8,
          reviews: 127,
          category: "Plumber", 
          distance: "5.8 mi",
          phone: "(312) 555-0201",
          hours: "Open 24 hours",
          position: 1,
          isClient: true
        },
        {
          id: "1",
          name: "Quick Fix Plumbing", 
          rating: 4.2,
          reviews: 48,
          category: "Plumber",
          distance: "2.1 mi",
          phone: "(312) 555-0123", 
          hours: "Open 24 hours",
          position: 2
        },
        {
          id: "2",
          name: "Chicago Drain Masters",
          rating: 4.1,
          reviews: 32,
          category: "Plumber",
          distance: "3.4 mi",
          phone: "(312) 555-0156",
          hours: "Open ⋅ Closes 6 PM",
          position: 3
        }
      ]
    },
    miami: {
      search: "restaurants near Miami Beach, FL",
      before: [
        {
          id: "1",
          name: "Ocean View Bistro",
          rating: 4.4,
          reviews: 156,
          category: "Restaurant",
          distance: "0.8 mi",
          phone: "(305) 555-0167",
          hours: "Open ⋅ Closes 11 PM",
          position: 1
        },
        {
          id: "2",
          name: "Sunset Grill",
          rating: 4.3,
          reviews: 89,
          category: "Restaurant", 
          distance: "1.2 mi",
          phone: "(305) 555-0198",
          hours: "Open ⋅ Closes 10 PM",
          position: 2
        },
        {
          id: "3",
          name: "Coastal Kitchen",
          rating: 4.1,
          reviews: 234,
          category: "Restaurant",
          distance: "1.5 mi", 
          phone: "(305) 555-0145",
          hours: "Open ⋅ Closes 9 PM",
          position: 3
        },
        {
          id: "4",
          name: "Sofia's Mediterranean",
          rating: 3.8,
          reviews: 34,
          category: "Restaurant",
          distance: "2.1 mi",
          phone: "(305) 555-0221",
          hours: "Closed ⋅ Opens 5 PM",
          position: 12,
          isClient: true
        }
      ],
      after: [
        {
          id: "4",
          name: "Sofia's Mediterranean", 
          rating: 4.7,
          reviews: 189,
          category: "Restaurant",
          distance: "2.1 mi",
          phone: "(305) 555-0221",
          hours: "Open ⋅ Closes 11 PM",
          position: 1,
          isClient: true
        },
        {
          id: "1", 
          name: "Ocean View Bistro",
          rating: 4.4,
          reviews: 156,
          category: "Restaurant",
          distance: "0.8 mi",
          phone: "(305) 555-0167",
          hours: "Open ⋅ Closes 11 PM", 
          position: 2
        },
        {
          id: "2",
          name: "Sunset Grill",
          rating: 4.3,
          reviews: 89,
          category: "Restaurant",
          distance: "1.2 mi",
          phone: "(305) 555-0198", 
          hours: "Open ⋅ Closes 10 PM",
          position: 3
        }
      ]
    }
  };

  const currentData = businessData[selectedCity as keyof typeof businessData];
  const businesses = showAfter ? currentData.after : currentData.before;
  const clientBusiness = businesses.find(b => b.isClient);

  const getRankingColor = (position: number) => {
    if (position === 1) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
    if (position === 2) return 'bg-gradient-to-r from-gray-400 to-gray-500';
    if (position === 3) return 'bg-gradient-to-r from-amber-600 to-yellow-600';
    return 'bg-gray-600';
  };

  const getPositionText = (position: number) => {
    if (position === 1) return '1st';
    if (position === 2) return '2nd'; 
    if (position === 3) return '3rd';
    return `${position}th`;
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 w-full max-w-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Local Map Results
          </motion.div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            See Your Business{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rise to the Top
            </span>
          </h2>
          
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Watch how LDM transforms your Google Maps ranking from buried in search results to the coveted #1 position
          </p>
        </motion.div>

        {/* City Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-8 sm:mb-12 w-full max-w-full"
        >
          <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 w-full max-w-xs mx-auto sm:w-auto sm:max-w-none sm:mx-0 inline-flex">
            {Object.entries(businessData).map(([city, data]) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 sm:px-6 py-2 rounded-md font-medium transition-all duration-300 capitalize w-1/2 sm:w-auto text-xs sm:text-base ${
                  selectedCity === city
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {city} {data.search.includes('plumber') ? '🔧' : '🍽️'}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full max-w-full">
          {/* Left side - Map Interface */}
          <div className="relative w-full max-w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-700 shadow-2xl w-full max-w-full"
            >
              {/* Search Bar */}
              <div className="bg-white rounded-lg p-2 sm:p-4 mb-4 sm:mb-6 shadow-lg w-full max-w-full">
                <div className="flex flex-wrap items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2 sm:mr-3"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2 sm:mr-3"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3 sm:mr-4"></div>
                  <div className="flex-1 bg-gray-100 rounded-lg px-2 sm:px-4 py-2 overflow-x-auto">
                    <span className="text-gray-800 text-xs sm:text-sm break-words">{currentData.search}</span>
                  </div>
                </div>
              </div>

              {/* Before/After Toggle */}
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="bg-gray-700 rounded-lg p-1 flex items-center w-full max-w-xs">
                  <button
                    onClick={() => setShowAfter(false)}
                    className={`px-3 sm:px-6 py-2 rounded-md font-medium transition-all duration-300 w-1/2 sm:w-auto text-xs sm:text-base ${
                      !showAfter
                        ? 'bg-red-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    BEFORE LDM
                  </button>
                  <button
                    onClick={() => setShowAfter(true)}
                    className={`px-3 sm:px-6 py-2 rounded-md font-medium transition-all duration-300 w-1/2 sm:w-auto text-xs sm:text-base ${
                      showAfter
                        ? 'bg-green-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    AFTER LDM
                  </button>
                </div>
              </div>

              {/* Map Results */}
              <div className="space-y-3 w-full max-w-full">
                <AnimatePresence mode="wait">
                  {businesses.slice(0, 3).map((business, index) => (
                    <motion.div
                      key={`${business.id}-${showAfter}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className={`bg-white rounded-lg p-3 sm:p-4 border-l-4 w-full max-w-full ${
                        business.isClient
                          ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-white'
                          : 'border-gray-300'
                      } shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="flex flex-col sm:flex-row items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1 w-full max-w-full">
                          {/* Position Badge */}
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${getRankingColor(business.position)}`}>
                            {business.position}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1 w-full max-w-full">
                              <h3 className={`font-semibold ${business.isClient ? 'text-purple-800' : 'text-gray-900'} truncate w-full max-w-full`}>
                                {business.name}
                                {business.isClient && (
                                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                    <Award className="w-3 h-3 mr-1" />
                                    LDM Client
                                  </span>
                                )}
                              </h3>
                            </div>
                            
                            <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-600 mb-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(business.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                                <span className="ml-1 font-medium">{business.rating}</span>
                                <span className="text-gray-400">({business.reviews})</span>
                              </div>
                              <span>⋅</span>
                              <span>{business.category}</span>
                              <span>⋅</span>
                              <span>{business.distance}</span>
                            </div>
                            
                            <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-600">
                              <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-1" />
                                {business.phone}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {business.hours}
                              </div>
                            </div>
                          </div>
                        </div>

                        {business.isClient && showAfter && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="ml-0 sm:ml-4 mt-2 sm:mt-0"
                          >
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                              #1 RANK!
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Show buried position for client in BEFORE state */}
                {!showAfter && clientBusiness && clientBusiness.position > 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-gray-100 rounded-lg p-3 sm:p-4 border-l-4 border-red-500 w-full max-w-full"
                  >
                    <div className="text-center text-gray-600">
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {clientBusiness.position}
                        </div>
                        <span className="ml-2 font-medium">{clientBusiness.name}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-red-600">
                        Buried on page 2+ • Rarely seen by customers
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right side - Results & Stats */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={showAfter ? 'after' : 'before'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Status Header */}
                <div className={`text-center p-6 rounded-2xl ${
                  showAfter 
                    ? 'bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30'
                    : 'bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30'
                }`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                      showAfter
                        ? 'bg-gradient-to-r from-green-500 to-teal-500'
                        : 'bg-gradient-to-r from-red-500 to-orange-500'
                    }`}
                  >
                    {showAfter ? (
                      <TrendingUp className="w-8 h-8 text-white" />
                    ) : (
                      <MapPin className="w-8 h-8 text-white" />
                    )}
                  </motion.div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${
                    showAfter ? 'text-green-300' : 'text-red-300'
                  }`}>
                    {showAfter ? 'AFTER Using LDM' : 'BEFORE Using LDM'}
                  </h3>
                  
                  <p className="text-gray-400">
                    {showAfter 
                      ? 'Dominating local search results'
                      : 'Lost in the competition'
                    }
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      label: 'Map Ranking',
                      value: showAfter ? '#1 Position' : `#${clientBusiness?.position || 15}+ Position`,
                      change: showAfter ? '+1400% visibility' : 'Page 2+ buried'
                    },
                    {
                      label: 'Customer Rating', 
                      value: showAfter ? `${clientBusiness?.rating || 4.8} ⭐` : `${businessData[selectedCity as keyof typeof businessData].before.find(b => b.isClient)?.rating || 3.8} ⭐`,
                      change: showAfter ? '+26% higher rating' : 'Below competition'
                    },
                    {
                      label: 'Total Reviews',
                      value: showAfter ? `${clientBusiness?.reviews || 127}` : `${businessData[selectedCity as keyof typeof businessData].before.find(b => b.isClient)?.reviews || 34}`,
                      change: showAfter ? '+273% more reviews' : 'Lacking social proof'
                    },
                    {
                      label: 'Hours Status',
                      value: showAfter ? 'Open 24 hours' : 'Limited hours',
                      change: showAfter ? 'Always available' : 'Missing customers'
                    }
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className={`bg-gray-800 rounded-xl p-4 border ${
                        showAfter ? 'border-green-500/30' : 'border-red-500/30'
                      }`}
                    >
                      <p className="text-gray-400 text-sm mb-1">{metric.label}</p>
                      <p className="text-white font-bold text-lg mb-1">{metric.value}</p>
                      <p className={`text-xs ${
                        showAfter ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.change}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Business Impact */}
                <div className={`bg-gray-800 rounded-xl p-6 border ${
                  showAfter ? 'border-green-500/30' : 'border-red-500/30'
                }`}>
                  <h4 className="text-white font-bold text-lg mb-4">
                    {showAfter ? 'Business Results' : 'Current Challenges'}
                  </h4>
                  
                  <div className="space-y-3">
                    {(showAfter ? [
                      { icon: <Phone className="w-5 h-5" />, text: '+400% more phone calls', color: 'text-green-400' },
                      { icon: <Users className="w-5 h-5" />, text: '+250% website traffic', color: 'text-green-400' },
                      { icon: <TrendingUp className="w-5 h-5" />, text: '+180% new customers', color: 'text-green-400' },
                      { icon: <Award className="w-5 h-5" />, text: 'Outranking all competitors', color: 'text-green-400' }
                    ] : [
                      { icon: <MapPin className="w-5 h-5" />, text: 'Invisible to local customers', color: 'text-red-400' },
                      { icon: <Phone className="w-5 h-5" />, text: 'Missing 90% of potential calls', color: 'text-red-400' },
                      { icon: <Users className="w-5 h-5" />, text: 'Competitors stealing business', color: 'text-red-400' },
                      { icon: <TrendingUp className="w-5 h-5" />, text: 'Declining revenue potential', color: 'text-red-400' }
                    ]).map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className={`flex items-center ${item.color}`}
                      >
                        {item.icon}
                        <span className="ml-3 text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to dominate your local search results like these businesses?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(147, 51, 234, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg inline-flex items-center"
            onClick={onCtaClick}
          >
            Get My #1 Ranking
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
          
          <p className="text-gray-500 text-sm mt-4">
            Start your $1 trial • See results in 2 minutes • No long-term commitment
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalMapSection;