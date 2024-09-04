import React from 'react';

const Model1 = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute -top-20 -left-20 w-[200%] h-[200%] text-blue-300 opacity-50" fill="none" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-[200%] h-[200%] text-teal-300 opacity-50" fill="none" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" />
        </svg>
      </div>
      <div className="relative text-center p-6 bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 sm:mx-6 lg:mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Model 1</h1>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          Run Model 1
        </button>
      </div>
    </div>
  );
};

export default Model1;
