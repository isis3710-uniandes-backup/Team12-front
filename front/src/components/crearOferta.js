import React, { Component } from 'react'
import axios from 'axios'

export class crearOferta extends Component {

  constructor(props){
    super(props);
    this.state = {
      nombre: "",
      img: "",
      precioAnterior: "",
      porcentajeDescuento : "",
      objetosId: "",
      usuario: JSON.parse(localStorage.getItem("user")),
      oferta: {}
  }
}

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
  crear = (oferta)=> {
    console.log(oferta)
      axios.post(`http://localhost:3001/users/${this.state.usuario.id}/ofertas`, oferta)
  }

  render() {
    console.log(this.state.usuario.id)
    return (
      <div>
      <div className="container">
      <h2>Create a loan</h2>
      
       <form onSubmit={()=>this.crear({ paymentId: this.state.paymentId, objectId: this.state.objectId, userId:this.state.usuario.id, startDate: this.state.startDate, endDate: this.state.endDate})}>
       <div className="form-group">
            <label htmlFor="paymentId">Payment id: </label>
            <input name="paymentId" value={this.state.paymentId} className="form-control" id="paymentId" placeholder="Insert the payment id" onChange={this.onChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="objectId">Object id: </label>
            <input name="objectId" value={this.state.objectId} className="form-control" id="objectId" placeholder="Insert the object id" onChange={this.onChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="startDate">Start Date: </label>
            <input name="startDate" value={this.state.startDate} className="form-control" id="startDate" placeholder="dd/mm/aa" onChange={this.onChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="endDate">End Date: </label>
            <input name="endDate" value={this.state.endDate} className="form-control" id="endDate" placeholder="dd/mm/aa" onChange={this.onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
        </div>
      </div>
    )
  }
}

export default crearOferta
 