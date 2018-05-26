import React, { Component } from 'react';

class Promo extends Component {
    render() {
        return (
            <div className="container ">
                <div className="row bg-color mg-rebajas">
                  <h2>TOP PRECIOS REBAJADOS</h2>
              </div>
               <div className="row bg-color ">
                 <center>
                  <h2 className="">POR CATEGORIAS</h2>
                  </center>
              </div>    
              <div class="row  ">
    
            <div className="col-sm-4">
                <div className="card">
                <div className="card-body">
                
                <a href="#" className="btn btn-primary">Hogar</a>
                </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                <div className="card-body">
               
                <a href="#" className="btn btn-primary">Tecnologia</a>
                </div>
                </div>
            </div>
            <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
    
                <a href="#" className="btn btn-primary">Hobbies</a>
                </div>
            </div>
            </div>
            </div>
        </div>
            
        )
    }
}

export default Promo;