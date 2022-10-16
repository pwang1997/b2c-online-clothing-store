import { Route } from 'react-router-dom';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default [
    <Route path="/sign-in" element={<SignIn/>}/>,
    <Route path="/sign-up" element={<SignUp/>}/>
];