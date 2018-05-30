import React, { Component } from 'react';


class Nota extends Component {

    
  
    render() {
      return (
        <div className="note text-center">
                <p className="note-h"
                 onClick={this.props.deleteMethod}>
                {this.props.text}
                </p>
        </div>
      );
    }
  }

  export default Nota