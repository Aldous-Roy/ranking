import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">LeetRank</div>
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/update" className="text-gray-300 hover:text-white">Update</Link>
          <Link to="/board" className="text-gray-300 hover:text-white">Leader Board</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden grid gap-5 overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100 pt-10' : 'max-h-0 opacity-0'
        }`}>
        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link to="/update" className="text-gray-300 hover:text-white">Update</Link>
        <Link to="/board" className="text-gray-300 hover:text-white">Leader Board</Link>
        <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
