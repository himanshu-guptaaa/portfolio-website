import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
// import Interest from "./components/interest.jsx"; // Try with .js extension in import


// import GsapComponent from "./components/gsap";

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);


function App() {
  return (
    <div className="App">
      <Navbar />

      
      <div id="home">
      <Home />
      </div>
      {/* <div>
        <GsapComponent/>
      </div> */}
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Projects />
      </div>
      {/* <div id="interst">
      <Interest />
      </div> */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
