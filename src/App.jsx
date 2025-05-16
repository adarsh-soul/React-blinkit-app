import React from 'react';
import VegItems from './VegItems';
import NonVegItems from './NonVegItems';
import FruitsAndVegetables from './FruitsAndVegetables';
import DairyProducts from './DairyProducts';
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Orders from './Orders';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import {   useSelector } from 'react-redux';
import Home from './Home';
import Cart from './Cart';


function App() {
  let cartObject=useSelector(globalstate=>globalstate.cart);
  let totalCartCount=cartObject.reduce((count,item)=>(count+item.quantity),0);
  return (
    <>
      <BrowserRouter>
        <header className="header">
          <div className="header-content">
            <h1 className="project-name">Blink It</h1>
            <nav className="navbar">
              <Link to="/home" className="nav-link">Home</Link>
              <Link to="/veg" className="nav-link">&#x1F331;Veg</Link>
              <Link to="/non-veg" className="nav-link">&#x1F357;Non-Veg</Link>
              <Link to="/fruits-vegetables" className="nav-link">&#x1F34E;Fruits</Link>
              <Link to="/dairy-products" className="nav-link">&#x1F95B;Milk</Link>
              <Link to="/cart-items" className="nav-link">&#x1F6D2;Cart ({totalCartCount})</Link>
              <Link to="/orders" className="nav-link">&#x1F6CD;Orders</Link>
              <Link to="/About-us" className="nav-link">&#x1F30D;AboutUs</Link>
              <Link to="/Contact-us" className="nav-link">&#x260E;ContactUs</Link>
            
            </nav>
          </div>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/veg" element={<VegItems />} />
            <Route path="/non-veg" element={<NonVegItems />} />
            <Route path="/fruits-vegetables" element={<FruitsAndVegetables />} />
            <Route path="/dairy-products" element={<DairyProducts />} />
            <Route path="/cart-items" element={<Cart/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/About-us" element={<AboutUs/>}/>
            <Route path="/Contact-us" element={<ContactUs/>}/>
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2025 Blink it. All rights reserved.</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
