import React from 'react';
import Stats from './Stats';
import CryptoSummary from './CryptoSummary';
import NewsSummary from './NewsSummary';

const Home = (props) => {
  // useEffect(() => {
  //   console.log("Home:",props.data)
  // },[props])
  
  return (
  <div className='main'>
    <Stats data={props.data}/>
    <CryptoSummary />
    <NewsSummary />
  </div>
  )
};

export default Home;
