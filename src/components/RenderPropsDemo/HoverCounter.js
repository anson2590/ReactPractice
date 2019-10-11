import React, { Component } from 'react';

class HoverCounter extends Component {
    render() {
        const { count } = this.props;
        return(
            <h2 onMouseOver={this.props.incrementCount}>Hoverd { count } times</h2>
        )
    }
}

export default HoverCounter;