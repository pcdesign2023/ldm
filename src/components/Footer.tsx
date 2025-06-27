import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Solutions: [
      'Paige AI',
      'Google Business Pro',
      'Reviews Software',
      'Citation Software',
      'Agency Program'
    ],
    'Free Tools': [
      'ProfilePro',
      'GBP Auditor',
      'Heatmap Auditor',
      'Citation Checker',
      'Review Generator'
    ],
    Company: [
      'About Us',
      'Blog',
      'Careers',
      'Press',
      'Contact'
    ],
    Support: [
      'Help Center',
      'Documentation',
      'API Reference',
      'Community',
      'Status'
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <img 
                  src="https://localdigitalmarketing.us/wp-content/uploads/2024/11/xLocal-SEO-in-Revere-MA-1.png.pagespeed.ic.RLBzAjNqlr.png" 
                  alt="Merchynt" 
                  className="h-8 w-auto max-w-[120px]" 
                />
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  The most advanced AI-powered Google Business Profile management platform. 
                  Automate your local SEO and rank higher on Google Maps.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <a href="mailto:hello@merchynt.com" className="hover:text-white transition-colors">
                    hello@merchynt.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <a href="tel:+1-555-0123" className="hover:text-white transition-colors">
                    +1 (555) 012-3456
                  </a>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
              >
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + 0.05 * linkIndex }}
                    >
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-white font-semibold text-lg mb-2">
                Stay updated with LDM
              </h3>
              <p className="text-gray-400 text-sm">
                Get the latest features, tips, and local SEO insights delivered to your inbox.
              </p>
            </div>
            
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-semibold rounded-r-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 mb-4 lg:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Merchynt. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + 0.1 * index }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
