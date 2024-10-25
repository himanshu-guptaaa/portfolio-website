import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const himanshuRef = useRef(null);
  const guptaRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

    // Animate "HIMANSHU"
    timeline.fromTo(himanshuRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.5 }
    );

    // Animate "GUPTA"
    timeline.fromTo(guptaRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.8 },
      '-=1.0'
    );

    // Animate "Developer, Love, Startup"
    timeline.fromTo(taglineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.1 }
    );

    // Animate the button
    gsap.fromTo(buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/moon.mp4"  
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-blue-200 bg-black bg-opacity-50">
        {/* Responsive font sizes */}
        <h2 ref={himanshuRef} className="text-4xl sm:text-6xl font-bold italic">HIMANSHU</h2>
        <h2 ref={guptaRef} className="text-3xl sm:text-4xl font-bold italic">GUPTA</h2>
        <p ref={taglineRef} className="mt-4 text-lg sm:text-3xl italic">DEVELOPER, LOVE, STARTUP</p>
        <a
          ref={buttonRef}
          href="#projects"
          className="mt-8 inline-block bg-blue-900 text-blue-100 py-2 px-4 sm:px-6 sm:py-3 text-sm sm:text-lg rounded-lg border-50% italic hover:bg-blue-400 transition duration-300 ease-in-out"
        >
          Let's explore
        </a>
      </div>
    </div>
  );
};

export default Home;
