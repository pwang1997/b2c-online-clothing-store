import './App.css';
import {useContext} from "react";
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
// context
import {FirebaseUserCollectionContext} from "./context/ContextStorage";

function App() {
    const userCollectionRef = useContext(FirebaseUserCollectionContext);

    return (
        <FirebaseUserCollectionContext.Provider value={userCollectionRef}>
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
                </Routes>
            </div>
        </FirebaseUserCollectionContext.Provider>
    );
}

export default App;
