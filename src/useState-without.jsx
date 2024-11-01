import React,{useState, useEffect} from 'react';



function WithoutArray(){
    const [count,setCount] = useState(0);
//useEffect without dependency array will render every 2 seconds
// bcz count state is changing on every render
    useEffect(()=>{
       setTimeout(()=>{
        setCount((count)=>{
            return count +1
        })
       },2000)
    })


    //with dependency array it will be rendered only once

    // useEffect(()=>{
    //     setTimeout(()=>{
    //      setCount((count)=>{
    //          return count +1
    //      })
    //     },2000)
    //  },[])


    //useEffect with dependency array which includes variable 
    // will be rendered whenever the count state changes

    // useEffect(()=>{
    //     setTimeout(()=>{
    //      setCount((count)=>{
    //          return count +1
    //      })
    //     },2000)
    //  },[count])
    
    return(
        <div>
          <h1>I have rendered {count} times!</h1>
        </div>
    )
}

export default WithoutArray