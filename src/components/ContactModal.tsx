import React from 'react';

export default function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-2 p-0 relative overflow-hidden">
        {/* Header */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-3xl transition-colors z-10" onClick={onClose}>&times;</button>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-center rounded-t-2xl">
          <div className="font-bold text-2xl text-white mb-1 tracking-tight">Contact Us</div>
          <div className="text-sm text-blue-100">Phone: <a href="tel:+17818050003" className="underline hover:text-white transition-colors">+1 (781) 805-0003</a></div>
        </div>
        {/* Mailchimp Embedded Form */}
        <div className="px-6 py-8">
          <form action="https://localdigitalmarketing.us13.list-manage.com/subscribe/post?u=affaa8c96ed418033009ba77a&amp;id=3951f75559&amp;f_id=00ccbfe5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="space-y-5" target="_blank">
            <div className="text-xs text-gray-500 mb-2"><span className="text-red-500">*</span> indicates required</div>
            <div className="space-y-1">
              <label htmlFor="mce-EMAIL" className="block text-gray-700 font-medium">Email Address <span className="text-red-500">*</span></label>
              <input type="email" name="EMAIL" id="mce-EMAIL" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="you@email.com" />
            </div>
            <div className="space-y-1">
              <label htmlFor="mce-FNAME" className="block text-gray-700 font-medium">First Name</label>
              <input type="text" name="FNAME" id="mce-FNAME" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="First Name" />
            </div>
            <div className="space-y-1">
              <label htmlFor="mce-LNAME" className="block text-gray-700 font-medium">Last Name</label>
              <input type="text" name="LNAME" id="mce-LNAME" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Last Name" />
            </div>
            <div className="space-y-1">
              <label htmlFor="mce-PHONE" className="block text-gray-700 font-medium">Phone Number</label>
              <input type="text" name="PHONE" id="mce-PHONE" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Phone Number" />
            </div>
            <div className="space-y-1">
              <label htmlFor="mce-COMPANY" className="block text-gray-700 font-medium">Business Activity</label>
              <input type="text" name="COMPANY" id="mce-COMPANY" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Business Activity" />
            </div>
            <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
              <input type="text" name="b_affaa8c96ed418033009ba77a_3951f75559" tabIndex={-1} />
            </div>
            <div className="pt-2">
              <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <a href="http://eepurl.com/jh_Jtw" title="Mailchimp - email marketing made easy and fun" target="_blank" rel="noopener noreferrer">
                <img className="h-8" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 