import React, {Component} from 'react';
import WeatherBox from './weatherbox/index.js';

export default class WeatherList extends Component { 
    constructor(){
        super()
        this.state = {
            cityLocation: 'Chicago',
            AWCurrentConditions: {}
        }
    }
    // accuweather
    fetchAccuweatherCities = () => {
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=BL84oxFsikLXeqZkAcPefEG8okzzcGzu&q=${this.state.cityLocation}&language=en-us`)
        .then(r => r.json())
        .then(cities => {
            // console.log('Accu', cities[0]['Key'])
            this.fetchAccuWeatherCurrentConditions(cities[0]['Key'])
            return cities
        })
    }

    fetchAccuWeatherCurrentConditions = cityKey => {
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=BL84oxFsikLXeqZkAcPefEG8okzzcGzu&language=en-us`)
        .then(r => r.json())
    .then(cc => {
        // console.log('AW CC', cc)
        this.setState({
            ...this.state,
            AWCurrentConditions: {
                weatherText: cc[0]['WeatherText'],
                rain: cc[0]['HasPrecipitation'],
                rainType: cc[0]['PrecipitationType'],
                tempF: cc[0]['Temperature']['Imperial']['Value'],
                tempC: cc[0]['Temperature']['Metric']['Value'],
                accuMobileLink: cc[0]['Link'],
                accuDirectLink: cc[0]['Link']
            }
        })
    })
    }

    // the weather channel
    fetchWeatherChannelCities = () => {
        fetch(`https://api.weather.com/v3/location/search?query=${this.state.cityLocation}&locationType=city&language=en-US&format=json&apiKey=320c9252a6e642f38c9252a6e682f3c6`)
        .then(r => r.json())
        .then(cities => {
            // console.log('Weather Channel', cities)
            return cities
        })
    }

    componentDidMount(){
        this.fetchAccuweatherCities()
        this.fetchWeatherChannelCities()
    }

    render() {
    return (
        <div>
        <WeatherBox weather={this.state.AWCurrentConditions} />
        {/* <WeatherBox />
        <WeatherBox />
        <WeatherBox /> */}
        </div>
    )
}
}