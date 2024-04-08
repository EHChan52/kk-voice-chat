import './App.css'
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Login = ({ onLogin }) => {
  const [inputUsername, setInputUsername] = useState('');

  const handleLogin = () => {
    onLogin(inputUsername);
  };

  const handleInputChange = (event) => {
    setInputUsername(event.target.value);
  };

  return (
    <div className="max-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Set a username to start
          </h2>
        </div>
        <div class="flex flex-col space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 text-left">Username</label>
            <input type="text" id="username" name="username" onChange={handleInputChange} class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
          </div>
        </div>
        <button onClick={handleLogin} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
