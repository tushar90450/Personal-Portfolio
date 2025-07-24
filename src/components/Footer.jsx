import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white px-[8vw] py-10 font-sans">
      <div className="text-center">
        {/* Name */}
        <h2 className="text-2xl font-bold text-purple-500 mb-3">Tushar Singh</h2>

        {/* Navigation Links as plain white text */}
        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base font-medium mb-5">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <span
              key={index}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer text-white hover:text-purple-400 transition-all duration-300"
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Only LinkedIn Icon */}
        <div className="flex justify-center mt-4 mb-6 ">
          <a
            href="https://www.linkedin.com/in/tushar-596944301/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025 <span className="text-purple-500">Tushar Singh</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
