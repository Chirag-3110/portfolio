import React, { useEffect, useState } from "react";
import './Java.css';
function JavaBar(){
    let [number,setNumber]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
            if(number!==60){
                setNumber(++number);
            }
        },62);
    },[number])
    return(
        <>
           <div className="body-bar">
               <div className="skill">
                   <div className="outer">
                       <div className="inner">
                           <div className="number">
                               {number}%
                           </div>
                       </div>
                   </div>
                   <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="220px" height="220px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle
                            className="javacircle"
                            cx="106" cy="106" r="92" stroke-linecap="round"
                        />
                </svg>
               </div>
               <h1>Java</h1>
           </div>
        </>
    )
}
export default JavaBar