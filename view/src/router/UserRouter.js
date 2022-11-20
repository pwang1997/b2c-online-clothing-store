import { Route } from 'react-router-dom';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import OrderHistory from "../pages/OrderHistory";

const UserRoutes = [
    <Route key="sign-in" path="/sign-in" element={<SignIn/>}/>,
    <Route key="sign-up" path="/sign-up" element={<SignUp/>}/>,
    <Route key="order-history" path="/order-history" element={<OrderHistory />} />
];

export default UserRoutes;