import React from "react";
import Top from "../Top/Top";
import { WorkCard1 } from "../WorkCard1/WorkCard1";
import { WorkCard2 } from "../WorkCard2/WorkCard2";
import { WorkCard3 } from "../WorkCard3/WorkCard3";
import About from "../About/About";
import WhatICanDo from "../Whaticando/Whaticando";
import Contact from "../Contact/Contact";
import TopLink from "../TopLink/TopLink";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

const Home = () => (
  <>
    <Menu />
    <Top />
    <WorkCard1 />
    <WorkCard2 />
    <WorkCard3 />
    <About />
    <WhatICanDo />
    <Contact />
    <TopLink />
    <Footer />
  </>
);

export default Home;
