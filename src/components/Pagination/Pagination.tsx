import { ChevronLeft, ChevronRight } from 'lucide-react';
const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <ChevronLeft className="w-5 h-5" />
      </button>
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`w-10 h-10 rounded-lg ${
            page === 1
              ? 'bg-blue-600 text-white'
              : 'hover:bg-gray-100 text-gray-600'
          }`}
        >
          {page}
        </button>
      ))}
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
