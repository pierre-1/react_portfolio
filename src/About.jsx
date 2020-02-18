import React from "react";
import { UndrawArtLover } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
        <div class="ui stackable two column grid">
            <div class="column">
                <UndrawArtLover />
            </div>
            <div class="column">
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