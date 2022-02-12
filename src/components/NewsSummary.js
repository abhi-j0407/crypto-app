import React,{useEffect, useState} from 'react';

// import CryptoCard from './CryptoCard';

var axios = require("axios").default;

const NewsSummary = () => {
    
    const [news,setNews] = useState([]);

    var options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {q: 'Cryptocurrency', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
        headers: {
          'x-bingapis-sdk': 'true',
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
          'x-rapidapi-key': 'f53cf2dba5msh627f70cee70049dp1f6753jsn02e04ed65bf0'
        }
      };

      useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setNews(response.data.value);
            console.log('News:',news)
        }).catch(function (error) {
            console.error(error);
        })},[])

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
    <div className='news-container'>
         {/* {
            coins.slice(0,count).map((n) => (
                <CryptoCard key = {n.rank} data = {n} />
            ))
        }  */}
    </div>
  </div>
  )
};

export default NewsSummary;
