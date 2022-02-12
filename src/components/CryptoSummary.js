import React,{useEffect, useState} from 'react';

import CryptoCard from './CryptoCard';

var axios = require("axios").default;

const CryptoSummary = () => {
    
    const [coins,setCoins] = useState([]);

    var options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          tiers: '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '50',
          offset: '0'
        },
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': 'f53cf2dba5msh627f70cee70049dp1f6753jsn02e04ed65bf0'
        }
      };

      useEffect(() => {
        axios.request(options).then((response) => {
            setCoins(response.data.data.coins);
        }).catch((error) => {
            console.error(error);
        });
      },[])

      const [count,setCount] = useState(10);
      const [showMore, setShowMore] = useState("Show More");

      const updateCount = () => {
        if(count!==50) {
          setCount(50);
          setShowMore("Show Less")
        }
        else {
          setCount(10)
          setShowMore("Show More")
        }
        
      }

    return (
  <div className='crypto-summary'>
    <div className='crypto-header'>
        <h1 className='stats-heading'>Top 10 Cryptos in the World</h1>
        <button onClick={updateCount} className='show-more-button'><h2 className='show-more'>{showMore}</h2></button>
    </div>
    <div className='crypto-container'>
         {

            coins.slice(0,count).map((n) => (
                <CryptoCard key = {n.rank} data = {n} />
            ))
        } 
    </div>
  </div>
  )
};

export default CryptoSummary;
