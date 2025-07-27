import React from 'react';
import profileImage from '../assets/profile2.png';

const About = () => {
  return (
    <section id="about"
    className="w-screen min-h-screen bg-gradient-to-br from-[#010024] via-[#0a0f3c] to-black text-white flex items-center justify-center px-10 md:px-24 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content - Centered and Spaced */}
        <div className="space-y-8 text-center md:text-left md:flex md:flex-col md:items-start md:justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide">
            Hi, I am <br /> Tushar Singh
          </h1>

          <p className="text-3xl md:text-4xl font-semibold text-[#c8ff00]">
            I am a Full Stack Developer.
          </p>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
  Passionate Computer Science undergraduate with a strong foundation in Data Structures and Algorithms using Java. Experienced in full-stack development and AI-driven solutions, with a proven track record in competitive programming and real-world project implementation.
</p>


          <a
  href="/TUSHARRESUME1.pdf"
  download
  className="inline-block py-4 px-10 rounded-full mt-6 text-xl font-bold transition duration-300 transform hover:scale-105 text-white"
  style={{
    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
    color: '#ffffff',
  }}
>
  DOWNLOAD CV
</a>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Developer"
            className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] object-contain drop-shadow-2xl animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
