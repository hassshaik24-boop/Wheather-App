import React from "react";
import { useState } from "react";
import axios from "axios"
const Wheather=()=>{
    const [city,setCity]=useState("");
    async function getData(){
    try {
   const response = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=113606d10789ac8951e18961118cd415&units=metric`
);

    console.log(response.data);
} catch (error) {
    console.log(error.response?.data);
}
    }
 return(
    <div>
        <input placeholder="Enter City" onChange={(e)=>setCity(e.target.value)}></input>
        <button onClick={getData} type="submit">Search</button>
    </div>
 )
}
export default Wheather;