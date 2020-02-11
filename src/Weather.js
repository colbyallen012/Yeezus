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
import './Weather.css'

export class Weather extends Component {

  renderIcon = () => {
    if(this.props.icon === 'clear-day') {
      return <img className='icon' src={clearDay} alt='weather'/>
    } else if (this.props.icon === 'clear-night') {
      return <img className='icon' src={clearNight} alt='weather'/>
    } else if (this.props.icon === 'rain') {
      return <img className='icon' src={rain} alt='weather'/>
    } else if (this.props.icon === 'snow') {
      return <img className='icon' src={snow} alt='weather'/>
    } else if (this.props.icon === 'wind') {
      return <img className='icon' src={wind} alt='weather'/>
    } else if (this.props.icon === 'fog') {
      return <img className='icon' src={fog} alt='weather'/>
    } else if (this.props.icon === 'cloudy') {
      return <img className='icon' src={cloudy} alt='weather'/>
    } else if (this.props.icon === 'partly-cloudy-day') {
      return <img className='icon' src={partlyCloudyDay} alt='weather'/>
    } else if (this.props.icon === 'partly-cloudy-night') {
      return <img className='icon' src={partlyCloudyNight} alt='weather'/>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='weather'>
        <h3 className='summary'>Denver, CO</h3>
        <h3 className='temp'>{this.props.temp}°F</h3>
        <h3 className='summary'>{this.props.weather.summary}</h3>
        {this.renderIcon()}
      </div>
    )
  }
}

export default Weather;

// this.props.icon === 'clear-day' ? <img src={clearDay} alt='weather'/> : null
// this.props.icon === 'fog' ? <img src={fog} alt='weather'/> : null
