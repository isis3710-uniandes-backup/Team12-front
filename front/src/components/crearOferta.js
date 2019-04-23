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
    axios.post(`http://localhost:3001/users/${this.state.usuario.id}/ofertas`, oferta)
  }

  render() {
    console.log(this.state.usuario.id)
    return (
      <div>
        <div className="container">
          <h2><FormattedMessage id="ofertas.create" /></h2>

          <form onSubmit={() => this.crear({ paymentId: this.state.paymentId, objectId: this.state.objectId, userId: this.state.usuario.id, startDate: this.state.startDate, endDate: this.state.endDate })}>
            <div className="form-group">
              <label htmlFor="paymentId"><FormattedMessage id="prestamos.pid" /> </label>
              <input name="paymentId" value={this.state.paymentId} className="form-control" id="paymentId" placeholder="Insert the payment id" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="objectId"><FormattedMessage id="prestamos.oid" /> </label>
              <input name="objectId" value={this.state.objectId} className="form-control" id="objectId" placeholder="Insert the object id" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="startDate"><FormattedMessage id="prestamos.sd" /> </label>
              <input name="startDate" value={this.state.startDate} className="form-control" id="startDate" placeholder="dd/mm/aa" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="endDate"><FormattedMessage id="prestamos.ed" /> </label>
              <input name="endDate" value={this.state.endDate} className="form-control" id="endDate" placeholder="dd/mm/aa" onChange={this.onChange} />
            </div>
            <button type="submit" className="btn btn-primary"><FormattedMessage id="prestamos.submit" /></button>
          </form>
        </div>
      </div>
    )
  }
}

export default crearOferta
