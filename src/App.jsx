import React, {useState} from 'react';
import './App.css';
import Profile from './Profile';
import Footer from './Footer';

function App(){
 const [name,setName] = useState('Full Stack Developer')
  const changeMe=()=>{
   setName('Software Engineer')
  }

  //here we are importing the Profile and Footer Component inside the App Component
  return(
    <div>
      <Profile/>
      <Footer/>
    <h1>Am a {name}</h1>
    <button onClick={changeMe}>Click Me</button>
    </div>
  )
}


export default App