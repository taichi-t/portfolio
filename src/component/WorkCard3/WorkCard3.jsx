import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./workCard3.scss";
import Grid from "@material-ui/core/Grid";
import wordpress from "../../image/wordpress.jpg";

export function WorkCard3() {
  return (
    <React.Fragment>
      <div className="works3">
        <HashLink to="/work3#work3_top" className="work_link">
          <Grid container>
            <Grid item sm={8} xs={12}>
              <div className="work_img_container">
                <img src={wordpress} alt="" className="work_img" />
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className="work_contents">
                <div className="work_contents_main">
                  <p className="work_title">Word press made Blog</p>
                  <p className="work_tool">PHP</p>
                  <div className="button_container">
                    <div className="work-button">
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

export default WorkCard3;
