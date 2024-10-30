import React, { useState } from 'react'

function PrevState(){
    const[count, setCount] = useState(0)

    const changeCount=()=>{
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
    }
    return (
        <div>
         <h1>{count}</h1>
         <button onClick={changeCount}>Button Clicked</button>
        </div>
    )
}

export default PrevState