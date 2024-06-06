import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Connect with me on:{" "}
          <a href="#" className="underline hover:text-blue-400">
            Twitter
          </a>{" "}
          |{" "}
          <a href="#" className="underline hover:text-blue-400">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="#" className="underline hover:text-blue-400">
            GitHub
          </a>
        </p>
        <p className="text-xs mt-2">
          &copy; {new Date().getFullYear()} All Jay Gaco. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
