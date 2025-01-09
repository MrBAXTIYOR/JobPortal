import { Link } from 'react-router-dom';
import { Briefcase, FileSearch } from 'lucide-react';

import TopHeader from './TopHeader';
import Container from '../../../container/Container';

const Header = () => {
  return (
    <header className="border-b">
      <TopHeader />
      <Container>
        <div className="py-3">
          <div className="flex gap-3 items-center justify-between">
            <div className="flex items-center text-blue-600">
              <Link to="/">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">
                    JobPilot
                  </span>
                </div>
              </Link>
            </div>

            <div className="hidden sm:flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2 w-full md:w-96320 lg:w-[668px] h-[50px] mx-auto">
              <div className="flex items-center space-x-2">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India flag"
                  className="w-6 h-4"
                />
                <select className="bg-transparent text-gray-700 text-sm focus:outline-none">
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                </select>
              </div>

              <div className="h-6 border-l border-gray-300 mx-4"></div>

              <div className="flex items-center flex-1">
                <FileSearch className="text-blue-500 w-5 h-5 mr-2" />
                <input
                  type="text"
                  placeholder="Job title, keyword, company"
                  className="w-full bg-transparent text-sm text-gray-700 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row items-center space-y-4  md:space-y-0 md:space-x-6">
              <Link
                to="/sign-in"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign In
              </Link>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Post A Jobs
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
