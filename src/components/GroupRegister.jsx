import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

class GroupRegister extends Component {

    state = {
        group_name: '',
        bio: '',
    }

    handleChange = field => e => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit = () => {
        fetch('https://team-cheese-backend.herokuapp.com/addgroup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({
                group_name: this.state.group_name,
                bio: this.state.bio
            }),
        })
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <div className="ui container">
                <div className="fullpage">
                    <h1>Register A Group</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Name of Group' onChange={this.handleChange("group_name")} />
                        </Form.Field>
                        <Form.Field>
                            <label>Bio</label>
                            <input placeholder='Group Biography' onChange={this.handleChange("bio")} />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(GroupRegister);