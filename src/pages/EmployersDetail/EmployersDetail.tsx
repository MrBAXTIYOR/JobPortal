import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { jobs } from '../../data/jobs';
import JobCard from '../../components/JobCard/JobCard';

const EmployersDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#F1F2F4] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between">
          <h1 className="text-xl font-semibold text-gray-900">
            Find Employers
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <span>Home</span>
            <span>/</span>
            <span className="text-gray-900 ">Find Employers</span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[300px] w-full">
        <img
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
          alt="Instagram Background"
          className="w-full h-full object-cover"
        />

        {/* Company Logo & Title Overlay */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-32 md:translate-x-0 flex items-center gap-4 bg-white p-6 rounded-lg shadow-md">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Twitter</h1>
            <p className="text-gray-600 text-sm">Information Technology (IT)</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Description */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                Fusce et erat at nibh maximus fermentum. Mauris ac justo nibh.
                Praesent nec lorem ipsum. Donec ullamcorper lacus mollis tortor
                pretium malesuada. In quis porta nisi, dapibus orci. Donec
                porttitor, odio a efficitur blandit, orci nisi porta elit, eget
                vulputate quam nibh ut tellus.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Company Benefits</h2>
              <p className="text-gray-600 mb-4">
                Donec dignissim nunc eu tellus malesuada fermentum. Sed blandit
                in magna at accumsan. Etiam imperdiet massa aliquam, consectetur
                leo in, auctor neque.
              </p>
              <ul className="pl-5 text-gray-600 space-y-2">
                <li>In hac habitasse platea dictumst.</li>
                <li>
                  Sed aliquet, arcu eget pretium bibendum, odio enim rutrum
                  arcu.
                </li>
                <li>Vestibulum id vestibulum odio.</li>
                <li>
                  Etiam libero ante accumsan id tellus venenatis rhoncus
                  vulputate velit.
                </li>
                <li>Nam condimentum sit amet ipsum id malesuada.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Company Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Praesent ultrices mauris at nisi eleifend, ut venenatis augue
                blandit. Etiam massa risus, accumsan nec tempus nec, venenatis
                in nisi. Maecenas nulla ex, blandit in magna id, pellentesque
                facilisis sapien.
              </p>
            </section>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                View Open Position →
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
              <div>
                <h3 className="text-sm text-gray-500 mb-1">FOUNDED IN</h3>
                <p>14 June, 2021</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">
                  ORGANIZATION TYPE
                </h3>
                <p>Private Company</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">TEAM SIZE</h3>
                <p>120-300 Candidates</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">INDUSTRY TYPES</h3>
                <p>Technology</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">WEBSITE</h3>
                <a href="#" className="text-blue-500 hover:underline">
                  www.esther.howard.com
                </a>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">PHONE</h3>
                <p>+1-202-555-0141</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-500 mb-1">EMAIL ADDRESS</h3>
                <p>esther.howard@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm text-gray-500 mb-4">Follow us on:</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-4xl mb-5 mt-5">Related Jobs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard {...job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployersDetail;
