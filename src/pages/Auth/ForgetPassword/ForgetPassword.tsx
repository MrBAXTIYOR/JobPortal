import { Briefcase, Facebook } from 'lucide-react';
import ForgotPasswordForm from './ForgetPasswordForm';
import image from '../../../assets/image_upscaled.png';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex items-center text-black text-2xl font-bold">
              <Briefcase className=" text-blue-700 h-8 w-8 mr-2" />
              JobPilot
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Forget Password
            </h2>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-gray-600">Go back to </span>
              <Link
                to="/sign-in"
                className="ml-1 font-medium text-blue-600 hover:text-blue-500"
              >
                Sign In
              </Link>
            </div>
            <div className="mt-1 flex items-center text-sm">
              <span className="text-gray-600">Don't have account? </span>
              <Link
                to="/sign-up"
                className="ml-1 font-medium text-blue-600 hover:text-blue-500"
              >
                Create Account
              </Link>
            </div>
          </div>

          <ForgotPasswordForm />

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <Facebook className="h-5 w-5 text-blue-600" />
                <span className="ml-2">Facebook</span>
              </button>
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                  />
                </svg>
                <span className="ml-2">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Stats */}
      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute " />
        <img
          className="absolute inset-0 w-full h-full "
          src={image}
          alt="Office background"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
