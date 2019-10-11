import React, {Component} from 'react';

class EventHandlingDemo extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            age: ""
        };
    }

    changeUsernameEvent = event => {
        this.setState({
            username: event.target.value
        })
    }

    changeAgeEvent = event => {
        this.setState({
            age: event.target.value
        })
    }

    clickHandler = () => {
        alert(`${this.state.username} ${this.state.age}`);
    }
    
    render(){
        return(
            <form onSubmit={this.clickHandler}>
                <div>
                    <input type="text" value={this.state.username} onChange={this.changeUsernameEvent} />
                </div>
                <div>
                    <input type="text" value={this.state.age} onChange={this.changeAgeEvent} />
                </div>        
                <div>
                    <button>CLICK ME</button>
                </div>
            </form>
        )
    }
}

export default EventHandlingDemo;