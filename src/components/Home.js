import React, { useState,useEffect } from 'react';
import Stats from './Stats';
import CryptoSummary from './CryptoSummary';

const Home = (props) => {
  // useEffect(() => {
  //   console.log("Home:",props.data)
  // },[props])
  
  return (
  <div className='main'>
    <Stats data={props.data}/>
    <CryptoSummary />
  </div>
  )
};

export default Home;
