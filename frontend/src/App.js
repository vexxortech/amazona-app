import React from 'react';
import {BrowserRouter , Route } from 'react-router-dom';

import './App.css';
import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {

const openMenu = ()=>{
  document.querySelector(".sidebar").classList.add("open");
}
const closeMenu = ()=>{
   document.querySelector(".sidebar").classList.remove("open");
}


  return (
    
   <BrowserRouter>

     <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="index.html">amazona</a>
            </div> 
            
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>

            </div>  
        </header>

        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>


            <ul className="category">
              
                <li>
                    <a href="index.html">1/12 scale models</a>
                </li>
                <li>
                    <a href="index.html">1/18 scale models</a>
                </li>
                <li>
                    <a href="index.html">1/24 scale models</a>
                </li>
                <li>
                    <a href="index.html">1/32 scale models</a>
                </li>
                <li>
                    <a href="index.html">1/36 scale models</a>
                </li>
                <li>
                    <a href="index.html">1/64 scale models</a>
                </li>
                
            </ul>
    </aside>
        <main className="main">
            <div className="content">

                <Route path="/products/:id" component={ProductScreen} />
                <Route path="/" exact={true}component={HomeScreen   } />

                <ul className="products">
                  {
                    data.products.map(product =>
                      <li key={product.name}>
                        <div className="product">
                            <img className="product-image" src={product.image} alt="product"/>
                            <div className="product-name"><a href="product.html">{product.name}</a></div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="product-rating">{product.rating} Sarts ({product.numReviews} reviews)</div>
                        </div>
                    </li>)
                  }

                </ul>
               </div>
            </main>
            <footer className="footer">
                All right reserved.
            </footer>   
        </div>
       </BrowserRouter>
  );
}

export default App;
