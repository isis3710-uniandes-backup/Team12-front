import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import '../App.css'

export default class SignUp extends Component {
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
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="login-page">
              <div className="container"> 
                <h3 className="w3ls-title w3ls-title1">Create your account</h3>  
                <div className="login-body">
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" className="user" name="name" placeholder="Enter your Name" value={this.state.name} onChange={this.handleInputChange} required />
                    <input type="text" className="user" name="lastname" placeholder="Enter your Lastname" value={this.state.lastname} onChange={this.handleInputChange} required />
                    <input type="text" className="user" name="dni" placeholder="Enter your DNI" value={this.state.dni} onChange={this.handleInputChange} required />
                    <input type="text" className="user" name="age" placeholder="Enter your Age" value={this.state.age} onChange={this.handleInputChange} required />
                    <input type="text" className="user" name="phone" placeholder="Enter your Phone" value={this.state.phone} onChange={this.handleInputChange} required />
                    <input type="text" className="user" name="address" placeholder="Enter your Address" value={this.state.address} onChange={this.handleInputChange} required />
                    <select className="selectpicker form-control" name="city_id" value={this.state.city_id} onChange={this.handleInputChange}>
                        <option value="-1">Select your city</option>
                        {this.state.cities.map((city, index) => <option key={index} value={city.id}>{city.name}</option>)}
                    </select>
                    <hr/>
                    <input type="text" className="user" name="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleInputChange} required />
                    <input type="password" name="password" className="lock" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required />
                    <input type="submit" defaultValue="Sign Up " />
                    <div className="forgot-grid">
                      <div className="forgot">
                        <a href="#">Forgot Password?</a>
                      </div>
                      <div className="clearfix"> </div>
                    </div>
                  </form>
                </div>  
                <h6>Already have an account? <NavLink to="/login">Login Now »</NavLink> </h6>  
              </div>
            </div>
        );
    }
}