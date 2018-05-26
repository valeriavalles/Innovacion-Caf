import React, { Component } from 'react';
import Presents from './components/present';
import Bts from './components/Botons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Presents />
        </header>
        <Bts /> 
      </div>
    );
  }
}

export default App;
