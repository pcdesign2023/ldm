import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, TrendingUp, CheckCircle } from 'lucide-react';

const OptimizationSection: React.FC<{ onCtaClick?: () => void }> = ({ onCtaClick = () => {} }) => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          return 120; // Reset to 2 minutes
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setProgress(((120 - timeLeft) / 120) * 100);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const optimizationSteps = [
    { title: "Analyze Business Data", completed: timeLeft < 100 },
    { title: "Optimize Description", completed: timeLeft < 80 },
    { title: "Configure Services", completed: timeLeft < 60 },
    { title: "Setup Review Replies", completed: timeLeft < 40 },
    { title: "Generate Q&As", completed: timeLeft < 20 },
    { title: "Finalize Optimization", completed: timeLeft <= 0 },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              >
                <Zap className="w-4 h-4 mr-2" />
                Lightning Fast Setup
              </motion.div>
              
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Optimize Your GMB in{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  2 Minutes
                </span>
              </h2>
              
              <p className="text-base sm:text-xl text-gray-400 mb-4 sm:mb-8 leading-relaxed">
                LDM can optimize a Google Business Profile in just two minutes, saving you countless hours trying to rank higher on Google Maps. This optimization covers your description, services, review replies, and more!
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg"
                onClick={onCtaClick}
              >
                Contact Us for a Free Local SEO Consultation
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Timer and Progress */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Timer Display */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4"
                  >
                    <Clock className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Optimization in Progress</h3>
                  <p className="text-gray-400">Watch LDM optimize your profile in real-time</p>
                </div>

                {/* Countdown Timer */}
                <div className="text-center mb-8">
                  <motion.div
                    key={timeLeft}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
                  >
                    {formatTime(timeLeft)}
                  </motion.div>
                  <p className="text-gray-400 mt-2">Time remaining</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-sm text-gray-400">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Optimization Steps */}
                <div className="space-y-3">
                  {optimizationSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                        step.completed
                          ? 'bg-green-500/20 border border-green-500/30'
                          : 'bg-gray-700/50 border border-gray-600'
                      }`}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: step.completed ? 1 : 0.8 }}
                        transition={{ duration: 0.3 }}
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          step.completed
                            ? 'bg-green-500'
                            : 'bg-gray-600'
                        }`}
                      >
                        {step.completed && <CheckCircle className="w-3 h-3 text-white" />}
                      </motion.div>
                      <span className={`text-sm font-medium ${
                        step.completed ? 'text-green-300' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating notification badges */}
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1 + index * 0.2,
                    duration: 0.5,
                    type: "spring"
                  }}
                  style={{
                    position: 'absolute',
                    top: `${10 + Math.random() * 80}%`,
                    left: `${-5 + Math.random() * 110}%`,
                  }}
                  className="pointer-events-none"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 2,
                    }}
                    className={`px-2 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                      ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500', 'bg-teal-500'][index % 6]
                    }`}
                  >
                    {88 + index}+
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700"
        >
          {[
            { icon: <TrendingUp className="w-6 h-6" />, number: "300%", label: "Average Ranking Improvement" },
            { icon: <Zap className="w-6 h-6" />, number: "2 min", label: "Setup Time" },
            { icon: <CheckCircle className="w-6 h-6" />, number: "98%", label: "Success Rate" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 + 0.1 * index }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 + 0.1 * index, type: "spring" }}
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4"
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizationSection;
