
import React, { Component } from 'react';
import { Route, HashRouter } from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import updateUser from './components/updateUser';
import './App.css'
import prestamo from './components/prestamo';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/updateUser" component={updateUser}/>
            <Route path="/prestamos" component={prestamo}/>
            <Footer/>
        </HashRouter>
      </div>

    );
  }
}

export default App;
