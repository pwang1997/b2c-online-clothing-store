import './App.css';
import {Route, Routes} from "react-router-dom";

// pages
import Header from './components/Header';
import Storefront from "./pages/Storefront/Storefront";
import Checkout from "./pages/Checkout/Checkout";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ProductGallery from "./pages/ProductGallery/ProductGallery";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from './pages/Admin';
// context
import {AppContextProvider} from "./context/AppContextProvider";
import AddProduct from "./pages/Admin/AddProduct";
import FindAllProducts from "./pages/Admin/FindAllProducts";
import React from "react";

function App() {

    return (
        <AppContextProvider>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Storefront/>}/>
                    <Route path="/product/" element={<ProductDetail/>}/>
                    <Route path="/products/" element={<ProductGallery/>}/>
                    <Route path="/cart" element={<ShoppingCart/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/add-product" element={<SignUp />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path={"admin/add-product"} element={<AddProduct />} />
                    <Route path={"admin/find-all"} element={<FindAllProducts />} />
                </Routes>
            </div>
        </AppContextProvider>
    );
}

export default App;
