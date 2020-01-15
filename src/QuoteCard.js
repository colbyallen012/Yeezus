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
      <div className={QuoteCard}>
        <img className='pablo' src={pablo} alt='kanye-west'/>
        <h2>Ye</h2>
        <h3>@kanyewest</h3>
        <h4>{this.props.today}</h4>
        <p className='quote'>{this.props.quote}</p>
        <form onSubmit={this.newQuote}>
          <button className='quote-button'>New Quote</button>
        </form>
      </div>
    )
  }
}

export default QuoteCard;