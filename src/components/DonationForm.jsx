import React from 'react'
import { Button, Form, Checkbox } from 'semantic-ui-react'

class DonationForm extends React.Component {

    state = {
            name: '',
            phone: '',
            address: '',
            manager: '',
            date: '',
            time: '',
            day: '',
    };

    handleChange = field => e => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit = () => {
        fetch("https://team-cheese-backend.herokuapp.com/adddonor", {
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
                day: this.state.day,
            }),
        })
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <React.Fragment>
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
                        <input placeholder='Pickup Date' onChange={this.handleChange("date")} />
                    </Form.Field>
                    <Form.Field>
                        <label>Pickup Time</label>
                        <input placeholder='Pickup Time' onChange={this.handleChange("time")} />
                    </Form.Field>
                    <Form.Field>
                        <label>Day of Pickup</label>
                            <label><input type="checkbox" name="Sunday" id="Sunday" value="Sunday"/>Sunday</label>
                            <label><input type="checkbox" name="Monday" id="Monday" value="Monday"/>Monday</label>
                            <label><input type="checkbox" name="Tuesday" id="Tuesday" value="Tuesday"/>Tuesday</label>
                            <label><input type="checkbox" name="Wednesday" id="Wednesday" value="Wednesday"/>Wednesday</label>
                            <label><input type="checkbox" name="Thursday"id="Thursday" value="Thursday"/>Thursday</label>
                            <label><input type="checkbox" name="Friday"id="Friday" value="Friday"/>Friday</label>
                            <label><input type="checkbox" name="Saturday"id="Saturday" value="Saturday"/>Saturday</label>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </React.Fragment>
        )
    }
}

export default DonationForm;