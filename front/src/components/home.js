import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


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
    renderObjects(){
      return (<div></div>);
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
            <h1>Todos los objetos</h1>
            {this.renderObjects()}
            <h1>Más sobre telopresto</h1>
            <Carousel>
                <div>
                    <img src="https://www.sunlife.ca/static/ca/Learn%20and%20Plan/images/INT165-lending-your-car_1200x600.jpg" />
                    <p className="legend">En telopresto.com puedes prestar o pedir prestada cualquier cosa, explora todas las categorías</p>
                </div>
                <div>
                    <img src="https://www.osi.es/sites/default/files/images/compraSegura.png" />
                    <p className="legend">Saca provecho de todas las cosas que tienes en tu casa en buen estado pero nunca utilizas</p>
                </div>
                <div>
                    <img src="https://s3.amazonaws.com/uploads.hotmart.com/blog/2018/01/BLOG_48-mil-reais-em-6-meses-1-670x419.png" />
                    <p className="legend">Es una forma fácil de ayudar a otros y ganar algo de dinero</p>
                </div>
            </Carousel>
        </div>
      );
    }
}