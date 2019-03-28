import React, { Component } from 'react'

const {userId, fechaI, fechaF, prestamoId} = this.props

export class prestamo extends Component {
  render() { 
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
                <td>{fechaI}</td>
                <td>{fechaF}</td>
            </tr>
        </table>
      </div>
    )
  }
}

export default prestamo
