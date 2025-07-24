// src/components/Education/Education.jsx
import React from "react";
import gla from "../assets/gla_logo.png"
const education = [
  {
    id: 0,
    img:gla, // Direct image URL instead of glaLogo
    school: "GLA University, Mathura",
    date: "Aug 2023 – May 2027",
    grade: "8.51 CGPA",
    degree: "Bachelor of Technology - B.Tech (Computer Science & Engineering)",
    desc: "I'm currently pursuing B.Tech in Computer Science & Engineering at GLA University, Mathura. My coursework includes Data Structures, Algorithms, OOPs, DBMS, OS, CN, and Full-Stack Web Development. I’ve built hands-on projects using the MERN stack, participated in coding contests, and actively engaged in hackathons and tech events. This academic journey is sharpening my problem-solving, development, and teamwork skills to prepare me for the tech industry.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[10vw] bg-gradient-to-br from-[#010024] via-[#0a0f3c] to-black text-white font-sans min-h-screen flex flex-col justify-center items-center"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Education Card */}
      <div className="flex justify-center">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="w-full sm:max-w-3xl p-8 sm:p-12 rounded-2xl shadow-[0_0_30px_2px_rgba(130,69,236,0.4)] border border-[#ffffff1a] bg-[#1a1a2e] backdrop-blur-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 mb-8">
              {/* School Logo */}
              <div className="w-48 h-38 bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                <h4 className="text-lg text-gray-300 mt-1">{edu.school}</h4>
                <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
              </div>
            </div>

            <p className="text-gray-300 font-semibold mb-2">
              Grade: <span className="text-white">{edu.grade}</span>
            </p>
            <p className="text-gray-400 leading-relaxed">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
