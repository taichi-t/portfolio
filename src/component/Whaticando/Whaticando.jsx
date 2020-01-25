import React, { Component } from "react";
import "./whaticando.scss";
import Grid from "@material-ui/core/Grid";
import CircleGraph from "../CircleGraph/CircleGraph";
// import BarGraph from "../BarGraph/BarGraph";
import { Reveal, Animation } from "react-genie";
import react from "../../image/react.svg";
import html from "../../image/html.svg";
import css from "../../image/css3.svg";
import jacvascript from "../../image/javascript.svg";
import redux from "../../image/redux.svg";
import material from "../../image/material-ui.svg";
import scss from "../../image/sass.svg";
import photoshop from "../../image/photoshop.svg";
import bootstrap from "../../image/bootstrap.svg";
import jquery from "../../image/jquery.svg";

class whatICanDo extends Component {
  constructor(props) {
    super(props);

    let mql = window.matchMedia("screen and (max-width: 600px)");

    switch (mql.matches) {
      case true:
        this.state = {
          isAnimationActive: false,
          height: 120,
          width: 120,
          cx: 55,
          cy: 55,
          innerRadius: 44.16,
          outerRadius: 60
        };
        break;

      case false:
        this.state = {
          isAnimationActive: false,
          height: 217,
          width: 217,
          cx: 103,
          cy: 103,
          innerRadius: 80,
          outerRadius: 108.5
        };
        break;
      default:
    }
  }

  render() {
    return (
      <div className="whaticando box">
        <Grid container>
          <Grid item xs={12}>
            <h2 className="cando_title" id="skills_link">
              What I can do
            </h2>
          </Grid>
          <Grid item xs={12}>
            <h3>Front End</h3>
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <Reveal
              animation={Animation.FadeInUp}
              delay={200}
              onShowDone={() => {
                this.setState({ isAnimationActive: true });
              }}
            >
              <div className="relative">
                <CircleGraph
                  endAngle={-360}
                  isAnimationActive={this.state.isAnimationActive}
                  height={this.state.height}
                  width={this.state.width}
                  cx={this.state.cx}
                  cy={this.state.cy}
                  innerRadius={this.state.innerRadius}
                  outerRadius={this.state.outerRadius}
                />

                <img src={html} alt="" className="circle_icon" />
              </div>
            </Reveal>
          </Grid>

          <Grid item md={4} sm={6} xs={6}>
            <Reveal
              animation={Animation.FadeInUp}
              delay={200}
              onShowDone={() => {
                this.setState({ isAnimationActive: true });
              }}
            >
              <div className="relative">
                <CircleGraph
                  endAngle={-250}
                  isAnimationActive={this.state.isAnimationActive}
                  height={this.state.height}
                  width={this.state.width}
                  cx={this.state.cx}
                  cy={this.state.cy}
                  innerRadius={this.state.innerRadius}
                  outerRadius={this.state.outerRadius}
                />
                <img src={css} alt="" className="circle_icon" />
              </div>
            </Reveal>
          </Grid>

          <Grid item md={4} sm={6} xs={6}>
            <Reveal
              animation={Animation.FadeInUp}
              delay={200}
              onShowDone={() => {
                this.setState({ isAnimationActive: true });
              }}
            >
              <div className="relative">
                <CircleGraph
                  endAngle={-200}
                  isAnimationActive={this.state.isAnimationActive}
                  height={this.state.height}
                  width={this.state.width}
                  cx={this.state.cx}
                  cy={this.state.cy}
                  innerRadius={this.state.innerRadius}
                  outerRadius={this.state.outerRadius}
                />
                <img src={jacvascript} alt="" className="circle_icon" />
              </div>
            </Reveal>
          </Grid>

          <Grid item sm={1} xs={false}></Grid>

          <Grid item sm={4} xs={12}>
            <div className="bargraph_left">
              <h3 className="sub_title">CMS/Frameworks</h3>

              <Reveal
                animation={Animation.FadeInUp}
                onShowDone={() => {
                  const elementLeft = document.querySelectorAll(
                    ".element-left"
                  );
                  elementLeft.forEach(e => {
                    e.classList.add("isActive");
                  });
                }}
              >
                <div className="bar-graph-container">
                  <div className="slide-bottom2 bar-list">
                    <div className="bar_inline">
                      <img src={react} alt="" className="bar_icon_svg" />
                      <span className="bar_icon_name">React</span>
                    </div>
                    <div className="bar_inline">
                      <img src={redux} alt="" className="bar_icon_svg" />
                      <span className="bar_icon_name">Redux</span>
                    </div>

                    <div className="bar-container">
                      <div className="Reactjs element-left">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>

                  <div className="slide-bottom2 bar-list">
                    <div className="bar_inline">
                      <img src={material} alt="" className="bar_icon_svg" />
                      <span className="bar_icon_name">Material-Ui</span>
                    </div>
                    <div className="bar-container">
                      <div className="RubyOnRails element-left">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>

                  <div className="slide-bottom2 bar-list">
                    <div className="bar_inline">
                      <img src={scss} alt="" className="bar_icon_svg" />
                      <span className="bar_icon_name">SCSS</span>
                    </div>
                    <div className="bar-container">
                      <div className="Bootstrap element-left">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Grid>
          <Grid item sm={2} xs={false}></Grid>
          <Grid item sm={4} xs={12}>
            <div className="bargraph_right">
              <h3 className="sub_title">Other Skills</h3>

              <Reveal
                animation={Animation.FadeInUp}
                onShowDone={() => {
                  const elementRight = document.querySelectorAll(
                    ".element-right"
                  );
                  elementRight.forEach(e => {
                    e.classList.add("isActive");
                  });
                }}
              >
                <div
                  className="bar-graph-container"
                  data-plugin-options='{"speed":500, "distance":50, "reverse":false}'
                >
                  <div className="slide-bottom2 bar-list">
                    <div className="bar_inline">
                      <img src={photoshop} alt="" className="bar_icon_svg" />
                      <span className="bar_icon_name">PhotoShop</span>
                    </div>
                    <div className="bar-container">
                      <div className="PhotoShop element-right">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>

                  <div className="slide-bottom2 bar-list">
                    <div className="bar_inline">
                      <img src={bootstrap} alt="" className="bar_icon_svg" />
                      <span className="bar_icon_name">Bootstrap</span>
                    </div>
                    <div className="bar-container">
                      <div className="Illustrator element-right">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>

                  <div className="slide-bottom2 bar-list">
                    <div className="bar_inline">
                      <img src={jquery} alt="" className="bar_icon_svg" />
                      <span className="bar_icon_name">jQuery</span>
                    </div>
                    <div className="bar-container">
                      <div className="WebDesign element-right">
                        <p className="bar"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Grid>
          <Grid item sm={1} xs={false}></Grid>
        </Grid>
      </div>
    );
  }
}
export default whatICanDo;
