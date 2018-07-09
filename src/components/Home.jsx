import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Image, List } from 'semantic-ui-react';

const heroku = "https://team-cheese-backend.herokuapp.com/home";
const local = "http://localhost:3000/home";

class VolunteerListItem extends React.Component {

    render() {
        return (
            <List animated verticalAlign='middle'>
                <List.Item>
                    <Image avatar src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />
                    <List.Content>
                        <List.Header>{this.props.name}</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        )
    }
}

class DonationItem extends React.Component {

    state = {
        workers: []
    }

    componentDidMount = () => {
        this.setState({
            workers: this.props.workers
        })
    }

    render() {
        console.log("1", typeof this.state.workers)
        return (
            <Grid>
                <Grid.Column width={4}>
                    <h3>{this.props.name}</h3>
                </Grid.Column>
                <Grid.Column width={9}>
                    <h3>Details</h3>
                    <ul>
                        <li>Pickup Days: {this.props.pickupDays}</li>
                        <li>Pickup Time: </li>
                        <li>Items recieving:</li>
                        <li>Pickup Size: </li>
                    </ul>
                </Grid.Column>
                <Grid.Column width={3}>
                    <h4>Who's available?</h4>
                    {this.state.workers.map((name,i) => <VolunteerListItem key={i} name={name} />)}
                </Grid.Column>
            </Grid>
        )
    }
}

class Home extends Component {

    state = {
        data: []
    }

    componentDidMount = () => {
        fetch(heroku)
            .then(response => response.json())
            .then(data => {
                this.setState({ data })
                // console.log(this.state.data)
            })
    }

    render() {
        return (
            <div className="ui container">
                <div className="fullpage">
                    <h1>Homepage</h1>
                    <p>These are your upcoming pickups!</p>
                    {this.state.data.map(data => <DonationItem key={data.id}
                        name={data.name}
                        phone={data.phone}
                        email={data.email}
                        pickupDays={data.days_available}
                        workers={data.available_workers}
                    />)}
                </div>
            </div>
        )
    }
}

export default withRouter(Home);