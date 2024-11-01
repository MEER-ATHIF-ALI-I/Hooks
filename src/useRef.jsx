import { useRef,useEffect } from "react";
import React from 'react';


function UseRefBasics(){
    const inputEle=useRef(null)
    const buttonClicked=()=>{
        console.log(inputEle.current)
        inputEle.current.style.background = "blue" 

    }
   
    useEffect(()=>{
        inputEle.current.focus()
    })
    return (
        <div>
         <input type='text' ref={inputEle}/>
         <button onClick={buttonClicked}>Click Me</button>
        </div>
    )
}

export default UseRefBasics