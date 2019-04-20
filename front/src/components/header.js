import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import {FormattedMessage } from 'react-intl';
/*import $ from 'jquery';
import menuAim from 'jquery';
import jquery from 'jquery';
*/

import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import ApiHelper from './ApiHelper';

var route = (navigator.language.startsWith("es"))?'http://localhost:3001/categories':'http://localhost:3001/categories-en';


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
        fetch(route).then(
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
                <li  key = {index} className = "has-children">
                    <NavLink to={`/categories/${cat.id}`}>{cat.name}</NavLink>
                    <ul className = "cd-secondary-dropdown is-hidden">
                        <li className="go-back"><a href="#">Menu</a></li>
                        <li className="see-all"><NavLink to={`/categories/${cat.id}`}>{`All ${cat.name}`}</NavLink></li>
                        {cat.subcategories.map((subcat, index) => (
                            <li key = {subcat.id}><NavLink to= {`/categories/${cat.id}/subcategories/${subcat.id}`}>{subcat.name}</NavLink></li>
                        ))}
                    </ul>
                </li>
            ):(
                <li key = {index}><NavLink to = {`/categories/${cat.id}`}>{cat.name}</NavLink></li>
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
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" aria-hidden="true" /> 
                                <FormattedMessage id="accountBar"/>
                                <span className="caret" />
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/login" style={{display: this.api.loggedIn() ? 'none' : 'block'}}>
                                    <FormattedMessage id="logBar"/>
                                </NavLink></li>
                                <li><NavLink to="/signup" style={{display: this.api.loggedIn() ? 'none' : 'block'}}>
                                    <FormattedMessage id="supBar"/>
                                </NavLink></li>
                                <li><NavLink to="/" style={{display: this.api.loggedIn() ? 'block' : 'none'}}>
                                    <FormattedMessage id="historyBar"/>
                                </NavLink></li> 
                                <li><NavLink to="/updateUser" style={{display: this.api.loggedIn() ? 'block' : 'none'}}>
                                    <FormattedMessage id="profEditBar"/>
                                </NavLink></li>  
                                <li><a style={{display: this.api.loggedIn() ? 'block' : 'none' }} onClick={this.handleLogout}>
                                    <FormattedMessage id="lout"/>
                                </a></li> 
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
                            <h6>
                                <FormattedMessage id="slogan"/>
                            </h6> 
                        </div>	
                        <div className="header-search">
                            <form action="#" method="post">
                                <FormattedMessage id="searchDefault" defaultMessage="Search">
                                    {placeholder => <input type="search" name="Search" placeholder={placeholder} required/>}
                                </FormattedMessage>
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
                                <a className="cd-dropdown-trigger" href="javascript:void(0);">
                                    <FormattedMessage id="categoryMenu"/>
                                </a>
                                <nav className="cd-dropdown"> 
                                    <a href="javascript:void(0);" className="cd-close">
                                        <FormattedMessage id="closeMenu"/>
                                    </a>
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
/*jquery(document).ready(function($){
	//open/close mega-navigation
	$('.cd-dropdown-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//close meganavigation
	$('.cd-dropdown .cd-close').on('click', function(event){
		event.preventDefault();
		console.log("Exito")
		toggleNav();
	});

	//on mobile - open submenu
	$('.has-children').children('a').on('click', function(event){
		//prevent default clicking on direct children of .has-children 
		event.preventDefault();
		var selected = $(this);
		selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
	});

	//on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
	var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
	$('.cd-dropdown-content').menuAim({
        activate: function(row) {
        	$(row).children().addClass('is-active').removeClass('fade-out');
        	if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
        	$(row).children().removeClass('is-active');
        	if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
        		$('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
        		$(row).children('ul').addClass('fade-out')
        	}
        },
        exitMenu: function() {
        	$('.cd-dropdown-content').find('.is-active').removeClass('is-active');
        	return true;
        },
        submenuDirection: submenuDirection,
    });

	//submenu items - go back link
	$('.go-back').on('click', function(){
		var selected = $(this),
			visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
		selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
	}); 

	function toggleNav(){
		var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
		$('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
		$('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
		if( !navIsVisible ) {
			$('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.has-children ul').addClass('is-hidden');
				$('.move-out').removeClass('move-out');
				$('.is-active').removeClass('is-active');
			});	
		}
	}

	 
});*/