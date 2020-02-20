import React from "react";

const InterestCard = ({ interest }) => {
  return (
    <>
      <div className="ui card">
        <div className="image">
          <img src={interest.image} />
        </div>
        <div className="content">
          <h3 className="ui header">{interest.name}</h3>

          <div className="description">{interest.description}</div>
          <div className="link"><a href={interest.link}>More info here</a></div>
        </div>
      </div>
    </>
  );
};

export default InterestCard;