import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import '../App.css'
import ApiHelper from './ApiHelper';

export default class Header extends Component {
    api = new ApiHelper();
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            categories : []
        }
    }
    
    componentWillMount(){
        fetch('http://localhost:3001/categories').then(
            response => response.json()
        ).then(
            data => {
                console.log(data);
                this.setState({
                    categories : data
                });
            }
        ).catch(error => {
            console.log(error);
        })
    }

    renderCategory(cat, index) {
            var arr = cat.subcategories;
            var lista = (typeof (arr) != undefined && arr !=null && (Array.isArray(arr) && arr.length) )?(
                <li  className = "has-children">
                    <NavLink to="/categories/:idCat">{cat.name}</NavLink>
                    <ul className = "cd-secondary-dropdown is-hidden">
                        <li className="go-back"><a href="#">Menu</a></li>
                        <li className="see-all"><a href="products.html">{`All ${cat.name}`}</a></li>
                        {cat.subcategories.map((subcat, index) => (
                            <li key = {subcat.id}>{subcat.name}</li>
                        ))}
                    </ul>
                </li>
            ):(
                <li><NavLink to = "">{cat.name}</NavLink></li>
            );
        return lista;
    }

    renderCategories() {
        return (
            <ul className="cd-dropdown-content">
                {this.state.categories.map((cat, index) => this.renderCategory(cat, index))}
            </ul>
        );
    }

    handleLogout(event) {
        event.preventDefault();
        if(this.api.loggedIn()) {
            this.api.logout()
            this.setState(this.state)
        }
    }

    render() {
        this.state.categories = Array.from(this.state.categories);
        return(
            <div className="header">
                <div className="w3ls-header">
                    <div className="w3ls-header-right">
                        <ul>
                            <li className="dropdown head-dpdn">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" aria-hidden="true" /> Mi cuenta<span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/login" style={{display: this.api.loggedIn() ? 'none' : 'block'}}>Login</NavLink></li>
                                <li><NavLink to="/signup" style={{display: this.api.loggedIn() ? 'none' : 'block'}}>Sign Up</NavLink></li>
                                <li><NavLink to="/login" style={{display: this.api.loggedIn() ? 'block' : 'none'}}>My Orders</NavLink></li>  
                                <li><a style={{display: this.api.loggedIn() ? 'none' : 'block' }} onClick={this.handleLogout}>Logout</a></li> 
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
                            <h6>Intercambia todo lo que necesites</h6> 
                        </div>	
                        <div className="header-search">
                            <form action="#" method="post">
                            <input type="search" name="Search" placeholder="Busca un producto o servicio..." required />
                            <button type="submit" className="btn btn-default" aria-label="Left Align">
                                <i className="fa fa-search" aria-hidden="true"> </i>
                            </button>
                            </form>
                        </div>
                        <div className="header-cart"> 
                            <div className="cart"> 
                            <form action="#" method="post" className="last"> 
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="display" defaultValue={1} />
                                <button className="w3view-cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
                            </form>  
                            </div>
                            <div className="clearfix"> </div> 
                        </div> 
                        <div className="clearfix"> </div>
                    </div>		
                </div>
                <div className="header-three">
                    <div className="container">
                        <div className="menu">
                            <div className="cd-dropdown-wrapper">
                                <a className="cd-dropdown-trigger" href="#0">Ver categorias</a>
                                <nav className="cd-dropdown"> 
                                    <a href="#0" className="cd-close">Close</a>
                                    {this.renderCategories()}
                                </nav> 
                            </div> 	 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}