import { Route } from 'react-router-dom';
import ProductDetail from "../pages/ProductDetail";
import ProductGallery from "../pages/ProductGallery";

const ProductRoutes = [
    <Route key="product-detail" path="/product/:id" element={<ProductDetail/>}/>,
    <Route key="products" path="/products/" element={<ProductGallery/>}/>
];

export default ProductRoutes;