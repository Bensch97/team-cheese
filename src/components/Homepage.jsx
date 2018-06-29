import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Header from './Header.jsx';

class Homepage extends Component {
    state = {
        username: '',
        groups: ''
    }
    render() {
        return (
            <div>
                <Header />
                <div className="ui segment container">
                <br />
                <br />
                <h1> Hey! This is a landing page!</h1>
                
                <br />
                <br />
                <a href="/login"> <Button>Login</Button></a>
                </div>
            </div>
        )

    }
}

export default withRouter(Homepage)