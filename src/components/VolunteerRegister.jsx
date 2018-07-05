import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

class VolunteerRegister extends Component {

    state = {
        volunteer_name: '',
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
                group_name: this.state.volunteer_name,
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
                    <h1>Register A Volunteer</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Name of Volunteer' onChange={this.handleChange("volunteer_name")} />
                        </Form.Field>
                        <Form.Field>
                            <label>Bio</label>
                            <input placeholder='Volunteer Biography' onChange={this.handleChange("bio")} />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(VolunteerRegister);