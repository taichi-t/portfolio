import React, { Component } from "react";
import "./top.scss";
import Grid from "@material-ui/core/Grid";
import anime from "animejs/lib/anime.es.js";
import { Logo } from "../Logo/Logo";

class Top extends Component {
  componentDidMount() {
    const button = document.querySelector(".btn1");
    button.addEventListener("click", () => {
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;
      const scrollTop = document.getElementById("top").clientHeight;
      // use anime.js
      anime({
        targets: scrollElement,
        scrollTop: scrollTop,
        duration: 1000,
        easing: "easeInOutQuad"
      });
    });
  }
  render() {
    return (
      <Grid container className="top" id="top">
        <Grid item xs={12}>
          <div className="top">
            <div className="top_bgc">
              <Logo />

              <p className="top_text">
                I'm Taichi Tsujioka. <br />
                Japanese Front-end Developer,
                <br />
                based in Vancouver.
              </p>
              <div className="scroll-button btn1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Top;
