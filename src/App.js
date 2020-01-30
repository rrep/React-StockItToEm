import React, { useState } from 'react';
import Header from './components/Header';
import SymbolSearch from './components/SymbolSearch';
import Quote from './components/Quote';
import NewsFeed from './components/NewsFeed';
import HistoryGraph from './components/HistoryGraph';
import './App.css';


function App() {

  const [currentQuote, setCurrentQuote] = useState({});
  const [currentSearch, setCurrentSearch] = useState([]);
  const [newsItems, setNewsItems] = useState([]);
  

  const BASE_ALPHAVANTAGE_END_POINT = "https://www.alphavantage.co/query?function=";
  const ALPHAV_API_KEY = "&apikey=KV2W4LMZHNA2CXTH";
  const ALPHAV_FUNCTION_QUERY = "GLOBAL_QUOTE";
  const ALPHAV_SEARCH_QUERY = "SYMBOL_SEARCH";
  
  const BASE_NEWSAPI_END_POINT = "https://newsapi.org/v2/everything?q="; //add symbol from search
  const BASE_NEWSAPI_KEY="from=2020-01-29&sortBy=popularity&apiKey=17b781dab8984272be12d4b8b3f6442d";

  

  const searchClick = (searchString) =>{
    if (searchString === ''){
      setCurrentQuote({});
      setNewsItems([]);
    }
    else{
      const symbol = "&symbol="+searchString;
      const keywords = "&keywords="+searchString;
      const stockQuoteEndPoint = `${BASE_ALPHAVANTAGE_END_POINT}${ALPHAV_FUNCTION_QUERY}${symbol}${ALPHAV_API_KEY}`;
      const stockSearchEndPoint= `${BASE_ALPHAVANTAGE_END_POINT}${ALPHAV_SEARCH_QUERY}${keywords}${ALPHAV_API_KEY}`;
      console.log(stockQuoteEndPoint);
      //fetch symbol quote
      fetch(stockQuoteEndPoint).then((response)=>{
        return response.json()
      }).then((currentStockTickerObject) => {
        setCurrentQuote(currentStockTickerObject["Global Quote"]);
        console.log(currentStockTickerObject);
         // Search for name
      }).then(fetch(stockSearchEndPoint).then((response)=>{
        return response.json()
      }).then((currentStockSearchObject) => {
        setCurrentSearch(currentStockSearchObject.bestMatches[0]['2. name']);
      })).catch((error)=>{
        console.log(`The following errors have arisen: ${error}`);
      });

      setNewsItems([{"id":1,"title":"A Sick Man", "author":"Chips McDip"},
        {"id":2,"title":"Hotdog Fest, How many is too many?", "author":"Beets Silman"},
        {"id":3,"title":"Centipedes? In My Hotdogs?", "author":"Morlikelee Thanyutheenk"}
    ]);
    console.log(newsItems);
    }
  }

  return (

    <div className="App container">
      <Header />
      <section className="wrapper">
        <NewsFeed newsItems={newsItems} currentSearch={currentSearch}/>
        <div className ="main">
          <SymbolSearch searchClick={searchClick}/> 
          <br/><br/>
          <Quote currentQuote={currentQuote}/>
          <br/>
          <HistoryGraph/>        
        </div>
      </section>
    </div>
  );
}

export default App;
