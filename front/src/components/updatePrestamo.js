import React, { Component } from 'react'
import axios from 'axios'

export class crearPrestamo extends Component {

  constructor(props){
    super(props);
    this.state = {
      startDate : "",
      endDate: "",
      usuario: JSON.parse(localStorage.getItem("user")),
      prestamo: {}, 
      id:""
  }
}

componentDidMount = () => {
  axios.get(`http://localhost:3001/users/${this.state.usuario.id}/prestamos/${this.props.match.params.id}`)
  .then( res => {
      this.setState({startDate: res.data.startDate, endDate: res.data.endDate, id: res.data.id})
  })
}

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
  update = (prestamo)=> {
    console.log(prestamo)
      axios.put(`http://localhost:3001/users/${this.state.usuario.id}/prestamos/${this.state.id}`, prestamo)
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
      
       <form onSubmit={()=>this.update({ startDate: this.state.startDate, endDate: this.state.endDate})}>
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

export default crearPrestamo
 