import React, {Component} from 'react';
import '../App.css';

export default class Subcategory extends Component{
    
      
    constructor(props){
        super(props);

        this.state = {
            items : []
        }
    }
    
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

    renderItemList(){
        //Map de los objetos en list, cada uno es una fila
        return(this.state.items.map((item,index)=>{
            return(
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{(item.rating)?item.rating:"No hay valoraciones"}</td>
                <td>{(item.available)?"Disponible":"No disponible"}</td>
                <td>{item.description}</td>
              </tr>
            )
          }));
    };

    
    
    render(){
        return(
            <div className = "container">
            

            <h1>Todos los objetos de esta subcategoria</h1>
            <hr/>
            <div>
              <table className = "table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Rating</th>
                    <th>Disponible</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>{this.renderItemList()}</tbody>
                
              </table>
            </div>
           
        </div>
        );
    }
}