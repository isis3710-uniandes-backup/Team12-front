import React, { Component } from 'react'

export class prestamo extends Component {

  constructor(props){
    super(props);
    this.state = {
      prestamos : [],
      usuario: {},
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/users/:userID/prestamos')
    .then(function(res) {
      this.setState({prestamos : res.data})
    })
    fetch('http://localhost:3001/users/'+this.props.userId)
    .then(function(res) {
      this.setState({usuario : res.data})
    })
  }


  render() { 
    const {prestamoId, paymentId, objectId, userId, fechaI, fechaF, } = this.props
    return (
      <div>
        <h2>Prestamos usuario {userId}</h2>
        <table>
            <tr>
                <th>Id Prestamo</th>
                <th>Fecha Inicio</th>
                <th>Fecha Fin</th>
            </tr>
            <tr>
                <td>{prestamoId}</td>
                <td>{paymentId}</td>
                <td>{objectId}</td>
                <td>{fechaI}</td>
                <td>{fechaF}</td>
            </tr>
        </table>
      </div>
    )
  }
}

export default prestamo
