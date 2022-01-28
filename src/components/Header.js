import React from 'react';
import logo from '../images/cryptocurrency.png'

const Header = () => {
  return (
  <div className='header'>
          <img src={logo} className='logo' alt="crypto-img" />
          <h1 className='company-title'>Cryptoverse</h1>
  </div>);
};

export default Header;
