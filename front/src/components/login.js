import React, { Component } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import '../App.css'
import ApiHelper from './ApiHelper';
import { FormattedMessage } from 'react-intl';

export default class Login extends Component {

    api = new ApiHelper();

    constructor(props) {
        super(props);
        this.state = {
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
        event.preventDefault();
        this.api.login(this.state.email, this.state.password)
            .then(res => {
                if (!res) {
                    return (navigator.language.startsWith("es"))? alert("Las credenciales ingresadas no existen"):alert("Sorry those credentials don't exist!");
                }
                localStorage.setItem("user", JSON.stringify(res.data));
                this.props.history.push("/");
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
                (navigator.language.startsWith("es"))?alert('El correo o la contraseña son incorrectos'):alert('Email or password were incorrect');
                this.setState({
                    password: ''
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
                        <FormattedMessage id="logScreenHead"/>
                    </h3>  
                    <div className="login-body">
                        <form onSubmit={this.handleSubmit} aria-label="Left Align">
                            <FormattedMessage id="emailHint" defaultMessage="Email">
                                {placeholder =>
                                 <input type="text" className="user" name="email" placeholder={placeholder} value={this.state.email} onChange={this.handleInputChange} required aria-label="Left Align"/>}
                            </FormattedMessage>
                            <FormattedMessage id="pwHint" defaultMessage="Password">
                                {placeholder =>
                                 <input type="password" name="password" className="lock" placeholder={placeholder} value={this.state.password} onChange={this.handleInputChange} required aria-label="Left Align"/>}
                            </FormattedMessage>
                            <FormattedMessage id="submitLogin" defaultMessage="Login">
                                {placeholder => 
                                 <input type="submit"  value={placeholder} aria-label="Left Align"/>}
                            </FormattedMessage>
                            <div className="forgot-grid">
                                <div className="forgot">
                                    <a href="#">
                                        <FormattedMessage id="forgetPw"/>
                                    </a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </form>
                    </div>  
                    <h6> 
                        <FormattedMessage id="notMember"/>
                        <NavLink to="/signup">
                            <FormattedMessage id="signUpLink"/>
                        </NavLink>
                    </h6>
                </div>
            </div>
        );
    }
}