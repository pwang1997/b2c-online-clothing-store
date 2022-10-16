import { Route } from 'react-router-dom';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const UserRoutes = [
    <Route key="sign-in" path="/sign-in" element={<SignIn/>}/>,
    <Route key="sign-up" path="/sign-up" element={<SignUp/>}/>
];

export default UserRoutes;