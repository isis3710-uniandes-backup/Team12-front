import React, { Component } from 'react'
import axios from 'axios'

export class crearPrestamo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objectId: "",
      userId: "",
      startDate: "22/04/2019",
      endDate: "22/04/2019",
      usuario: JSON.parse(localStorage.getItem("user")),
      prestamo: {},
      route: (navigator.language.startsWith("es")) ? 'http://localhost:3001/objetos' : "http://localhost:3001/objetos-en/",
      items: [],

    }
  }

  componentDidMount() {
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
    console.log("Id obejto" + this.state.objectId)
  };

  crear = (prestamo) => {
    console.log(prestamo)
    axios.post(`http://localhost:3001/users/${this.state.usuario.id}/prestamos`, prestamo)
  }

  render() {
    const { items } = this.state
    return (
      <div>
        <div className="container">
          <h2>Create a loan</h2>
          <form onSubmit={() => this.crear({ paymentId: (Math.random() * 10000000000) + 200, objectId: this.state.objectId, userId: this.state.usuario.id, startDate: this.state.startDate, endDate: this.state.endDate })}>
            <div className="form-group">
              <label htmlFor="objectId">Object id: </label>
              {items.map((item, index) => (
                <p className="mat"><input value={item.id} type="radio" name="objectId" id="objectId" onChange={this.onChange} />{item.name}</p>
              ))}
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date: </label>
              <input name="startDate" value={this.state.startDate} className="form-control" id="startDate" placeholder="dd/mm/aa" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date: </label>
              <input name="endDate" value={this.state.endDate} className="form-control" id="endDate" placeholder="dd/mm/aa" onChange={this.onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default crearPrestamo
