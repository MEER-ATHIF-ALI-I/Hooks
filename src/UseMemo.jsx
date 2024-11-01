import React, { useMemo, useState } from 'react'

function UseMemo(){
//here onclick of the counter the calculation function is again executed because
// when we click counter++ the state is changed and cause re-render and recalculating the cube
//so to avoid recalculate the value we will use useMemo
    const [value,setValue]=useState(0);
    const [count,setCount] =useState(0);


   function cube(num){
        console.log('Calculation done')
        return Math.pow(num,3)
    }
    // const result= cube(value)

    // we have directly assigned to the value to the result in the above instead we now use useMemo
    //useMemo accepts two parameters -callback function, dependency. Now it will not recalculate again
    //and again. instead when the value property changes it calculate the cube and returns the cube value.

    const result =useMemo(()=>{
        return cube(value)
    },[value])
    return (

        <div>
            <input type= 'number' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <h1>Cube of the number:{result}</h1>
            <button onClick={()=>{setCount(count+1)}}>counter++</button>
            <h1>Counter:{count}</h1>

        </div>
    )
}

export default UseMemo