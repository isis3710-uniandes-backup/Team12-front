import React, {Component} from 'react';
//import '../App.css'
import ApiHelper from './ApiHelper';
import { FormattedMessage } from 'react-intl';


export default class Item extends Component{
    api = new ApiHelper();
   
    renderAvailability(){
        if(this.props.data.available === true){
            return (
                <span className = 'availablility'>
                    <FormattedMessage id="availableTag"/>

                </span>
            );
        }
        else{
            return (
                <span className = 'non-availability'>
                    <FormattedMessage id="noAvailableTag"/>

                </span>
            )
        }
    }
    handleClick(){
        (navigator.language.startsWith("es"))?alert("Gracias por pedir este item"):alert("Thank you for buying this item")
    }
    render(){
        return(
            <div className ="item-detail">
            
                <div className = "title">
                    <h1>{this.props.data.name}</h1>
                </div>
                <div className = "item-info">
                    <span>{this.props.data.price}</span>
                    {this.renderAvailability}
                    <p>{this.props.data.description}</p>
                </div>
                <div>
                    <button onClick={this.handleClick}>
                        {this.props.data.available ? <FormattedMessage id="orderAv"/> :<FormattedMessage id="orderUnAv"/> }
                    </button>
                </div>
            </div>
        );
    }
}
