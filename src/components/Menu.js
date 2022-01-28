import React from 'react';

import homeIcon from '../images/home.png'
import currencyIcon from '../images/cryptocurrencies.png'
import exchangeIcon from '../images/currency-exchange.png'
import newsIcon from '../images/newspaper-folded.png'


const Menu = () => {
  return (
  <div className='menu'>
      <ul>
        <li className='menu-item'><a href="/"><img className='menu-icon' src={homeIcon} alt="currency-icon"></img><span>Home</span></a></li>
        <li className='menu-item'><a href="/"><img className='menu-icon' src={currencyIcon} alt="currency-icon" /> <span>Cryptocurrencies</span></a></li>
        <li className='menu-item'><a href="/"><img className='menu-icon' src={exchangeIcon} alt="exchange-icon" /> <span>Exchanges</span></a></li>
        <li className='menu-item'><a href="/"><img className='menu-icon' src={newsIcon} alt="news-icon" /> <span>News</span></a></li>
      </ul>
  </div>
  );
}

export default Menu;
