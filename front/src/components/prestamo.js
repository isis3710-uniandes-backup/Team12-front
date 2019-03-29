import React, { Component,Fragment } from 'react'
import {Link, Route} from 'react-router-dom'
import CrearPrestamo from './crearPrestamo'

export class prestamo extends Component {

  constructor(props){
    super(props);
    this.state = {
      prestamos : [],
      usuario: JSON.parse(localStorage.getItem("user"))
    };
  }
  
  componentDidMount = () => {

    console.log(JSON.parse(localStorage.getItem("user")));
    
    fetch(`http://localhost:3001/users/b1d308ad-5770-4d13-ac1e-8c8fc107dad4/prestamos`)
    .then(response => response.json())
    .then(prestamos => {
      prestamos.forEach(prestamo => {
        let data = {
          id: prestamo.id,
          paymentId: prestamo.paymentId,
          objectId: prestamo.objectId,
          startDate: prestamo.startDate,
          endDate: prestamo.endDate
        }
        this.setState({ prestamos: this.state.prestamos.concat([data]) })
      })
    })
    console.log(this.state.prestamos)
  }

  render() { 
    const {prestamos } = this.state
    return (

      <div>
        <h1>{this.state.usuario.name} loans</h1>
        <div className="container">
              <div className="row">
          {prestamos.map((prestamo,index)=>(
            <Fragment>
              <div className="col-auto mb-3">
              <div className="card" style={{width: "25rem"}}>
                <div className="card-body">
                  <h2 className="card-title">Loan {prestamo.id} </h2>
                    <p className="prestamoT" style={{fontSize: "1.8rem"}}>
                    paymentId: {prestamo.paymentId} <br></br>
                    objectId: {prestamo.objectId} <br></br>
                    Start Date: {prestamo.startDate} <br></br>
                    End Date: {prestamo.endDate} <br></br>
                    <a href="#" className="card-link">Update</a>
                    <a href="#" className="card-link">Delete</a>
                    </p>
              </div>
              </div>
              </div>
             </Fragment>
          ))}
          </div>
          </div>
          <Route
           exact path='/prestamos/create'
           render = { props => (
            <CrearPrestamo>

            </CrearPrestamo>
           )
           }
          />
          <Link to='/prestamos/create' style={{fontSize: "1.8rem"}}>Create a Loan!</Link>
      </div>
    )
  }
}

export default prestamo
