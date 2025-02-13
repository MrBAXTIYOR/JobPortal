import { useState } from 'react';
import { X } from 'lucide-react';

const Filter = ({isFilter}: any) => {
  const [salary, setSalary] = useState([70000, 120000]);
  const [activeFilters, setActiveFilters] = useState([
    { id: 1, label: 'UI/UX', type: 'search' },
    { id: 2, label: 'Prague, Czech', type: 'location' },
    { id: 3, label: 'Design', type: 'category' },
    { id: 4, label: 'Fulltime', type: 'jobType' },
  ]);

  const industries = [
    'All Category',
    'Developments',
    'Business',
    'Finance & Accounting',
    'IT & Software',
    'Office Productivity',
    'Personal Development',
    'Design',
    'Marketing',
    'Photography & Video',
  ];

  const jobTypes = [
    'Full Time',
    'Part-Time',
    'Internship',
    'Temporary',
    'Contract Base',
  ];
  const salaryRanges = [
    '$10 - $100',
    '$100 - $1,000',
    '$1,000 - $10,000',
    '$10,000 - $100,000',
    '$100,000 up',
  ];

  const removeFilter = (id: number) => {
    setActiveFilters(activeFilters.filter((filter) => filter.id !== id));
  };
  return (
    <div className="absolute top-0 z-10">
      <div className="filter brightness-100">
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-[320px] bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button className="text-blue-500 hover:text-blue-600" onClick={isFilter}>
                  <X size={20} />
                </button>
              </div>

              {/* Active Filters */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Active Filters:</p>
                <div className="flex flex-wrap gap-2">
                  {activeFilters.map((filter) => (
                    <span
                      key={filter.id}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100"
                    >
                      {filter.label}
                      <button
                        onClick={() => removeFilter(filter.id)}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Industry Section */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Industry</h3>
                <div className="space-y-2">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className={`flex items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-50 ${
                        industry === 'Business'
                          ? 'bg-blue-50 text-blue-600'
                          : ''
                      }`}
                    >
                      <span className="text-sm">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Type Section */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Job Type</h3>
                <div className="space-y-2">
                  {jobTypes.map((type, index) => (
                    <label key={index} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="jobType"
                        className="form-radio text-blue-600"
                        defaultChecked={type === 'Full Time'}
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range Section */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Salary (yearly)</h3>
                <div className="px-3">
                  <input
                    type="range"
                    min="70000"
                    max="120000"
                    value={salary[1]}
                    onChange={(e) =>
                      setSalary([salary[0], parseInt(e.target.value)])
                    }
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">
                      ${salary[0].toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-600">
                      ${salary[1].toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  {salaryRanges.map((range, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-2 text-sm"
                    >
                      {range}
                    </div>
                  ))}
                </div>
              </div>

              {/* Remote Job Toggle */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm">Remote Job</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Apply Filter Button */}

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
