import React, { Component } from 'react'


//stateful class component
class Greet extends Component{
    render(){
        return (
        <h1>
            Good Morning {this.props.shoes}, is your favourite color {this.props.color}?
        </h1>
        )
    }
}

export default Greet