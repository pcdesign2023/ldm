import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Star, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

const Footer: React.FC<{ onCtaClick?: () => void }> = ({ onCtaClick = () => {} }) => {
  const currentYear = new Date().getFullYear();

  const keyFeatures = [
    { icon: <TrendingUp className="w-5 h-5" />, text: "AI-Powered Optimization" },
    { icon: <Star className="w-5 h-5" />, text: "5-Star Review Management" },
    { icon: <Users className="w-5 h-5" />, text: "10,000+ Happy Clients" },
    { icon: <Award className="w-5 h-5" />, text: "Industry Leading Results" }
  ];

  const testimonials = [
    {
      text: "LDM transformed our local SEO. We went from page 3 to #1 in just 3 months!",
      author: "Sarah Johnson",
      business: "Plumbing Pro Services"
    },
    {
      text: "The AI automation is incredible. Our Google Business Profile now runs itself.",
      author: "Mike Chen",
      business: "Chen's Auto Repair"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="mb-8">
                <img 
                  src="https://localdigitalmarketing.us/wp-content/uploads/2024/11/xLocal-SEO-in-Revere-MA-1.png.pagespeed.ic.RLBzAjNqlr.png" 
                  alt="Local Marketing Agency" 
                  className="h-10 w-auto max-w-[140px] mb-6 filter invert brightness-0" 
                />
                <p className="text-gray-300 text-base leading-relaxed max-w-sm mb-6">
                  The most advanced AI-powered Google Business Profile management platform. 
                  Automate your local SEO and rank higher on Google Maps with proven results.
                </p>
                
                {/* Key Features */}
                <div className="space-y-3">
                  {keyFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300 text-sm group">
                    <Mail className="w-5 h-5 mr-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <a href="mailto:info@localdigitalmarketing.us" className="hover:text-white transition-colors">
                      info@localdigitalmarketing.us
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm group">
                    <Phone className="w-5 h-5 mr-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <a href="tel:+1-781-805-0003" className="hover:text-white transition-colors">
                      +1 (781) 805-0003
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <MapPin className="w-5 h-5 mr-4 text-blue-400" />
                    <span>Boston, MA</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h3 className="text-white font-semibold text-xl mb-8">What Our Clients Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.author}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="text-white font-medium text-sm">{testimonial.author}</p>
                      <p className="text-gray-400 text-xs">{testimonial.business}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center"
              >
                <h4 className="text-white font-bold text-lg mb-2">Ready to Dominate Local Search?</h4>
                <p className="text-blue-100 text-sm mb-4">
                  Join thousands of businesses already ranking #1 on Google Maps
                </p>
                <motion.button
                  onClick={onCtaClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Start Your Free Trial
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Local Marketing Agency. All rights reserved.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
