import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Image, List } from 'semantic-ui-react';


const heroku = "https://team-cheese-backend.herokuapp.com/home";
// const local = "http://localhost:3000/home";

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

    render() {
        return (
            <Grid>
                <Grid.Column width={4}>
                    <h3>{this.props.name}</h3>
                </Grid.Column>
                <Grid.Column width={9}>
                    <h3>Details</h3>
                    <ul>
                        <li>Contact: {this.props.manager}</li>
                        <li>Phone: {this.props.phone}</li>
                        <li>Email: {this.props.email} </li>
                        <li>Pickup Day: </li>
                        <li>Pickup Time: </li>
                        <li>Items recieving:</li>
                        <li>Pickup Size: </li>
                    </ul>
                </Grid.Column>
                <Grid.Column width={3}>
                    <h4>Who's available?</h4>
                    {this.props.workers.map((name, i) => <VolunteerListItem key={i} name={name} />)}
                </Grid.Column>
            </Grid>
        )
    }
}

class ListItems extends React.Component {

    render() {
        return (
            <div>
                {Object.entries(this.props.listItem).map((item, i) => {
                    if (item[1].length || this.props.pickupDays.includes(item[0])){
                        return <DonationItem
                            key={i}
                            name={this.props.name}
                            workers={item[1]}
                            phone={this.props.phone}
                            email={this.props.emails}
                            manager={this.props.manager}
                        />
                    }
                }
                )}
            </div>
        )
    }
}


class Home extends Component {

    state = {
        data: [],
        listItems: []
    }

    componentDidMount = () => {
        fetch(heroku)
            .then(response => response.json())
            .then(data => {
                let listItems = []
                for (let i in data) {
                    listItems.push(data[i].days_with_workers)
                }
                this.setState({
                    data,
                    listItems
                })
            })
    }

    render() {
        return (
            <div className="ui container">
                <div className="ItemFullpage">
                    <h1>Homepage</h1>
                    <p>These are your upcoming pickups!</p>
                    {this.state.data.map((data, i) =>
                        <ListItems
                            key={data.id}
                            name={data.name}
                            phone={data.phone}
                            email={data.email}
                            manager={data.manager}
                            pickupDays={data.pickupDays}
                            listItem={this.state.listItems[i]} />)}
                </div>
            </div>
        )
    }
}

export default withRouter(Home);

