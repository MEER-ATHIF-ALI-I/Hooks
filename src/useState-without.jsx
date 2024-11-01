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

    return(
        <div>
          <h1>I have rendered {count} times!</h1>
        </div>
    )
}

export default WithoutArray