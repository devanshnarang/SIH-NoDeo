import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Deepfake Detection Models</h1>
        <div className="flex space-x-4 justify-center">
          <a href="/model1" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
            Model 1
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
