import React, { Component } from 'react';
import '../App.css'
import ApiHelper from './ApiHelper';
import { FormattedMessage } from 'react-intl';


export default class Item extends Component {
    api = new ApiHelper();
    route = (navigator.language.startsWith("es")) ? 'http://52.3.50.151:3001/objetos/' + this.props.match.params.itemID : 'http://52.3.50.151:3001/objetos-en/' + this.props.match.params.itemID
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }

    componentWillMount() {
        if("lista" in window.localStorage){
            let cats = JSON.parse(window.localStorage.getItem("lista"))
            for (const cat of cats){
                for(const obj of cat['objects']){
                    if(obj.id === this.props.match.params.itemID){
                        this.setState({
                            item:obj
                        })
                        break;
                    }
                }
            }
        }
        else{
            if(navigator.onLine){
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
        }

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
                <span className='non-availablility'>
                    <FormattedMessage id="noAvailableTag" />
                </span>
            )
        }
    }
    handleClick() {
        (navigator.language.startsWith("es")) ? alert("Para agregar este y otros productos, ve a la pantalla principal y presiona el botón +") : alert("Please go back to the home page and add any product you want with the + button")
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
                    
                </div>
            </div>
        );
    }
}
