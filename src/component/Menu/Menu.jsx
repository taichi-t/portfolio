import React, { Component } from "react";
import "./menu.scss";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { HashLink } from "react-router-hash-link";

class Menu extends Component {
  componentDidMount() {
    function toggleClass(targetElement, addedClass) {
      if (targetElement.classList.contains(addedClass)) {
        targetElement.classList.remove(addedClass);
      } else {
        targetElement.classList.add(addedClass);
      }
    }

    document.querySelector(".menu-btn").addEventListener("click", function() {
      toggleClass(document.querySelector(".menu"), "menu--open");
      toggleClass(document.querySelector(".menu-btn"), "menu-btn--on");
    });
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} className="menu-button">
          <menu className="menu">
            <ul className="link_sns_container">
              <li id="home" className="button">
                <HashLink smooth to="/#top">
                  <span className="link">Home</span>
                </HashLink>
              </li>

              <li id="works" className="button">
                <HashLink smooth to="/#works_link">
                  <span className="link">Works</span>
                </HashLink>
              </li>
              <li id="about" className="button">
                <HashLink smooth to="/#about_link">
                  <span className="link">About</span>
                </HashLink>
              </li>
              <li id="skills" className="button">
                <HashLink smooth to="/#skills_link">
                  <span className="link pc">What I Can Do</span>
                  <span className="sp">Skills</span>
                </HashLink>
              </li>
              <li id="contact" className="button">
                <HashLink smooth to="/#contact_link">
                  <span className="link">Contact</span>
                </HashLink>
              </li>
              <li className="sns_container">
                <a
                  href="https://www.linkedin.com/in/taichi-tsujioka-b17885190/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LinkedInIcon className="linkedin" />
                </a>
                <a
                  href="https://github.com/taichi-t"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GitHubIcon className="github" />
                </a>
              </li>
            </ul>
          </menu>

          <nav className="menu-btn">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </Grid>
      </Grid>
    );
  }
}

export default Menu;
