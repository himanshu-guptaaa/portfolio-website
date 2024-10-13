import React from 'react';

const skills = [
  "Python",
  "Machine Learning",
  "JavaScript",
  "React",
  "NEXT.JS",
  "Tailwind",
  "GSAP",
  "MongoDB",
  "Pixel Art"
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-black text-blue-100 overflow-hidden">
      
      {/* Background Video */}
      <video
        src="/public/redsmoke.mp4" // Ensure the correct path to your video file
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8 text-blue-200 italic">Skills</h2>
        <div className="flex flex-col items-center">
          {skills.map((skill, index) => (
            <div key={index} className="w-full max-w-4xl py-4 border-b border-white-400">
              <p className="text-2xl font-semibold italic">{skill}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Overlay to darken video for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

    </section>
  );
};

export default Skills;
