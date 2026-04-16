import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-500">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-[#244D3F] text-white rounded-lg hover:bg-[#18382d] transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;