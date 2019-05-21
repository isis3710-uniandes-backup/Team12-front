import React, { Component } from 'react'
import axios from 'axios'
import { FormattedMessage } from 'react-intl';

export class crearOferta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      img: "",
      precioAnterior: "",
      porcentajeDescuento: "",
      objetosId: "",
      usuario: JSON.parse(localStorage.getItem("user")),
      oferta: {}
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  crear = (oferta) => {
    console.log(oferta)
    axios.post(`http://52.3.50.151:3001/users/${this.state.usuario.id}/ofertas`, oferta)
  }

  render() {
    console.log(this.state.usuario.id)
    return (
      <div>
        <div className="container">
          <h2><FormattedMessage id="ofertas.create" /></h2>
          <form onSubmit={() => this.crear({ nombre: this.state.nombre, img: "https://cdn.pixabay.com/photo/2017/10/27/12/28/discounts-2894129_960_720.png", precioAnterior: this.state.precioAnterior, porcentajeDescuento: this.state.porcentajeDescuento, objetosId: this.state.objetosId })}>
            <div className="form-group">
              <label htmlFor="nombre"><FormattedMessage id="nombre" /> </label>
              <input name="nombre" value={this.state.nombre} className="form-control" id="nombre" placeholder="Insert the offer name" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="precioAnterior"><FormattedMessage id="precioAnterior" /> </label>
              <input name="precioAnterior" value={this.state.precioAnterior} className="form-control" id="precioAnterior" placeholder="Insert the previous price" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="porcentajeDescuento"><FormattedMessage id="porcentajeDescuento" /> </label>
              <input name="porcentajeDescuento" value={this.state.porcentajeDescuento} className="form-control" id="startDate" placeholder="Insert the discount (%)" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="objectId"><FormattedMessage id="Id objeto" /> </label>
              <input name="objectId" value={this.state.objectId} className="form-control" id="objectId" placeholder="Insert the object id" onChange={this.onChange} />
            </div>
            <button type="submit" className="btn btn-primary"><FormattedMessage id="ofertas.submit" /></button>
          </form>
        </div>
      </div>
    )
  }
}

export default crearOferta
