import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Homepage extends Component {
    state = {
        username: '',
        groups: ''
    }
    render() {
        return (
            <div>
                <p id='usennameSpace'>{this.state.username}</p>
                <h1 className='titleArea'> Food Fetch! </h1>
            </div>
        )
        
    }
}

export default withRouter(Homepage)