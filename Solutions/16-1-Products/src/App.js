import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Products from "./pages/Products";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="">
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route component={NotFound} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
