import React, { Component } from 'react'
import axios from 'axios'
import { FormattedMessage } from 'react-intl';

export class crearPrestamo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objectId: "",
      userId: "",
      startDate: {},
      endDate: {},
      usuario: JSON.parse(localStorage.getItem("user")),
      prestamo: {},
      route: (navigator.language.startsWith("es")) ? 'http://localhost:3001/objetos' : "http://localhost:3001/objetos-en/",
      items: [],

    }
  }

  componentDidMount() {
    console.log("object")
    console.log(this.state.usuario.id)
    fetch(this.state.route).then(
      response => response.json()
    ).then(
      data => {
        this.setState({
          items: data
        });
      }
    ).catch(error => {
      console.log(error);
    });
  }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value)
  };

  crear = (prestamo) => {
    console.log(prestamo)
    axios.post(`http://localhost:3001/users/${this.state.usuario.id}/prestamos`, prestamo)
  }

  render() {
    const { items, objectId } = this.state
    return (
      <div>
        <div className="container">
          <h2><FormattedMessage id="prestamos.create" /></h2>
          <form onSubmit={() => this.crear({ objectId: this.state.objectId, userId: this.state.usuario.id, startDate: this.state.startDate, endDate: this.state.endDate, valor: "" + items.filter((item => item.id === objectId))[0].price })}>
            <div className="form-group">
              <label htmlFor="objectId"><FormattedMessage id="prestamos.objetos" /> </label>
              {items.map((item, index) => (
                <p key={index} className="mat"><input value={item.id} type="radio" name="objectId" id="objectId" onChange={this.onChange} />{item.name}</p>
              ))}
            </div>
            <div className="form-group">
              <label htmlFor="startDate"><FormattedMessage id="prestamos.sd" /> </label>
              <input type="date" name="startDate" value={this.state.startDate} className="form-control" id="startDate" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="endDate"><FormattedMessage id="prestamos.ed" /> </label>
              <input type="date" name="endDate" value={this.state.endDate} className="form-control" id="endDate" onChange={this.onChange} />
            </div>
            <button type="submit" className="btn btn-primary"><FormattedMessage id="prestamos.submit" /></button>
          </form>
        </div>
      </div>
    )
  }
}

export default crearPrestamo