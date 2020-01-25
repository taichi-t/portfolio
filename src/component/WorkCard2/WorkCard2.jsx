import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./workCard2.scss";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import cafe from "../../image/coffeehouse.jpg";

export function WorkCard2() {
  return (
    <React.Fragment>
      <div className="works2">
        <HashLink to="/work2#work2_top" className="work_link">
          <Grid container justify="flex-start">
            <Box clone order={{ xs: 2, sm: 1 }}>
              <Grid item sm={4} xs={12}>
                <div className="work_contents">
                  <div className="work_contents_main">
                    <p className="work_title">Rcafe’s website</p>
                    <p className="work_tool">HTML/CSS/JavaScript</p>
                    <div className="button_container">
                      <div to="work1" className="work-button">
                        <p className="button_text">View more ...</p>
                      </div>
                    </div>
                  </div>
                  <div className="triangle"></div>
                </div>
              </Grid>
            </Box>

            <Box clone order={{ xs: 1, sm: 2 }}>
              <Grid item sm={8} xs={12}>
                <div className="work_img_container">
                  <img src={cafe} alt="" className="work_img" />
                </div>
              </Grid>
            </Box>
          </Grid>
        </HashLink>
      </div>
    </React.Fragment>
  );
}

export default WorkCard2;
