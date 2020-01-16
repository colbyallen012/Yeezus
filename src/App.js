import React, { Component } from 'react';
import { fetchQuote, fetchImage, fetchWeather } from './ApiCalls';
import QuoteCard from './QuoteCard';
import Weather from './Weather';
import './App.css';

console.log(process.env.REACT_APP_WEATHER_API_KEY)

export class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      today: '',
      image: '',
      weather: '',
      temp: ''
    }
  }

  componentDidMount () {
    this.getWeather()
    this.getQuote()
    // this.getImage()
  }

  getWeather = async () => {
    await fetchWeather()
      .then(weather => this.setState({weather: weather.currently}))
      .catch(error => error.message)


    const temp = Math.round(this.state.weather.temperature)
    this.setState({temp: temp})
      // console.log(temp)    
      console.log(this.state)
  }

  getQuote = async () => {
    await fetchQuote()
      .then(quote => this.setState({quote: quote.quote}))
      .catch(error => error.message)

      this.today()
  }

  today = () => {
    var options = {year: 'numeric', month: 'short', day: 'numeric'}
    let today = new Date()
    let format = today.toLocaleDateString("en-US", options)
    this.setState({today: format})
   }

  //  getImage = async () => {
  //    await fetchImage()
  //     .then(image => this.setState({image: image.urls.regular}))
  //     .catch(error => error.message)
  //  }


  render () {
    return (
      <div className='App' style={{
        backgroundImage:`url(${this.state.image})`,
        }}>
        <Weather temp={this.state.temp} weather={this.state.weather}/>
        <QuoteCard quote={this.state.quote} today={this.state.today} getQuote={this.getQuote} />
      </div>
    )
  }
}

export default App;

