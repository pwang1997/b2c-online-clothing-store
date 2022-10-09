import Typography from "@mui/material/Typography";
import {Fragment, useEffect, useState} from "react";
import {useFirebaseProductCollection} from "../../context/FirebaseContext";
import {useLocation} from "react-router-dom";
import {fetchAllProductsService, fetchProductsByCategoryService} from "../../services/ProductService";


const ProductGallery = () => {
    const productCollectionRef = useFirebaseProductCollection();

    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!location.state) {
            fetchAllProductsService(productCollectionRef, setProducts);
        } else if (location && location.state && location.state.category) { // fetch products based on category
            fetchProductsByCategoryService(productCollectionRef, location.state.category, setProducts);
        }
    }, [location.state])

    return (
        <Fragment>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                sx={{flex: 2}}>
            </Typography>

            {
                // placeholder for displaying actual products
                (products) &&
                products.map((row) => {
                    return (
                        <Fragment key={row.id}>
                            <p>{row.product.productName}</p>
                            <p>{row.product.price}</p>
                        </Fragment>
                    )
                })
            }

        </Fragment>
    );
};

export default ProductGallery;