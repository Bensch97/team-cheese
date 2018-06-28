import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Homepage extends Component {
    state = {
        username: '',
        groups: ''
    }
    render() {
        return (
            <div>
                <br />
                <br />
                <h1> Hey! This is a landing page!</h1>
                <br />
                <br />
                <a href="/login"> <Button>Login</Button></a>
            </div>
        )

    }
}

export default withRouter(Homepage)