import React, {Component} from 'react';
import '../App.css';
import {FormattedMessage } from 'react-intl';
import {Redirect, NavLink} from 'react-router-dom';
import ApiHelper from './ApiHelper';

var user = JSON.parse(localStorage.getItem('user'));
var route = (navigator.language.startsWith("es"))?'http://52.3.50.151:3001/categories':'http://52.3.50.151:3001/categories-en';

export default class Vender extends Component{
    
    api = new ApiHelper();

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price:0,
            categoryID:'',
            description:'',
            categories: [],
            subcategories:[],
            done:false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        if("lista" in window.localStorage){
            let categorias = JSON.parse(window.localStorage.getItem("lista"))
            this.setState({
                categories:categorias,
            })    
        }
        else{
            if(navigator.onLine){
                fetch(route).then(
                    response => response.json()
                ).then(
                    data => {
                        this.setState({
                            categories : data
                        });
                        window.localStorage.setItem("lista", JSON.stringify(data))
                    }
                ).catch(error => {
                    console.log(error);
                });
            }
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        let obj = { 
            "name": this.state.name,
            "price": this.state.price,
            "category_id": this.state.categoryID,
            "description": this.state.description,
            "seller_id": user.id,
            "available":true
        }
        this.api.createObject(obj)
        .then(res => {
            // TODO: Quitar los alerts por algo más bello
            if (!res) {
                return alert("Sorry, unable to update user");
            }
            this.setState({done:true})            
            setTimeout(
                ()=>{
                    this.props.history.push("/");
                    window.localStorage.removeItem("lista")
                }, 6000
            )
            
        })
        .catch(error => {
            console.log(error);
            alert(error);
        });
    }

    render() {
        if(this.state.done){
            return (<h1 style={{textAlign:"center"}}><FormattedMessage id = "success"/></h1>);
        }
        return(
        <div className="login-page">
            <div className="container"> 
                <h1 className="w3ls-title w3ls-title1">
                    <FormattedMessage id="sellAct"/>
                </h1>  
                <div className="login-body">
                    <form onSubmit={this.handleSubmit} aria-label="Left Align">
                    <FormattedMessage id="prodNameHint" defaultMessage="Product Name">
                        {placeholder =>
                        <input type="text" className="user" name="name" placeholder={placeholder} value={this.state.name} onChange={this.handleInputChange} required aria-label="Left Align"/>
                        }
                    </FormattedMessage>
                    <FormattedMessage id="prodPriceHint" defaultMessage="Product price">
                        {placeholder =>
                        <input type="text" className="user" name="price" placeholder={placeholder} value={this.state.price} onChange={this.handleInputChange} required aria-label="Left Align"/>
                        }
                    </FormattedMessage>
                    <FormattedMessage id="prodDescHint" defaultMessage="Description">
                        {placeholder =>
                        <input type="text" className="user" name="description" placeholder={placeholder} value={this.state.description} onChange={this.handleInputChange} required aria-label="Left Align"/>
                        }
                    </FormattedMessage>
                    
                    <select className="selectpicker form-control" name="categoryID" value={this.state.categoryID} onChange={this.handleInputChange} aria-label="Left Align">
                        <FormattedMessage id="catPicker" defaultMessage="Categories">
                            {cityH =>
                            <option value="-1">
                                {cityH}
                            </option>
                            }
                        </FormattedMessage>
                        {this.state.categories.map((cat, index) => <option key={index} value={cat.id}>{cat.name}</option>)}
                    </select>
                    
                    <hr/>
                    
                    <FormattedMessage id="submitNewObj" defaultMessage="Done">
                        {placeholder => 
                            <input type="submit" value={placeholder} aria-label="Left Align"/>}
                    </FormattedMessage>
                    </form>
                </div>  
            </div>
        </div>);
    }
        
}