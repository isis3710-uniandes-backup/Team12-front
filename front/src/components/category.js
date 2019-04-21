import React, {Component} from 'react';
import '../App.css';
import {FormattedMessage } from 'react-intl';

export default class Category extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            items : []
        }
    }
    
    componentDidMount(){
        fetch(`http://localhost:3001/objetos/category/${this.props.match.params.categoryID}`).then(
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
          console.log(this.props)
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
                <td>
                  <button type="submit" aria-label="Left Align" style={{backgroundColor:"lightGreen", fontWeight:"bolder"}}>+</button>
                </td>
              </tr>
            )
          }));
    };

    
    
    render(){
        return(
            <div className = "container">
            

            <h1>
              <FormattedMessage id="allObjC"/>
            </h1>
            <hr/>
            <div>
            <table className = "table table-bordered table-responsive" >
                <thead className ="table-active">
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
                    <th>
                      <FormattedMessage id="addItem"/>
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