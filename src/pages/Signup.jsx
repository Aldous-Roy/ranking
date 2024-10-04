// src/components/SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset error message
    setError('');

    // Validate passwords
    if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
    }

    // Handle sign-up logic here
    console.log('Signed up with:', {email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input 
            type="password" 
            id="confirm-password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Confirm Password"
          />
          {error && <p className="text-red-500 text-sm mb-4 pt-2">{error}</p>}
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200">
          Sign Up
        </button>
        <p className=''>Click here to <a className='text-blue-500 hover:text-blue-600 duration-100 transition' href="/login">login</a></p>
      </form>
    </div>
  );
};

export default SignUp;
