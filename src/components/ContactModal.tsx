import React, { useState } from 'react';
import Select from 'react-select';

const activities = [
  { value: 'Plumber', label: 'Plumber' },
  { value: 'Restaurant', label: 'Restaurant' },
  { value: 'Salon', label: 'Salon' },
  { value: 'Dentist', label: 'Dentist' },
  { value: 'Lawyer', label: 'Lawyer' },
  { value: 'Electrician', label: 'Electrician' },
  { value: 'Accountant', label: 'Accountant' },
  { value: 'Real Estate Agent', label: 'Real Estate Agent' },
  { value: 'Fitness Trainer', label: 'Fitness Trainer' },
  { value: 'Landscaper', label: 'Landscaper' },
  { value: 'Photographer', label: 'Photographer' },
  { value: 'Mechanic', label: 'Mechanic' },
  { value: 'Veterinarian', label: 'Veterinarian' },
  { value: 'Chiropractor', label: 'Chiropractor' },
  { value: 'Cleaning Service', label: 'Cleaning Service' },
  { value: 'Marketing Agency', label: 'Marketing Agency' },
  { value: 'IT Consultant', label: 'IT Consultant' },
  { value: 'Bakery', label: 'Bakery' },
  { value: 'Florist', label: 'Florist' },
  { value: 'Other', label: 'Other' },
];

export default function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [form, setForm] = useState({ businessName: '', email: '', phone: '', activity: null });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const validate = () => {
    if (!form.businessName || !form.email || !form.phone || !form.activity) return false;
    if (!/\S+@\S+\.\S+/.test(form.email)) return false;
    if (!/^[0-9+\-\s()]{7,}$/.test(form.phone)) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    if (!validate()) {
      setFeedback({ type: 'error', message: 'Please fill all fields with valid information.' });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('https://localdigitalmarketing.onrender.com/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: form.businessName,
          email: form.email,
          phone: form.phone,
          activity: form.activity.value
        })
      });
      if (res.ok) {
        setFeedback({ type: 'success', message: 'Thank you! We will contact you soon.' });
        setForm({ businessName: '', email: '', phone: '', activity: null });
      } else {
        setFeedback({ type: 'error', message: 'Failed to send. Please try again later.' });
      }
    } catch {
      setFeedback({ type: 'error', message: 'Network error. Please try again.' });
    }
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-2 p-6 relative">
        {/* Header */}
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={onClose}>&times;</button>
        <div className="mb-6 text-center">
          <div className="font-bold text-lg text-gray-800 mb-1">Contact Us</div>
          <div className="text-sm text-gray-600">Email: <a href="mailto:contact@localdigitalmarketing.us" className="underline">contact@localdigitalmarketing.us</a></div>
          <div className="text-sm text-gray-600">Phone: <a href="tel:+17818050003" className="underline">+1 (781) 805-0003</a></div>
          <div className="text-sm text-gray-600">Working Hours: 8 AM to 6 PM</div>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Business Name"
            value={form.businessName}
            onChange={e => setForm(f => ({ ...f, businessName: e.target.value }))}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Phone"
            type="tel"
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            required
          />
          <Select
            className="w-full"
            placeholder="Business Activity"
            value={form.activity}
            onChange={activity => setForm(f => ({ ...f, activity }))}
            options={activities}
            isSearchable
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
        {feedback && (
          <div className={`mt-4 text-center text-sm ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {feedback.message}
          </div>
        )}
      </div>
    </div>
  );
} 