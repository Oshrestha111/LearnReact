import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){  //state use garna constructor use garna parxa. and super method pani. 
        super(props)

            this.state={
                count:0
            }
        
    }

    increment() {
        // this.setState(
        // { //UI ma dekhauxa or print garxa. state set gardinxa.. don't modify state directly use setstate
        //     count: this.state.count + 1 
        // },
        // () => {
        //     console.log('callback value', this.state.count)
        // }
        // )

        this.setState((prevState) =>({
            count: prevState.count+1
        }))
        console.log(this.state.count)

    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return(
            <div>
            <div>Count= {this.state.count}</div>
            <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
            
        )
    }
}

export default Counter
