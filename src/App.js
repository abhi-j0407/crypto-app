import React,{useState} from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css'

import axios from "axios";



const App = () => {
    //const [data,setData] = useState({})

    var options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/stats',
        params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
        headers: {
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
          'x-rapidapi-key': 'f53cf2dba5msh627f70cee70049dp1f6753jsn02e04ed65bf0'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

    
  return (
  <div className='homepage'>
    <Navbar />
    <Home />
  </div>
  );
};

export default App;
