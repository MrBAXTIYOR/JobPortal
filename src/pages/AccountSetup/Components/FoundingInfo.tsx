import {
  Link,
  Calendar,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
} from 'lucide-react';
import { useState } from 'react';

const FoundingInfo = () => {
  const [formData, setFormData] = useState({
    orgType: '',
    industryType: '',
    teamSize: '',
    establishmentDate: '',
    website: '',
    vision: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Organization Type */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Organization Type
          </label>
          <select
            name="orgType"
            value={formData.orgType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm"
          >
            <option value="">Select...</option>
            <option value="startup">Startup</option>
            <option value="enterprise">Enterprise</option>
            <option value="nonprofit">Non-profit</option>
          </select>
        </div>

        {/* Industry Types */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Industry Types
          </label>
          <select
            name="industryType"
            value={formData.industryType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm"
          >
            <option value="">Select...</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
          </select>
        </div>

        {/* Team Size */}
        <div className="space-y-1 sm:col-span-2 lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Team Size
          </label>
          <select
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm"
          >
            <option value="">Select...</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201+">201+</option>
          </select>
        </div>
      </div>

      {/* Middle Section - 2 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Year of Establishment */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Year of Establishment
          </label>
          <div className="relative">
            <input
              type="date"
              name="establishmentDate"
              value={formData.establishmentDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Company Website */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Company Website
          </label>
          <div className="relative">
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg pl-3 pr-10 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm"
              placeholder="https://example.com"
            />
            <Link className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Company Vision */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Company Vision
        </label>
        <div className="space-y-2">
          <textarea
            name="vision"
            value={formData.vision}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-sm resize-y"
            placeholder="Tell us about your company vision..."
          />
          <div className="flex flex-wrap gap-1 sm:gap-2 p-0.5">
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Bold className="h-4 w-4 text-gray-600" />
            </button>
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Italic className="h-4 w-4 text-gray-600" />
            </button>
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Underline className="h-4 w-4 text-gray-600" />
            </button>
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Link className="h-4 w-4 text-gray-600" />
            </button>
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
            >
              <List className="h-4 w-4 text-gray-600" />
            </button>
            <button
              type="button"
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
            >
              <ListOrdered className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
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
          Save & Next
          <span className="text-lg">→</span>
        </button>
      </div>
    </form>
  );
};
export default FoundingInfo;
