import { MapPin, Bookmark } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'FULL-TIME' | 'PART-TIME' | 'INTERNSHIP';
}

const JobCard = ({ title, company, location, salary, type }: JobCardProps) => {
  const typeColors = {
    'FULL-TIME': 'bg-blue-100 text-blue-600',
    'PART-TIME': 'bg-green-100 text-green-600',
    INTERNSHIP: 'bg-purple-100 text-purple-600',
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 line-clamp-1">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{company}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-blue-600 transition-colors ml-2">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[type]}`}
        >
          {type.replace('-', ' ')}
        </span>
        <div className="flex items-center text-gray-500 text-xs sm:text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{location}</span>
        </div>
      </div>
      <div className="text-gray-600 text-xs sm:text-sm">Salary: {salary}</div>
    </div>
  );
};

export default JobCard;
