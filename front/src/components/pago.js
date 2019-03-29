import React, { Component } from 'react'

export class pago extends Component {

    constructor(props){
        super(props);
        this.state = {
          pagos : []
        };
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/users/:userID/prestamos/:prestamoID/pagos')
        .then(function(res) {
          this.setState({ofertas : res.data})
        })
    }
    
    render() {
    const {  } = this.props
    return (
      <div>
        
      </div>
    )
    }
}

export default pago
