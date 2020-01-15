import React, { Component } from 'react';

export class QuoteCard extends Component {
  
  render() {
    return (
      <div className={QuoteCard}>
        <h2>Yeezy Card</h2>
        <p>{this.props.quote}</p>
      </div>
    )
  }
}

export default QuoteCard;