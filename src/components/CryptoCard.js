import React from 'react';

const CryptoCard = (props) => {

  // console.log("Card data:",props)

  return ( 
  <div className='crypto-card'>
    <div className='crypto-card-header'>
        <h3>{props.data.rank}. {props.data.name}</h3>
        <img src={props.data.iconUrl} className='crypto-icon' alt="crypto-img" />
    </div>
    <hr />
    <div className='crypto-content'>
        <p className='card-stat'>Price : {props.data.price}</p>
        <p className='card-stat'>Market Cap : {props.data.marketCap}</p>
        <p className='card-stat'>Daily Change : {props.data.change}%</p>
    </div>
  </div>
  )
};

export default CryptoCard;
