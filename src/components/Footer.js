import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import Link from "../images/linkedin-icon.png";

export const Footer = () => {
    return (
        <div className="Footer">
            <Container  fluid>
                <Row className="contact-info">
                    <Col> Movil: +34 622 383 091</Col>
                    <Col href="">josegarriaga7@gmail.com</Col>
                    <Col><a href="https://www.linkedin.com/in/jose-arriaga-mendez-27970386/" className="linkedin social"><img className="linkedinlogo" alt="linkedin" src={Link}></img></a></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="copyright">
                    <Col className="copyr">  &copy; {new Date().getFullYear()} Copyright: José Arriaga</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;