import React, { Component } from "react";
import axios from "axios";
import InterestCard from "./InterestCard";
import UndrawRideABicycle from "react-undraw-illustrations/lib/components/UndrawRideABicycle/UndrawRideABicycle";

class Interest extends Component {
  state = {
    interest: []
  };

  componentDidMount() {
    axios.get("./src/data/interest.json").then(response => {
      this.setState({
        interest: response.data
      });
    });
  }

  render() {
    const interest = this.state.interest;
    let interestList;

    if (interest.length > 0) {
      interestList = interest.map(item => {
        return (
          <div id={"interest-" + item.id} key={item.id}>
            <InterestCard interest={item} />
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
                <UndrawRideABicycle primaryColor="#12283a" height="200px" />
              </div>
              <div className="column">
                <h1 className="ui header">What I like.</h1>
                <p>A brief look inside my brain.</p>
              </div>
            </div>
            <div className="ui stackable four column grid">{interestList}</div>
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
  }
}

export default Interest;
