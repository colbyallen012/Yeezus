import React, { Component } from 'react';
import { fetchQuote } from './ApiCalls'
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
        <h1>Yeezy</h1>
      </div>
    )
  }
}

export default App;

