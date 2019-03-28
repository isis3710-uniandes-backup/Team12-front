import React, {Component} from 'react';
import '../App.css'
var list = [];
export default class Subcategory extends Component{
    
    constructor(props){
        super(props);
        
    }
    
    getItems(){
        //con un framework se hace get al API y se guarda el arreglo
        //list = fetch('',(err)=>{})
    }

    renderItemList(){
        //Map de los objetos en list, cada uno es una fila
        return(
            <tr>
                <td>{/*Info del dueño */}</td>
                <td>{/*Nombre */}</td>
                <td>{/*Disponibilidad */}</td>
            </tr>
        );
    }
    
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <table>
                    <thead>
                        <th>Dueño</th>
                        <th>Nombre producto</th>
                        <th>Disponible</th>
                    </thead>
                    <tbody>
                        {this.renderItemList()}
                    </tbody>
                </table>
            </div>
        );
    }
}