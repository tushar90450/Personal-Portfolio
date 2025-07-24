import React from "react";
import Tilt from "react-parallax-tilt";

const SkillsData = [
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoW-PbNnnL4rSdys2ReJ1UFMg4bmZB7jTF7w&s" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    title: "CS Concepts",
    skills: [
      { name: "DSA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmsfWPFdtRpmb0LLvCyorWTDgYbO96kKaYQ&s" },
      { name: "OOPs", logo: "https://cdn-icons-png.flaticon.com/512/4248/4248159.png" },
      { name: "Problem Solving", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyoX36RfD-_2UbWSFxgnsyiP5szrGS_U6laA&s" },
      { name: "DBMS", logo: "https://cdn-icons-png.flaticon.com/512/8637/8637124.png" },
      { name: "Operating System", logo: "https://cdn-icons-png.flaticon.com/512/2172/2172894.png" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Postman", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Azure (Basics)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gradient-to-br from-[#010024] via-[#0a0f3c] to-black text-white px-6 py-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold">Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto font-medium">
          A collection of my technical skills and expertise honed through
          various projects and experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {SkillsData.map((category) => (
          <div
            key={category.title}
            className="bg-[#1b1a2e] border border-[#282647] rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_#8245ec66] transition-all duration-300 h-full"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
              <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-200 mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 p-2 sm:p-3 border border-[#3a3753] rounded-xl hover:bg-[#28244d] transition-all"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
                    />
                    <span className="text-sm sm:text-base text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
