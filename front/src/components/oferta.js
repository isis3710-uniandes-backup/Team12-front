import React, { Component } from 'react'

export class oferta extends Component {
  constructor(props){
    super(props);
    this.state = {
      ofertas : []
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/users/:userID/ofertas')
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

export default oferta
