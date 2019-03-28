
import React, { Component } from 'react';

import Header from './components/header'
import Footer from './components/footer';
//import './App.css';
class App extends Component {
  render() {
    var datos = {
      "name":"Monda",
      "available":true,
      "description":"Lorem ipsumijwofijwjfowijef",
      "price":2300
    }
    //TODO ESTO ES DEL TEMPLATE. SOLO CORRESPONDE A LA PARTE SUPERIOR y navbar
    return (
      <div>
        {/* header */}
        <Header/>
        {/* //header */}	
        {/* //footer */}		
        <Footer/>
      </div>

    );
  }
}

export default App;
