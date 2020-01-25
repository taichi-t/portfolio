import React, { Component } from "react";
import "./work1.scss";
import Grid from "@material-ui/core/Grid";
import { Reveal, Animation, RevealGlobalStyles } from "react-genie";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import anime from "animejs/lib/anime.es.js";
import Menu from "../Menu/Menu";
import TopLink from "../TopLink/TopLink";
import Footer from "../Footer/Footer";
import devices from "../../image/Apple-Devices.png";
import img1 from "../../image/work-img-1.png";
import img2 from "../../image/work-img-2.png";
import keyboard from "../../image/keyboard.jpg";
import wordpress from "../../image/wordpress.jpg";
import work1img from "../../image/work1-img.jpg";
import { HashLink } from "react-router-hash-link";

class Work1 extends Component {
  componentDidMount() {
    const button = document.querySelector(".btn1");
    button.addEventListener("click", () => {
      const scrollElement =
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement;
      const scrollTop = document.querySelector(".hero_container").clientHeight;
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
      <div className="work1">
        <Menu />
        <RevealGlobalStyles />
        <Grid container>
          <Grid item xs={12} id="work1_top">
            <div className="hero_container">
              <Logo />

              <img src={work1img} alt="" className="hero_img" />
              <div className="scroll-button btn1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="top_container wrap">
              <h1>cafe's website</h1>
              <h3>-Mockup Website-</h3>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="overview_container wrap">
              <h2>Over View</h2>
              <ul>
                <li>
                  <span className="pc-none">-</span> Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s
                </li>
                <li>
                  <span className="pc-none">-</span>Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s
                </li>
                <li>
                  <span className="pc-none">-</span>Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s
                </li>
              </ul>
            </div>
          </Grid>

          <Grid container className="wrap">
            <Grid item xs={6}>
              <div className="tools_container ">
                <h2>Tools</h2>
                <ul className="tag_list">
                  <li className="tag">HTML</li>
                  <li className="tag">CSS</li>
                  <li className="tag">JavaScript</li>
                  <li className="tag">Bootstrap</li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="myrole_container">
                <h2>My Role</h2>
                <p className="myrole_text">Designer and Front End Developer</p>
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12} className="wrap wrap-sp">
            <div className="top_img_container">
              <img src={devices} alt="" className="devices" />
            </div>
          </Grid>

          <Grid item xs={12}>
            <Reveal animation={Animation.FadeInUp} delay={250}>
              <Link to="/">
                <div className="resume_button_container wrap">
                  <button type="button" className="resume_button">
                    <span className="button_text">View Webpage</span>
                  </button>
                </div>
              </Link>
            </Reveal>
          </Grid>
          <Grid item xs={12} className="wrap wrap-sp">
            <Reveal animation={Animation.FadeInUp} delay={250}>
              <div className="img_container">
                <img src={img1} alt="" className="img_item" />
              </div>
            </Reveal>
          </Grid>
          <Grid item xs={12} className="wrap wrap-sp">
            <Reveal animation={Animation.FadeInUp} delay={350}>
              <div className="img_container">
                <img src={img2} alt="" className="img_item" />
              </div>
            </Reveal>
          </Grid>
          <Grid item xs={12} className="wrap">
            <h2 className="text-center">View more works ...</h2>
          </Grid>

          <Grid container className="wrap">
            <Grid item sm={5} xs={12}>
              <HashLink to="/work2#work2_top">
                <div className="link_container">
                  <img src={keyboard} alt="" className="link_item" />
                  <p className="link_text">React made App using Unsplash API</p>
                </div>
              </HashLink>
            </Grid>

            <Grid item sm={2} xs={false}></Grid>
            <Grid item sm={5} xs={12}>
              <HashLink to="/work3#work3_top">
                <div className="link_container">
                  <img src={wordpress} alt="" className="link_item" />
                  <p className="link_text">Word press made Blog</p>
                </div>
              </HashLink>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TopLink />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Work1;
