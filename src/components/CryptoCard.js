import React from 'react';
import image from '../images/currency-exchange.png'

const CryptoCard = () => {
  return ( 
  <div className='crypto-card'>
    <div className='crypto-card-header'>
        <h3>1. Bitcoin</h3>
        <img src={image} className='crypto-icon' alt="crypto-img" />
    </div>
    <hr />
    <div className='crypto-content'>
        <p className='card-stat'>PRice : 23121</p>
        <p className='card-stat'>PRice : 23121</p>
        <p className='card-stat'>PRice : 23121</p>
    </div>
  </div>
  )
};

export default CryptoCard;
