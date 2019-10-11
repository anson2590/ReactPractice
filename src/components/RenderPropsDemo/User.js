import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState(prevState => {
            return{count: prevState.count + 1}
        })
    }

    render() {
        return(
            <h1>{this.props.name(true)}</h1>
        )
    }
}

export default User;