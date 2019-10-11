import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return(
            <div>
                <div>
                    <input type='text' ref={this.inputRef} />
                </div>
                <div>
                    <button onClick={this.clickHandler}>Click here</button>
                </div>    
            </div>
        )
    }
}

export default RefsDemo;