import React from "react";
import {Route, Routes} from "react-router-dom";
import Storefront from "../pages/Storefront";
import UserRouter from "./UserRouter";
import ProductRouter from "./ProductRouter";
import AdminRouter from "./AdminRouter";
import CheckoutRouter from "./CheckoutRouter";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Storefront/>}/>
            {UserRouter}
            {ProductRouter}
            {CheckoutRouter}
            {AdminRouter}
        </Routes>
    );
}