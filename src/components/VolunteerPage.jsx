import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Item } from 'semantic-ui-react'

class Volunteer extends React.Component {
    render() {
        return (
            <Item.Group>
                <Item>
                    <Item.Content>
                        <Item.Header as='a'>{this.props.name}</Item.Header>
                        <Item.Meta>{this.props.bio}</Item.Meta>
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
        fetch("https://team-cheese-backend.herokuapp.com/groups")
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
                        name={data.group_name}
                        bio={data.bio} />)}
                </div>
            </div>
        )
    }
}

export default withRouter(VolunteerPage);