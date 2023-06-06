import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"


import {  ProductProvider } from "./contexts/ProductContext";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { FilterProvider } from "./contexts/FilterContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <ProductProvider>
        <FilterProvider>
        <CartProvider>
        <App />
        </CartProvider>
        </FilterProvider>
      </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
