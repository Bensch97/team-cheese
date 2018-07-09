import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Item } from 'semantic-ui-react';

const heroku = "https://team-cheese-backend.herokuapp.com/volunteers";
const local = "http://localhost:3000/volunteers";

class Volunteer extends React.Component {
    render() {
        return (
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header as='a'>{this.props.name}</Item.Header>
                        <Item.Meta>{this.props.phone}</Item.Meta>
                        <Item.Meta>{this.props.email}</Item.Meta>
                        <Item.Meta>{this.props.days}</Item.Meta>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}

class VolunteerPage extends Component {
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
            <div className="ui container">
                <div className="fullpage">
                    <h1>Your volunteers:</h1>

                    {this.state.data.map(data => <Volunteer key={data.id}
                        name={data.name}
                        phone={data.phone}
                        email={data.email}
                        days={JSON.stringify(data.days_available)}


                    />)}
                </div>
            </div>
        )
    }
}

export default withRouter(VolunteerPage);