import React from 'react';

const Weather = ({weather, temp}) => {
  return (
    <div className='weather'>
      <h3>{temp}</h3>
      <p>{weather.summary}</p>
    </div>
  )
}

export default Weather;