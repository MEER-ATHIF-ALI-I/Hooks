import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Object from  './Object.jsx'
import PrevState from './PrevState.jsx'
import WithoutArray from './useState-without.jsx'
import UseRefBasics from './useRef.jsx'
import UseMemo from './UseMemo.jsx'
import UseCallBack from './UseCallBack.jsx'
import ContextProvider, { AppContext } from './context/AppContext.jsx'
import UseReducer from './UseReducer.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
       {/* <ContextProvider> 
         
      <App /> */}
    {/* <Object/>
    <PrevState/> */}
    {/* <WithoutArray/> */}
    {/* <UseRefBasics/> */}
    {/* <UseMemo/> */}
    {/* <UseCallBack/> */}
      {/* </ContextProvider> */}
      <UseReducer/>
    
   
   </StrictMode>,
 
)
//here we are providing the context to the App component so the values can be used in the AppComponent