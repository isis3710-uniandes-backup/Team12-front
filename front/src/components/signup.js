import React, { Component } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import '../App.css';
import ApiHelper from './ApiHelper';
import {FormattedMessage } from 'react-intl';


export default class SignUp extends Component {

    api = new ApiHelper();

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            dni: '',
            age: '',
            phone: '',
            address: '',
            city_id: '',
            email: '',
            password: '',
            cities: [],
            error:false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        fetch('http://52.3.50.151:3001/cities', {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => this.setState({ cities: data }))
            .catch(error => alert(error));
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
        this.api.signup({
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
                if (!res) {
                    this.setState({error:true})
                }
                localStorage.setItem("user", JSON.stringify(res.data));
                this.props.history.push("/");
                window.location.reload();
            })
            .catch(error => {
                this.setState({
                    password: '',
                    error:true
                });
            });
    }

    render() {
        if (this.api.loggedIn()) {
            return (<Redirect to="/"/>);
        }
        return (
            <div className="login-page">
              <div className="container"> 
                <h3 className="w3ls-title w3ls-title1">
                    <FormattedMessage id="signScreenHead"/>
                </h3>  
                <div className="login-body">
                  <form onSubmit={this.handleSubmit}>
                    <FormattedMessage id="nameHint" defaultMessage="Name">
                        {placeholder =>
                        <input type="text" className="user" name="name" placeholder={placeholder} value={this.state.name} onChange={this.handleInputChange} required />
                        }
                    </FormattedMessage>
                    <FormattedMessage id="LastnameHint" defaultMessage="Lastname">
                        {placeholder =>
                        <input type="text" className="user" name="lastname" placeholder={placeholder} value={this.state.lastname} onChange={this.handleInputChange} required />
                        }
                    </FormattedMessage>
                    <FormattedMessage id="DNIHint" defaultMessage="DNI">
                        {placeholder =>
                        <input type="text" className="user" name="dni" placeholder={placeholder} value={this.state.dni} onChange={this.handleInputChange} required />
                        }
                    </FormattedMessage>
                    <FormattedMessage id="AgeHint" defaultMessage="Age">
                        {placeholder =>
                        <input type="text" className="user" name="age" placeholder={placeholder} value={this.state.age} onChange={this.handleInputChange} required />
                        }
                    </FormattedMessage>
                    <FormattedMessage id="PhoneHint" defaultMessage="Phone number">
                        {placeholder =>
                        <input type="text" className="user" name="phone" placeholder={placeholder} value={this.state.phone} onChange={this.handleInputChange} required />
                        }
                    </FormattedMessage>
                    <FormattedMessage id="addHint" defaultMessage="Address">
                        {placeholder =>
                        <input type="text" className="user" name="address" placeholder={placeholder} value={this.state.address} onChange={this.handleInputChange} required />
                        }
                    </FormattedMessage>
                    
                    <select className="selectpicker form-control" name="city_id" value={this.state.city_id} onChange={this.handleInputChange}>
                            {cityH =>
                            <option value="-1">
                                <FormattedMessage id="cityHint" defaultMessage="City">

                                    {cityH}
                                </FormattedMessage>
                            </option>
                            }
                        
                        {this.state.cities.map((city, index) => <option key={index} value={city.id}>{city.name}</option>)}
                    </select>
                    <hr/>
                    <FormattedMessage id="emailHint" defaultMessage="Email">
                        {placeholder =>
                            <input type="text" className="user" name="email" placeholder={placeholder} value={this.state.email} onChange={this.handleInputChange} required/>}
                    </FormattedMessage>
                    <FormattedMessage id="pwHint" defaultMessage="Password">
                        {placeholder =>
                            <input type="password" name="password" className="lock" placeholder={placeholder} value={this.state.password} onChange={this.handleInputChange} required/>}
                    </FormattedMessage>
                    <FormattedMessage id="submitNew" defaultMessage="Signup">
                        {placeholder => 
                            <input type="submit" value={placeholder}/>}
                    </FormattedMessage>
                    <p style={{color:"red"}}>{this.state.error? ((navigator.language.startsWith("es"))?'Los datos no son válidos, asegúrate de elegir una ciudad y de que los datos son correctos':'Invalid data, make sure you picked a city and your data are correct'):""}</p>
                    <div className="forgot-grid">
                      <div className="forgot">
                        <a href="#">
                        <FormattedMessage id="forgetPw"/>
                        </a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  </form>
                </div>  
                <h6>
                    <FormattedMessage id="yesMember"/> 
                    <NavLink to="/login">
                        <FormattedMessage id="loginLink"/>
                    </NavLink> </h6>  
              </div>
            </div>
        );
    }
}