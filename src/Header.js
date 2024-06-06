import React from "react";

const Header = () => {
  return (
    <header className="font-mono bg-blue-700 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">all jay</div>
        <div className="flex space-x-4">
          <a href="#home" className="hover:text-blue-300">
            Home
          </a>
          <a href="#about" className="hover:text-blue-300">
            About
          </a>
          <a href="#contact" className="hover:text-blue-300">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
