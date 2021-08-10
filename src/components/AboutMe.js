import React from "react";
import Me from "../images/model.jpg";
import BlueDemon from "../images/me.jpg";
import { Media } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
  return (
    <div className="about-me container-fluid">
      <div className="row">
        <div className="col-xl">
          <Media className="media-comp">
            <img
              width={250}
              height={230}
              className=" image-me "
              src={Me}
              alt="Generic placeholder"
            />
            <Media.Body className="media-body">
              <h3 id="ABOUT_ME" className="aboutme-title">
                ABOUT ME
              </h3>
              <p className="p-me" style={{ textAlign: "justify" }}>
                I completed a degree in the field of industrial engineering with
                10 years experience in corporate enviroments, now recycling to
                IT in search of new projects that provide me both new challenges
                and the possibility of continuing to learn.I love teamwork and
                have developed a great analytical capacity and leadership, I am
                passionate about technology that led me to train as a junior
                developer.
                <span></span>
              </p>
              <br />
              <Media className="media-comp">
                <img
                  width={200}
                  height={160}
                  className="image-me second "
                  src={BlueDemon}
                  alt="Generic placeholder"
                />
                <Media.Body className="media-body">
                  <h5
                    className="more"
                    style={{
                      paddingTop: "0.7rem",
                      textAlign: "center",
                      fontFamily: "keys",
                      fontSize: "2.3rem",
                    }}
                  >
                    Something more
                  </h5>
                  <p className="p-me" style={{ textAlign: "justify" }}>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Media.Body>
              </Media>
            </Media.Body>
          </Media>
        </div>
      </div>
    </div>

    /*<div className="about-me container-fluid">
            <div className="Title container-sm">
                <h1>About Me</h1>
            </div>  
            <img src={Me} width="300" height="150" className=""></img>
            <div>
            </div>
        </div>*/
  );
};

export default AboutMe;
