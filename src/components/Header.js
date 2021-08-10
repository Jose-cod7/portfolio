import React from "react";
import Typed from "react-typed"; //Use react typed dependencie to show typed words in the screen

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1 className="skills" style={{ fontSize: "2rem" }}>
          TECH SKILLS:
        </h1>
        <Typed
          className="typed-text"
          strings={[
            "HTML",
            "CSS",
            "JS",
            "React",
            "Node.Js",
            "Express",
            "PostgreSql",
            "GIT",
            "GITHUB",
          ]}
          typeSpeed={180}
          backSpeed={70}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
