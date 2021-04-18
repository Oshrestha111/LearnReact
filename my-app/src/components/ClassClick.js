import React, { Component } from 'react'

export class ClassClick extends Component {

    Handler() {
        console.log('Class button CLicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.Handler}>ClassCLick</button>
            </div>
        )
    }
}

//class component ma function lekhda, aagadi Function lekhna pardaina. and this. vanni use garnu parxa

export default ClassClick
