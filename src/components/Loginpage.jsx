import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

class Loginpage extends Component {
    state = {
        email: '',
        username: '',
        password: '',

    }
    onChange = stateProp => evt => {
        this.setState({[stateProp]: evt.target.value})
    }
    render() {
        const {email, username, password} = this.state;
        return (
            <div id='loginPage'>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
                <div className='titleArea'>
                    <h1 className='loginPageText'> Welcome to Food Fetch </h1>
                </div>
                <div id='loginArea'>
                    <h3 className='loginPageText'> Login </h3>
                        <input type='text' placeholder='Username' onChange={this.onChange('username')} />
                        <input type='text' placeholder='Password' onChange={this.onChange('password')} />
                </div>
                <div id='registerArea'>
                    <h3 className='loginPageText'> Don't have an account? Register here! </h3>
                        <input type='text' placeholder='Email' onChange={this.onChange('email')} />
                        <input type='text' placeholder='Username' onChange={this.onChange('username')} />
                        <input type='text' placeholder='Password' onChange={this.onChange('password')} />
                </div>
                <div id='groupList'>
                    <h3 className='loginPageText'> Not-for-Profits you can help today! </h3>
                    <ol>
                        <li>Not for Profit</li>
                        <li>Not for Profit</li>
                        <li>Not for Profit</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default withRouter(Loginpage)