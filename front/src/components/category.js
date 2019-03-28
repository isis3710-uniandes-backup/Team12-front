import React, {Component} from 'react';
import '../App.css'
var list = [];
export default class Category extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            items = []
        }
    }
    
    getItems(){
        //con un framework se hace get al API y se guarda el arreglo
        //list = fetch('',(err)=>{})
        fetch('localhost:3000')
        .then((response)=>{
            console.log(response);
        })
    }

    renderItemList(){
        //Map de los objetos en list, cada uno es una fila
        return(
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }

    getSubcategories(){
        //con un framework se hace get al API y se guarda el arreglo
        //list = fetch('',(err)=>{})
    }
    renderSubCategories(){
        //Map de los objetos en list, cada uno es un grupo de elementos
        return(
            <tr>
                <td></td>
                <td></td>
                <td></td>
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