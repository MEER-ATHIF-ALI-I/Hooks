import {createContext} from 'react' //here we are creating the context using createContext

export const AppContext = createContext() //then we are assigning to the AppContext

//below code is for creating Provider function
const ContextProvider=(props)=>{
    const phone= "+1 123456"
    return (
        //here we are using AppContext.Provider function and value so that we can pass data to the components
        //using AppContext.Provider and value
        //here props.children -->is the childcomponents-->which ContextProvider has..
        //to get access to the children components in the main.jsx we use props.children
    <AppContext.Provider value={phone}>    
        {props.children} 
    </AppContext.Provider>
    )
}

export default ContextProvider