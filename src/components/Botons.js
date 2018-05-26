import React, { Component } from 'react';

class Bts extends Component {
    render() {
        return(
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <button type="button" className="btn btn-primary btn-lg">¡Yo mismo/a Soy</button>
                </div>
                <div className="col-md-6">
                <i className="user"></i>
                <button type="button" className="btn btn-secondary btn-lg">!Lo hare en grupo</button>
               </div>
            </div>
            <div className="row btn2">
                <div className="col-md-12 ">
                <button type="button" className="btn btn-primary btn-lg">¡Promociones Inteligentes</button>
                </div>
                
            </div>
            </div>
        )
    }
}

export default Bts;