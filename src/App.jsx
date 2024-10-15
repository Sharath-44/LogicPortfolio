// App.jsx
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-gray-700 text-center mb-6">
          This is a simple portfolio page built with React and styled with Tailwind CSS. 
        </p>
        <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
