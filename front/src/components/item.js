import React, {Component} from 'react';
//import '../App.css'

export default class Item extends Component{
    constructor(props){
        super(props);

    }
    renderAvailability(){
        if(this.props.data.available === true){
            return (
                <span className = 'availablility'>
                   Disponible
                </span>
            );
        }
        else{
            return (
                <span className = 'non-availability'>
                    Elemento no disponible
                </span>
            )
        }
    }
    handleClick(){
        alert("Gracias por pedir este item")
    }
    render(){
        return(
            <div className ="item-detail">
            
                <div className = "title">
                    <h1>{this.props.data.name}</h1>
                </div>
                <div className = "item-info">
                    <span>{this.props.data.price}</span>
                    {this.renderAvailability}
                    <p>{this.props.data.description}</p>
                </div>
                <div>
                    <button onClick={this.handleClick}>
                        {this.props.data.available ? 'Pedir ya' : 'Por ahora no puedes pedir este objeto'}
                    </button>
                </div>
            </div>
        );
    }
}
