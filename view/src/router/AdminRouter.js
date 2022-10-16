import { Route } from 'react-router-dom';
import Admin from "../pages/Admin";
import AddProduct from "../pages/Admin/AddProduct";
import FindAllProducts from "../pages/Admin/FindAllProducts";

export default [
    <Route path="/admin" element={<Admin/>}/>,
    <Route path="/admin/add-product" element={<AddProduct/>}/>,
    <Route path="/admin/find-all" element={<FindAllProducts/>}/>
];