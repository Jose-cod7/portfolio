import React from 'react';
import Typed from "react-typed"; //Use react typed dependencie to show typed words in the screen

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>SKILLS:</h1>
                <Typed className="typed-text" 
                strings={["Web Development", "JS", "Node.Js", "React", "Express.JS", "PostgreSql"]}
                typeSpeed={55}
                backSpeed={60}
                loop />
                <a target="blank" href="https://drive.google.com/file/d/1Emk6F4hfo3yCnxkuWPdObW7bjdi7gq6f/view?usp=sharing" className="btn-main-cv" download><img src="https://img.icons8.com/nolan/64/open-resume.png" alt="donwload icon"/></a><div className="downloadcv">Download CV</div>
                
            </div>
        </div>
        
        
    )
}

export default Header;
