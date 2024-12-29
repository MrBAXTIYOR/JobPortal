import JobCard from '../../../components/JobCard/JobCard';
import Container from '../../../container/Container';
import { jobs } from '../../../data/jobs';

const FeaturedJobs = () => {
  return (
    <Container>
      <div className="py-8 sm:py-12 lg:py-16">
        <div className=" px-4 sm:px-6">
          <div className="flex sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
              Featured job
            </h2>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 flex items-center border-b-2 border-transparent hover:border-blue-600 focus:outline-none transition-all"
            >
              View All
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default FeaturedJobs;
