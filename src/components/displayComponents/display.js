
import React, {useState, useEffect}from "react";
import axios from 'axios';
import DisplayPic from './displayPic'
//import axios, and ran add axios

function Display() {
  const [picNasa, setPicNasa] = useState({}); //expecting to get an array
  const [day, setDay] = useState("2019-09-11");
    useEffect(() => {
    axios
        .get(`
        https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${day}`) //add KEY
        .then(response => {
            console.log(`response`, response)
            let picNasa = response.data;
            console.log(`picNasa, object`, response.data);
            console.log(`picNasa, object`, [picNasa]);
            setPicNasa(picNasa);
        })
        .catch(error => {
        console.log("The data was not returned", error);
        });
    }, []);

        return (
    
            
            <div className="App">
                <button onClick={() => setDay("2019-09-10")}>{day}</button>
           {[picNasa].map((e, index) => (
               <DisplayPic 
               key={index}
               day= {day}
               date = {e.date}
               explanation={e.explanation}
               hdurl = {e.hdurl}
               />
           ))  
           }
           </div>);
}
                
        


export default Display;

