import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class DonationForm extends React.Component {

    state = {
        name: '',
        phone: '',
        address: '',
        manager: '',
        date: '',
        time: '',
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
                    <Button type='submit'>Submit</Button>
                </Form>
            </React.Fragment>
        )
    }
}

export default DonationForm;