import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Item } from 'semantic-ui-react';

const heroku = "https://team-cheese-backend.herokuapp.com/volunteers";
// const local = "http://localhost:3000/volunteers";

class Volunteer extends React.Component {

    state = {
        days: []
    }

    componentDidMount = () => {

        let days = []
        let allDays = this.props.days;
        for (let day in allDays) {
            if (allDays[day]) {
                days.push(day)
            }
        }
        this.setState({
            days: days
        })
    }
    render() {
        return (
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header as='a'>{this.props.name}</Item.Header>
                        <Item.Meta>{this.props.phone}</Item.Meta>
                        <Item.Meta>{this.props.email}</Item.Meta>
                        <Item.Meta>
                            {this.state.days.map((name, i) => {return name} )}
                        </Item.Meta>
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
        fetch(heroku)
            .then(response => response.json())
            .then(data => {
                this.setState({ data })
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
                        days={data.days_available}
                    />)}
                </div>
            </div>
        )
    }
}

export default withRouter(VolunteerPage);