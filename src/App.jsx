import React, { Component } from 'react';
import DataCall from './components/DataCall.jsx'
import {Route, Switch} from 'react-router'
import './App.css';
import Homepage from './components/Homepage.jsx';
import Grouppage from './components/Grouppage.jsx';
import Loginpage from './components/Loginpage.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
            <Switch>
              <Route exact path='/' render={() => <Homepage></Homepage>}/>
              <Route path='/group' render={() => <Grouppage></Grouppage>}/>
              <Route path='/login' render={() => <Loginpage></Loginpage>}/>
              <DataCall />
            </Switch>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
