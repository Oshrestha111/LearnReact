import React, { Children } from 'react'

//stateless function component
const Hey = (props) => { 
    console.log(props)
return (
    <div>
    <h1>
        Namaste {props.name},{props.mood}
    </h1>
    {props.children}
    </div>

)
    
}

export default Hey  