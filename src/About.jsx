import React from "react";
import { UndrawArtLover } from "react-undraw-illustrations";

const About = () => {
  return (
    <>
      <div className="ui main container">
        <div style={{ position: "absolute", zIndex: "999" }}>
          <div className="ui stackable two column grid">
            <div className="column">
              <UndrawArtLover />
            </div>
            <div className="column">
              <div className="about-text">
                <h1 className="about-text"> About Pierre</h1>
                <h4>I am a world citizen currently on a coding journey.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hero-image"
        style={{
          background: 'url("/src/images/Boston City Flow.jpg")',
          backgroundSize: "cover",
          height: "100vh",
          marginTop: "-1.2rem"
        }}
      ></div>
    </>
  );
};

export default About;
