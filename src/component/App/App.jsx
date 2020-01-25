import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home/Home";
import Work1 from "../Work1/Work1";
import Work2 from "../Work2/Work2";
import Work3 from "../Work3/Work3";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Route path="/" component={Home} exact />
    <Route path="/work1" component={Work1} exact />
    <Route path="/work2" component={Work2} exact />
    <Route path="/work3" component={Work3} exact />
  </BrowserRouter>
);

export default App;
