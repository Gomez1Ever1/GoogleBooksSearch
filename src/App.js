import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';

function App() {
  // Components in blank spaces
  return (
    <div className="App">
      <div className="navBar">
        <header className="title"><h1>Google Books React Search</h1></header>
        <SearchBar></SearchBar>
      </div>
      <div>
        <h2>Books Recently Searched</h2>
        <h2>

        </h2>
      </div>
    </div>
  );
}

export default App;
