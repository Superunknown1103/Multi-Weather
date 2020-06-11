import React, { Component } from 'react';
import Nav from './components/global/nav/index';
import WeatherList from './components/weatherList/index';
import './scss/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherRes: 'unset',
      citySelection: 'Chicago'
    }
  }

  changeCity = (e) => {
    let selection = document.getElementById('search').value;
    this.setState({
      citySelection: selection
    })
  }

  render() {
    console.log(this.state.citySelection);
    return (
      <div>
        <Nav changeCity={this.changeCity} />
        <div class="slogan">
          Compiling weather sources to give you a more accurate prediction.
          </div>
        <WeatherList city={this.state.citySelection} />
      </div>
    )
  }
} 