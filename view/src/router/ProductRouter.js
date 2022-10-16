import { Route } from 'react-router-dom';
import ProductDetail from "../pages/ProductDetail";
import ProductGallery from "../pages/ProductGallery/ProductGallery";

export default [
    <Route path="/product/:id" element={<ProductDetail/>}/>,
    <Route path="/products/" element={<ProductGallery/>}/>
];