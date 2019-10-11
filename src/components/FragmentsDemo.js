import React, {Component} from 'react';

class FragmentsDemo extends Component {
    render() {
        return(
            // React.Fragment is used to reduce multiple div tag
            <React.Fragment>
                <h1>Hello</h1>
            </React.Fragment>
        )
    }
}

export default FragmentsDemo;