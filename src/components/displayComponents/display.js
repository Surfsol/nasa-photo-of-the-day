
import React, {useState, useEffect}from "react";
import axios from 'axios';
import DisplayPic from './displayPic'
//import axios, and ran add axios

function Display() {
  const [picNasa, setPicNasa] = useState({}); //expecting to get an array
    
    useEffect(() => {
    axios
        .get(`
        https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`) //add KEY
        .then(response => {
            console.log(`response`, response)
            let picNasa = response.data;
            console.log(`picNasa, object`, response.data);
            setPicNasa(picNasa);
        })
        .catch(error => {
        console.log("The data was not returned", error);
        });
    }, []);

        return (
            <div class="App">
           {[picNasa].map((e, index) => (
               <DisplayPic 
               date = {e.date}
               explanation={e.explanation}
               hdurl = {e.hdurl}
               />
           ))  
           }
           </div>);
}
                
        


export default Display;

