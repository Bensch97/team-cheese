import React, { Component } from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Grouppage from './Grouppage';
import DataCall from './DataCall';
import Userhome from './Userhome';
import Calendar from './Calendar';
import DonorList from './DonorList';
import GroupRegister from './GroupRegister';

class Navigation extends Component {

    render() {
        return (

            <Sidebar.Pushable as={Segment}>
                <Sidebar className="color" as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>

                    <Menu.Item as='a' href="/navigation/home"><Icon name='home' />Home</Menu.Item>
                    <Menu.Item as='a' href="/navigation/group"><Icon name='group' />Groups</Menu.Item>
                    <Menu.Item as='a' href="/navigation/groupregister"><Icon name='plus' />Add Group</Menu.Item>
                    <Menu.Item as='a' href="/navigation/donorlist"><Icon name='caret square down outline' />Donor List</Menu.Item>
                    <Menu.Item as='a' href="/navigation/calendar"><Icon name='calendar alternate outline' />Calendar</Menu.Item>

                </Sidebar>

                <Sidebar.Pusher>
                    <Segment basic>
                        <Switch>
                            <Route path='/navigation/group' render={() => <Grouppage />} />
                            <Route path='/navigation/groupregister' render={() => <GroupRegister />} />
                            <Route path='/navigation/home' render={() => <Userhome />} />
                            <Route path='/navigation/calendar' render={() => <Calendar />} />
                            <Route path='/navigation/data' render={() => <DataCall />} />
                            <Route path='/navigation/donorlist' render={() => <DonorList />} />
                        </Switch>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>

        )
    }
}

export default Navigation;