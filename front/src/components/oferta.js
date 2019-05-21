import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import CrearOferta from './crearOferta'
import UpdateOferta from './updateOferta'
import axios from 'axios';
import ApiHelper from './ApiHelper';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export class oferta extends Component {

  api = new ApiHelper();
  constructor(props) {
    super(props);
    this.state = {
      ofertas: [],
      usuario: JSON.parse(localStorage.getItem("user"))
    };
  }

  componentDidMount = () => {
    if (this.api.loggedIn()) {

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

  }

  delete = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3001/users/${this.state.usuario.id}/ofertas/` + id)
      .then(res => {
        this.setState({ ofertas: [...this.state.ofertas.filter(oferta => oferta.id !== id)] })
      })
  }

  render() {
    if (this.api.loggedIn()) {
      const { ofertas } = this.state
      return (

        <div>
          <h1 style={{ textAlign: "center" }}>{this.state.usuario.name + ":"} <FormattedMessage id="ofertas" /></h1>
          <div className="container">
            <div className="row">
              {ofertas.map((oferta, index) => (
                <Fragment>
                  <div key={index} className="col-auto mb-3">
                    <div className="card" style={{ width: "25rem" }}>
                      <div className="card-body">
                        <h2 className="card-title"> {oferta.nombre} </h2>
                        <p className="prestamoT" style={{ fontSize: "1.8rem" }}>
                          <img src={oferta.img} width="200px" height="200px" alt={oferta.nombre} />
                          <FormattedMessage id="tItemName" />: {oferta.nombre} <br></br>
                          <FormattedMessage id="ofertas.prevp" />{"$" + oferta.precioAnterior} {"- " + oferta.porcentajeDescuento + "%"} <br></br>
                          <FormattedMessage id="ofertas.currp" />{"$" + oferta.precioAnterior * (oferta.porcentajeDescuento / 100)} <br></br>
                          <button className="btn btn-danger" style={{ fontSize: "1.5rem" }} onClick={() => this.delete(oferta.id)}><FormattedMessage id="prestamos.delete" /> </button>
                          <Link className="btn btn-warning" to={'/ofertas/update/' + oferta.id} style={{ fontSize: "1.5rem" }}><FormattedMessage id="prestamos.update" /> </Link>
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
            render={props => (
              <CrearOferta>

              </CrearOferta>
            )
            }
          />
          <Route
            exact path='/ofertas/update/:id' render={props => (

              <UpdateOferta {...props}>

              </UpdateOferta>
            )
            }
          />
          <p style={{ textAlign: "center" }}><Link to='/ofertas/create' style={{ fontSize: "1.8rem" }}><FormattedMessage id="ofertas.create" /></Link></p>
        </div>
      )
    }
    else {
      return (
        <div>
          <p style={{ textAlign: "center", fontSize: "3em", color: "black" }}>No estás registrado</p>
          <p style={{ textAlign: "center" }}><NavLink to="/signup">Regístrate ahora</NavLink> para obtener ofertas personalizadas</p>
        </div>
      );
    }
  }
}

export default oferta
