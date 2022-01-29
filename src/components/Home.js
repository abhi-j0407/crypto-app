import React, { useState,useEffect } from 'react';
import Stats from './Stats';

const Home = (props) => {
  // useEffect(() => {
  //   console.log("Home:",props.data)
  // },[props])
  
  return (
  <div className='main'>
    <Stats data={props.data}/>
  </div>
  )
};

export default Home;
