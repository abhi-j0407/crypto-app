import React,{useEffect, useState} from 'react';

const Stats = (props) => {
    const [totalCoins, setTotalCoins] = useState(0);
    useEffect(() => {
        console.log("Stats:",props.data);
        setTotalCoins(props.data);
      },[props])
      useEffect(() => {
        console.log("Stats Coins:",totalCoins);
      },[totalCoins])

  return (
  <div>
    <h1 className='stats-heading'>Global Crypto Stats</h1>
    <div className='global-stats'>
        <div className='stat'>
            <h3>Total Cryptocurrencies</h3>
            <h3>{totalCoins}</h3>
        </div>
        <div className='stat'>
            <h3>Total Cryptocurrencies</h3>
            <h3>1</h3>
        </div>
        <div className='stat'>
            <h3>Total Cryptocurrencies</h3>
            <h3>1</h3>
        </div>
        <div className='stat'>
            <h3>Total Cryptocurrencies</h3>
            <h3>1</h3>
        </div>
        <div className='stat'>
            <h3>Total Cryptocurrencies</h3>
            <h3>1</h3>
        </div>
        <div className='stat'>
            <h3>Total Cryptocurrencies</h3>
            <h3>1</h3>
        </div>
    </div>
  </div>
  );
}

export default Stats;