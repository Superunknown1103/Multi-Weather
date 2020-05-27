import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

export default class App extends Component { 
  render(){
    return (
      <div>
           test
          <Router>
              <Switch>
                {/* <Route exact path="/" component={Home} /> */}
              </Switch>
          </Router>
          </div>
    )
  }
}