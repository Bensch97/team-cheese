import React, { Component } from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Grouppage from './Grouppage';
import DataCall from './DataCall';
import Userhome from './Userhome';
import Calendar from './Calendar';

class Navigation extends Component {

    render() {
        return (

            <Sidebar.Pushable as={Segment}>
                <Sidebar className="color" as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
                    <Link to="/navigation/home"><Menu.Item as='a'><Icon name='home' />Home</Menu.Item></Link>
                    <Link to="/navigation/group"><Menu.Item as='a'><Icon name='group' />Groups</Menu.Item></Link>
                    <Link to="/navigation/calendar"><Menu.Item as='a'><Icon name='calendar alternate outline' />Calendar</Menu.Item></Link>
                </Sidebar>

                <Sidebar.Pusher>
                    <Segment basic>
                        <Switch>
                            <Route path='/navigation/group' render={() => <Grouppage />} />
                            <Route path='/navigation/home' render={() => <Userhome />} />
                            <Route path='/navigation/calendar' render={() => <Calendar />} />
                            <Route path='/navigation/data' render={() => <DataCall />} />
                        </Switch>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>

        )
    }
}

export default Navigation;