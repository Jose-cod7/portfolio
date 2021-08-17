import React from "react";
import NavBarHireme from "./NavBarHIreme";

function HireMe() {
  return (
    <>
      <NavBarHireme />
      <div className="hireme">
        <h2 className="hireme-title">Hire me!</h2>
        <p className="p-hireme">
          My unique background and my experience allow me to organize myself and
          have analytical thinking to solve the challenges I face in a pragmatic
          way. My methodological way of solving problems by breaking down the
          problem and planning the work give me an opportunity to find errors
          before generating them. My focus on total quality gives me experience
          in error prevention as well as error detection. I am ready and willing
          to work hard to be able to make me a place in the IT world, with my
          enthusiastic to learn and perseverance I will make it.
        </p>

        <p className="p-hireme">
          Some of the skills that a company can benefit from working with me is
          my ability to work in team, adaptability to the work environment on
          the other hand I also have acquired leadership skills that help me to
          be independent when necessary.
        </p>

        <p className="p-hireme">
          “To the optimist, the glass is half full. To the pessimist, the glass
          is half empty. To the engineer, the glass is twice as big as it needs
          to be" -Anonymous Engineer 😄
        </p>

        <>
          <h3 style={{ paddingTop: "3rem", fontFamily: "kap" }}>
            Download my cv
          </h3>
          <div>
            <a
              target="blank"
              href="https://drive.google.com/file/d/16TokZX2tJNwn1N4QUV-YEnmhJaYntJRp/view?usp=sharing"
              className="btn-main-cv"
              download
            >
              <img
                src="https://img.icons8.com/ios/50/000000/open-resume.png"
                style={{ paddingTop: "1rem", paddingBottom: "3rem" }}
                alt="donwload icon"
              />
            </a>
          </div>
        </>
        <p className="p-hireme">
          If you are interested in my profile and you are curious about what I
          can contribute to your team, do not hesitate to drop me a message
          through my contact information or my social networks.{" "}
          <strong>Let's get in touch!</strong>
        </p>
      </div>
    </>
  );
}

export default HireMe;
