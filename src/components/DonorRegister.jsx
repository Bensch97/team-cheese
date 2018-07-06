import React from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Example extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
        />;
    }
}

const heroku = "https://team-cheese-backend.herokuapp.com/adddonor";
const local = "http://localhost:3000/adddonor";

class DonationRegister extends React.Component {

    state = {
        name: '',
        phone: '',
        address: '',
        manager: '',
        date: moment(),
        time: '',
        days: {
            "Sunday": false,
            "Monday": false,
            "Tuesday": false,
            "Wednesday": false,
            "Thursday": false,
            "Friday": false,
            "Saturday": false
        }
    };

    handleChange = field => e => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleDate = (date) => {
        this.setState({
            date: date
        })
        console.log(this.state.date);
    }

    handleChecked = (day, e) => {
        let dayChecked = this.state.days;
        dayChecked[day] = e.target.checked;
        this.setState({
            days: dayChecked
        })
    }

    handleSubmit = () => {
        fetch(local, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({
                name: this.state.name,
                phone: this.state.phone,
                address: this.state.address,
                manager: this.state.manager,
                date: this.state.date,
                time: this.state.time,
                days: this.state.days,
            }),
        })
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="ui container">
                    <div className="ItemFullpage">
                        <h1>Add a donor</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='Name of donor' onChange={this.handleChange("name")} />
                            </Form.Field>
                            <Form.Field>
                                <label>Phone</label>
                                <input placeholder='Phone' onChange={this.handleChange("phone")} />
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input placeholder='Address' onChange={this.handleChange("address")} />
                            </Form.Field>
                            <Form.Field>
                                <label>Manager</label>
                                <input placeholder='Manager' onChange={this.handleChange("manager")} />
                            </Form.Field>
                            <Form.Field>
                                <label>Pickup Date</label>
                                <DatePicker selected={this.state.date} onChange={this.handleDate} />
                            </Form.Field>
                            <Form.Field>
                                <label>Pickup Time</label>
                                <input placeholder='Time' onChange={this.handleChange("time")} />
                            </Form.Field>
                            
                            <Form.Field>
                                <h3>Weekly availability: </h3>
                                <label onChange={(e) => this.handleChecked("Sunday", e)}><Checkbox label="Sunday" /></label>
                                <label onChange={(e) => this.handleChecked("Monday", e)}><Checkbox label="Monday" /> </label>
                                <label onChange={(e) => this.handleChecked("Tuesday", e)}><Checkbox label="Tuesday" /></label>
                                <label onChange={(e) => this.handleChecked("Wednesday", e)}><Checkbox label="Wednesday" /></label>
                                <label onChange={(e) => this.handleChecked("Thursday", e)}><Checkbox label="Thusday" /></label>
                                <label onChange={(e) => this.handleChecked("Friday", e)}><Checkbox label="Friday" /></label>
                                <label onChange={(e) => this.handleChecked("Saturday", e)}><Checkbox label="Saturday" /></label>
                            </Form.Field>

                            <Button type='submit'>Submit</Button>
                        </Form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DonationRegister;