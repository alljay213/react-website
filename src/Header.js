import React from "react";

const Header = () => {
  return (
    <header className="font-mono bg-blue-700 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">all jay</div>
        <div className="flex space-x-4">
          <a
            href="#home"
            className="ease-in-out duration-300 px-2 rounded hover:bg-white hover:text-blue-700"
          >
            Home
          </a>
          <a
            href="#about"
            className="ease-in-out duration-300 px-2 rounded hover:bg-white hover:text-blue-700"
          >
            About
          </a>
          <a
            href="#contact"
            className="ease-in-out duration-300 px-2 rounded hover:bg-white hover:text-blue-700"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
