import React from "react";
import Typed from "react-typed"; //Use react typed dependencie to show typed words in the screen
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("translation");
  return (
    <div className="header-wraper">
      <div className="main-info">
        {/* <div>
          <button onClick={() => i18n.changeLanguage("es")}>ES</button>
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </div> 
        
        posicionar el botton bottom: 348px;
    position: absolute;
    right: 100px;
        */}
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
