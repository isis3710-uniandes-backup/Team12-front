import React, { Component,Fragment } from 'react'
import {Link, Route} from 'react-router-dom'
import CrearOferta from './crearOferta'
import UpdateOferta from './updateOferta'
import axios from 'axios';

export class oferta extends Component {

  constructor(props){
    super(props);
    this.state = {
      ofertas : [],
      usuario: JSON.parse(localStorage.getItem("user"))
    };
  }
  
  componentDidMount = () => {
    fetch(`http://localhost:3001/users/${this.state.usuario.id}/ofertas`)
    .then(response => response.json())
    .then(ofertas => {
      ofertas.forEach(oferta => {
        let data = {
          id: oferta.id,
          nombre: oferta.nombre,
          img: oferta.img,
          precioAnterior: oferta.precioAnterior,
          porcentajeDescuento: oferta.porcentajeDescuento,
          objetosId: oferta.objectId
        }
        this.setState({ ofertas: this.state.ofertas.concat([data]) })
      })
    })
    console.log(this.state.ofertas)
  }

  delete = (id)=>{
    console.log(id)
    axios.delete(`http://localhost:3001/users/${this.state.usuario.id}/ofertas/`+id)
    .then(res =>{
      this.setState({ofertas: [...this.state.ofertas.filter(oferta=> oferta.id!==id)]})
    })
  }

  render() { 
    const {ofertas } = this.state
    return (

      <div>
        <h1>{this.state.usuario.name} offers</h1>
        <div className="container">
              <div className="row">
          {ofertas.map((oferta,index)=>(
            <Fragment>
              <div className="col-auto mb-3">
              <div className="card" style={{width: "25rem"}}>
                <div className="card-body">
                  <h2 className="card-title"> {oferta.nombre} </h2>
                    <p className="prestamoT" style={{fontSize: "1.8rem"}}>
                    <img src={oferta.img} width="200px" height="200px" alt={oferta.nombre} />
                    name: {oferta.nombre} <br></br>
                    previous price: {"$"+oferta.precioAnterior} {"- "+oferta.porcentajeDescuento+"%"} <br></br>
                    current price: {"$"+oferta.precioAnterior*(oferta.porcentajeDescuento/100)} <br></br>
                    <button className="btn btn-danger" style={{fontSize: "1.5rem"}} onClick={()=> this.delete(oferta.id)}>Delete </button>
                    <Link className="btn btn-warning" to={'/ofertas/update/'+oferta.id} style={{fontSize: "1.5rem"}}>Update </Link>
                      </p>
              </div>
              </div>
              </div>
             </Fragment>
          ))}
          </div>
          </div>
          <Route
           exact path='/ofertas/create'
           render = { props => (
            <CrearOferta>

            </CrearOferta>
           )
           }
          />
          <Route
                    exact path='/ofertas/update/:id' render = { props => (
                      
                      <UpdateOferta {...props}>
            
                      </UpdateOferta>
                    )
                    }
                    />
          <Link to='/ofertas/create' style={{fontSize: "1.8rem"}}>Create an offer!</Link>
      </div>
    )
  }
}

export default oferta
