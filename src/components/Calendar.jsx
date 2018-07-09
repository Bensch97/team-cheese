import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Calendar extends Component {
    render() {
        return (
            <div className="fullpage ui container">
                <div className="fullpage">
                    <h1>Calander</h1>
                </div>
            </div>
        )
    }
}

export default withRouter(Calendar);