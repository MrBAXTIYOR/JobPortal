import React, { useState } from 'react';


const EmailVerificationForm = () => {
  const [code, setCode] = useState('');
  const [isLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {};

  const handleResend = async () => {};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Verification Code"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isLoading ? 'Verifying...' : 'Verify My Account'}
      </button>

      <div className="text-center text-sm">
        <span className="text-gray-600">Didn't receive any code? </span>
        <button
          type="button"
          onClick={handleResend}
          className="text-blue-600 hover:text-blue-500 font-medium"
        >
          Resend
        </button>
      </div>
    </form>
  );
};

export default EmailVerificationForm;
