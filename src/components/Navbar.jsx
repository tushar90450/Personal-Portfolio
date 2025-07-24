import React from "react";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md border-b border-gray-800 px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white text-2xl font-bold">
        <FaUserTie className="text-white text-4xl hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
          <span className="hidden sm:inline tracking-wider text-blue-600">Portfolio</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-semibold">
          {["About", "Skills", "Experience", "Projects", "Education"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white relative group transition duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
<div className="flex gap-5 items-center">
  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-3xl hover:text-purple-400 transition-colors duration-300"
  >
    <FaGithub color="white" />
  </a>
  <a
    href="https://linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-3xl hover:text-purple-400 transition-colors duration-300"
  >
    <FaLinkedin color="white" />
  </a>
</div>  
      </div>
    </nav>
  );
};

export default Navbar;
