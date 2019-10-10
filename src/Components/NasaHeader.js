import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.h1`
font-size: 4rem;
text-align: center;
color: #1111BD;
background-image: linear-gradient(white, lightgray);
`;

const NasaHeader = props => {
  return (

    <div className = "Header">
      <HeaderTitle>Nasa Photo of the Day!</HeaderTitle>
        <h2>Todays Date: {props.todaysDate}</h2>
    </div>
  );
};

export default NasaHeader;