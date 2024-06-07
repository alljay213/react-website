import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    imageUrl: "path_to_project_one_image.jpg",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    imageUrl: "path_to_project_two_image.jpg",
    link: "#",
  },
  // Add more projects as needed
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    imageUrl: "path_to_project_three_image.jpg",
    link: "#",
  },
  {
    title: "Project Four",
    description: "A brief description of Project Four.",
    imageUrl: "path_to_project_four_image.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-cyan-100 to-sky-300 text-blue-950 py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
