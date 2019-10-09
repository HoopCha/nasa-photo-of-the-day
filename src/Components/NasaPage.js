import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaHeader from "./NasaHeader";
//import NasaFooter from "./NasaFooter";
import NasaCard from "./NasaCard";


// https://api.nasa.gov/planetary/apod?api_key=Ho9TP8UIaD2C0jSm8YoU4P9XFgo1eOXCdNGwP9Sm

export default function NasaPage() {

    const [universe, setUniverse] = useState([])
    const [date, setDate] = useState("");



    function randomDate() {
        var randomDate = "";
        var day = Math.floor(Math.random() * 28) + 1;
        var month = Math.floor(Math.random() * 12) + 1;
        var year = Math.floor(Math.random() * 19) + 2000;
        randomDate = `&date=${year}-${month}-${day}`;
        return randomDate
    }
    
    randomDate();


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
        <div className="containers">
            <div className = "header">
                <NasaHeader
                    todaysDate={universe.date}
                />
            </div>
            <button onClick={() => setDate(randomDate())}>Random Date</button>
            <div className="body">
                <NasaCard
                    todaysPhoto={universe.url}
                    photoTitle={universe.title}
                    photoDescription={universe.explanation}
                    />
            </div>
        </div>
    );
}
