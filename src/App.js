import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import SymbolSearch from './components/SymbolSearch'
import Quote from './components/Quote'
import NewsFeed from './components/NewsFeed';
import './App.css';


function App() {

  const [currentQuote, setCurrentQuote] = useState({});
  const [newsItems, setNewsItems] = useState([]);
  

  const BASE_ALPHAVANTAGE_END_POINT = "https://www.alphavantage.co/query?function=";
  const ALPHAV_API_KEY = "&apikey=KV2W4LMZHNA2CXTH";
  const ALPHAV_FUNCTION_QUERY = "GLOBAL_QUOTE"
  
  const BASE_NEWSAPI_END_POINT = "https://newsapi.org/v2/everything?q="; //add symbol from search
  const BASE_NEWSAPI_KEY="from=2020-01-29&sortBy=popularity&apiKey=17b781dab8984272be12d4b8b3f6442d";

  

  const searchClick = (searchString) =>{
    if (searchString === ''){
      setCurrentQuote({});
    }
    else{
      const symbol = "&symbol="+searchString;
      const stockQuoteEndPoint = `${BASE_ALPHAVANTAGE_END_POINT}${ALPHAV_FUNCTION_QUERY}${symbol}${ALPHAV_API_KEY}`;
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

      setNewsItems([{"title":"A Barfing Man", "author":"Chips McDip"},
        {"title":"Hotdog Fest, How many is too many?", "author":"Beets Silman"},
        {"title":"Centipedes? In My V...", "author":"Morlikelee Thanyutheenk"}
    ]);
    console.log(newsItems);
    }
  }

  return (
    <div className="App">
      <Header/>
      <NewsFeed newsItems={newsItems}></NewsFeed>
      <SymbolSearch searchClick={searchClick}/> 
      <br></br>
      <Quote currentQuote={currentQuote}/>
    </div>
  );
}

export default App;
