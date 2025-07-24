import React, { useState } from "react";
import food from "../assets/food.png";
import image from "../assets/image.png";
import cartoon from "../assets/cartoon.png";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Tiffin Tales",
      description:
        "A full-stack MERN platform connecting home-chefs with students and professionals. Enables users to subscribe and order healthy homemade meals with live order tracking. Empowers local women entrepreneurs through a digital storefront.",
      image: food,
      tags: ["MERN", "React", "Node.js", "MongoDB", "Express", "Live Tracking"],
      webapp: "https://tiffintales-nine.vercel.app/",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description:
        "A visually engaging developer portfolio that showcases my skills, projects, and experience as an interactive multiverse. Built using animations, modals, and responsive layouts for a modern dev presence.",
      image: image,
      tags: ["React.js", "TailwindCSS", "Framer Motion", "Responsive UI"],
      webapp: "https://tiffintales-nine.vercel.app/",
    },
    {
  id: 3,
  title: "Cartoon Character Filter App",
  description:
    "A fun web app to search and filter cartoon characters by name and category. Built with HTML, CSS, and JavaScript, featuring responsive cards and real-time search filtering.",
  image: cartoon, // imported as: import cartoon from "../assets/cartoon.png";
  tags: ["HTML","CSS","JS","Search Filter", "Fun UI"],
  webapp: "https://cartoon-characters-lake.vercel.app/", // replace with your actual deployed link
},

  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 w-full min-h-screen bg-gradient-to-br from-[#010024] via-[#0a0f3c] to-black text-white font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my projects, highlighting skills and technologies
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-[#1f1b2e] border border-purple-600 rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-[0_0_25px_#a855f7] hover:ring-2 hover:ring-purple-500 transition-all duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-800 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-[#1e1c2a] rounded-xl shadow-2xl w-[95%] max-w-5xl max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-black text-2xl bg-gray-800 hover:bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 focus:outline-none"
              >
                &times;
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[60vh] object-contain rounded-xl mb-6"
              />
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-700 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {selectedProject.webapp && (
                <div className="text-center">
      <a
  href={selectedProject.webapp}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-2 text-base font-bold text-black bg-white rounded-xl hover:bg-purple-800 transition-all duration-300 ease-in-out"
>
  View Live
</a>


                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
