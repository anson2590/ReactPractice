import React, { Component } from 'react';

class ClickCounter extends Component {
    render() {
        // const { count } = this.state; //extracting the state
        return(
            <button onClick={this.props.incrementCount}>Clicked { this.props.count } times</button>
        )
    }
}

export default ClickCounter;