import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

class Loginpage extends Component {
    state = {
        username: '',
        password: '',
        emailRegistration: '',
        usernameRegistration: '',
        passwordRegistration: '',
        loggedIn: false,
    };

    onChange = field => e => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleRegistration = () => {
        fetch("a url")
            .then(response => response.json())
            .then(data => {
            })
    }

    handleLogin = () => {
        fetch("a url")
            .then(response => response.json())
            .then(data => {
            })
    }

    render() {
        const { username, password, emailRegistration, usernameRegistration, passwordRegistration } = this.state;
        return (
            <React.Fragment>
                <br />
                <div className="ui segment">
                    <div className="ui"></div>
                    <Form onSubmit={this.handleLogin}>
                        <Form.Field>
                            <h1>Login:</h1>
                            <label>Username:</label>
                            <input type="text" onChange={this.onChange("username")} />
                        </Form.Field>

                        <Form.Field>
                            <label>Password:</label>
                            <input type="password" onChange={this.onChange("password")} />
                            <br />
                            <br />
                            <Button type='submit' className="ui primary basic button">Login</Button>
                        </Form.Field>
                    </Form>
                </div>

                <div className="ui segment">
                    <div className="ui"></div>
                    <Form onSubmit={this.handleRegistration}>
                        <h1>Register:</h1>
                        <Form.Field>
                            <label>Email:</label>
                            <input type="text" onChange={this.onChange("emailRegistration")} />
                        </Form.Field>
                        <Form.Field>
                            <label>Username:</label>
                            <input type="text" onChange={this.onChange("usernameRegistration")} />
                        </Form.Field>

                        <Form.Field>
                            <label>Password:</label>
                            <input type="password" onChange={this.onChange("passwordRegistration")} />
                        </Form.Field>
                        <Button type="submit" className="ui primary basic button">Register</Button>
                    </Form>
                </div>
                <div id='groupList'>
                    <h3 className='loginPageText'> Not-for-Profits you can help today! </h3>
                    <ol>
                        <li>Not for Profit</li>
                        <li>Not for Profit</li>
                        <li>Not for Profit</li>
                    </ol>
                </div>
            </React.Fragment>
        )
    }
}


export default withRouter(Loginpage)
