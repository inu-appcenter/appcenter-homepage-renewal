import React from 'react';

const SignInContainer = ({ children }: { children: React.ReactNode }) => (
  <div className='flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-50 to-white p-4 dark:from-gray-900 dark:to-gray-800'>
    {children}
  </div>
);

export default SignInContainer;
