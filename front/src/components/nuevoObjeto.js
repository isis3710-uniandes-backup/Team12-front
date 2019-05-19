import React, {Component} from 'react';
import '../App.css';
import {FormattedMessage } from 'react-intl';
import {Redirect, NavLink} from 'react-router-dom';
import ApiHelper from './ApiHelper';

var user = JSON.parse(localStorage.getItem('user'));
var route = (navigator.language.startsWith("es"))?'http://localhost:3001/categories':'http://localhost:3001/categories-en';
var done = false;

export default class Vender extends Component{
    
    api = new ApiHelper();

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price:'',
            categoryID:'',
            description:'',
            categories: [],
            subcategories:[]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        fetch(route).then(
            response => response.json()
        ).then(
            data => {
                this.setState({
                    categories : data
                });
            }
        ).catch(error => {
            console.log(error);
        })
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
        done=true;
        this.api.createObject({ 
        // TODO: Reemplazar esto por los atributos del objeto
            "name": this.state.name,
            "lastname": this.state.lastname,
            "dni": this.state.dni,
            "age": this.state.age,
            "phone": this.state.phone,
            "address": this.state.address,
            "city_id": this.state.city_id,
            "email": this.state.email,
            "password": this.state.password
        })
        .then(res => {
            // TODO: Quitar los alerts por algo más bello
            if (!res) {
                return alert("Sorry, unable to update user");
            }
            alert('Object created successfully');
            this.props.history.push("/");
        })
        .catch(error => {
            console.log(error);
            alert(error);
        });
    }

    render() {
        if(done){
            return (<Redirect to="/"/>);
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