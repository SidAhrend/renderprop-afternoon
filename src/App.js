import React, { Component } from 'react';
import './App.css';
import Currency from './Components/CurrencyConverter';

class App extends Component {
  render() {
    return (
      <div>
        <h2> Render Props </h2>
        <Currency />
      </div>
    );
  }
}

export default App;

