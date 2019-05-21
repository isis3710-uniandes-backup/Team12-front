import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import Pie from './Pie';
import ReactDOM from 'react-dom';

var route = (navigator.language.startsWith("es"))?'http://52.3.50.151:3001/categories':'http://52.3.50.151:3001/categories-en';


export default class CategoryList extends Component{
    constructor(props){
        super(props);
        this.state={
            categories:[],
            items: []
        }
    }
    componentDidUpdate(){
        this.renderpiecharts()
    }
    componentDidMount(){
        this.setState(prevState=>prevState)
    }
    componentWillMount(){
        if("lista" in window.localStorage){
            let categorias = JSON.parse(window.localStorage.getItem("lista"))
            let objs = [];
            for (const cat of categorias) {
                let act = cat['objects'];
                for (const obj of act) {
                    objs.push(obj);
                }
            }
            this.setState({
                categories:categorias,
                items:objs
            })    
        }
        else{
            if(navigator.onLine){
            
                fetch(route).then(
                    response => response.json()
                ).then(
                    
                    data => {
                        this.setState({
                            categories : data
                        });
                        window.localStorage.setItem("lista", JSON.stringify(data))

                        fetch('http://52.3.50.151:3001/objetos').then(
                            response => response.json()
                        ).then(
                            data => {
                                this.setState((prevState)=>({
                                    categories:prevState.categories,
                                    items : data
                                }));
                            }
                        ).catch(error => {
                            console.log(error);
                        });
                        
                    }
                ).catch(error => {
                    console.log(error);
                });
            }
        }
    }


    renderpiecharts(){
        let canvas = ReactDOM.findDOMNode(this.refs['Canvas']);
        let data = [];
        for (const cat in this.state.categories) {
            let numact = 0;
            for (const item of this.state.items) {
                if(item['category_id']===this.state.categories[cat]["id"]){
                    numact++;
                }
            }
            data.push(numact);
        }
        //Dibujar
        let width = canvas.getBoundingClientRect()['width'];
        let height = canvas.getBoundingClientRect()['height'];
        let minViewportSize = Math.min(width, height);
        let radius = (minViewportSize * .6) / 2;
        
        let x =  width/3 ;
        let y = radius*1.1;
        let comp = 
            <Pie x={x} y={y} innerRadius={radius * .35} outerRadius={radius} cornerRadius={7} padAngle={.02} data={data} categories={this.state.categories}/>;
        ReactDOM.render(comp,canvas)
    }


    renderCategory(cat, index) {
            var arr = cat.subcategories;
            var lista = (typeof (arr) != undefined && arr !=null && (Array.isArray(arr) && arr.length) )?(
                <li  key = {index} style={{fontSize:"22px"}} >
                    <NavLink to={`/categories/${cat.id}`} style={{color:"#0170e0"}}>{cat.name}</NavLink>
                    <ul style={{listStyleType:"none"}}>
                        {cat.subcategories.map((subcat, index) => (
                            <li key = {index} style={{fontSize:"15px", paddingLeft:"2em"}}>
                                <NavLink to= {`/cat/${cat.id}/subcategories/${subcat.id}`} style={{color:"#0170e0"}}>
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
            <ul style={{columns:2, listStyleType:"none"}}>
                {this.state.categories.map((cat, index) => this.renderCategory(cat, index))}
            </ul>
        );
    }
    renderSVG(){
        let width = window.innerWidth;
        
        return (
        <svg ref="Canvas" width={width*0.7} height={width*0.7}/>
        );
    }
    
    render(){
        return (
            <div className = "container" style={{paddingBottom:"2em", paddingTop:"2em"}}>
                <h1 style={{textDecoration:"underline"}}><FormattedMessage id="catHeader"/></h1>
                {this.renderCategories()}
                <hr/>
                <h2 style={{textAlign:"center"}}><FormattedMessage id="d3head"/></h2>
                <br/>
                <p style={{textAlign:"center", color:"black"}}><FormattedMessage id="d3guide"/></p>
                {navigator.onLine?this.renderSVG():<FormattedMessage id="no-conn"/>}
            </div>
        );
    }
}