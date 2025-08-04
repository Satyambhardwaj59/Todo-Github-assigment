import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">Welcome to My App</h1>
        <p className="text-gray-700 mb-8">Choose a page to get started:</p>

        <div className="flex flex-col gap-4">
          <Link to="/todo" className="group">
            <button className="flex items-center justify-center w-full gap-2 bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 shadow-md group-hover:scale-105">
              <FaTasks className="text-xl" />
              Todo Page
            </button>
          </Link>

          <Link to="/github" className="group">
            <button className="flex items-center justify-center w-full gap-2 bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-md group-hover:scale-105">
              <FaGithub className="text-xl" />
              Github Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
