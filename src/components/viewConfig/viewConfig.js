import React, { Component } from 'react';
import './viewConfig.css';

// var partners = [
//   {
//     username:'Valeria Perez',
//     photo:'http://fotos02.laopiniondemurcia.es/2015/11/18/318x200/mujeres-son.jpg',
//     cantidad:'500'
//   },
//   {
//     username:'Diana Hernández',
//     photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxtkQdenO8OC1_ABS0BDk80arjSNkOHQLhIW6QTI28lIr-3Dl',
//     cantidad:'700'
//   },
//   {
//     username:'Cristhian Reyes',
//     photo:'http://www.zcosmetichealth.com/wp-content/uploads/2018/03/shutterstock_89640352-1024x680.jpg',
//     cantidad:'500'
//   },
//   {
//     username:'José Durand',
//     photo:'https://i2.wp.com/www.vivafifty.com/wp-content/uploads/2015/11/Qu%C3%A9-piensan-las-mujeres-de-los-hombres-con-pelo-gris.jpg?resize=649%2C495',
//     cantidad:'900'
//   },
//   {
//     username:'Jessica Reyes',
//     photo:'http://www.bodegasypropiedades.com.co/wp-content/uploads/2017/03/mujer-4-1.jpg',
//     cantidad:'500'
//   },
//   {
//     username:'Carlos Segura',
//     photo:'http://tristan29photography.com/wp-content/gallery/fotos-de-hombres/fotos-de-hombres-fotografia-profesional-sesion-de-fotos-59.jpg',
//     cantidad:'1200'
//   },
//   {
//     username:'Estephany Reyes',
//     photo:'https://i.pinimg.com/originals/7c/17/9a/7c179a3bab47c3fd46554ccfeb06cb72.jpg',
//     cantidad:'500'
//   },
//   {
//     username:'Pablo Meza',
//     photo:'http://tristan29photography.com/wp-content/gallery/fotos-de-hombres/fotos-de-hombres-fotografia-profesional-sesion-de-fotos-3.jpg',
//     cantidad:'500'
//   }
// ];

class ViewConfig extends  Component {
  constructor() {
    super();
    this.state = {
      partner:'',
      cant:'',
      day:'',
      mont:'',
      year:''
    }
  }
    
    render(){
        return (
          <section>
            <div class="container">
              <div class="row">
                <div class=" col-12 col-md-12 col-sm-12 col-lg-12">
                  <label>Elige tu Partner Financiero!</label>
                  <input id="nameElement" class="col-3"  placeHolder="Ingresa el nombre de tu partner" value={this.state.partner} onChange={this.update.bind(this)}/>
                  <button onClick={this.addPartner.bind(this)}>add</button>
                  <br/>
                  <label>Ingresa el monto</label>
                  <input class="col-1"  placeHolder=""/>
                  <br/>
                  <label>Ingresa el tiempo de tu plazo de ahorro</label>
                  <input  class="col-1" placeHolder="Día"/>
                  <input  class="col-1" placeHolder="Mes"/>
                  <input  class="col-1"s placeHolder="Año"/>
                </div>
                <div>
                {this.state.partner} 
                
                </div>
              </div>
            </div>
          </section>
        )
    }

    update(event) {
      this.setState({
        partner: event.target.value
      })
    }
  
    addPartner() {
      let add = this.state.partner
      console.log(add)

    }
}

export default ViewConfig; 