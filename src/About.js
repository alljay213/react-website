import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-sky-300 to-cyan-100 text-gray-800 py-20"
    >
      <div className="text-blue-950 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="path_to_your_image.jpg"
              alt="Your Name"
              className="rounded-full w-full h-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-lg mb-4">
              Hello! I'm All Jay Gaco, a Front End Web Developer with a passion
              for creating beautiful websites for businesses. I have 1 years of
              experience in Web Development and have worked on various projects
              related to Front End Web Design. My skills include HTML, CSS,
              Javascript, React.js and more.
            </p>
            <p className="text-lg mb-4">
              In my free time, I enjoy working out, playing League of Legends and I am always eager to
              learn new things and take on new challenges. I am currently
              looking for opportunities in Web Development as a Front End Developer.
            </p>
            <p className="text-lg">
              Feel free to explore my portfolio and reach out if you'd like to
              collaborate on a project or just say hello!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
