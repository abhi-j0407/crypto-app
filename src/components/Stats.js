import React,{useEffect, useState} from 'react';

const Stats = (props) => {

    const [totalCoins, setTotalCoins] = useState();
    const [totalExchanges, setTotalExchanges] = useState();
    const [totalMarketCap, setTotalMarketCap] = useState();
    const [total24hVolume, setTotal24hVolume] = useState();
    const [totalMarkets, setTotalMarkets] = useState();
    useEffect(() => {
        console.log("Stats:",props.data);
        setTotalCoins(props.data.totalCoins);
        setTotalExchanges(props.data.totalExchanges);
        setTotalMarketCap(props.data.totalMarketCap);
        setTotal24hVolume(props.data.total24hVolume);
        setTotalMarkets(props.data.totalMarkets);
      },[props])
      

  return (
  <div>
    <h1 className='stats-heading'>Global Crypto Stats</h1>
    <div className='global-stats'>
        <div className='stat'>
            <h3 className='stat-title'>Total Cryptocurrencies</h3>
            <h3>{totalCoins}</h3>
        </div>
        <div className='stat'>
            <h3 className='stat-title'>Total Exchanges</h3>
            <h3>{totalExchanges}</h3>
        </div>
        <div className='stat'>
            <h3 className='stat-title'>Total Market Cap</h3>
            <h3>{totalMarketCap}</h3>
        </div>
        <div className='stat'>
            <h3 className='stat-title'>Total 24h Volume</h3>
            <h3>{total24hVolume}</h3>
        </div>
        <div className='stat'>
            <h3 className='stat-title'>Total Markets</h3>
            <h3>{totalMarkets}</h3>
        </div>
    </div>
  </div>
  );
}

export default Stats;