import React from "react";
import "./footer.scss";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className="footer">
          <div className="copyright">
            <p>Taichi Tsujioka</p>
            <p>Copyright © 2019 Taichi Tsujioka, All Rights Reserved.</p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
