import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import linkedin from "../images/linkedin-icon.png";
import github from "../images/GitHub-Mark-Light.png";
// import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="Footer">
      <Container fluid>
        <Row className="contact-info">
          <Col className="column-footer"> Movil: +34 622 383 091</Col>
          <Col className="column-footer">
            <a href="mailto:josegarriaga7@gmail.com" target="blank">
              josegarriaga7@gmail.com
            </a>
          </Col>
          <Col className="column-footer">
            <a
              href="https://www.linkedin.com/in/jose-arriaga-mendez-27970386/"
              className="linkedin social"
              target="blank"
            >
              <img className="linkedinlogo" alt="linkedin" src={linkedin}></img>
            </a>
            <a
              href="https://github.com/Jose-cod7"
              className="Github social"
              target="blank"
            >
              <img className="Githublogo" alt="Github" src={github}></img>
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="copyright">
          <Col className="copyr">
            {" "}
            &copy; {new Date().getFullYear()} Copyright: José Arriaga
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
