import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopHeader = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currrentPage, setCurrentPage] = useState('Home');
  const handleClick = (e: string) => {
    setCurrentPage(e);
  };
  const result = location.pathname.slice(1);
  return (
    <nav className="bg-[#F1F2F4] border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className={`text-gray-700 hover:text-blue-600 ${
                  result === ''
                    ? ' border-b-2 border-blue-600 !text-blue-700 pb-1'
                    : ''
                }`}
                onClick={() => handleClick('')}
              >
                Home
              </Link>
              <Link
                to="/find-job"
                className={`text-gray-700 hover:text-blue-600 ${
                  result === 'find-job'
                    ? '!text-blue-600 border-b-2 border-blue-600 pb-1'
                    : ''
                }`}
                onClick={() => handleClick('Find Job')}
              >
                Find Job
              </Link>
              <Link
                to="/find-employers"
                className={`text-gray-700 hover:text-blue-600 ${
                  result === 'find-employers'
                    ? '!text-blue-600 border-b-2 border-blue-600 pb-1'
                    : ''
                }`}
                onClick={() => handleClick('Employers')}
              >
                Employers
              </Link>
              <Link
                to=""
                className={`text-gray-700 hover:text-blue-600 ${
                  result === 'Candidates'
                    ? '!text-blue-600 border-b-2 border-blue-600 pb-1'
                    : ''
                }`}
                onClick={() => handleClick('Candidates')}
              >
                Candidates
              </Link>
              <Link
                to=""
                className={`text-gray-700 hover:text-blue-600 ${
                  currrentPage === 'Pricing Plans'
                    ? '!text-blue-600 border-b-2 border-blue-600 pb-1'
                    : ''
                }`}
                onClick={() => handleClick('Pricing Plans')}
              >
                Pricing Plans
              </Link>
              <Link
                to=""
                className={`text-gray-700 hover:text-blue-600 ${
                  currrentPage === 'Customer Supports'
                    ? '!text-blue-600 border-b-2 border-blue-600 pb-1'
                    : ''
                }`}
                onClick={() => handleClick('Customer Supports')}
              >
                Customer Supports
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 cursor-pointer">
              +1-202-555-0178
            </span>
            <select className="border border-gray-300 rounded-md p-1 text-gray-700">
              <option value="en">English</option>
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`z-[9999] md:hidden fixed top-0 left-0 w-[50%] h-full bg-gray-800 transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* X Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-[6px]  text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg focus:outline-none"
          >
            X
          </button>
          <a
            href="#"
            className="block text-white hover:text-blue-200 py-3 px-4 mt-10"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-200 py-3 px-4"
          >
            Find Job
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-200 py-3 px-4"
          >
            Employers
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-200 py-3 px-4"
          >
            Candidates
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-200 py-3 px-4"
          >
            Pricing Plans
          </a>
          <a
            href="#"
            className="block text-white hover:text-blue-200 py-3 px-4"
          >
            Customer Supports
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopHeader;
