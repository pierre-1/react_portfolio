import React from "react";

const CVCard = ({ curriculumvitae }) => {
  return (
    <>
      <div className="ui card">
        <div className="image">
          <img src={curriculumvitae.image} />
        </div>
        <div className="content">
          <h3 className="ui header">{curriculumvitae.name}</h3>

          <div className="description">{curriculumvitae.description}</div>
        </div>
      </div>
    </>
  );
};

export default CVCard;