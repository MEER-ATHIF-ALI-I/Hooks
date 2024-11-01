import React,{useState,useCallback} from 'react';
import Header from './UseCallHeader';

function UseCallBack(){
    const [count,setCount] =useState(0)
    

    // const Method=()=>{ }

    //if we pass this function as props to the Header function it is rendered again bcz
    //everytime it renders creates a new function everytime bcz of the referential equality

    const method=useCallback(()=>{},[])
    
    //if we use useCallback hook it returns memoized function. i.e function is catched and does not re-render again.

    return(
        <div>
          <Header method={method}/>
          <h1>{count}</h1>
          <button onClick={()=>setCount((prev)=>prev+1)}>Click Here</button>
        </div>
    )
}
export default UseCallBack