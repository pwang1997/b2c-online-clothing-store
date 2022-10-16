import { Route } from 'react-router-dom';
import Admin from "../pages/Admin";
import AddProduct from "../pages/Admin/AddProduct";
import FindAllProducts from "../pages/Admin/FindAllProducts";

const AdminRoutes = [
    <Route key="admin" path="/admin" element={<Admin/>}/>,
    <Route key="add-product" path="/admin/add-product" element={<AddProduct/>}/>,
    <Route key="find-all" path="/admin/find-all" element={<FindAllProducts/>}/>
];

export default AdminRoutes;