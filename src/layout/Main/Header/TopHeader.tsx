import { useState } from 'react';

const TopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F1F2F4] border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Find Job
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Employers
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Candidates
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Pricing Plans
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Customer Supports
              </a>
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
            <span className="text-gray-700">+1-202-555-0178</span>
            <select className="border border-gray-300 rounded-md p-1 text-gray-700">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`z-[9999] md:hidden fixed top-0 left-0 w-64 h-full bg-gray-800 transition-transform duration-300 ${
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
