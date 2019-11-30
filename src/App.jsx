import React from 'react';
import './App.css';
import cat2 from './citty2.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cat2} className="App-logo" alt="logo" />
        <p class='Intro'>
Welcome to the site dedicated only to cats - The World of Cats
        </p>
      </header>
    </div>
  );
}

export default App;
