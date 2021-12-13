import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./shared-components/LanguageSwitcher";

const NavBar = () => {
  const junior = "< Fullstack developer>";
  const { t, i18n } = useTranslation("translation");
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
                {t("home").toUpperCase()}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ABOUT_ME">
                {t("about_me").toUpperCase()}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#TIME_LINE">
                {t("my_journey").toUpperCase()}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#PORTFOLIO">
                {t("projects").toUpperCase()}
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary" type="button">
                <Link className="nav-link-button" to="/hireme">
                  {t("hire_me").toUpperCase()}
                </Link>
              </button>
            </li>
            {/* <li className="nav-item">
              <LanguageSwitcher className="nav-link" />
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
