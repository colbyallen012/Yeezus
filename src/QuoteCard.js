import React, { Component } from 'react';

export class QuoteCard extends Component {

  newQuote = async (e) => {
    e.preventDefault()
    console.log('hazah')
  }

  render() {
    return (
      <div className={QuoteCard}>
        <h2>Yeezy Card</h2>
        <p>{this.props.quote}</p>
        <form onSubmit={this.newQuote}>
          <button>New Quote</button>
        </form>
      </div>
    )
  }
}

export default QuoteCard;