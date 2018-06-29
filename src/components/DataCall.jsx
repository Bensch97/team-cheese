import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class DataCall extends React.Component {

    sendData = () => {
        console.log("button clicked")
        fetch("https://team-cheese-backend.herokuapp.com/users", {
            method: 'POST',
            body: JSON.stringify({
                data: {
                    "username": "test",
                    "password": "test"
                }
            }),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                console.log(data);
            })
    }

    render() {
        return (
            <div className="ui container">
                <div className="fullpage">
                    <Form onSubmit={this.sendData}>
                        <Form.Field>
                            <Button onClick={this.sendData} className="ui primary basic button">Send Data</Button>
                        </Form.Field>
                    </Form>
                </div>
            </div>
        );
    };
};

export default DataCall;