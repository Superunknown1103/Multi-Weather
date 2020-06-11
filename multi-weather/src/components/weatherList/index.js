import React, {Component} from 'react';
import WeatherBox from './weatherbox/index.js';

export default class WeatherList extends Component { 
    constructor(props){
        super(props)
        this.state = {
            cityLocation: props.city,
            AWCurrentConditions: {},
            WCCurrentConditions: {},
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            cityLocation: nextProps.city
        })
    };

    // accuweather
    fetchAccuweatherCities = () => {
        console.log(this.state.cityLocation)
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
                    name: 'AccuWeather',
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
            console.log('Weather Channel', cities)
            this.fetchWeatherChannelCurrentConditions(cities.location.latitude[0], cities.location.longitude[0])
            return cities
        })
    }

    fetchWeatherChannelCurrentConditions = (latitude, longitude) => {
        fetch(`https://api.weather.com/v3/wx/observations/current?geocode=${latitude}%2C${longitude}&units=e&language=en-US&format=json&apiKey=320c9252a6e642f38c9252a6e682f3c6
        `)
        .then(r => r.json())
        .then(cc => {
            console.log('WC CC', cc)
            this.setState({
                ...this.state,
                WCCurrentConditions: {
                    name: 'the Weather Channel',
                    weatherText: cc.cloudCoverPhrase,
                    rain: (cc.precip1Hour === 0) ? false : true,
                    rainType: null,
                    tempF: cc.temperature,
                    tempC: ((cc.temperature - 32) * (5/9)),
                    accuMobileLink: 'https://weather.com/weather/hourbyhour/l/e0abde3003a88dedecad92fedc96375000c16843287a51dbf2cd92f062217180',
                    accuDirectLink: 'https://weather.com/weather/hourbyhour/l/e0abde3003a88dedecad92fedc96375000c16843287a51dbf2cd92f062217180'
                }
            })
        })
    }

    componentDidMount(){
        this.fetchAccuweatherCities()
        this.fetchWeatherChannelCities()
    }

    // componentDidUpdate(){
    //     this.fetchAccuweatherCities()
    //     this.fetchWeatherChannelCities()
    // }

    render() {
        console.log(this.state.cityLocation)
    return (
        <div>
        <WeatherBox weather={this.state.AWCurrentConditions} />
        <WeatherBox weather={this.state.WCCurrentConditions} />
        {/* <WeatherBox />
        <WeatherBox /> */}
        </div>
    )
}
}