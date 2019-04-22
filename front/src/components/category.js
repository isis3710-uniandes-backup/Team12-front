import React, {Component} from 'react';
import '../App.css';
import {FormattedMessage } from 'react-intl';
import {NavLink} from 'react-router-dom';

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
                  <button type="button" className="btn btn-block" aria-label="Left Align" style={{backgroundColor:"lightGreen", border:"1px solid black", padding:"7px", fontWeight:"bolder"}}>+</button>
                </td>
                <td>
                  <NavLink to={`/item/${item.id}`}>
                    <div style ={{border:"1px solid black", textAlign:"center", paddingTop:"3px", paddingBottom:"3px", backgroundColor:"lightBlue", color:"black"}}>
                      <FormattedMessage id="goObjDet"/>
                    </div>
                    
                  </NavLink>
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
                    <th>
                      <FormattedMessage id="objDet"/>
                    </th>
                  </tr>
                </thead>
                <tbody>{this.renderItemList()}</tbody>
                
              </table>
              <NavLink to = "/categories">
                <div style ={{width:"inherit", border:"1px solid black", backgroundColor:"red", color:"white", textAlign:"center"}}>
                  <FormattedMessage id="back"/>
                </div>
              </NavLink>
            </div>
           
        </div>
        );
    }
}