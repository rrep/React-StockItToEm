import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import SymbolSearch from './components/SymbolSearch'
import Quote from './components/Quote'
import './App.css';

function App() {

  const [currentQuote, setCurrentQuote] = useState({});
  

  const BASE_END_POINT = "https://www.alphavantage.co/query?function=";
  const API_KEY = "&apikey=KV2W4LMZHNA2CXTH";
  const FUNCTION_QUERY = "GLOBAL_QUOTE"
  

  
  const searchClick = (searchString) =>{
    const symbol = "&symbol="+searchString;
    const stockQuoteEndPoint = `${BASE_END_POINT}${FUNCTION_QUERY}${symbol}${API_KEY}`;
    console.log(stockQuoteEndPoint);
    fetch(stockQuoteEndPoint).then((response)=>{
      return response.json()
    }).then((currentStockTickerObject) => {
      setCurrentQuote(currentStockTickerObject["Global Quote"]);
      console.log(currentStockTickerObject);
       // Get current Quote.
    }).catch((error)=>{
      console.log(`The following errors have arisen: ${error}`);
    });
  }

  return (
    <div className="App">
      <Header/>
      <SymbolSearch searchClick={searchClick}/> 
      <br></br>
      <Quote currentQuote={currentQuote}/>
    </div>
  );
}

export default App;
