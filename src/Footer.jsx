import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

function Footer(){
    const phone =useContext(AppContext)
    //here useContext is used for consuming the context and AppContext
    // which we created using createContext to get the data
    return(
        <div>
            <h2>Footer</h2>
            <h3>Phone:{phone}</h3>
        </div>
    )
}

export default Footer