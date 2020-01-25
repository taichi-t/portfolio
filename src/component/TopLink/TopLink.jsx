import React, { Component } from "react";
import "./topLink.scss";
import Grid from "@material-ui/core/Grid";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import anime from "animejs/lib/anime.es.js";

class TopLink extends Component {
  componentDidMount() {
    const button = document.querySelector(".btn");
    const scrollElement =
      window.document.scrollingElement ||
      window.document.body ||
      window.document.documentElement;
    button.addEventListener("click", () => {
      // use anime.js
      anime({
        targets: scrollElement,
        scrollTop: 0,
        duration: 1000,
        easing: "easeInOutQuad"
      });
    });
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <div className="toToppage">
            <button className="toppage-link btn">
              <div>
                <span className="up">
                  <ArrowUpwardIcon style={{ fontSize: 25 }} />
                </span>
              </div>
            </button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default TopLink;
