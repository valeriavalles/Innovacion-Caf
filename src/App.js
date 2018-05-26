import React, { Component } from 'react';
import Presents from './components/present'
import ViewConfig from './components/viewConfig/viewConfig'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Presents />
          <p className="App-intro">
          Lorem Lorem 
        </p>
        </header>
        <main>
          <ViewConfig/>
        </main>
        
      </div>
    );
  }
}

export default App;
