import React, { Component } from 'react';

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
        return (
            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Qty.</th>
                            <th scope="col">Description</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Add/Remove</th>
                        </tr>
                    </thead>
                    {carrito.map((item, index) => (
                        <tbody>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>{item.description}</td>
                                <td>{item.rating}</td>
                                <td>{item.price}</td>
                                <td>{item.qty * item.price}</td>
                                <td><button className="btn btn-succes" onClick={() => {this.add(index, 1)}}>+</button></td>
                                <td><button className="btn btn-danger" onClick={() => this.add(index, -1)}>-</button></td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        )
    }
}
