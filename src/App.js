import React from 'react';
import {Switch,Route} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Cart from "./components/Cart"
import Default from "./components/Default"
import Details from "./components/Details"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import ProductList from "./components/ProductList"
import Modal from './components/Modal'
import AboutUs from './components/AboutUs';
function App() {//burası asıl projede renderli syntaxlı
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
