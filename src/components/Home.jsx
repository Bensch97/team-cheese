import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Image, List } from 'semantic-ui-react'

class Home extends Component {
    render() {
        return (
            <div className="ui container">
                <div className="fullpage">
                    <h1>Homepage</h1>
                    <p>These are your upcoming pickups!</p>
                    <Grid>
                        <Grid.Column width={4}>
                            <h3>Whole Foods</h3>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <h3>Details</h3>
                            <ul>
                                <li>Pickup Date: 12/12/2018</li>
                                <li>Pickup Time: 6:30pm</li>
                                <li>Items recieving: Canned goods, Dry goods</li>
                                <li>Pickup Size: Medium</li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h4>Who's available?</h4>
                            <List animated verticalAlign='middle'>
                                <List.Item>
                                    <Image avatar src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />
                                    <List.Content>
                                        <List.Header>Helen</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />
                                    <List.Content>
                                        <List.Header>Christian</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />
                                    <List.Content>
                                        <List.Header>Daniel</List.Header>
                                    </List.Content>
                                </List.Item>
                            </List>

                        </Grid.Column>
                    </Grid>
                    <Grid>
                        <Grid.Column width={4}>
                            <h3>Whole Foods</h3>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <h3>Details</h3>
                            <ul>
                                <li>Pickup Date: 12/12/2018</li>
                                <li>Pickup Time: 6:30pm</li>
                                <li>Items recieving: Canned goods, Dry goods</li>
                                <li>Pickup Size: Medium</li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h4>Who's available?</h4>
                            <List animated verticalAlign='middle'>
                                <List.Item>
                                    <Image avatar src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />
                                    <List.Content>
                                        <List.Header>Helen</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />
                                    <List.Content>
                                        <List.Header>Christian</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />
                                    <List.Content>
                                        <List.Header>Daniel</List.Header>
                                    </List.Content>
                                </List.Item>
                            </List>

                        </Grid.Column>
                    </Grid>
                    <Grid>
                        <Grid.Column width={4}>
                            <h3>Whole Foods</h3>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <h3>Details</h3>
                            <ul>
                                <li>Pickup Date: 12/12/2018</li>
                                <li>Pickup Time: 6:30pm</li>
                                <li>Items recieving: Canned goods, Dry goods</li>
                                <li>Pickup Size: Medium</li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <h4>Who's available?</h4>
                            <List animated verticalAlign='middle'>
                                <List.Item>
                                    <Image avatar src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />
                                    <List.Content>
                                        <List.Header>Helen</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />
                                    <List.Content>
                                        <List.Header>Christian</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <Image avatar src='http://aspiretechsoft.com/assets/images/testimonials/user-default.png' />
                                    <List.Content>
                                        <List.Header>Daniel</List.Header>
                                    </List.Content>
                                </List.Item>
                            </List>

                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);