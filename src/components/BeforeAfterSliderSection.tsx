import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

// Italian Restaurant
const italianBefore = 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/66b24869da7733fb750b87e8_your-closet-self-storage-car-storage-13x13-20240508-1956-headless.webp';
const italianAfter = 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/66b2486d31394dfc68285462_your-closet-self-storage-car-storage-13x13-20240610-1831-headless.webp';

// Business Contractor
const contractorBefore = 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706407ec26c5aadf9938a07_contractor1.webp';
const contractorAfter = 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706408343c749570370116c_contractor2.webp';

// SPA
const spaBefore = 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6705451d808e7aa961d69a33_01.webp';
const spaAfter = 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/67054558db471a00af3c3b74_02.webp';

const BeforeAfterSliderSection: React.FC = () => (
  <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        See the Difference: <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Before & After</span>
      </h2>
      <p className="text-gray-400 mb-8">
        Drag the sliders to compare the Google Business Profile before and after using LDM.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Italian Restaurant Slider */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Italian Restaurant</h3>
          <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black">
            <BeforeAfterSlider
              firstImage={{ imageUrl: italianBefore }}
              secondImage={{ imageUrl: italianAfter }}
            />
          </div>
        </div>
        {/* Business Contractor Slider */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Business Contractor</h3>
          <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black">
            <BeforeAfterSlider
              firstImage={{ imageUrl: contractorBefore }}
              secondImage={{ imageUrl: contractorAfter }}
            />
          </div>
        </div>
        {/* SPA Slider */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">SPA</h3>
          <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black">
            <BeforeAfterSlider
              firstImage={{ imageUrl: spaBefore }}
              secondImage={{ imageUrl: spaAfter }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSliderSection; 