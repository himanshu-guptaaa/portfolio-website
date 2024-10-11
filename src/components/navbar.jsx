import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black hover: p-4 flex justify-center items-center ">
      <ul className="flex flex-col sm:flex-row gap-2 md:gap-12 justify-center items-center">
        <li><a href="#home" className="text-white text-lg hover:bg-blue-200 p-1 rounded-lg">Home</a></li>
        <li><a href="#about" className="text-white text-lg hover:bg-blue-200 p-1 rounded-lg">About</a></li>
        <li><a href="#skills" className="text-white text-lg hover:bg-blue-200 p-1 rounded-lg">Skills</a></li>
        <li><a href="#project" className="text-white text-lg hover:bg-blue-200 p-1 rounded-lg">Projects</a></li>
        <li><a href="#contact" className='text-white text-lg hover:bg-blue-200 p-1 rounded-lg'>Contact</a></li>
     </ul>
    </nav>
  );
};

export default Navbar;
