import React, { useState } from 'react'

function PrevState(){
    const[count, setCount] = useState(0)

    const changeCount=()=>{
        //when state updates depends on the previous state use call back function
        setCount((prev)=>prev+1) //1 
        setCount((prev)=>prev+1) //2
        setCount((prev)=>prev+1) //3
        setCount((prev)=>prev+1) //4
        console.log('inside value',count)
    }
    return (
        <div>
         <h1>{count}</h1>
         <button onClick={changeCount}>Button Clicked</button>
        </div>
    )
}

export default PrevState