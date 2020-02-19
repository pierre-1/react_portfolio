import React from "react";
import { UndrawArtLover } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
        <div className="ui stackable two column grid">
            <div className="column">
                <UndrawArtLover />
            </div>
            <div className="column">
                <h1 className="ui header">About Me</h1>
                <p>
                    World citizen currently on a coding journey.
                </p>
            </div>
        </div>
    </div>
  );
};

export default About;