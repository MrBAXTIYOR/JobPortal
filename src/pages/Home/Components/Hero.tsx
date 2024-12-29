import { useState } from 'react';
import JobSearch from '../../../components/JobSearch/JobSearch';
import hero_img from '../../../assets/hero_img.svg';
import Container from '../../../container/Container';
const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  return (
    <Container>
      <div className="px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find a job that suits
            <br />
            your interest & skills.
          </h1>
          <p className="text-gray-600 mb-8">
            Discover thousands of job opportunities with all the information you
            need. Its your future.
          </p>
          <JobSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            location={location}
            setLocation={setLocation}
          />
          <div className="mt-4 text-sm text-gray-600">
            <span className="font-medium">Popular:</span>{' '}
            <span className="space-x-2">
              {['Designer', 'Developer', 'Marketing', 'Sales', 'Finance'].map(
                (tag) => (
                  <button
                    key={tag}
                    className="hover:text-blue-600"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </button>
                ),
              )}
            </span>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={hero_img}
            alt="Job search illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </Container>
  );
};
export default Hero;
