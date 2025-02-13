import { useLocation } from 'react-router-dom';
import JobList from './Components/JobList';
import ProfileAlert from './Components/ProfileAlert';
import Sidebar from './Components/Sidebar';
import StatCard from './Components/StatCard';
import { ExternalLink } from 'lucide-react';
import { favoritejobs } from '../../data/data';
import { MapPin, Clock, Bookmark, ArrowRight } from 'lucide-react';
import Pagination from '../../components/Pagination/Pagination';
import { jobs } from '../../data/data';
import SettingsTab from './Components/SettingsTab';

const Dashboard = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {location.pathname === '/dashboard' && (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-semibold mb-1">
                  Hello, Esther Howard
                </h1>
                <p className="text-gray-600">
                  Here is your daily activities and job alerts
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard type="applied" count={589} />
                <StatCard type="favorite" count={238} />
                <StatCard type="alerts" count={574} />
                <StatCard type="alerts" count={574} />
              </div>

              <div className="mb-8">
                <ProfileAlert />
              </div>

              <JobList />
            </>
          )}

          {location.pathname === '/dashboard/applied-jobs' && (
            <>
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-10 h-10 rounded"
                      />
                      <div>
                        <div className="font-medium">{job.position}</div>
                        <div className="flex items-center text-sm text-gray-500 space-x-2">
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {job.date}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {job.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                      <span>View Details</span>
                      <ExternalLink size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </>
          )}

          {location.pathname === '/dashboard/favorite-jobs' && (
            <div className="space-y-3">
              {favoritejobs.map((job) => (
                <div
                  key={job.id}
                  className={`bg-white rounded-lg p-4 ${
                    job.id === 3 ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={job.company.logo}
                      alt={job.company.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h2 className="text-base font-medium text-gray-900">
                          {job.title}
                        </h2>
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                          {job.type}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">$</span>
                          {job.salary.replace('$', '')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {job.deadline}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Bookmark size={20} />
                      </button>
                      {job.isExpired ? (
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-500 text-sm rounded">
                          Deadline Expired
                        </span>
                      ) : (
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded hover:bg-blue-100">
                          Apply Now
                          <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <Pagination />
            </div>
          )}

          {location.pathname === '/dashboard/job-alert' && (
            <div className="space-y-3">
              {favoritejobs.map((job) => (
                <div
                  key={job.id}
                  className={`bg-white rounded-lg p-4 ${
                    job.id === 3 ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={job.company.logo}
                      alt={job.company.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <h2 className="text-base font-medium text-gray-900">
                          {job.title}
                        </h2>
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                          {job.type}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">$</span>
                          {job.salary.replace('$', '')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {job.deadline}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Bookmark size={20} />
                      </button>
                      {job.isExpired ? (
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-500 text-sm rounded">
                          Deadline Expired
                        </span>
                      ) : (
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded hover:bg-blue-100">
                          Apply Now
                          <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <Pagination />
            </div>
          )}

          {location.pathname === '/dashboard/settings' && (
            <>
              <SettingsTab />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
