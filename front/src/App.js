
import React, { Component } from 'react';
import { Route, HashRouter } from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import updateUser from './components/updateUser';
import './App.css'
import Prestamo from './components/prestamo';
import Oferta from './components/oferta';
import Category from './components/category';
import Subcategory from './components/subcategory';
import Item from './components/item';
import CategoryList from './components/categoryList';
import Vender from './components/nuevoObjeto';

class App extends Component {
  /*Para probar lo del carrito puse 
  state={
    cart : []
  };

  myCallback = (dataFromChild) => {
    this.setState({cart : dataFromChild})
  };
  

  tenía las siguientes líneas en el HashRouter
  <Header cart = {this.state.cart}/>
  <Route exact path="/" component={()=><Home callback={this.myCallback}/>} />
  */

  render() {
    return (
      <div role = "main">
        <HashRouter>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/updateUser" component={updateUser}/>
            <Route path="/prestamos" component={Prestamo}/>
            <Route path="/ofertas" component={Oferta}/>
            <Route path="/categories/:categoryID" component={Category}/>
            <Route path="/categories" component={CategoryList}/>
            <Route path="/subcategories/" component={Subcategory}/>
            <Route path="/item/:itemID" component={Item} />
            <Route path="/vender" component={Vender} />
            <Footer/>
        </HashRouter>
      </div>

    );
  }
}

export default App;
