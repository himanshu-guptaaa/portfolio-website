
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const GsapComponent = () => {
//   const raceWrapperRef = useRef(null);

//   useEffect(() => {
//     gsap.to(".races h2", {
//       xPercent: -90,
//       ease: "none",
//       scrollTrigger: {
//         trigger: raceWrapperRef.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//         pin: raceWrapperRef.current,
//       },
//     });
//   }, []);

//   return (
//     <div className="relative h-screen" ref={raceWrapperRef}>
//       <div className="races flex items-center justify-center h-full">
//         <h2 className="text-[9vw] uppercase font-semibold text-blue-600 tracking-tight whitespace-nowrap">
//           When Love and skills work together, expect.............
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default GsapComponent;


