import Typography from "@mui/material/Typography";
import ProductCard from "../../components/ProductCard/ProductCard";
import {Fragment, useEffect, useState} from "react";
import {useFirebaseProductCollection} from "../../context/FirebaseContext";
import {useLocation} from "react-router-dom";
import {fetchAllProductsService, fetchProductsByProductNameService, fetchProductsByCategoryService} from "../../services/ProductService";

const ProductGallery = () => {
    const productCollectionRef = useFirebaseProductCollection();

    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {

        console.log(location.state);

        if (!location.state) {
            console.log("fetching all products");
            fetchAllProductsService(productCollectionRef, setProducts);
        } else if(location && location.state && location.state.productName) {
            console.log("fetching products by productName");
            fetchProductsByProductNameService(productCollectionRef, location.state.productName, setProducts);
        } else if (location && location.state && location.state.category) { // fetch products based on category
            console.log("fetching products by category");
            fetchProductsByCategoryService(productCollectionRef, location.state.category, setProducts);
        }
    }, [location.state])

    return (
        <Fragment>
            <ProductCard />
        </Fragment>

            // {
            //     // placeholder for displaying actual products
            //     (products) &&
            //     products.map((row) => {
            //         console.log(row.product);
            //         return (
            //             <Fragment key={row.id}>
            //                 <p>{row.product.productName}</p>
            //                 <p>{row.product.price}</p>
            //             </Fragment>
            //         )
            //     })
            // }
    );
};

export default ProductGallery;