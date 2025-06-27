import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Users, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: <Zap className="w-6 h-6" />,
      description: 'Perfect for single location businesses',
      price: { monthly: 97, yearly: 970 },
      originalPrice: { monthly: 197, yearly: 1970 },
      features: [
        'AI-powered Google Business Profile optimization',
        'Automated review responses',
        'Monthly Google Business Posts',
        'Basic Q&A generation',
        'Performance analytics',
        'Email support'
      ],
      highlighted: false,
      badge: null
    },
    {
      id: 'pro',
      name: 'Professional',
      icon: <Star className="w-6 h-6" />,
      description: 'Most popular for growing businesses',
      price: { monthly: 197, yearly: 1970 },
      originalPrice: { monthly: 397, yearly: 3970 },
      features: [
        'Everything in Starter',
        'Daily Google Business Posts',
        'Advanced review management',
        'Smart Q&A automation',
        'Image optimization & geotagging',
        'Priority support',
        'White-label options available',
        'Multi-location dashboard'
      ],
      highlighted: true,
      badge: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: <Crown className="w-6 h-6" />,
      description: 'For agencies and large businesses',
      price: { monthly: 497, yearly: 4970 },
      originalPrice: { monthly: 997, yearly: 9970 },
      features: [
        'Everything in Professional',
        'Unlimited locations',
        'Custom AI training',
        'Advanced analytics & reporting',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'Phone support'
      ],
      highlighted: false,
      badge: 'Enterprise'
    }
  ];

  const getDiscountPercentage = (plan: any) => {
    const savings = billingCycle === 'yearly' 
      ? (plan.originalPrice.yearly - plan.price.yearly) / plan.originalPrice.yearly * 100
      : (plan.originalPrice.monthly - plan.price.monthly) / plan.originalPrice.monthly * 100;
    return Math.round(savings);
  };

  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4 mr-2" />
            Special Launch Pricing
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              LDM Plan
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Start with our $1 trial and see the results for yourself. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center bg-gray-800 rounded-lg p-1 border border-gray-700"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative cursor-pointer ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50'
                  : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
              } rounded-2xl p-8 transition-all duration-300 ${
                selectedPlan === plan.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold"
                >
                  {plan.badge}
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-gray-700'
                  }`}
                >
                  {plan.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-gray-400 text-lg line-through mr-2">
                    ${plan.originalPrice[billingCycle]}
                  </span>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {getDiscountPercentage(plan)}% OFF
                  </span>
                </div>
                
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">
                    ${plan.price[billingCycle]}
                  </span>
                  <span className="text-gray-400 ml-2">
                    /{billingCycle === 'yearly' ? 'year' : 'month'}
                  </span>
                </div>
                
                {billingCycle === 'yearly' && (
                  <p className="text-green-400 text-sm mt-2">
                    Save ${plan.originalPrice.yearly - plan.price.yearly}/year
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + 0.1 * index + 0.05 * featureIndex }}
                    className="flex items-center text-gray-300"
                  >
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                Start $1 Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            {[
              { icon: <Check className="w-6 h-6" />, text: "30-day money-back guarantee" },
              { icon: <Users className="w-6 h-6" />, text: "10,000+ happy customers" },
              { icon: <Zap className="w-6 h-6" />, text: "Setup in under 2 minutes" },
              { icon: <Star className="w-6 h-6" />, text: "4.9/5 average rating" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + 0.1 * index }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-400 text-sm mt-8"
          >
            All plans include a 7-day free trial. No credit card required to start.
            Cancel anytime with one click.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
