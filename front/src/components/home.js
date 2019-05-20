import React, { Component } from 'react';
//import { Carousel } from 'react-responsive-carousel';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';



var route = (navigator.language.startsWith("es"))?'http://localhost:3001/objetos':'http://localhost:3001/objetos-en';
var longroute = (navigator.language.startsWith("es"))?'http://localhost:3001/categories':'http://localhost:3001/categories-en';

export default class Home extends Component {
  /*para probar lo del carrito tenia
    someFn = () => {
      var listInfo = this.state.cart;
      console.log(this.props)
      if(listInfo.length!==0)
          this.props.callback(listInfo);
    }  

    addToCart(item){
      this.state.cart.push(item);
      this.someFn();
    }
    Y en el renderObjects, en el botón, tenia
    <button type="submit" onClick={()=>this.addToCart(item)} aria-label="Left Align" style={{backgroundColor:"lightGreen", fontWeight:"bolder"}}>+</button>

    */
   
    componentDidMount(){
      if(!navigator.onLine){
        if("lista" in window.localStorage){
          let objs = [];
          for (const cat of window.localStorage.getItem("lista")) {
            objs.concat(cat['objects']);
          }
          this.setState({
            items:objs
          })
        }
      }
      else{
        if(!("lista" in window.localStorage)){
          fetch(longroute).then(
            response => response.json()
          ).then(
            data=>{
              window.localStorage.setItem("lista", JSON.stringify(data));
            }
          ).catch(error=>{
            console.log(error);
          })
        }
        fetch(route).then(
            response => response.json()
        ).then(
            data => {
                this.setState({
                    items : data
                });
            }
        ).catch(error => {
            console.log(error);
        });
      }
    }

    add(item) {
    console.log("Hice algo");
    const { carrito } = this.state;
    this.setState({ carrito: [...carrito, item] });
    localStorage.setItem("carrito", JSON.stringify(carrito));

    var prueba = JSON.parse(localStorage.getItem("carrito"));
    console.log(prueba);
  }

    renderObjects(){
      return (
        this.state.items.map((item,index)=>{
          return(
            <tr key = {index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{(item.rating)?item.rating:<FormattedMessage id="noRateTag"/>}</td>
              <td>{(item.available)?<FormattedMessage id="availableTag"/>:<FormattedMessage id="noAvailableTag"/>}</td>
              <td>{item.description}</td>
              <td>
                <button type="button" className="btn btn-block" aria-label="Left Align" style={{backgroundColor:"lightGreen", border:"1px solid black", padding:"7px", fontWeight:"bolder"}} onClick={() => this.add(item)}>Add</button>
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
        })
      );
    }

    constructor(props) {
        super(props);
        this.state = {
          items:[],
          carrito:[]
        }
    }

    
    

    render() {
      return (
        <div className = "container" >
            <h1 style={{textAlign:"center", fontWeight:"bold", paddingTop:"5px"}}>
              <FormattedMessage id="homeScreenHead"/>
            </h1>
            <hr/>
            <h1>
              <FormattedMessage id="allObjListing"/>
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
                <tbody>
                {this.state.items.length===0?
                    <tr><td colSpan="7"><FormattedMessage id = "no-conn"/></td></tr>:
                    this.renderObjects()}
                </tbody>
                
              </table>
            </div>
           
        </div>
      );
    }
}