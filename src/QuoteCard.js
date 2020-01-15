import React, { Component } from 'react';
import pablo from './Utils/pablo.jpg'
export class QuoteCard extends Component {

  newQuote = async (e) => {
    e.preventDefault()
    this.props.getQuote()
  }

  render() {
    return (
      <div className={QuoteCard}>
        <h2>Yeezy Card</h2>
        <img src={pablo}/>
        <p>{this.props.quote}</p>
        <form onSubmit={this.newQuote}>
          <button>New Quote</button>
        </form>
      </div>
    )
  }
}

export default QuoteCard;