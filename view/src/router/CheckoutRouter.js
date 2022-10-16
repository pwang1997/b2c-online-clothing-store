import { Route } from 'react-router-dom';
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Checkout from "../pages/Checkout/Checkout";
import CheckoutSuccess from "../pages/Checkout/CheckoutSuccess";

export default [
    <Route path="/cart" element={<ShoppingCart/>}/>,
    <Route path="/checkout" element={<Checkout/>}/>,
    <Route path="/checkoutSuccess" element={<CheckoutSuccess/>}/>
];