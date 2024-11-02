import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';

export default function Contact() {
    const phone= useContext(AppContext)
    //here useContext is used for consuming the context and AppContext
    // which we created using createContext to get the data
  return (
    <>
    <h2>Contact</h2>
    <h3>Phone:{phone}</h3>
    </>
  );
}