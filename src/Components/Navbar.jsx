import React from "react";
import { Link as ScrollLink } from "react-scroll";

import LOGO from "../asserts/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {




  

  return (
    <nav className="navbar navbar-expand-lg bgforNav fixed-top">
      <div className="container-fluid  p-3">
     
        <ScrollLink
          className="navbar-brand"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={LOGO} className="img-fluid" alt="" />
        </ScrollLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Centered */}
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="create-task"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className= "nav-link"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className= "nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </ScrollLink>
            </li>
          </ul>

          
          <button
            className="btn btn-icon btn-lg btn-transparent ml-2"
          >
            <FontAwesomeIcon icon={faMoon} />
          </button>

        
          <button className="btn btn-dark ml-2">Button</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
