import React, {Component} from 'react';


export default class WeatherBox extends Component { 

    componentDidMount(){   
    }

    render() {
        return (
            <div class="weatherBox">
                {console.log('inside weatherbox', this.props)}
                <h1>{this.props.weather.weatherText}</h1>
            </div>
        )
    }
}