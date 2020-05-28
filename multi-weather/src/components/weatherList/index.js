import React, {Component} from 'react';
import WeatherBox from './weatherbox/index.js';


export default class WeatherList extends Component { 
    // code to try to push permissions

    render() {
    return (
        <div>
        <WeatherBox />
        <WeatherBox />
        <WeatherBox />
        <WeatherBox />
        </div>
    )
}
}