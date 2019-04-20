import React, {Component} from 'react';
import '../App.css';
import {FormattedMessage } from 'react-intl';

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
                <td>{(item.rating)?item.rating:<FormattedMessage id="noRateTag"/>}</td>
                <td>{(item.available)?<FormattedMessage id="availableTag"/>:<FormattedMessage id="noAvailableTag"/>}</td>
                <td>{item.description}</td>
              </tr>
            )
          }));
    };

    
    
    render(){
        return(
            <div className = "container">
            

            <h1>
              <FormattedMessage id="allObjSubc"/>
            </h1>
            <hr/>
            <div>
              <table className = "table">
                <thead>
                  <tr>
                  <th>
                      <FormattedMessage id="tItemName"/>
                    </th>
                    <th>
                      <FormattedMessage id="tItemPrice"/>
                    </th>
                    <th>
                      <FormattedMessage id="tItemRate"/>
                    </th>
                    <th>
                      <FormattedMessage id="tItemAv"/>
                    </th>
                    <th>
                      <FormattedMessage id="tItemDes"/>
                    </th>
                  </tr>
                </thead>
                <tbody>{this.renderItemList()}</tbody>
                
              </table>
            </div>
           
        </div>
        );
    }
}