import React,{useEffect, useState} from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css'

var axios = require("axios").default;



const App = () => {
    const [data,setData] = useState({})

    var options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/stats',
        params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': 'f53cf2dba5msh627f70cee70049dp1f6753jsn02e04ed65bf0'
        }
      };
      
      useEffect(() => {
        axios.request(options).then(function (response) {
            setData(response.data.data);
            // console.log(response.data);
            // console.log("Data App:",data);
        }).catch(function (error) {
            console.error(error);
        });
      },[])

      // useEffect(() => {
      //   console.log("Data stored:",data);
      // },[data])

    
  return (
  <div className='homepage'>
    <Navbar />
    <Home data={data}/>
  </div>
  );
};

export default App;
