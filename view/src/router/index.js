import React from "react";
import {Route, Routes} from "react-router-dom";
import Storefront from "../pages/Storefront";
import ProductRouter from "./ProductRouter";
import AdminRouter from "./AdminRouter";
import CheckoutRouter from "./CheckoutRouter";
import UserRouter from "./UserRouter";

export default function Router() {
    return (
        <Routes>
            <Route key="index" path="/" element={<Storefront/>}/>
            {UserRouter}
            {ProductRouter}
            {CheckoutRouter}
            {AdminRouter}
        </Routes>
    );
}