import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import '../App.css';
import ApiHelper from './ApiHelper';
import { FormattedMessage } from 'react-intl';

export default class updateUser extends Component {

    api = new ApiHelper();

    constructor(props) {
        super(props);
        var user = JSON.parse(localStorage.getItem('user'));
        this.state = {
            name: user.name,
            lastname: user.lastname,
            dni: user.dni,
            age: user.age,
            phone: user.phone,
            address: user.address,
            city_id: user.city_id,
            email: user.email,
            password: '',
            userID: user.id,
            cities: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:3001/cities', {
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
        this.api.updateUser(this.state.userID, {
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
                    return alert("Sorry, unable to update user");
                }
                alert('User updated successfully');
                this.props.history.push("/updateUser");
            })
            .catch(error => {
                console.log(error);
                alert(error);
                this.setState({
                    password: ''
                });
            });
    }

    render() {
        if (!this.api.loggedIn()) {
            return (<Redirect to="/"/>);
        }
        return (
            <div className="login-page">
              <div className="container"> 
                <h1 className="w3ls-title w3ls-title1">
                    <FormattedMessage id="updateData"/>
                </h1>  
                <div className="login-body">
                  <form onSubmit={this.handleSubmit} aria-label="Left Align">
                    <input type="text" className="user" name="name" placeholder="Enter your Name" value={this.state.name} onChange={this.handleInputChange} required aria-label="Left Align"/>
                    <input type="text" className="user" name="lastname" placeholder="Enter your Lastname" value={this.state.lastname} onChange={this.handleInputChange} required aria-label="Left Align"/>
                    <input type="text" className="user" name="dni" placeholder="Enter your DNI" value={this.state.dni} onChange={this.handleInputChange} required aria-label="Left Align"/>
                    <input type="text" className="user" name="age" placeholder="Enter your Age" value={this.state.age} onChange={this.handleInputChange} required aria-label="Left Align"/>
                    <input type="text" className="user" name="phone" placeholder="Enter your Phone" value={this.state.phone} onChange={this.handleInputChange} required aria-label="Left Align"/>
                    <input type="text" className="user" name="address" placeholder="Enter your Address" value={this.state.address} onChange={this.handleInputChange} required aria-label="Left Align"/>
                    <select className="selectpicker form-control" name="city_id" value={this.state.city_id} onChange={this.handleInputChange} aria-label="Left Align">
                        <option value="-1">Select your city</option>
                        {this.state.cities.map((city, index) => <option key={index} value={city.id}>{city.name}</option>)}
                    </select>
                    <hr/>
                    <input type="text" className="user" name="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleInputChange} required disabled aria-label="Left Align"/>
                    <input type="password" name="password" className="lock" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required aria-label="Left Align"/>
                    <input type="submit" defaultValue="Update data!" aria-label="Left Align"/>
                  </form>
                </div>  
              </div>
            </div>
        );
    }
}