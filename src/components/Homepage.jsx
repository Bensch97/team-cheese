import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Homepage extends Component {
    render() {
        return (
            console.log("Home")
        )
    }
}

export default withRouter(Homepage)