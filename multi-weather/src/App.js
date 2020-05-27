import React, {Component} from 'react';
import Nav from './components/global/nav/index';
import WeatherList from './components/weatherList/index';
import './scss/main.scss';

export default class App extends Component { 
  constructor(props) {
    super(props) 
      this.state = {
        weatherRes: 'unset'
      }
  }
  render(){
    return (
      <div>
          <Nav />
          <div class="slogan">
            Compiling weather sources to give you a more accurate prediction.
          </div>
          <WeatherList />
          </div>
    )
  }
} 