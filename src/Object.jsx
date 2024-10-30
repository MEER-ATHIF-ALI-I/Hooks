import React from 'react';


function Object(){
    const[details,setDetails] = React.useState({
        nameone:"poltechnic",
        nametwo: "B.tech",
        place: "Chennai"
    })

    const clickMe=()=>{
        setDetails({...details,nameone:"M.tech"})
    }

    return(
        <div>
           <h2>I completed my {details.nameone} and {details.nametwo}. I live in {details.place}</h2>
           <button onClick={clickMe}>click Object</button>
        </div>
    )
}

export default Object