import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ROICalculatorSection: React.FC = () => {
  useEffect(() => {
    // Add the calculateROINew function to window object
    (window as any).calculateROINew = function() {
      var customers = parseInt((document.getElementById('roi-customers') as HTMLInputElement)?.value || '0');
      var value = parseInt((document.getElementById('roi-value') as HTMLInputElement)?.value || '0');
      var increase = parseInt((document.getElementById('roi-increase') as HTMLInputElement)?.value || '0');
      var cost = parseInt((document.getElementById('roi-cost') as HTMLInputElement)?.value || '0');
      
      var additionalCustomers = Math.round(customers * (increase / 100));
      var additionalRevenue = additionalCustomers * value * 30;
      var roi = Math.round(((additionalRevenue - cost) / cost) * 100);

      var resultBox = document.getElementById('roi-result');

      if(cost === 0 || isNaN(roi)) {
        if (resultBox) {
          resultBox.innerHTML = 'Please make sure all inputs are valid and the cost is not zero.';
          resultBox.style.display = 'block';
        }
        return;
      }

      if (resultBox) {
        resultBox.innerHTML =
          'With our GBP optimization services, you would have an ROI of <strong>' + 
          roi + '%</strong> on your investment, earning an additional $' + 
          additionalRevenue + ' per month.<br><br>' +
          'Calculation:<br>' +
          'Additional Customers: ' + additionalCustomers + ' per day<br>' +
          'Additional Monthly Revenue: ' + additionalCustomers + ' * $' + value + ' * 30 = $' + additionalRevenue + '<br>' +
          'ROI: (($' + additionalRevenue + ' - $' + cost + ') / $' + cost + ') * 100 = ' + roi + '%';
          
        resultBox.style.display = 'block';
      }
    };

    // Cleanup function
    return () => {
      delete (window as any).calculateROINew;
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Container - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
            >
              Curious about your potential ROI?
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Contact us for a free, personalized analysis.
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Our team will review your business and provide a custom ROI estimate—no obligation, just insights.
            </p>
          </motion.div>

          {/* Right Container - ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center w-full"
          >
            <div 
              className="roi-container w-full max-w-full sm:max-w-[425px]"
              style={{
                maxWidth: '425px',
                width: '100%',
                margin: 'auto',
                padding: '20px',
                backgroundColor: '#fff',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                marginTop: '20px'
              }}
            >
              <div className="roi-input-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="roi-customers" style={{ color: '#333', display: 'block' }}>
                  Number of customers per day:
                </label>
                <input 
                  type="number" 
                  id="roi-customers"
                  className="w-full"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '6px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div className="roi-input-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="roi-value" style={{ color: '#333', display: 'block' }}>
                  Average customer value ($):
                </label>
                <input 
                  type="number" 
                  id="roi-value"
                  className="w-full"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '6px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div className="roi-input-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="roi-increase" style={{ color: '#333', display: 'block' }}>
                  Percentage increase (%):
                </label>
                <input 
                  type="number" 
                  id="roi-increase"
                  className="w-full"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '6px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <div className="roi-input-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="roi-cost" style={{ color: '#333', display: 'block' }}>
                  Cost of service ($/month):
                </label>
                <input 
                  type="number" 
                  id="roi-cost"
                  className="w-full"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '6px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              
              <button 
                className="roi-button w-full"
                onClick={() => (window as any).calculateROINew()}
                style={{
                  backgroundColor: '#008cba',
                  color: 'white',
                  padding: '10px 20px',
                  margin: '10px 0',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  width: '100%'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                Calculate ROI
              </button>
              
              <div 
                id="roi-result"
                className="roi-result"
                style={{
                  display: 'none',
                  padding: '10px',
                  marginTop: '20px',
                  border: '1px solid #bde1ef',
                  borderRadius: '4px',
                  backgroundColor: '#f0f8ff',
                  color: '#333'
                }}
              ></div>
              <div className="text-center text-gray-500 text-xs mt-4">
                For a custom ROI analysis, contact us.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection; 