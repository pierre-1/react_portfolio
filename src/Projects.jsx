import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { UndrawBuildingBlocks } from "react-undraw-illustrations";


class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios.get("./src/data/projects.json").then(response => {
      this.setState({
        projects: response.data
      });
    });
  }

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div id={"project-" + project.id} key={project.id}>
            <ProjectCard project={project} />
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
              <h1 className="ui header">My Projects</h1>
              <p>
                Below you will find a few of my first coding projects.
              </p>
            </div>
          </div>
          <div className="ui stackable four column grid">{projectsList}</div>
        </div>
      </div>
      <div className="hero-image" style={{ background: 'url("/src/images/Boston City Flow.jpg")', backgroundSize: 'cover', height: '100vh', marginTop: '-1rem'}} >
      </div>
      </>
    );
  }
}

export default Projects;
