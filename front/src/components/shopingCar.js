import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class shopingCar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cantidad: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        };

    }

    add(index, sum) {
        console.log("entre");
        var carrito = JSON.parse(localStorage.getItem("carrito"));
        var carrito2 = carrito;
        var item = carrito2[index];
        var cant = this.state.cantidad;
        var add = {
                  name : item.name,
                  price : item.price,
                  rating : item.rating,
                  available : item.available,
                  description : item.description,
                  qty : item.qty + parseInt(sum)
        }
        carrito2.splice(index,1);
        carrito2.push(add);
        localStorage.setItem("carrito", JSON.stringify(carrito2));
        var val = add.qty;
        cant[index] = val;
        this.setState({ cantidad: cant })

    }

    render() {
        var carrito = JSON.parse(localStorage.getItem("carrito"));
        console.log(carrito);
        if (carrito===null){
            return (<h1 style={{textAlign:"center"}}> < FormattedMessage id = "emptyCart"/></h1>)
        }
        else{
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col"><FormattedMessage id = "tItemName"/></th>
                            <th scope="col"><FormattedMessage id = "tItemQty"/></th>
                            <th scope="col"><FormattedMessage id = "tItemDes"/> </th>
                            <th scope="col"><FormattedMessage id = "tItemRate"/></th>
                            <th scope="col"><FormattedMessage id = "tItemPrice"/></th>
                            <th scope="col">Total</th>
                            <th scope="col" colSpan="2"><FormattedMessage id = "tItemAR"/></th>
                        </tr>
                    </thead>
                    <tbody>
                    {carrito.map((item, index) => (
                        
                            <tr key = {index}>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>{item.description}</td>
                                <td>{item.rating}</td>
                                <td>{item.price}</td>
                                <td>{item.qty * item.price}</td>
                                <td><button className="btn btn-succes" onClick={() => {this.add(index, 1)}}>+</button></td>
                                <td><button className="btn btn-danger" onClick={() => this.add(index, -1)}>-</button></td>
                            </tr>
                        
                    ))}
                    </tbody>
                </table>
            </div>
        )}
    }
}
