import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../App.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        alert('A name was submitted: ' + this.state.email + ' - ' + this.state.password + ' - ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <div className="login-page">
              <div className="container"> 
                <h3 className="w3ls-title w3ls-title1">Create your account</h3>  
                <div className="login-body">
                  <form action="#" method="post">
                    <input type="text" className="user" name="name" placeholder="Enter your Name" required />
                    <input type="text" className="user" name="email" placeholder="Enter your email" required />
                    <input type="password" name="password" className="lock" placeholder="Password" required />
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