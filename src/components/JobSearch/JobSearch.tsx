import React from 'react';
import { Search, MapPin } from 'lucide-react';

interface JobSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  location: string;
  setLocation: (location: string) => void;
}

function JobSearch({
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
}: JobSearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { searchQuery, location });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Job title, keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border   outline-none"
        />
      </div>
      <div className="flex-1 relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border    outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-8 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Find Job
      </button>
    </form>
  );
}

export default JobSearch;
