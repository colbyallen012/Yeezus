import React, { Component } from 'react';
import clearDay from './Utils/clear-day.png'

export class Weather extends Component {

  renderIcon = () => {
    return (
      this.props.icon === 'clear-day' ? <img src={clearDay} alt='weather'/> : null
    )
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