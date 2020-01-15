import React, { Component } from 'react';
import { fetchQuote } from './ApiCalls'
import QuoteCard from './QuoteCard'
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      today: '',
      image: ''
    }
  }

  componentDidMount () {
    this.getQuote()
    this.getImage()
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
      .then(quote => this.setState({image: image}))
      .catch(error => error.message)
   }

  render () {
    return (
      <div className='App'>
        <h1>Yeezy Says</h1>
        <QuoteCard quote={this.state.quote} today={this.state.today} getQuote={this.getQuote} />
      </div>
    )
  }
}

export default App;

