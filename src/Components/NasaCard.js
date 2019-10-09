import React from "react";

const NasaCard = props => {
  return (
    <div className = "Photo">
        <img className="space-image" alt="photo of the day" src={props.todaysPhoto} />
        <h2>{props.photoTitle}</h2>
        <p>{props.photoDescription}</p>
    </div>
  );
};

export default NasaCard;
