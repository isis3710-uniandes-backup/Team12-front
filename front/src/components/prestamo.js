import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import CrearPrestamo from './crearPrestamo'
import UpdatePrestamo from './updatePrestamo'
import axios from 'axios';
import { FormattedMessage } from 'react-intl';

export class prestamo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prestamos: [],
      usuario: JSON.parse(localStorage.getItem("user")),
    };
  }

  componentDidMount = () => {

    console.log(JSON.parse(localStorage.getItem("user")));

    fetch(`http://localhost:3001/users/${this.state.usuario.id}/prestamos`)
      .then(response => response.json())
      .then(prestamos => {
        prestamos.forEach(prestamo => {
          let data = {
            id: prestamo.id,
            paymentId: prestamo.paymentId,
            objectId: prestamo.objectId,
            startDate: prestamo.startDate,
            endDate: prestamo.endDate,
            valor: prestamo.valor
          }
          this.setState({ prestamos: this.state.prestamos.concat([data]) })
        })
      })
  }

  delete = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3001/users/${this.state.usuario.id}/prestamos/` + id)
      .then(res => {
        this.setState({ prestamos: [...this.state.prestamos.filter(prestamo => prestamo.id !== id)] })
      })
  }

  delete2 = (prestamo) => {
    console.log("fdfdsfdf")
    console.log(prestamo)
    prestamo.paymentId = "" + ((Math.random() * 10000) + 200).toFixed(0);
    var newprestamo = {
      endDate: prestamo.endDate,
      objectId: prestamo.objectId,
      paymentId: prestamo.paymentId,
      startDate: prestamo.startDate,
      valor: prestamo.valor

    }
    console.log(newprestamo)
    const { prestamos } = this.state
    console.log(`http://localhost:3001/users/${this.state.usuario.id}/prestamos/` + prestamo.id)
    axios.put(`http://localhost:3001/users/${this.state.usuario.id}/prestamos/` + prestamo.id, newprestamo)
      .then(res => {
        this.setState({ prestamos: [...prestamos.splice(prestamos.indexOf(prestamos.find(p => p.id === prestamo.id)), 1, res.data)] })
        window.location.reload()
      })
  }

  render() {
    const { prestamos } = this.state
    return (

      <div>
        <h1>{this.state.usuario.name + ":"} <FormattedMessage id="prestamos" /></h1>
        <div className="container">
          <div className="row">
            {prestamos.map((prestamo, index) => (
              <Fragment>
                <div className="col-auto mb-3">
                  <div className="card" style={{ width: "25rem", borderColor: prestamo.paymentId ? "green" : "red" }}>
                    <div className="card-body">
                      <h2 className="card-title"><FormattedMessage id="prestamo" /> {prestamo.id} </h2>
                      <p className="prestamoT" style={{ fontSize: "1.8rem" }}>
                        <FormattedMessage id="prestamos.pid" /> {prestamo.paymentId ? prestamo.paymentId : "-----"} <br></br>
                        <FormattedMessage id="prestamos.oid" /> {prestamo.objectId} <br></br>
                        <FormattedMessage id="prestamos.sd" /> {prestamo.startDate} <br></br>
                        <FormattedMessage id="prestamos.ed" /> {prestamo.endDate} <br></br>
                        <FormattedMessage id="prestamos.value" /> {"$" + prestamo.valor} <br></br>
                        <button className="btn btn-danger" style={{ fontSize: "1.5rem" }} onClick={() => this.delete(prestamo.id)}><FormattedMessage id="prestamos.delete" /></button>
                        {!prestamo.paymentId && <button className="btn btn-info" style={{ fontSize: "1.5rem" }} onClick={() => this.delete2(prestamo)}><FormattedMessage id="prestamos.pay" /> </button>}
                        <Link className="btn btn-warning" to={'/prestamos/update/' + prestamo.id} style={{ fontSize: "1.5rem" }}><FormattedMessage id="prestamos.update" /> </Link>
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
          render={props => (
            <CrearPrestamo>

            </CrearPrestamo>
          )
          }
        />
        <Route
          exact path='/prestamos/update/:id' render={props => (

            <UpdatePrestamo {...props}>

            </UpdatePrestamo>
          )
          }
        />
        <Link to='/prestamos/create' style={{ fontSize: "1.8rem" }}><FormattedMessage id="prestamos.create" /></Link>
      </div>
    )
  }
}

export default prestamo
