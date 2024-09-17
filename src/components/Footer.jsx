import React from 'react';

const Footer = () => {
  return (
    <footer className="w-screen bg-gray-900 text-white py-6 md:py-12 mb-0">
      <div className="container mx-auto px-4 text-center">
        <p className="text-base md:text-lg">
          Designed and Developed by <span className="font-bold">Eisha Farooq</span> using React.js and Tailwind CSS
        </p>
        
        <div className="mt-4 flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm md:text-lg">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#work" className="hover:text-gray-400">Resume</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        <div className="mt-6">
          <p className="text-sm md:text-lg">© 2024 Eisha Farooq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
