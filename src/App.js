import React, { Component } from 'react';
import { fetchQuote, fetchImage, fetchWeather } from './ApiCalls';
import QuoteCard from './QuoteCard';
import Weather from './Weather';
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      today: '',
      image: '',
      weather: '',
      temp: '',
      icon: ''
    }
  }

  componentDidMount () {
    this.getWeather()
    this.getQuote()
    this.getImage()
  }

  getWeather = async () => {
    await fetchWeather()
      .then(weather => this.setState({weather: weather.currently}))
      .catch(error => error.message)


    const temp = Math.round(this.state.weather.temperature)
    this.setState({temp: temp})
    this.setState({icon: this.state.weather.icon})
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

   getImage = async () => {
     await fetchImage()
      .then(image => this.setState({image: image}))
      .catch(error => error.message)
      console.log(this.state.image)
   }


  render () {
    return (
      <div className='App' style={{
        backgroundImage:`url(${this.state.image})`,
        }}>
        <Weather temp={this.state.temp} weather={this.state.weather} icon={this.state.icon}/>
        <QuoteCard quote={this.state.quote} today={this.state.today} getQuote={this.getQuote} />
      </div>
    )
  }
}

export default App;

