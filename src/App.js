import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: ''
    }
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

