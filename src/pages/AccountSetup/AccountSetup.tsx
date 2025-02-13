import {
  Building2,
  Info,
  Share2,
  Contact,
  Briefcase,
  Menu,
} from 'lucide-react';
import {  useState } from 'react';
import CompanyInfo from './Components/CompanyInfo';
import FoundingInfo from './Components/FoundingInfo';
import SocialMediaInfo from './Components/SocialMediaInfo';
import ContactInfo from './Components/ContactInfo';

const AccountSetup = () => {
  const [activeTab, setActiveTab] = useState('company');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6">
      <div className="max-w-4xl mx-auto mb-4 sm:mb-8 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
        <div className="flex items-center ">
          <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
          <span className="text-xl font-bold">Jobpilot</span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="text-sm text-gray-500">Setup Progress</div>
          <div className="flex-1 sm:w-48 bg-gray-200 h-2 rounded-full">
            <div className="w-1/4 bg-blue-500 h-2 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-6">
        {/* Mobile Menu Button */}
        <div className="sm:hidden mb-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <span className="flex items-center">
              {activeTab === 'company' && (
                <Building2 className="w-5 h-5 mr-2" />
              )}
              {activeTab === 'founding' && <Info className="w-5 h-5 mr-2" />}
              {activeTab === 'social' && <Share2 className="w-5 h-5 mr-2" />}
              {activeTab === 'contact' && <Contact className="w-5 h-5 mr-2" />}
              {activeTab === 'company' && 'Company Info'}
              {activeTab === 'founding' && 'Founding Info'}
              {activeTab === 'social' && 'Social Media Profile'}
              {activeTab === 'contact' && 'Contact'}
            </span>
            <Menu className="w-5 h-5" />
          </button>

          {mobileMenuOpen && (
            <div className="mt-2 border border-gray-300 rounded-lg overflow-hidden">
              <button
                className={`w-full flex items-center px-4 py-2 text-sm ${
                  activeTab === 'company'
                    ? 'bg-blue-50 text-blue-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => {
                  setActiveTab('company');
                  setMobileMenuOpen(false);
                }}
              >
                <Building2 className="w-5 h-5 mr-2" />
                Company Info
              </button>
              <button
                className={`w-full flex items-center px-4 py-2 text-sm ${
                  activeTab === 'founding'
                    ? 'bg-blue-50 text-blue-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => {
                  setActiveTab('founding');
                  setMobileMenuOpen(false);
                }}
              >
                <Info className="w-5 h-5 mr-2" />
                Founding Info
              </button>
              <button
                className={`w-full flex items-center px-4 py-2 text-sm ${
                  activeTab === 'social'
                    ? 'bg-blue-50 text-blue-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => {
                  setActiveTab('social');
                  setMobileMenuOpen(false);
                }}
              >
                <Share2 className="w-5 h-5 mr-2" />
                Social Media Profile
              </button>
              <button
                className={`w-full flex items-center px-4 py-2 text-sm ${
                  activeTab === 'contact'
                    ? 'bg-blue-50 text-blue-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => {
                  setActiveTab('contact');
                  setMobileMenuOpen(false);
                }}
              >
                <Contact className="w-5 h-5 mr-2" />
                Contact
              </button>
            </div>
          )}
        </div>

        <nav className="hidden sm:flex border-b mb-8">
          <button
            className={`flex items-center px-6 py-3 border-b-2 ${
              activeTab === 'company'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab('company')}
          >
            <Building2 className="w-5 h-5 mr-2" />
            Company Info
          </button>
          <button
            className={`flex items-center px-6 py-3 border-b-2 ${
              activeTab === 'founding'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab('founding')}
          >
            <Info className="w-5 h-5 mr-2" />
            Founding Info
          </button>
          <button
            className={`flex items-center px-6 py-3 border-b-2 ${
              activeTab === 'social'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab('social')}
          >
            <Share2 className="w-5 h-5 mr-2" />
            Social Media Profile
          </button>
          <button
            className={`flex items-center px-6 py-3 border-b-2 ${
              activeTab === 'contact'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab('contact')}
          >
            <Contact className="w-5 h-5 mr-2" />
            Contact
          </button>
        </nav>

        {activeTab === 'company' && <CompanyInfo />}
        {activeTab === 'founding' && <FoundingInfo/>}
        {activeTab === 'social' && <SocialMediaInfo/>}
        {activeTab === 'contact' && <ContactInfo/>}
      </div>

      <div className="max-w-4xl mx-auto text-center text-sm text-gray-500 mt-8">
        © 2021 Jobpilot - Job Board. All rights Reserved
      </div>
    </div>
  );
};
export default AccountSetup;
