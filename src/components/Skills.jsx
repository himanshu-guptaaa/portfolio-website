import React from 'react';

const skills = [
  "Python",
  "MAchine Learing",
  "JavaScript",
  "React",
  "NEXT.JS",
  "Tail-wind",
  "GSAP",
  "MongoDB",
  "Pixel Art"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-blue-100 bg-[url('/public/download.jpeg')] bg-cover bg-center">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8 text-blue-200 italic">Skills</h2>
        <div className="flex flex-col items-center">
          {skills.map((skill, index) => (
            <div key={index} className="w-full max-w-4xl py-4 border-b border-white-400">
              <p className="text-2xl font-semibold italic">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
