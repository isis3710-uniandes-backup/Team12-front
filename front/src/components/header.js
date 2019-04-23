import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

//import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import ApiHelper from './ApiHelper';

var route = (navigator.language.startsWith("es")) ? 'http://localhost:3001/categories' : 'http://localhost:3001/categories-en';


export default class Header extends Component {

    api = new ApiHelper();
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            categories: []
        }
    }

    componentWillMount() {
        fetch(route).then(
            response => response.json()
        ).then(
            data => {
                this.setState({
                    categories: data
                });
            }
        ).catch(error => {
            console.log(error);
        })
    }

    renderCategory(cat, index) {
        var arr = cat.subcategories;
        var lista = (typeof (arr) != undefined && arr != null && (Array.isArray(arr) && arr.length)) ? (
            <li key={index} className="has-children">
                <NavLink to={`/categories/${cat.id}`}>{cat.name}</NavLink>
                <ul className="cd-secondary-dropdown is-hidden">
                    <li className="go-back"><a href="#">Menu</a></li>
                    <li className="see-all"><NavLink to={`/categories/${cat.id}`}>{`All ${cat.name}`}</NavLink></li>
                    {cat.subcategories.map((subcat, index) => (
                        <li key={subcat.id}><NavLink to={`/categories/${cat.id}/subcategories/${subcat.id}`}>{subcat.name}</NavLink></li>
                    ))}
                </ul>
            </li>
        ) : (
                <li key={index}><NavLink to={`/categories/${cat.id}`}>{cat.name}</NavLink></li>
            );
        return lista;
    }

    renderCategories() {
        return (
            <ul >
                {this.state.categories.map((cat, index) => this.renderCategory(cat, index))}
            </ul>
        );
    }

    handleLogout(event) {
        event.preventDefault();
        this.api.logout();
        this.setState(this.state);
    }

    render() {
        this.state.categories = Array.from(this.state.categories);
        return (
            <div className="header">
                <div className="w3ls-header">
                    <div className="w3ls-header-right">
                        <ul>
                            <li className="dropdown head-dpdn">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" aria-hidden="true" />
                                    <FormattedMessage id="accountBar" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/login" style={{ display: this.api.loggedIn() ? 'none' : 'block' }}>
                                        <FormattedMessage id="logBar" />
                                    </NavLink></li>
                                    <li><NavLink to="/signup" style={{ display: this.api.loggedIn() ? 'none' : 'block' }}>
                                        <FormattedMessage id="supBar" />
                                    </NavLink></li>
                                    <li><NavLink to="/" style={{ display: this.api.loggedIn() ? 'block' : 'none' }}>
                                        <FormattedMessage id="historyBar" />
                                    </NavLink></li>
                                    <li><NavLink to="/updateUser" style={{ display: this.api.loggedIn() ? 'block' : 'none' }}>
                                        <FormattedMessage id="profEditBar" />
                                    </NavLink></li>
                                    <li onClick={this.handleLogout} style={{ display: this.api.loggedIn() ? 'block' : 'none' }}>
                                        <NavLink to="/">
                                            <FormattedMessage id="lout" />
                                        </NavLink>
                                    </li>
                                </ul>
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
                        <div className="header-cart">
                            <div className="cart">
                                <form action="javascript:myFunction(); return false;" >
                                    <input type="hidden" name="cmd" defaultValue="_cart" />
                                    <input type="hidden" name="display" defaultValue={1} />
                                    <button className="w3view-cart" type="submit" style={{ backgroundColor: "#0170e0" }} name="submit" value>
                                        <i className="fa fa-cart-arrow-down" aria-hidden="true" />
                                        <span style={{ color: "white" }}><FormattedMessage id="cartBut" /></span>
                                    </button>
                                </form>
                            </div>
                            <div className="clearfix"> </div>
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
                        <div className="menu">
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
