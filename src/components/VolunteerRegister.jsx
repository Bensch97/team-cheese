import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Form, Checkbox } from 'semantic-ui-react';

const heroku = "https://team-cheese-backend.herokuapp.com/addvolunteer";
const local = "http://localhost:3000/addvolunteer";

class VolunteerRegister extends Component {

    state = {
        volunteer_name: '',
        phone: '',
        email: '',
        days: {
            "Sunday": false,
            "Monday": false,
            "Tuesday": false,
            "Wednesday": false,
            "Thursday": false,
            "Friday": false,
            "Saturday": false
        }
    }

    handleChange = field => e => {
        this.setState({
            [field]: e.target.value
        });
        console.log(this.state)
    }

    handleChecked = (day, e) => {
        let dayChecked = this.state.days;
        dayChecked[day] = e.target.checked;
        this.setState({
            days: dayChecked
        })
        console.log(this.state.days)
    }

    handleSubmit = () => {
        fetch(heroku, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({
                volunteer_name: this.state.volunteer_name,
                phone: this.state.phone,
                email: this.state.email,
                days: this.state.days,
            }),
        })
            .then(response => response.json())
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
                            <label>Phone</label>
                            <input placeholder='Phone #' onChange={this.handleChange("phone")} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' onChange={this.handleChange("email")} />
                        </Form.Field>
                        <Form.Field>
                            <h3>Days of availability: </h3>
                            <label onChange={(e) => this.handleChecked("Sunday", e)}><input type="checkbox" label="Sunday" />Sunday</label>
                            <label onChange={(e) => this.handleChecked("Monday", e)}><input type="checkbox" label="Monday" />Monday</label>
                            <label onChange={(e) => this.handleChecked("Tuesday", e)}><input type="checkbox" label="Tuesday" />Tuesday</label>
                            <label onChange={(e) => this.handleChecked("Wednesday", e)}><input type="checkbox" label="Wednesday" />Wednesday</label>
                            <label onChange={(e) => this.handleChecked("Thursday", e)}><input type="checkbox" label="Thusday" />Thursday</label>
                            <label onChange={(e) => this.handleChecked("Friday", e)}><input type="checkbox" label="Friday" />Friday</label>
                            <label onChange={(e) => this.handleChecked("Saturday", e)}><input type="checkbox" label="Saturday" />Saturday</label>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(VolunteerRegister);