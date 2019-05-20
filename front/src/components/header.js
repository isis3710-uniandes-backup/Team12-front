import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Link, Route } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';

//import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import ApiHelper from './ApiHelper';



export default class Header extends Component {

    api = new ApiHelper();
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);

    }

    handleLogout(event) {
        event.preventDefault();
        this.api.logout();
    }

    render() {
        var logged = this.api.loggedIn();
        return (
            <div className="header">
                <div className="w3ls-header">
                    <div className="w3ls-header-right">
                        <ul>
                            <li className="dropdown head-dpdn">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" aria-hidden="true" />
                                    <FormattedMessage id="accountBar" />
                                </a>
                                {
                                    logged ?
                                        (<ul className="dropdown-menu">
                                            <li>
                                                <NavLink to="/">
                                                    <FormattedMessage id="historyBar" />
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/updateUser">
                                                    <FormattedMessage id="profEditBar" />
                                                </NavLink>
                                            </li>
                                            <li onClick={this.handleLogout}>
                                                <NavLink to="/">
                                                    <FormattedMessage id="lout" />
                                                </NavLink>
                                            </li>
                                        </ul>)
                                        :
                                        (<ul className="dropdown-menu">
                                            <li>
                                                <NavLink to="/login">
                                                    <FormattedMessage id="logBar" />
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/signup">
                                                    <FormattedMessage id="supBar" />
                                                </NavLink>
                                            </li>
                                        </ul>)
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="header-two">
                    <div className="container">
                        <div className="header-logo">
                            <h1><NavLink to="/"><span>Te</span>lo<i>Presto</i></NavLink></h1>
                            <span>
                                <FormattedMessage id="slogan" />
                            </span>
                        </div>
                        <div className="header-search">
                            <form action="javascript:myFunction(); return false;" aria-label="Left Align">
                                <FormattedMessage id="searchDefault" defaultMessage="Search">
                                    {placeholder => <input type="search" name="Search" style={{ color: "#676767" }} placeholder={placeholder} required aria-label="Left Align" />}
                                </FormattedMessage>
                                <button type="submit" className="btn btn-default" aria-label="Left Align">
                                    <i className="fa fa-search" aria-hidden="true" style={{ color: "black" }}>
                                        <FormattedMessage id="searchBut" />
                                    </i>
                                </button>
                            </form>
                        </div>
                        <div align="right">
                            <NavLink to="/carrito">
                                <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG17.png" width="60" height="60" alt = "cart"/>
                                <FormattedMessage id = "cartBut"/>
                            </NavLink>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="header-three" >
                    <div className="container">
                        <div className="menu">
                            <div className="cd-dropdown-wrapper">
                                <NavLink className="cd-dropdown-trigger" to="/categories">
                                    <FormattedMessage id="categoryMenu" />
                                </NavLink>

                            </div>
                        </div>
                        <div className="menu">
                            <div className="cd-dropdown-wrapper">
                                <NavLink className="cd-dropdown-trigger" to="/ofertas">
                                    <FormattedMessage id="offersListing" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="menu" style={{ display: this.api.loggedIn() ? 'block' : 'none' }}>
                            <div className="cd-dropdown-wrapper">
                                <NavLink className="cd-dropdown-trigger" to="/prestamos">
                                    <FormattedMessage id="prestamos" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="menu" style={{ display: this.api.loggedIn() ? 'block' : 'none' }}>
                            <div className="cd-dropdown-wrapper">
                                <NavLink className="cd-dropdown-trigger" to="/vender">
                                    <FormattedMessage id="sellAct" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
