import './App.css';
import {Route, Routes} from "react-router-dom";

// pages
import Header from './components/Header';
import Storefront from "./pages/Storefront/Storefront";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutSuccess from "./pages/Checkout/CheckoutSuccess";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ProductGallery from "./pages/ProductGallery/ProductGallery";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// context
import {AppContextProvider} from "./context/AppContextProvider";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";

function App() {

    return (
        <AppContextProvider>
            <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Storefront/>}/>
                        <Route path="/product/" element={<ProductDetail/>}/>
                        <Route path="/products/" element={<ProductGallery/>}/>
                        <Route path="/cart" element={<ShoppingCart/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/checkoutSuccess" element={<CheckoutSuccess/>}/>
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                    </Routes>
                </div>
            </PayPalScriptProvider>
        </AppContextProvider>
    );
}

export default App;
