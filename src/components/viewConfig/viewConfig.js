import React, { Component } from 'react';
import Nota from './Notas'
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
  constructor(props) {
    super(props);

    this.state = {
      noteText:'',
      notes:[]
    }
  }

  updateNoteText(noteText) {
    this.setState({ 
       noteText: noteText.target.value
       })
    
  }

  addNote() {
    
    if( this.state.noteText === '') {return false}
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: ''});
    this.textInput.focus();
    

  }

  handleKeyPress = (event) => {
    if(event.key === 'Ent'){
    }
  }

  deleteNote(index){
       let notesArr = this.state.notes;
       notesArr.splice(index, 1);
       this.setState({ notes: notesArr })
     }
    
    render(){

      let notes = this.state.notes.map((val, key ) => {
        return <Nota className="col-md-4 bg-primary "  key={key} text={val}
                      deleteMethod={ () => this.deleteNote(key)} />
           })
      
      //const notes = this.props.notes
      
        return (
          <section>
            <div className="container">
              <div className="row ">
                <div className=" col-12 col-md-12 col-sm-12 col-lg-12 ">
                 <center>
                   <h3 className="h3-pinky">¿Quienes te acompañarán <br/>
                    en tu  ruta de ahorro ?</h3>
                  <label>Elige tu Partner Financiero!</label>
                  <input  
                    className="form-control  col-md-5"
                    placeholder="Ingresa el nombre de tu partner"
                    ref={((input) => this.textInput = input )}
                    value={this.state.noteText}
                    onChange={ noteText =>  this.updateNoteText(noteText)}
                    onKeyPress={ this.handleKeyPress.bind(this)}
                    />
                 </center>
                  <button 
                  className="btn "
                   onClick={this.addNote.bind(this)}
                   >Agregar más</button> 
                   <button className="btn">Invitar</button>
                    <br/>

                   <label>Ingresa el monto</label>
                  <input className="form-control col-md-2 mx-auto"  placeholder="Monto"/>
                </div> 
              </div>
              
              
              <div className="row ">
                 <label className="mx-auto col-md-12">Ingresa el tiempo de tu plazo de ahorro</label> 
                  <center>
                    <input  className=" input-x col-11 col-md-2" placeholder="Día"/>
                    <input  className=" input-x col-11 col-md-2" placeholder="Mes"/>
                    <input  className=" input-x col-11 col-md-2" placeholder="Año"/>
                  </center>
              </div>
              <div className="row conten-partner">
                    { notes }
              </div>
            </div>
          </section>
        )
    }

    
  
    
  
}

export default ViewConfig; 