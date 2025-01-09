import { Briefcase } from 'lucide-react';
import SignInForm from './SignInForm/SignInForm';
import image from '../../assets/image_upscaled.png';
import { Link } from 'react-router-dom';
function SignIn() {
  return (
    <div className="min-h-screen flex w-full">
      {/* Left Side - Sign In Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex items-center text-black text-2xl font-bold">
              <Briefcase className="h-8 w-8 mr-2 text-blue-700" />
              JobPilot
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Don't have account?{' '}
              <Link
                to="/sign-up"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Create Account
              </Link>
            </p>
          </div>
          <SignInForm />
        </div>
      </div>

      {/* Right Side - Stats */}
      <div className="hidden lg:flex flex-1 relative">
        <div className="absolute" />
        <img
          className="absolute w-full h-full "
          src={image}
          alt="Office background"
        />
      </div>
    </div>
  );
}

export default SignIn;
