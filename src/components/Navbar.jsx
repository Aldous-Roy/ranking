import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Yet To Name</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Update</a>
          <a href="#" className="text-gray-300 hover:text-white">Leader Board</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
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
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-gray-300 hover:text-white py-2 px-4">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white py-2 px-4">Update</a>
          <a href="#" className="block text-gray-300 hover:text-white py-2 px-4">Leader Board</a>
          <a href="#" className="block text-gray-300 hover:text-white py-2 px-4">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;