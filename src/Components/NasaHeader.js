import React from "react";

const NasaHeader = props => {
  return (
    <div className = "Header">
        <h2>Todays Date: {props.todaysDate}</h2>
    </div>
  );
};

export default NasaHeader;