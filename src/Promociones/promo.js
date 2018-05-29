import React, { Component } from 'react';

class Promo extends Component {
    render() {
        return (
            <div className="container ">
              <div className="row ">
                  <h2 className="mg-rebajas tex-center col-md-12">TOP PRECIOS REBAJADOS</h2>
              </div>   
              <div className="row  ">
              <h2 className="bg-color text-center col-md-12">POR CATEGORIAS</h2>
              <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                    <img className="btn-user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrZKdr0rknMEvL9bbMpgty80n7zz87U-Qa3s6FQnOIMi7dVzAqw"/>
                    <a href="#" className="btn btn-primary">Hogar</a>
                     </div>
                </div>
              </div>
             <div className="col-sm-4">
                <div className="card">
                <div className="card-body">
                  <img className="btn-user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfm4DiBV0ziKWhKUZIf3zjwIvHUoP9s9g-PtLx14mizFDhPNj"/>
                <a href="#" className="btn btn-primary">Tecnologia</a>
                </div>
                </div>
            </div>
            <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                  <img className="btn-user" src="http://chittagongit.com//images/hobbies-icon/hobbies-icon-2.jpg" />
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