import React from 'react'

function Header(){
    console.log("Header rendered")
    return(
        <div>
            <h2>Header</h2>
        </div>
    )
}

//here we use React.memo method bcz Header will not be rendered if props does not change
export default React.memo(Header)