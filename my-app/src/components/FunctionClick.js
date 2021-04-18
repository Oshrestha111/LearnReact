import React from 'react'

function FunctionClick() {
    function Handler() {
        console.log("Button clicked");
    }
    return (
        <div>
            <button onClick={Handler}>Click</button>
        </div>
    )
}


//function component ma function lekhda aagadi function lekhna parxa.
//event handling function euta function ho so no () neded. and written in camelcase.
export default FunctionClick 
//rfce snippet for function
//rce snippet for class


