import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            <p>Home</p>
        )
    }
}

export default withRouter(Homepage)