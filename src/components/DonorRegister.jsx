import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const heroku = "https://team-cheese-backend.herokuapp.com/adddonor";
// const local = "http://localhost:3000/adddonor";

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
        console.log(this.state);
    }

    handleChecked = (day, e) => {
        let dayChecked = this.state.days;
        dayChecked[day] = e.target.checked;
        this.setState({
            days: dayChecked
        })
        console.log(this.state);
    }

    handleSubmit = () => {
        fetch(heroku, {
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
            .then(response => response.json())
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
                                <h3>Weekly availability: </h3>
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
            </React.Fragment>
        )
    }
}

export default DonationRegister;