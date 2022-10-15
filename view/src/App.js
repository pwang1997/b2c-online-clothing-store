import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";

// pages
import Header from "./components/Header/Header";
import Storefront from "./pages/Storefront/Storefront";
import Checkout from "./pages/Checkout/Checkout";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ProductGallery from "./pages/ProductGallery/ProductGallery";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import PreProduct from "./pages/ProductDetail";
//import Layout from "../Layout";
import List from "./components/SeasonalProduct";




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* todo: add product detail link */}
        <Route index element={<Storefront />} />
        {/* <Route path="product" element={<PreProduct />}>
  <Route index element={<List />} />
          <Route path=":id" element={<PrdDetail />} />
        </Route> */}
        <Route path="products" element={<ProductGallery />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="checkout" element={<Checkout />} />

      </Routes>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;