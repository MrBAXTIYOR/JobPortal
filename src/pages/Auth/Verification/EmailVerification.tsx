import { Briefcase } from 'lucide-react';
import EmailVerificationForm from './EmailVerificationForm';

const EmailVerification = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Briefcase className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Email Verification
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We've sent an verification to{' '}
            <span className="font-medium text-gray-900">email</span> to verify
            your email address and activate your account.
          </p>
        </div>

        <EmailVerificationForm />
      </div>
    </div>
  );
};

export default EmailVerification;
