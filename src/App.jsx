import React, {useState} from 'react';
import './App.css';

function App(){
 const [name,setName] = useState('Full Stack Developer')
  const changeMe=()=>{
   setName('Software Engineer')
  }

  return(
    <div>
    <h1>Am a {name}</h1>
    <button onClick={changeMe}>Click Me</button>
    </div>
  )
}


export default App