import React from "react";
import { Route, Routes } from "react-router-dom";
import Storefront from "../pages/Storefront/Storefront";
import Checkout from "../pages/Checkout/Checkout";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import ProductGallery from "../pages/ProductGallery/ProductGallery";
import PreProduct from "../pages/ProductDetail";
import PrdDetail from "../pages/ProductDetail/ProductDetail1";
//import Layout from "../Layout";
import List from "../components/SeasonalProduct";

function RouterProps() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Storefront />} />
        <Route path="product" element={<PreProduct />}>
          <Route index element={<List />} />
          <Route path=":id" element={<PrdDetail />} />
        </Route>
        <Route path="products" element={<ProductGallery />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default RouterProps;
