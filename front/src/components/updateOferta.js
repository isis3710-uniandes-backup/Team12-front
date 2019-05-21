import React, { Component } from 'react'
import axios from 'axios'

export class crearOferta extends Component {

  constructor(props){
    super(props);
    this.state = {
      nombre : "",
      img: "",
      porcentajeDescuento: 0,
      precioAnterior: 0,
      usuario: JSON.parse(localStorage.getItem("user")),
      oferta: {}, 
      id:""
  }
}

componentDidMount = () => {
  axios.get(`http://52.3.50.151:3001/users/${this.state.usuario.id}/ofertas/${this.props.match.params.id}`)
  .then( res => {
      this.setState({nombre: res.data.nombre, img: res.data.img, id: res.data.id, porcentajeDescuento: res.data.porcentajeDescuento, precioAnterior: res.data.precioAnterior})
  })
}

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
  update = (oferta)=> {
    console.log(oferta)
      axios.put(`http://52.3.50.151:3001/users/${this.state.usuario.id}/ofertas/${this.state.id}`, oferta)
      .then(res =>{
          console.log(res.data)
      })
  }

  render() {
    console.log(this.state.usuario.id)
    return (
      <div>
      <div className="container">
      <h2>Update a loan</h2>
      
       <form onSubmit={()=>this.update({nombre: this.state.nombre, img: this.state.img, id: this.state.id, porcentajeDescuento: this.state.porcentajeDescuento, precioAnterior: this.state.precioAnterior})}>
        
        <div className="form-group">
            <label htmlFor="img"> Image:</label>
            <input name="img" value={this.state.img} className="form-control" id="img" placeholder="Insert the URL of the image" onChange={this.onChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="nombre">Name: </label>
            <input name="nombre" value={this.state.nombre} className="form-control" id="nombre" placeholder="Insert a name for the offer" onChange={this.onChange}/>
        </div>
        
        <div className="form-group">
            <label htmlFor="precioAnterior">Previous price: </label>
            <input name="precioAnterior" value={this.state.precioAnterior} className="form-control" id="precioAnterior" placeholder="Insert the previous price" onChange={this.onChange}/>
        </div>
        
        <div className="form-group">
            <label htmlFor="porcentajeDescuento">Discount: </label>
            <input name="porcentajeDescuento" value={this.state.porcentajeDescuento} className="form-control" id="porcentajeDescuento" placeholder="Insert the discount" onChange={this.onChange}/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
        </div>
      </div>
    )
  }
}

export default crearOferta
 