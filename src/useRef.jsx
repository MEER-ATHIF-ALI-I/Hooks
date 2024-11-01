import { useRef,useEffect } from "react";
import React from 'react';


function UseRefBasics(){
    //useRef to access DOM elements
     // On component reload for the first time input element got focused
     // when the button is clicked it access the DOM element i.e input element and changes the
     // background to blue
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