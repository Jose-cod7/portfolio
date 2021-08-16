import React from "react";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js";
// import { ParticlesMode } from "./components/Particles";
import Timeline from "./components/Timeline.js";
import Projects from "./components/Projects.js";

import NavBar from "./components/NavBar.js";

export const MainInfo = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutMe path="/aboutme" />
      <Timeline />
      <Projects />
    </div>
  );
};
