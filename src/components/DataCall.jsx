import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class DataCall extends React.Component {

    sendData = () => {
        fetch("https://test-backend-cheese.herokuapp.com/")
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);
        })
    }

    render() {
        return (
            <div className="ui segment">
                <div className="ui active "></div>
                <Form onSubmit={this.sendData}>
                    <Form.Field>
                        <Button  onClick={this.sendData} className="ui primary basic button">Send Data</Button>
                    </Form.Field>
                </Form> 
            </div>
        );
    };
};

export default DataCall;