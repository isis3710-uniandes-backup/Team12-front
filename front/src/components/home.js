import React, { Component } from 'react';

export default class Home extends Component {
    componentDidMount(){
      fetch('http://localhost:3001/objetos').then(
            response => response.json()
        ).then(
            data => {
                this.setState({
                    items : data
                });
            }
        ).catch(error => {
            console.log(error);
        })
    }
    constructor(props) {
        super(props);
        this.state = {
          items:[]
        }
    }

    render() {
      return (
        <div></div>
      );
    }
}