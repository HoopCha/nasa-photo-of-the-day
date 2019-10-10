import React from "react";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #1111BD;
`;

const SpaceImage = styled.img`
  width: 40%;
  height:auto;
  object-fit: scale;
  flex-shrink: 2;
`;

const DescriptionText = styled.p`
  width: 95%;
  font-size: 1.2rem;
  text-align: center;
`;


const NasaCard = props => {
  return (
    <Body>
        <SpaceImage className="space-image" alt="photo of the day" src={props.todaysPhoto} />
        <Title>{props.photoTitle}</Title>
        <DescriptionText>{props.photoDescription}</DescriptionText>
    </Body>
  );
};

export default NasaCard;
