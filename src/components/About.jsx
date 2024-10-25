import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-black text-blue-100">
      <div className="container mx-auto text-center px-4 sm:px-0">
        <h2 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-8 text-blue-200 italic">About Me</h2>
        <div className="text-lg sm:text-3xl leading-relaxed max-w-xl sm:max-w-3xl mx-auto font-normal">
          <p className="mb-6">
            <span className="font-semibold text-blue-200">Full Stack Developer</span> with experience in leading projects from startups to large-scale applications.
          </p>
          <p className="mb-6">
            Skilled in <span className="font-semibold text-blue-200">Web Development</span>, <span className="font-semibold text-blue-200">Startups</span>, and <span className="font-semibold text-blue-200">Leadership</span>, I guide teams to success.
          </p>
          <p>
            I’m passionate about <span className="font-semibold text-blue-200">learning</span>, excelling at <span className="font-semibold text-blue-200">project management</span>, fostering <span className="font-semibold">collaboration</span>, and driving <span className="font-semibold">growth</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
