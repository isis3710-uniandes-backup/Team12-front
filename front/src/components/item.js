import React, { Component } from 'react';
import '../App.css'
import ApiHelper from './ApiHelper';
import { FormattedMessage } from 'react-intl';


export default class Item extends Component {
    api = new ApiHelper();

    constructor(props) {
        super(props);
        this.state = {
            item: {},
            route: (navigator.language.startsWith("es")) ? 'http://localhost:3001/objetos/' + this.props.match.params.itemID : 'http://localhost:3001/objetos-en/' + this.props.match.params.itemID

        }
    }

    componentWillMount() {

        fetch(this.state.route).then(
            response => response.json()
        ).then(
            data => {
                this.setState({
                    item: data
                });
            }
        ).catch(error => {
            console.log(error);
        });

    }

    renderAvailability() {
        if (this.state.item.available === true) {
            return (
                <span className='availablility'>
                    <FormattedMessage id="availableTag" />
                </span>
            );
        }
        else {
            return (
                <span className='non-availability'>
                    <FormattedMessage id="noAvailableTag" />
                </span>
            )
        }
    }
    handleClick() {
        (navigator.language.startsWith("es")) ? alert("Gracias por pedir este item") : alert("Thank you for buying this item")
    }
    handleClick2() {
        (navigator.language.startsWith("es")) ? alert("Gracias por pedir este item") : alert("Thank you for buying this item")
    }
    render() {
        return (
            <div className="container">
                <div className="title" style={{ textAlign: "center" }}>
                    <br />
                    <h1>{this.state.item.name}</h1>
                </div>
                <div className="item-info">
                    <h2>
                        <FormattedMessage id="itemInfo" />
                    </h2>
                    <span>
                        <FormattedMessage id="tItemPrice" />
                        :
                        {this.state.item.price}

                    </span>
                    {this.renderAvailability()}
                    <p>{this.state.item.description}</p>
                </div>
                <div className="botones">
                    <button type="button" className="btn btn-primary" style={{ marginLeft: "10px", fontSize: "12" }} onClick={this.handleClick}>
                        {this.state.item.available ? <FormattedMessage id="orderAv" /> : <FormattedMessage id="orderUnAv" />}
                    </button>
                    <button type="button" className="btn btn-primary" style={{ marginLeft: "10px", fontSize: "12" }} onClick={this.handleClick2}>
                        <FormattedMessage id="sellerProf" />
                    </button>
                </div>
            </div>
        );
    }
}
