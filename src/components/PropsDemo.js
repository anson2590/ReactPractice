import React, {Component}  from 'react';


class PropsDemo extends Component {
    
    render() {
        return (
        <div className="App">
            <header className="App-header">
                {this.props.children}
                <h1>My name: {this.props.name}</h1>
                <h1>My age: {this.props.age}</h1>
            </header>
        </div>
        );
    }
}

export default PropsDemo;
