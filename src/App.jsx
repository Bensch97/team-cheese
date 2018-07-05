import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import './App.css';
import Loginpage from './components/Loginpage.jsx';
import Navigation from './components/Navigation.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>

          <Switch>
            <Route exact path='/' render={() => <Loginpage />} />
            <Route path='/navigation' render={() => <Navigation />} />
          </Switch>

      </React.Fragment>
    );
  }
}

export default App;
