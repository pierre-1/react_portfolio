import React, { Component } from "react";
import axios from "axios";
import CVCard from "./CVCard";
import { UndrawBuildingBlocks } from "react-undraw-illustrations";


class CurriculumVitae extends Component {
  state = {
    curriculumvitae: []
  };

  componentDidMount() {
    axios.get("./src/data/curriculumvitae.json").then(response => {
      this.setState({
        curriculumvitae: response.data
      });
    });
  }

  render() {
    const curriculumvitae = this.state.curriculumvitae;
    let curriculumvitaeList;

    if (curriculumvitae.length > 0) {
        curriculumvitaeList = curriculumvitae.map(item => {
        return (
          <div id={"curriculumvitae-" + item.id} key={item.id}>
            <CVCard curriculumvitae={item} />
          </div>
        );
      });
    }

    return (
      <>
      <div className="ui main container">
        <div style={{ position: "absolute", zIndex: "999" }}>
          <div className="ui stackable two column grid">
            <div className="column">
              <UndrawBuildingBlocks primaryColor="#12283a" height="200px" />
            </div>
            <div className="column">
              <h1 className="ui header">My CV</h1>
              <p>
                Below you will find a few of my first coding projects.
              </p>
            </div>
          </div>
          <div className="ui stackable four column grid">{curriculumvitaeList}</div>
        </div>
      </div>
      <div className="hero-image" style={{ background: 'url("/src/images/Boston City Flow.jpg")', backgroundSize: 'cover', height: '100vh', marginTop: '-1.2rem'}} >
      </div>
      </>
    );
  }
}

export default CurriculumVitae;
