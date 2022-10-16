import { Route } from 'react-router-dom';
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Checkout from "../pages/Checkout/Checkout";
import CheckoutSuccess from "../pages/Checkout/CheckoutSuccess";

const CheckoutRoutes = [
    <Route key="cart" path="/cart" element={<ShoppingCart/>}/>,
    <Route key="checkout" path="/checkout" element={<Checkout/>}/>,
    <Route key="checkout-success" path="/checkoutSuccess" element={<CheckoutSuccess/>}/>
];

export default CheckoutRoutes;