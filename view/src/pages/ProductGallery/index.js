import React, {useEffect, useState, Fragment} from "react";
import {Grid} from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import {useLocation} from "react-router-dom";
import {fetchFeaturedProductsService, fetchProductsByCategoryService} from "../../services/ProductService";
import {useFirebaseProductCollection} from "../../context/FirebaseContext";

export default function ProductGallery() {
    const location = useLocation();

    const productContext = useFirebaseProductCollection();
    const [products, setProducts] = useState();

    useEffect(() => {
        if (location.state?.category) {
            console.log(location.state?.category);
            fetchProductsByCategoryService(productContext, location.state.category, setProducts);
        } else if(location.state?.promotionStatus) {
            fetchFeaturedProductsService(productContext, setProducts);
            console.log(products);
        }
    }, [location.state]);

    return (
        <Fragment>
            <Grid container gap={2} sx={{justifyContent: "space-evenly"}}>
                {products && products?.map((item) => {
                    return (
                        <Grid key={item.id}>
                            <ProductCard product={item}/>
                        </Grid>
                    );
                })}
            </Grid>
        </Fragment>
    );
};