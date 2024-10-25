import React, { useState } from 'react';

const Navbar = () => {
  // State to toggle menu visibility on mobile
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu on mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      {/* Button for mobile menu toggle */}
      <div className="flex justify-between items-center">
        <h1 className="text-white text-lg">.</h1>
        <button 
          onClick={toggleMenu} 
          className="text-white sm:hidden focus:outline-none"
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Desktop menu and mobile menu (shown based on state) */}
      <ul className={`sm:flex flex-col sm:flex-row gap-2 md:gap-12 justify-center items-center ${isOpen ? 'block' : 'hidden'} sm:block`}>
        <li><a href="#home" className="text-white text-lg hover:bg-blue-200 p-1 rounded-lg">Home</a></li>
        <li><a href="#about" className="text-white text-lg hover:bg-blue-200 p-1 rounded-lg">About</a></li>
        <li><a href="#skills" className="text-white text-lg hover:bg-blue-200 p-1 rounded-lg">Skills</a></li>
        <li><a href="#projects" className="text-white text-lg hover:bg-blue-200 p-1 rounded-lg">Projects</a></li>
        <li><a href="#contact" className="text-white text-lg hover:bg-blue-200 p-1 rounded-lg">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
