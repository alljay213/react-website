import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className=" bg-gradient-to-b from-blue-700 to-sky-300 text-white h-screen flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold  mb-4 shadow-orange-200">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl mb-8">I'm All Jay, a Front End Web Developer</p>
        <a
          href="#projects"
          className="ease-in-out duration-300 bg-blue-700 hover:bg-blue-950 text-white py-2 px-4 rounded"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
