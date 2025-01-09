import { Search, MapPin, SlidersHorizontalIcon } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex-1 flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by: Job title, Position, Keyword..."
          className="w-full outline-none text-sm"
        />
      </div>

      <div className="flex-1 flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
        <MapPin className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="City, state or zip code"
          className="w-full outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
          <SlidersHorizontalIcon className="w-5 h-5" />
          <span className="text-sm font-medium">Filters</span>
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          Find Job
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
