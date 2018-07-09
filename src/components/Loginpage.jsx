import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import Header from './Header.jsx';
import LoggedInModal from './LoggedInModal';
import { login } from '../actions';
import { connect } from 'react-redux';

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
        fetch("https://kwitter-api.herokuapp.com/auth/register", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: "cors",
          body: JSON.stringify({
            username: this.state.usernameRegistration,
            password: this.state.passwordRegistration,
          }),
        })
          .then(response => response.json())
          .then(data => {
            alert("You've been registered!")
          })
      }
    
      handleLogin = () => {
        fetch("https://kwitter-api.herokuapp.com/auth/login",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            }),
          })
          .then(response => response.json())
          .then(data => {
              console.log(data.token)
            this.props.dispatch(login(data.token));
            if (data.token) {
              this.setState({ loggedIn: true });
            } else {
              alert("Please register first.");
            }
          })
      }

    render() {
        // const { username, password, emailRegistration, usernameRegistration, passwordRegistration } = this.state;
        return (
            <React.Fragment>
                <Header />
                <LoggedInModal loggedIn={this.state.loggedIn} />
                <br />
                <div className="ui segment container loginContainer">
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
                </div>
            </React.Fragment>
        )
    }
}


export default withRouter(connect()(Loginpage));

