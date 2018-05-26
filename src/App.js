import React, { Component } from 'react';
import ViewConfig from './components/viewConfig/viewConfig'

import Presents from './components/present';
import Bts from './components/Botons'
import Promo from './Promociones/promo'
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      vista : 'principal'
    }
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <Presents />
      //     <p className="App-intro">
      //     Lorem Lorem 
      //   </p>
      //   </header>
      //   <main>
      //     <ViewConfig/>
      //   </main>
      
      <div className="App text-center">
        {this.state.vista === 'principal' ? <div >
        <Presents  />
        <Bts vistaPromo={()=> this.setState({
             vista: 'promo'
       })}/>
        </div> : 
       this.state.vista === 'promo' ? <Promo /> : null 
      }
      </div>

    );
  }
}

export default App;
