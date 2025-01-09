import { Link } from 'react-router-dom';

import JobCard from '../../components/JobCard/JobCard';
import Pagination from '../../components/Pagination/Pagination';

import SearchBar from './Components/SearchBar';
import PopularSearches from './Components/PopularSearches';

import { jobs } from '../../data/jobs';

const FindJob = () => {
  return (
    <div className="min-h-screen ">
      <header className="bg-[#F1F2F4] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Find Job</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-900 ">Find job</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar />
        <PopularSearches />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Link to="/find-job/detail">
              <JobCard key={job.title} {...job} />
            </Link>
          ))}
        </div>

        <Pagination />
      </main>
    </div>
  );
};
export default FindJob;
