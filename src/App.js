import React, { Component } from 'react';
import { fetchQuote } from './ApiCalls'
import QuoteCard from './QuoteCard'
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: ''
    }
  }

  componentDidMount () {
    this.getQuote()
  }

  getQuote = async () => {
    await fetchQuote()
      .then(quote => this.setState({quote: quote.quote}))
      .catch(error => error.message)
  }

  render () {
    return (
      <div className='App'>
        <h1>Yeezy Says</h1>
        <QuoteCard quote={this.state.quote} getQuote={this.getQuote} />
      </div>
    )
  }
}

export default App;

