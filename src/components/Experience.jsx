// src/components/Experience/Experience.jsx
import React from "react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Trainee",
    company: "W3Grads – GLA University",
    date: "June 2025 – July 2025",
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQFvsaWmzYiYhA/company-logo_200_200/company-logo_200_200/0/1660026906523/w3grads_logo?e=2147483647&v=beta&t=CC4Zp2fhr8CR69LAI-jfwTnSNq8HLhbsufpbxu8lK-I",
    desc: `Completed a 45-day summer training focused on full stack web development and startup fundamentals. 
Built scalable web solutions using modern tech and explored startup strategies through real-world simulations.`,
    skills: [
      "Full Stack Development",
      "Startup Fundamentals",
      "Product Design",
      "React.js",
      "Node.js",
      "MongoDB",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-4 sm:px-[6vw] bg-gradient-to-br from-[#010024] via-[#0a0f3c] to-black w-full text-white flex justify-center items-center"
    >
      <div className="w-full max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white tracking-wide">
            TRAINING & EXPERIENCE
          </h2>
        </div>

        {/* Experience Box */}
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="w-full max-w-3x2 h-[500px] mx-auto bg-[#1a112f] border border-[#5b2eeb] p-10 rounded-3xl shadow-[0_0_60px_4px_rgba(130,69,236,0.3)] overflow-y-auto custom-scrollbar transition-all duration-500 hover:scale-[1.03]"
          >
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-50 h-50 bg-white rounded-lg overflow-hidden border border-[#8245ec] shadow-md">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-[#b692f6]">
                  {experience.role}
                </h3>
                <h4 className="text-lg text-gray-300">
                  {experience.company}
                </h4>
                <p className="text-sm text-gray-400 mt-1">{experience.date}</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-base">
              {experience.desc}
            </p>

            <div className="mt-6">
              <h5 className="font-semibold text-white text-lg mb-3">
                Skills Covered:
              </h5>
              <ul className="flex flex-wrap">
                {experience.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-[#8245ec] text-white px-4 py-1 text-sm rounded-full mr-3 mb-3 shadow-sm hover:bg-[#6d30d4] transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
