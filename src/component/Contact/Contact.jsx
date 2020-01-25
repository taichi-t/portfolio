import React from "react";
import "./contact.scss";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Contact = () => {
  return (
    <Grid container>
      <Grid item xs={12} className="contact">
        <div className="contact_container">
          <div className="contact-text">
            <p className="contact-message" id="contact_link">
              Drop me a line :&#041;
            </p>
            <Link
              href="mailto:t.tujioka.0925&#64;gmail.com"
              className="contact-email"
            >
              <span className="under_line">t.tujioka.0925&#64;gmail.com</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/taichi-tsujioka-b17885190/"
              className="svg_container"
            >
              <LinkedInIcon className="svg" />
            </Link>
            <Link href="https://github.com/taichi-t" className="svg_container">
              <GitHubIcon className="svg" />
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
