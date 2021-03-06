import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import Interest from "./Interest";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";



import Particles from "react-particles-js";
import { particlesOptions } from "./data/particles";
import CurriculumVitae from "./CurriculumVitae";

const App = () => {
  return (
    <>
      <Particles
        style={{ position: "absolute"}}
        params={particlesOptions}
      />
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Hello}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/interest" component={Interest}></Route>
          <Route exact path="/curriculumvitae" component={CurriculumVitae}></Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
