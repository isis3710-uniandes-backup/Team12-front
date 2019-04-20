import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FormattedMessage } from 'react-intl';

var route = (navigator.language.startsWith("es"))?'http://localhost:3001/objetos':'http://localhost:3001/objetos-en';

export default class Home extends Component {
    componentDidMount(){
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
        })
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
            </tr>
          )
        })
      );
    }

    constructor(props) {
        super(props);
        this.state = {
          items:[]
        }
    }

    render() {
      return (
        <div className = "container">
            <h1>
              <FormattedMessage id="homeScreenHead"/>
            </h1>
            <hr/>
            <Carousel>
                <div>
                    <img src="https://www.sunlife.ca/static/ca/Learn%20and%20Plan/images/INT165-lending-your-car_1200x600.jpg" alt ="Prestamo de llaves de carro"/>
                    <p className="legend">
                      <FormattedMessage id="image1Cap"/>
                    </p>
                </div>
                <div>
                    <img src="https://www.osi.es/sites/default/files/images/compraSegura.png" alt = "Compras seguras en linea"/>
                    <p className="legend">
                      <FormattedMessage id="image2Cap"/>
                    </p>
                </div>
                <div>
                    <img src="https://s3.amazonaws.com/uploads.hotmart.com/blog/2018/01/BLOG_48-mil-reais-em-6-meses-1-670x419.png" alt = "Ganar dinero en linea"/>
                    <p className="legend">
                      <FormattedMessage id="image3Cap"/>
                    </p>
                </div>
            </Carousel>

            <h1>
              <FormattedMessage id="allObjListing"/>
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
                <tbody>{this.renderObjects()}</tbody>
                
              </table>
            </div>
           
        </div>
      );
    }
}