import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import './App.css';

import Homepage from './components/Homepage.jsx';
import Grouppage from './components/Grouppage.jsx';
import Loginpage from './components/Loginpage.jsx';
import DataCall from './components/DataCall.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App-header">
          <div className="App-title">
            <h1> Food Fetch </h1>
          </div>
        </div>

        <div className="ui container">
          <Switch>
            <Route exact path='/' render={() => <Homepage></Homepage>} />
            <Route path='/group' render={() => <Grouppage></Grouppage>} />
            <Route path='/login' render={() => <Loginpage></Loginpage>} />
            <Route path='/data' render={() => <DataCall />} />
          </Switch>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
