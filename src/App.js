import React, { useState } from 'react';
import Header from './components/Header';
import SymbolSearch from './components/SymbolSearch';
import Quote from './components/Quote';
import NewsFeed from './components/NewsFeed';
import HistoryGraph from './components/HistoryGraph';
import './App.css';


function App() {

  const testSeries = {
    "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "PZZA",
        "3. Last Refreshed": "2020-01-31",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
        "2020-01-31": {
            "1. open": "65.5700",
            "2. high": "66.1900",
            "3. low": "64.0100",
            "4. close": "64.7800",
            "5. volume": "556903"
        },
        "2020-01-30": {
            "1. open": "65.6900",
            "2. high": "66.1200",
            "3. low": "65.0500",
            "4. close": "65.4400",
            "5. volume": "451017"
        },
        "2020-01-29": {
            "1. open": "66.0800",
            "2. high": "66.5500",
            "3. low": "65.7000",
            "4. close": "66.0100",
            "5. volume": "488412"
        },
        "2020-01-28": {
            "1. open": "65.3500",
            "2. high": "66.4600",
            "3. low": "64.9400",
            "4. close": "66.0500",
            "5. volume": "405838"
        },
        "2020-01-27": {
            "1. open": "64.8200",
            "2. high": "66.6000",
            "3. low": "64.8138",
            "4. close": "64.9400",
            "5. volume": "588459"
        },
        "2020-01-24": {
            "1. open": "67.1100",
            "2. high": "67.1100",
            "3. low": "65.8000",
            "4. close": "66.5300",
            "5. volume": "454831"
        },
        "2020-01-23": {
            "1. open": "65.5400",
            "2. high": "67.1099",
            "3. low": "64.9300",
            "4. close": "66.9200",
            "5. volume": "771452"
        },
        "2020-01-22": {
            "1. open": "64.7300",
            "2. high": "66.6300",
            "3. low": "64.6300",
            "4. close": "66.1400",
            "5. volume": "1117253"
        },
        "2020-01-21": {
            "1. open": "64.8200",
            "2. high": "65.2600",
            "3. low": "63.7900",
            "4. close": "64.5000",
            "5. volume": "574880"
        },
        "2020-01-17": {
            "1. open": "65.3900",
            "2. high": "65.7200",
            "3. low": "65.0300",
            "4. close": "65.0600",
            "5. volume": "465014"
        },
        "2020-01-16": {
            "1. open": "64.0300",
            "2. high": "65.3100",
            "3. low": "63.5033",
            "4. close": "65.2400",
            "5. volume": "622450"
        },
        "2020-01-15": {
            "1. open": "62.9400",
            "2. high": "64.4300",
            "3. low": "62.7670",
            "4. close": "64.0100",
            "5. volume": "523193"
        },
        "2020-01-14": {
            "1. open": "63.7900",
            "2. high": "63.9700",
            "3. low": "62.2600",
            "4. close": "62.9300",
            "5. volume": "504211"
        },
        "2020-01-13": {
            "1. open": "64.8500",
            "2. high": "65.0600",
            "3. low": "63.8500",
            "4. close": "63.9800",
            "5. volume": "541592"
        },
        "2020-01-10": {
            "1. open": "64.9900",
            "2. high": "65.3400",
            "3. low": "64.4100",
            "4. close": "64.8300",
            "5. volume": "551548"
        },
        "2020-01-09": {
            "1. open": "64.6300",
            "2. high": "65.6300",
            "3. low": "64.3600",
            "4. close": "65.2800",
            "5. volume": "443746"
        },
        "2020-01-08": {
            "1. open": "63.6000",
            "2. high": "65.4200",
            "3. low": "63.5000",
            "4. close": "64.5600",
            "5. volume": "556519"
        },
        "2020-01-07": {
            "1. open": "64.2300",
            "2. high": "64.9500",
            "3. low": "63.2000",
            "4. close": "63.6600",
            "5. volume": "682196"
        },
        "2020-01-06": {
            "1. open": "63.1400",
            "2. high": "65.6800",
            "3. low": "62.9000",
            "4. close": "64.5500",
            "5. volume": "1023843"
        },
        "2020-01-03": {
            "1. open": "62.0500",
            "2. high": "63.6100",
            "3. low": "62.0400",
            "4. close": "63.2300",
            "5. volume": "885600"
        },
        "2020-01-02": {
            "1. open": "62.8900",
            "2. high": "63.4000",
            "3. low": "61.6600",
            "4. close": "62.8000",
            "5. volume": "805888"
        },
        "2019-12-31": {
            "1. open": "63.5400",
            "2. high": "63.9500",
            "3. low": "62.7000",
            "4. close": "63.1500",
            "5. volume": "409892"
        },
        "2019-12-30": {
            "1. open": "64.6000",
            "2. high": "64.8500",
            "3. low": "63.5700",
            "4. close": "63.7200",
            "5. volume": "427052"
        },
        "2019-12-27": {
            "1. open": "65.0600",
            "2. high": "65.3900",
            "3. low": "64.2600",
            "4. close": "64.4600",
            "5. volume": "370199"
        },
        "2019-12-26": {
            "1. open": "64.1200",
            "2. high": "65.6700",
            "3. low": "63.9897",
            "4. close": "65.0400",
            "5. volume": "529301"
        },
        "2019-12-24": {
            "1. open": "63.9900",
            "2. high": "64.4400",
            "3. low": "63.5600",
            "4. close": "64.2300",
            "5. volume": "197677"
        },
        "2019-12-23": {
            "1. open": "63.5200",
            "2. high": "64.2300",
            "3. low": "63.3000",
            "4. close": "64.0700",
            "5. volume": "665334"
        },
        "2019-12-20": {
            "1. open": "62.6300",
            "2. high": "63.7450",
            "3. low": "62.6300",
            "4. close": "63.3000",
            "5. volume": "914664"
        },
        "2019-12-19": {
            "1. open": "62.8900",
            "2. high": "63.7500",
            "3. low": "62.3400",
            "4. close": "62.4800",
            "5. volume": "711121"
        },
        "2019-12-18": {
            "1. open": "61.9200",
            "2. high": "62.7100",
            "3. low": "60.9000",
            "4. close": "62.5800",
            "5. volume": "912362"
        },
        "2019-12-17": {
            "1. open": "60.7900",
            "2. high": "62.0100",
            "3. low": "60.3950",
            "4. close": "61.9800",
            "5. volume": "506081"
        },
        "2019-12-16": {
            "1. open": "60.7500",
            "2. high": "61.3600",
            "3. low": "60.3900",
            "4. close": "60.6000",
            "5. volume": "669860"
        },
        "2019-12-13": {
            "1. open": "60.2600",
            "2. high": "60.9200",
            "3. low": "59.9900",
            "4. close": "60.2500",
            "5. volume": "286766"
        },
        "2019-12-12": {
            "1. open": "61.0600",
            "2. high": "61.5000",
            "3. low": "60.1300",
            "4. close": "60.4700",
            "5. volume": "321544"
        },
        "2019-12-11": {
            "1. open": "59.5400",
            "2. high": "60.8900",
            "3. low": "59.2850",
            "4. close": "60.8100",
            "5. volume": "318128"
        },
        "2019-12-10": {
            "1. open": "61.0600",
            "2. high": "61.3730",
            "3. low": "59.1100",
            "4. close": "59.5300",
            "5. volume": "452648"
        },
        "2019-12-09": {
            "1. open": "60.6400",
            "2. high": "61.4700",
            "3. low": "60.2150",
            "4. close": "61.1700",
            "5. volume": "514408"
        },
        "2019-12-06": {
            "1. open": "59.7300",
            "2. high": "60.5300",
            "3. low": "59.1600",
            "4. close": "60.4600",
            "5. volume": "623940"
        },
        "2019-12-05": {
            "1. open": "60.3600",
            "2. high": "60.6400",
            "3. low": "59.4800",
            "4. close": "59.7000",
            "5. volume": "336998"
        },
        "2019-12-04": {
            "1. open": "60.4300",
            "2. high": "60.8000",
            "3. low": "59.3050",
            "4. close": "60.2000",
            "5. volume": "640968"
        },
        "2019-12-03": {
            "1. open": "62.0600",
            "2. high": "62.0900",
            "3. low": "59.9200",
            "4. close": "60.1500",
            "5. volume": "892044"
        },
        "2019-12-02": {
            "1. open": "63.5800",
            "2. high": "63.9800",
            "3. low": "62.5600",
            "4. close": "62.8150",
            "5. volume": "548209"
        },
        "2019-11-29": {
            "1. open": "62.9400",
            "2. high": "64.0600",
            "3. low": "62.4600",
            "4. close": "63.2800",
            "5. volume": "468619"
        },
        "2019-11-27": {
            "1. open": "61.3800",
            "2. high": "63.0600",
            "3. low": "61.2750",
            "4. close": "63.0500",
            "5. volume": "462684"
        },
        "2019-11-26": {
            "1. open": "61.7500",
            "2. high": "62.1200",
            "3. low": "60.8800",
            "4. close": "61.5900",
            "5. volume": "560166"
        },
        "2019-11-25": {
            "1. open": "61.5500",
            "2. high": "62.1200",
            "3. low": "60.9680",
            "4. close": "61.8300",
            "5. volume": "511497"
        },
        "2019-11-22": {
            "1. open": "62.1700",
            "2. high": "62.1700",
            "3. low": "61.2835",
            "4. close": "61.5100",
            "5. volume": "438175"
        },
        "2019-11-21": {
            "1. open": "60.6400",
            "2. high": "61.9000",
            "3. low": "59.2200",
            "4. close": "61.5000",
            "5. volume": "647572"
        },
        "2019-11-20": {
            "1. open": "59.3200",
            "2. high": "60.5150",
            "3. low": "59.2200",
            "4. close": "60.2500",
            "5. volume": "1417143"
        },
        "2019-11-19": {
            "1. open": "59.8500",
            "2. high": "60.2800",
            "3. low": "59.4426",
            "4. close": "59.6400",
            "5. volume": "535306"
        },
        "2019-11-18": {
            "1. open": "59.6300",
            "2. high": "60.0700",
            "3. low": "59.2200",
            "4. close": "59.7400",
            "5. volume": "900406"
        },
        "2019-11-15": {
            "1. open": "61.9400",
            "2. high": "61.9400",
            "3. low": "59.5200",
            "4. close": "59.7000",
            "5. volume": "1824840"
        },
        "2019-11-14": {
            "1. open": "63.2400",
            "2. high": "63.2900",
            "3. low": "61.0100",
            "4. close": "61.7100",
            "5. volume": "1284797"
        },
        "2019-11-13": {
            "1. open": "62.1400",
            "2. high": "63.5700",
            "3. low": "61.0500",
            "4. close": "63.2100",
            "5. volume": "820235"
        },
        "2019-11-12": {
            "1. open": "62.6100",
            "2. high": "63.0700",
            "3. low": "62.2100",
            "4. close": "62.6200",
            "5. volume": "499984"
        },
        "2019-11-11": {
            "1. open": "61.5800",
            "2. high": "62.9200",
            "3. low": "61.5500",
            "4. close": "62.6100",
            "5. volume": "666144"
        },
        "2019-11-08": {
            "1. open": "62.5800",
            "2. high": "63.2900",
            "3. low": "60.6800",
            "4. close": "61.7600",
            "5. volume": "1218461"
        },
        "2019-11-07": {
            "1. open": "61.0900",
            "2. high": "62.8000",
            "3. low": "60.0500",
            "4. close": "62.5800",
            "5. volume": "1185838"
        },
        "2019-11-06": {
            "1. open": "59.0900",
            "2. high": "62.0459",
            "3. low": "58.7000",
            "4. close": "61.1400",
            "5. volume": "2674291"
        },
        "2019-11-05": {
            "1. open": "57.4200",
            "2. high": "58.4100",
            "3. low": "56.8700",
            "4. close": "57.1900",
            "5. volume": "1350130"
        },
        "2019-11-04": {
            "1. open": "56.8900",
            "2. high": "57.5550",
            "3. low": "55.6000",
            "4. close": "57.2600",
            "5. volume": "1553976"
        },
        "2019-11-01": {
            "1. open": "58.9700",
            "2. high": "59.7100",
            "3. low": "57.8400",
            "4. close": "57.9800",
            "5. volume": "1501040"
        },
        "2019-10-31": {
            "1. open": "59.1000",
            "2. high": "59.4680",
            "3. low": "58.4000",
            "4. close": "58.5500",
            "5. volume": "835101"
        },
        "2019-10-30": {
            "1. open": "58.8700",
            "2. high": "59.4100",
            "3. low": "58.1400",
            "4. close": "59.0200",
            "5. volume": "1289897"
        },
        "2019-10-29": {
            "1. open": "58.2900",
            "2. high": "59.6150",
            "3. low": "57.8900",
            "4. close": "59.4200",
            "5. volume": "1070476"
        },
        "2019-10-28": {
            "1. open": "57.4800",
            "2. high": "58.2600",
            "3. low": "56.8100",
            "4. close": "57.9600",
            "5. volume": "825449"
        },
        "2019-10-25": {
            "1. open": "57.5500",
            "2. high": "57.9000",
            "3. low": "57.2400",
            "4. close": "57.4200",
            "5. volume": "847813"
        },
        "2019-10-24": {
            "1. open": "56.9600",
            "2. high": "58.0490",
            "3. low": "56.6100",
            "4. close": "57.9100",
            "5. volume": "759182"
        },
        "2019-10-23": {
            "1. open": "56.7500",
            "2. high": "57.6500",
            "3. low": "56.2300",
            "4. close": "57.0600",
            "5. volume": "760172"
        },
        "2019-10-22": {
            "1. open": "56.2400",
            "2. high": "57.7050",
            "3. low": "56.1900",
            "4. close": "56.9800",
            "5. volume": "882866"
        },
        "2019-10-21": {
            "1. open": "55.0500",
            "2. high": "56.7400",
            "3. low": "55.0500",
            "4. close": "56.5300",
            "5. volume": "826468"
        },
        "2019-10-18": {
            "1. open": "55.4300",
            "2. high": "56.1200",
            "3. low": "54.4650",
            "4. close": "54.5300",
            "5. volume": "822360"
        },
        "2019-10-17": {
            "1. open": "54.9700",
            "2. high": "55.9500",
            "3. low": "54.1700",
            "4. close": "55.3800",
            "5. volume": "589672"
        },
        "2019-10-16": {
            "1. open": "53.1900",
            "2. high": "55.5500",
            "3. low": "52.7500",
            "4. close": "54.9800",
            "5. volume": "992231"
        },
        "2019-10-15": {
            "1. open": "52.4800",
            "2. high": "53.3500",
            "3. low": "51.7850",
            "4. close": "53.0800",
            "5. volume": "709544"
        },
        "2019-10-14": {
            "1. open": "53.1400",
            "2. high": "53.1400",
            "3. low": "52.1700",
            "4. close": "52.3400",
            "5. volume": "521510"
        },
        "2019-10-11": {
            "1. open": "53.4400",
            "2. high": "53.7500",
            "3. low": "52.5847",
            "4. close": "53.2200",
            "5. volume": "866134"
        },
        "2019-10-10": {
            "1. open": "52.9900",
            "2. high": "53.6300",
            "3. low": "52.4650",
            "4. close": "52.8800",
            "5. volume": "707054"
        },
        "2019-10-09": {
            "1. open": "52.2600",
            "2. high": "52.9900",
            "3. low": "51.9100",
            "4. close": "52.5200",
            "5. volume": "449830"
        },
        "2019-10-08": {
            "1. open": "53.1100",
            "2. high": "53.7600",
            "3. low": "50.9750",
            "4. close": "51.8500",
            "5. volume": "1571078"
        },
        "2019-10-07": {
            "1. open": "52.9500",
            "2. high": "54.3800",
            "3. low": "52.8500",
            "4. close": "54.0000",
            "5. volume": "839074"
        },
        "2019-10-04": {
            "1. open": "53.5200",
            "2. high": "53.8600",
            "3. low": "51.8900",
            "4. close": "53.1900",
            "5. volume": "860987"
        },
        "2019-10-03": {
            "1. open": "52.3200",
            "2. high": "53.6200",
            "3. low": "52.3000",
            "4. close": "53.6100",
            "5. volume": "834064"
        },
        "2019-10-02": {
            "1. open": "52.4500",
            "2. high": "52.8600",
            "3. low": "52.1900",
            "4. close": "52.3900",
            "5. volume": "988837"
        },
        "2019-10-01": {
            "1. open": "52.6700",
            "2. high": "53.1100",
            "3. low": "52.4300",
            "4. close": "52.5800",
            "5. volume": "1028612"
        },
        "2019-09-30": {
            "1. open": "51.7100",
            "2. high": "52.5800",
            "3. low": "51.4300",
            "4. close": "52.3500",
            "5. volume": "1059598"
        },
        "2019-09-27": {
            "1. open": "51.2100",
            "2. high": "51.8600",
            "3. low": "51.0100",
            "4. close": "51.8400",
            "5. volume": "714271"
        },
        "2019-09-26": {
            "1. open": "51.2200",
            "2. high": "51.5000",
            "3. low": "50.6100",
            "4. close": "51.1600",
            "5. volume": "650555"
        },
        "2019-09-25": {
            "1. open": "50.3100",
            "2. high": "51.5700",
            "3. low": "50.1100",
            "4. close": "51.2300",
            "5. volume": "687436"
        },
        "2019-09-24": {
            "1. open": "50.9000",
            "2. high": "51.4050",
            "3. low": "49.8000",
            "4. close": "50.4700",
            "5. volume": "643766"
        },
        "2019-09-23": {
            "1. open": "52.1800",
            "2. high": "52.2700",
            "3. low": "50.4600",
            "4. close": "50.9600",
            "5. volume": "637125"
        },
        "2019-09-20": {
            "1. open": "52.4000",
            "2. high": "52.9800",
            "3. low": "51.8900",
            "4. close": "52.0500",
            "5. volume": "727826"
        },
        "2019-09-19": {
            "1. open": "52.0600",
            "2. high": "52.9200",
            "3. low": "52.0100",
            "4. close": "52.4400",
            "5. volume": "590598"
        },
        "2019-09-18": {
            "1. open": "51.8700",
            "2. high": "52.9800",
            "3. low": "51.2900",
            "4. close": "51.9600",
            "5. volume": "616579"
        },
        "2019-09-17": {
            "1. open": "53.2200",
            "2. high": "53.5000",
            "3. low": "51.7900",
            "4. close": "52.0100",
            "5. volume": "729208"
        },
        "2019-09-16": {
            "1. open": "51.6800",
            "2. high": "52.9000",
            "3. low": "51.6800",
            "4. close": "52.7200",
            "5. volume": "646667"
        },
        "2019-09-13": {
            "1. open": "52.0100",
            "2. high": "52.7000",
            "3. low": "51.6300",
            "4. close": "52.2400",
            "5. volume": "904921"
        },
        "2019-09-12": {
            "1. open": "53.4400",
            "2. high": "54.2200",
            "3. low": "51.8300",
            "4. close": "52.0400",
            "5. volume": "1689982"
        },
        "2019-09-11": {
            "1. open": "51.6300",
            "2. high": "53.4600",
            "3. low": "51.1000",
            "4. close": "53.4300",
            "5. volume": "1074848"
        },
        "2019-09-10": {
            "1. open": "50.8200",
            "2. high": "51.7200",
            "3. low": "50.0215",
            "4. close": "51.6900",
            "5. volume": "836501"
        }
    }
}
  const [currentQuote, setCurrentQuote] = useState({});
  const [currentSearch, setCurrentSearch] = useState([]);
  const [newsItems, setNewsItems] = useState([]);
  const [timeSeries, setTimeSeries] = useState([]);
  

  const BASE_ALPHAVANTAGE_END_POINT = "https://www.alphavantage.co/query?function=";
  const ALPHAV_API_KEY = "&apikey=KV2W4LMZHNA2CXTH";
  const ALPHAV_FUNCTION_QUERY = "GLOBAL_QUOTE";
  const ALPHAV_SEARCH_QUERY = "SYMBOL_SEARCH";
  const ALPHAV_TIME_SERIES_QUERY = "TIME_SERIES_DAILY";
  
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
      const timeSeriesEndPoint = `${BASE_ALPHAVANTAGE_END_POINT}${ALPHAV_TIME_SERIES_QUERY}${symbol}${ALPHAV_API_KEY}`;
      
      //fetch symbol quote
      fetch(stockQuoteEndPoint).then((response)=>{
        return response.json()
      }).then((currentStockTickerObject) => {
        setCurrentQuote(currentStockTickerObject["Global Quote"]);
         // Search for name
      }).then(fetch(stockSearchEndPoint).then((response)=>{
        return response.json()
      }).then((currentStockSearchObject) => {
        setCurrentSearch(currentStockSearchObject.bestMatches[0]['2. name']);
        //get time series
      })).then(fetch(timeSeriesEndPoint).then((response)=>{
        return response.json()
      }).then((currentTimeSeriesObject) => {
        //setTimeSeries(currentTimeSeriesObject['Time Series (Daily)']);
        setTimeSeries(testSeries['Time Series (Daily)']);
      })).catch((error)=>{
        console.log(`The following errors have arisen: ${error}`);
      });

      setNewsItems([{"id":1,"title":"A Sick Man", "author":"Chips McDip"},
        {"id":2,"title":"Hotdog Fest, How many is too many?", "author":"Beets Silman"},
        {"id":3,"title":"Centipedes? In My Hotdogs?", "author":"Morlikelee Thanyutheenk"}
    ]);
    }
  }

  return (

    <div className="App container">
      <Header />
      <section className="wrapper">
        <NewsFeed newsItems={newsItems} currentSearch={currentSearch}/>
        <div className ="main">
          <SymbolSearch searchClick={searchClick}/> 
          <br/>
          {Object.entries(timeSeries).length > 0? <HistoryGraph timeSeries={timeSeries}></HistoryGraph>:null}
        </div>
        <Quote currentQuote={currentQuote}/>
      </section>
    </div>
  );
}

export default App;
