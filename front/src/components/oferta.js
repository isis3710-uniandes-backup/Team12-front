import React, { Component, Fragment } from 'react'

export class oferta extends Component {
  constructor(props){
    super(props);
    this.state = {
      ofertas : [],
      usuario: JSON.parse(localStorage.getItem("user"))
    };
  }
  
  componentDidMount = () => {

    console.log(JSON.parse(localStorage.getItem("user")));
    
    fetch(`http://localhost:3001/users/b1d308ad-5770-4d13-ac1e-8c8fc107dad4/ofertas`)
    .then(response => response.json())
    .then(ofertas => {
      ofertas.forEach(oferta => {
        let data = {
          id: oferta.id,
          nombre: oferta.nombre,
          img: oferta.img,
          precioAnterior: oferta.precioAnterior,
          porcentajeDescuento: oferta.porcentajeDescuento,
          userId: oferta.userId,
          objetosId: oferta.objetosId
        }
        this.setState({ ofertas: this.state.ofertas.concat([data]) })
      })
    })
  }

  render() {
    const {ofertas } = this.state
    return (
      <div>
      <h1>Prestamos usuario {this.state.usuario.name}</h1>
      <div className="container">
            <div className="row">
        {ofertas.map((prestamo,index)=>(
          <Fragment>
            <div className="col-auto mb-3">
            <div className="card" style={{width: "25rem"}}>
              <div className="card-body">
                <h2 className="card-title">Prestamo {prestamo.id} </h2>
                  <p className="prestamoT" style={{fontSize: "1.8rem"}}>
                  Id pago: {prestamo.paymentId} <br></br>
                  Id objeto: {prestamo.objectId} <br></br>
                  Fecha inicio: {prestamo.startDate} <br></br>
                  Fecha fin: {prestamo.endDate} <br></br>
                  <a href="#" className="card-link">Actualizar</a>
                  <a href="#" className="card-link">Eliminar</a>
                  </p>
            </div>
            </div>
            </div>
           </Fragment>
        ))}
        </div>
        </div>
      </div>
    )
  }
}

export default oferta
