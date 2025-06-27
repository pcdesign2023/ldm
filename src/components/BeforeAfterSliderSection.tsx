import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const hvacBefore = 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706490a5d259681ac937fc1_hvac-contractor1.webp';
const hvacAfter = 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670649113c0f63393c82c8d6_hvac-contractor2.webp';
const closetBefore = 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/670649536f32e9d60c4ec579_closet-remodeler1.webp';
const closetAfter = 'https://cdn.prod.website-files.com/66339c43cbff20ea82838f5e/6706495ade6b80061d026acf_closet-remodeler2.webp';

const BeforeAfterSliderSection: React.FC = () => (
  <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        See the Difference: <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Before & After</span>
      </h2>
      <p className="text-gray-400 mb-8">
        Drag the sliders to compare the Google Business Profile before and after using LDM.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* HVAC Contractor Slider */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">HVAC Contractor</h3>
          <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black">
            <BeforeAfterSlider
              firstImage={{ imageUrl: hvacBefore }}
              secondImage={{ imageUrl: hvacAfter }}
            />
          </div>
        </div>
        {/* Closet Remodeler Slider */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Closet Remodeler</h3>
          <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black">
            <BeforeAfterSlider
              firstImage={{ imageUrl: closetBefore }}
              secondImage={{ imageUrl: closetAfter }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSliderSection; 