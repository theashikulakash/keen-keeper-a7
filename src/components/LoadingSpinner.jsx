import React from 'react';

const LoadingSpinner = ({ message = 'Loading...' }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-4">
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 border-4 border-[#244D3F] border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-slate-600">{message}</p>
    </div>
  </div>
);

export default LoadingSpinner;
