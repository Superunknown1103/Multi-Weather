import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/global/nav/index';
import './scss/main.scss';

export default class App extends Component { 
  render(){
    return (
      <div>
          <Nav />
          <Router>
              <Switch>
                {/* <Route exact path="/" component={Home} /> */}
              </Switch>
          </Router>
          </div>
    )
  }
}