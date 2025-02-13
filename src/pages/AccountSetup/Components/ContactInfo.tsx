import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    location: '',
    phone: '',
    countryCode: '+880',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Map Location
          </label>
          <div className="relative">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location..."
              className="w-full border border-gray-300 rounded-lg pl-3 pr-10 py-2 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <div className="flex gap-2">
            <div className="w-[80px]">
              <select
                value={formData.countryCode}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    countryCode: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 rounded-lg px-2 py-2 text-sm outline-none appearance-none bg-white"
              >
                <option value="+880">+880</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Mail className="h-5 w-5 text-blue-600" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
        <button
          type="button"
          className="order-2 sm:order-1 w-full sm:w-auto px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
        >
          Previous
        </button>
        <button
          type="submit"
          className="order-1 sm:order-2 w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
        >
          Finish Editing
          <span className="text-lg">→</span>
        </button>
      </div>
    </form>
  );
};
export default ContactInfo;
