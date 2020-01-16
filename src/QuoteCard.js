import React, { Component } from 'react';
import pablo from './Utils/pablo.png';
import './QuoteCard.css';

export class QuoteCard extends Component {

  newQuote = async (e) => {
    e.preventDefault()
    this.props.getQuote()
  }

  render() {
    return (
      <div className='QuoteCard'>
        <h2>{this.props.today}</h2> 
        <p className='quote'>{this.props.quote}</p>
        <img className='pablo' src={pablo} alt='kanye-west'/>
        <form onSubmit={this.newQuote}>
          <button className='quote-button'>New Quote</button>
        </form>
      </div>
    )
  }
}

export default QuoteCard;