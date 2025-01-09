import {
  Facebook,
  MapPin,
  Building2,
  Calendar,
  GraduationCap,
  Clock,
  Copy,
  Linkedin,
  Mail,
} from 'lucide-react';
const JobDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="py-4 px-6 border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <span>/</span>
            <a href="#" className="hover:text-blue-600">
              Find Job
            </a>
            <span>/</span>
            <a href="#" className="hover:text-blue-600">
              Graphics & Design
            </a>
            <span>/</span>
            <span className="text-gray-400">Job Details</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">
                      Senior UX Designer
                    </h1>
                    <div className="flex gap-4">
                      <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg">
                        Save
                      </button>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                        Apply Now
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-600">at Facebook</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      FULL-TIME
                    </span>
                    <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">
                      Featured
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <p className="text-gray-600 mb-4">
                  Velstar is a Shopify Plus agency, and we partner with brands
                  to help them grow, we also do the same with our people!
                </p>
                <p className="text-gray-600 mb-4">
                  Here at Velstar, we don't just make websites, we create
                  exceptional digital experiences that consumers love. Our team
                  of designers, developers, strategists, and creators work
                  together to push brands to the next level.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4">
                  Requirements
                </h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>3+ years of experience in back-end development</li>
                  <li>
                    Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
                    Laravel
                  </li>
                  <li>
                    Working regularly with APIs and Web Services (REST, GraphQL,
                    SOAP, etc)
                  </li>
                  <li>
                    Familiarity with version control and project management
                    systems
                  </li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4">Benefits</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Healthcare package</li>
                  <li>28 days holiday (including bank holidays)</li>
                  <li>Generous annual bonus</li>
                  <li>Free Breakfast on Mondays</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Job Overview</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Salary (USD)</p>
                      <p className="font-medium">$100,000 - $120,000</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Yearly salary</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">On-site</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date Posted</p>
                      <p className="font-medium">14 Jun, 2021</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-medium">3-5 years</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Education</p>
                      <p className="font-medium">Bachelor Degree</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Job Benefits</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm">
                  401k Salary
                </div>
                <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm">
                  Async
                </div>
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm">
                  Learning budget
                </div>
                <div className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-lg text-sm">
                  Vision Insurance
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Share this job:</h2>
                <button className="text-blue-600 flex items-center gap-2">
                  <Copy className="w-4 h-4" />
                  Copy Link
                </button>
              </div>
              <div className="flex gap-4">
                <button className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </button>
                <button className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </button>
                <button className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default JobDetail;
