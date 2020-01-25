import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./workCard1.scss";
import Grid from "@material-ui/core/Grid";
import keyboard from "../../image/keyboard.jpg";

export function WorkCard1() {
  return (
    <React.Fragment>
      <div className="works1" id="works_link">
        <HashLink to="/work1#work1_top" className="work_link">
          <Grid container>
            <Grid item sm={8} xs={12}>
              <div className="work_img_container">
                <img src={keyboard} alt="" className="work_img" />
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className="work_contents">
                <div className="work_contents_main">
                  <p className="work_title">
                    React made App using Unsplash API
                  </p>
                  <p className="work_tool">React.js</p>
                  <div className="button_container">
                    <div to="/work1" className="work-button">
                      <p className="button_text">View more ...</p>
                    </div>
                  </div>
                </div>
                <div className="triangle"></div>
              </div>
            </Grid>
          </Grid>
        </HashLink>
      </div>
    </React.Fragment>
  );
}

export default WorkCard1;
