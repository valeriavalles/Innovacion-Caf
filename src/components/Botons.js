import React, { Component } from 'react';


class Bts extends Component {
    render() {
        return(
            
            <div className="container ">
            <div className="row ">
                <div className="col-md-3 cont-btn btn mx-auto">

    
                  <img className="mx-auto" src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-512.png"/>
                  <p>¡Yo mismo/a Soy</p>
                </div>
                <div className="col-md-3 cont-btn btn mx-auto">
                  <img className="mx-auto" src="https://cdn.onlinewebfonts.com/svg/img_102074.png"/>
                  <p>!Lo hare en grupo</p>
               </div>
            </div>
            <div className="row btn2">
                <div className="col-md-12 ">
                 
                <button type="button" className="btn btn-primary btn-lg" onClick={()=> {
                    this.props.vistaPromo()
                }}>¡Promociones Inteligentes</button>
                </div>
                
            </div>
            </div>
        )
    }
}

export default Bts;