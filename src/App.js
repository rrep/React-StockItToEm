import React, { useState } from 'react';
import Header from './components/Header'
import SymbolSearch from './components/SymbolSearch'
import './App.css';

function App() {

  const searchClick = (searchString) =>{
    console.log(searchString);
  }

  return (
    <div className="App">
      <Header/>
      <SymbolSearch searchClick={searchClick}/>    
    </div>
  );
}

export default App;
