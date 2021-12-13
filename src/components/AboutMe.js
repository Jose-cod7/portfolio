import React from "react";
// import Me from "../images/model.jpg";
import BlueDemon from "../images/pepe.jpg";
import win from "../images/Winning.jpg";
import { Media } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="about-me container-fluid">
      <div className="row">
        <div className="col-xl">
          <Media className="media-comp">
            <img
              // width={230}
              height={210}
              className=" image-me "
              src={BlueDemon}
              alt="Generic placeholder"
            />
            <Media.Body className="media-body">
              <h3 id="ABOUT_ME" className="aboutme-title">
                ABOUT ME
              </h3>
              <p className="p-me">
                <strong>Hello! I'm José Arriaga, a Fullstack Developer.</strong>
                <br></br>I am an active and curious person, often looking for
                the best solution when it comes to work. I enjoy learning how
                the things work which led me to complete a degree in Industrial
                Engineering. With 10 years experience in corporate enviroments
                leading teams in the areas of QA and production. Recently I've
                made up my mind to change a carrer. As I am passionate about
                technology, what led me to train as a junior developer and
                without any prior knowledge in programming, in March 2021 I
                started my journey into the programming world. Being determined,
                responsible and hardworking, my personal goal is continuous
                learning and self development. For that reason I'm looking for
                new IT projects that could offer me both - new challenges and a
                possibility of continuing growth.
              </p>
              <br />
              <Media className="media-comp">
                <img
                  // width={225}
                  height={210}
                  className="image-me second "
                  src={win}
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
                    HOBBIES 4 MORE
                  </h5>
                  <p className="p-me">
                    Water sports is my passion, I have participated in different
                    competitions in the disciplines of swimming and water polo.
                    I love teamwork and the drive that these sports forge.
                    Besides being an active person, I like to explore my
                    artistic side by taking photos of everything that catches my
                    attention. As well as mixing different musical genres when
                    it comes to music that is also my hobby.
                  </p>
                </Media.Body>
              </Media>
            </Media.Body>
          </Media>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

/* <Media className="media-comp">
<Media.Body className="media-body">
  <h3 id="ABOUT_ME" className="aboutme-title">
    ABOUT ME
  </h3>
  <>
    <div>
      {" "}
      <img
        width={230}
        height={210}
        className=" image-me "
        src={BlueDemon}
        alt="Generic placeholder"
      />
    </div>
    <p className="p-me">
      <strong>
        Hello! I'm José Arriaga, a Fullstack Developer.
      </strong>
      <br></br>I am an active and curious person, often looking for
      the best solution when it comes to work. I enjoy learning how
      the things work which led me to complete a degree in
      Industrial Engineering. With 10 years experience in corporate
      enviroments leading teams in the areas of QA and production.
      Recently I've made up my mind to change a carrer. As I am
      passionate about technology, what led me to train as a junior
      developer and without any prior knowledge in programming, in
      March 2021 I started my journey into the programming world.
      Being determined, responsible and hardworking, my personal
      goal is continuous learning and self development. For that
      reason I'm looking for new IT projects that could offer me
      both - new challenges and a possibility of continuing growth.
    </p>
  </>
  <br />
  <Media className="media-comp">
    <Media.Body className="media-body2">
      <h5
        className="more"
        style={{
          paddingTop: "0.7rem",
          textAlign: "center",
          fontFamily: "keys",
          fontSize: "2.3rem",
        }}
      >
        HOBBIES 4 MORE
      </h5>
      <>
        <div>
          {" "}
          <img
            width={225}
            height={190}
            className="image-me second "
            src={win}
            alt="Generic placeholder"
          />
        </div>
      </>
      <p className="p-me">
        Water sports is my passion, I have participated in different
        competitions in the disciplines of swimming and water polo.
        I love teamwork and the drive that these sports forge.
        Besides being an active person, I like to explore my
        artistic side by taking photos of everything that catches my
        attention. As well as mixing different musical genres when
        it comes to music that is also my hobby.
      </p>
    </Media.Body>
  </Media>
</Media.Body>
</Media> */
