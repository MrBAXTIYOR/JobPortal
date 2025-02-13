import { ExternalLink } from 'lucide-react';
import { jobs } from '../../../data/data';

const JobList = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recently Applied</h2>
        <a href="#" className="text-blue-600 hover:underline text-sm">
          View all
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                Job
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                Date Applied
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
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
                <td className="px-4 py-3 text-sm text-gray-500">{job.date}</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
