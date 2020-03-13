import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaHeader from "./NasaHeader";
//import NasaFooter from "./NasaFooter";
import NasaCard from "./NasaCard";
import styled from "styled-components";

export const DateButton = styled.button`
  width: 100px;
  height: 40px;
  background: black;
  color: white;
  border: 1px black solid;
  margin: 5px 10px;
  transition: 0.2s ease-in;
  &:hover {
    background: white;
    color: black;
    border: 1px black solid;
  }
`;

export const Everything = styled.div`
background-image: linear-gradient(lightgray, white);
width: 80%;
margin: 0 auto;

  }
`;

// https://api.nasa.gov/planetary/apod?api_key=Ho9TP8UIaD2C0jSm8YoU4P9XFgo1eOXCdNGwP9Sm

export default function NasaPage() {

    const [universe, setUniverse] = useState([])
    const [date, setDate] = useState("");



    function randomDate() {
        let randomDate = "";
        let day = Math.floor(Math.random() * 28) + 1;
        let month = Math.floor(Math.random() * 12) + 1;
        let year = Math.floor(Math.random() * 19) + 2000;
        randomDate = `&date=${year}-${month}-${day}`;
        return randomDate
    }
   
    function todaysDate() {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `&date=${year}-${month}-${day}`;
    }

    console.log(todaysDate())

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=Ho9TP8UIaD2C0jSm8YoU4P9XFgo1eOXCdNGwP9Sm${date}`)
        .then(response => {
            const dailyPhoto = response.data
            console.log("Daily Photo:", dailyPhoto);
            setUniverse(dailyPhoto);
        })
        .catch(error => {
            console.log('F in chat ', error)
        });
    },[date]);

    return (
        <Everything className="containers">
            <div className = "header">
                <NasaHeader
                    todaysDate={universe.date}
                />
            </div>
            <DateButton onClick={() => setDate(randomDate())}>Random Date</DateButton>
            <DateButton onClick={() => setDate(todaysDate())}>Todays Date</DateButton>
            <div className="body">
                <NasaCard
                    todaysPhoto={universe.url}
                    photoTitle={universe.title}
                    photoDescription={universe.explanation}
                    />
            </div>
        </Everything>
    );
}
