import React from 'react';

import CryptoCard from './CryptoCard';

const CryptoSummary = () => {
  
    
        const cData = [
            { id : 1},
            { id : 2},
        ];

    return (
  <div className='cryptosummary'>
    <div className='crypto-header'>
        <h1 className='stats-heading'>Top 10 Cryptos in the World</h1>
        <h2 className='show-more'>Show more</h2>
    </div>
    <div className='crypto-container'>
        {
            cData.map((n) => (
                <CryptoCard key = {n.id} />
            ))
        }
    </div>
  </div>
  )
};

export default CryptoSummary;
