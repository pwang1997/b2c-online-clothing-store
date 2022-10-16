import "./App.css";
import React from "react";

// pages
import Header from "./components/Header";
import Router from "./router";
import Footer from "./components/Footer";
// context
import {AppContextProvider} from "./context/AppContextProvider";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import {CartProvider} from "./context/CartContext";

export default function App() {
    return (
        <AppContextProvider>
            <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
                <CartProvider>
                    <div className="App">
                        <Header/>
                        <Router />
                        <Footer/>
                    </div>
                </CartProvider>
            </PayPalScriptProvider>
        </AppContextProvider>
    );
}