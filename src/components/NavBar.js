import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const junior = "< Fullstack developer>";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <div className="navbar-brand mr-auto">{junior}</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ABOUT_ME">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#TIME_LINE">
                EDUCATION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#PORTFOLIO">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hireme">
                HIRE ME
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
