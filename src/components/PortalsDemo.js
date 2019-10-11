import React, { Component } from 'react';
import ReactDom from 'react-dom';


// createPortal is used to create a new div tag to do that add createPortal here and update id in 
// public index.html add Portal-root or ur own id after root id in tht file
class PortalsDemo extends Component {
    render(){
        return ReactDom.createPortal(
            <h1>
                Hello Portal
            </h1>,
            document.getElementById('Portal-root')
        )
    }
}

export default PortalsDemo;