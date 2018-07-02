import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import './App.css';

import Homepage from './components/Homepage.jsx';
import Grouppage from './components/Grouppage';
import Loginpage from './components/Loginpage.jsx';
import DataCall from './components/DataCall';
import Navigation from './components/Navigation.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>

          <Switch>
            <Route exact path='/' render={() => <Homepage></Homepage>} />
            <Route path='/login' render={() => <Loginpage></Loginpage>} />
            <Route path='/navigation' render={() => <Navigation />} />
          </Switch>

      </React.Fragment>
    );
  }
}

export default App;
