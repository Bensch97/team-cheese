import React from 'react';
import { Item } from 'semantic-ui-react';

const heroku = "https://team-cheese-backend.herokuapp.com/all";
// const local = "http://localhost:3000/all";

class Donors extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header as='a'>{this.props.name}</Item.Header>
                            <Item.Meta>Phone: {this.props.phone}
                                <br />
                                Address: {this.props.address}</Item.Meta>
                            <Item.Description>
                                <ul>
                                    <li>Manager: {this.props.manager}</li>
                                </ul>
                            </Item.Description>
                            <Item.Extra></Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </div>
        )
    }
}

class DonorList extends React.Component {
    state = {
        data: []
    }

    componentDidMount = () => {
        fetch(heroku)
            .then(response => response.json())
            .then(data => {
                this.setState({ data })
                console.log(this.state)
            }
            )
    }


    render() {
        console.log(this.state.data)
        return (
            <React.Fragment>
                <div className="ui container">
                    <div className="ItemFullpage">
                        <br />
                        <h1>Your Donors:</h1>
                        {this.state.data.map(data => <Donors key={data.id}
                            name={data.name}
                            address={data.address}
                            phone={data.phone}
                            manager={data.manager}
                            pickup_time={data.pickup_time} />)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DonorList;