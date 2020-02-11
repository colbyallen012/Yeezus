import React, { Component } from 'react';
import clearDay from './Utils/clear-day.png'
import clearNight from './Utils/clear-night.png'
import rain from './Utils/rain.png'
import snow from './Utils/snow.png'
import wind from './Utils/windy.png'
import fog from './Utils/fog.png'
import cloudy from './Utils/cloudy.png'
import partlyCloudyDay from './Utils/partly-cloudy-day.png'
import partlyCloudyNight from './Utils/partly-cloudy-night.png'

export class Weather extends Component {

  renderIcon = () => {
    if(this.props.icon === 'clear-day') {
      return <img src={clearDay} alt='weather'/>
    } else if (this.props.icon === 'clear-night') {
      return <img src={clearNight} alt='weather'/>
    } else if (this.props.icon === 'rain') {
      return <img src={rain} alt='weather'/>
    } else if (this.props.icon === 'snow') {
      return <img src={snow} alt='weather'/>
    } else if (this.props.icon === 'wind') {
      return <img src={wind} alt='weather'/>
    } else if (this.props.icon === 'fog') {
      return <img src={fog} alt='weather'/>
    } else if (this.props.icon === 'cloudy') {
      return <img src={cloudy} alt='weather'/>
    } else if (this.props.icon === 'partly-cloudy-day') {
      return <img src={partlyCloudyDay} alt='weather'/>
    } else if (this.props.icon === 'partly-cloudy-night') {
      return <img src={partlyCloudyNight} alt='weather'/>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='weather'>
        <h3>{this.props.temp}</h3>
        <p>{this.props.weather.summary}</p>
        {this.renderIcon()}
      </div>
    )
  }
}

export default Weather;

// this.props.icon === 'clear-day' ? <img src={clearDay} alt='weather'/> : null
// this.props.icon === 'fog' ? <img src={fog} alt='weather'/> : null
