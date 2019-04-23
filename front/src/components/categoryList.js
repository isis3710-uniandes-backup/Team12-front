import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

var route = (navigator.language.startsWith("es"))?'http://localhost:3001/categories':'http://localhost:3001/categories-en';


export default class CategoryList extends Component{
    constructor(props){
        super(props);
        this.state={
            categories:[]
        }
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

    renderCategory(cat, index) {
            var arr = cat.subcategories;
            var lista = (typeof (arr) != undefined && arr !=null && (Array.isArray(arr) && arr.length) )?(
                <li  key = {index} style={{fontSize:"22px"}} >
                    <NavLink to={`/categories/${cat.id}`} style={{color:"#0170e0"}}>{cat.name}</NavLink>
                    <ul style={{listStyleType:"none"}}>
                        {cat.subcategories.map((subcat, index) => (
                            <li key = {index} style={{fontSize:"15px", paddingLeft:"2em"}}>
                                <NavLink to= {`/categories/${cat.id}/subcategories/${subcat.id}`} style={{color:"#0170e0"}}>
                                    {subcat.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
            ):(
                <li key = {index} style={{fontSize:"22px"}}>
                    <NavLink to = {`/categories/${cat.id}`} style={{color:"#0170e0"}}>{cat.name}</NavLink>
                </li>
            );
        return lista;
    }

    renderCategories() {
        return (
            <ul style={{columns:2}}>
                {this.state.categories.map((cat, index) => this.renderCategory(cat, index))}
            </ul>
        );
    }
    render(){
        return (
            <div className = "container" style={{paddingBottom:"2em", paddingTop:"2em"}}>
                <h1><FormattedMessage id="catHeader"/></h1>
                <hr/>
                {this.renderCategories()}
            </div>
        );
    }
}