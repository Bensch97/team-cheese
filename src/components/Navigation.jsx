import React, { Component } from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import VolunteerPage from './VolunteerPage';
import Home from './Home';
import DonorList from './DonorList';
import VolunteerRegister from './VolunteerRegister';
import DonorRegister from './DonorRegister';
import Calendar from './Calendar';

class Navigation extends Component {

    render() {
        return (

            <Sidebar.Pushable as={Segment}>
                <Sidebar className="background" as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
                    <Menu.Item as='a' href="/navigation/home"><Icon name='home' />Home</Menu.Item>
                    <Menu.Item as='a' href="/navigation/volunteers"><Icon name='group' />Volunteers</Menu.Item>
                    <Menu.Item as='a' href="/navigation/volunteerregister"><Icon name='plus' />Add Volunteer</Menu.Item>
                    <Menu.Item as='a' href="/navigation/donorlist"><Icon name='caret square down outline' />Donor List</Menu.Item>
                    <Menu.Item as='a' href="/navigation/donorregister"><Icon name='plus' />Add Donor</Menu.Item>
                    <Menu.Item as='a' href="/navigation/calendar"><Icon name='calendar alternate outline' />Calendar</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher>
                    <Segment basic>
                        <Switch>
                            <Route exact path='/navigation/home' render={() => <Home />} />
                            <Route path='/navigation/volunteers' render={() => <VolunteerPage />} />
                            <Route path='/navigation/volunteerregister' render={() => <VolunteerRegister />} />
                            <Route path='/navigation/calendar' render={() => <Calendar />} />
                            <Route path='/navigation/donorregister' render={() => <DonorRegister />} />
                            <Route path='/navigation/donorlist' render={() => <DonorList />} />
                        </Switch>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>

        )
    }
}

export default Navigation;