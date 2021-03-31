import React from 'react';
//import logo from "../images/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const junior = "< Fullstack developer>";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                
            <a className="navbar-brand mr-auto" href="#">{/*<img className="logo" src={logo} alt="logo"/>*/}
            {junior}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a id="ABOUT_ME" className="nav-link" href="#ABOUT_ME">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a id="TIME_LINE" className="nav-link" href="#TIME_LINE">EDUCATION</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT ME</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
