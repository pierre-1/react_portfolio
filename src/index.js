import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import Interest from "./Interest";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import FormExampleFieldControlId from "./Form"
import Particles from "react-particles-js";
import { particlesOptions } from "./data/particles";

const App = () => {
  return (
    <>
      <Particles
        style={{ position: "absolute", zIndex: "1" }}
        params={particlesOptions}
      />
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Hello}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/interest" component={Interest}></Route>
          <Route exact path="/form" component={FormExampleFieldControlId}></Route>
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
