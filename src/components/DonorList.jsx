import React from 'react';
import { Item } from 'semantic-ui-react';

// const heroku = "https://team-cheese-backend.herokuapp.com/all";
const local = "http://localhost:3000/all";

class Donors extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header as='a'>{this.props.name}</Item.Header>
                            <Item.Meta>{this.props.phone}
                                <br />
                                {this.props.address}</Item.Meta>
                            <Item.Description>
                                <ul>
                                    <li>{this.props.manager}</li>
                                    <li>{this.props.pickup_date}</li>
                                    <li>{this.props.pickup_time}</li>
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
        fetch(local)
            .then(response => response.json())
            .then(data => {
                this.setState({ data })
                console.log(this.state)
            }
            )
    }


    render() {
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
                            pickup_date={data.pickup_date}
                            pickup_time={data.pickup_time} />)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DonorList;