import * as React from 'react';
import {Fragment, useEffect, useState} from "react";
import {fetchAllProductsService} from "../../../services/ProductService";
import {useFirebaseProductCollection} from "../../../context/FirebaseContext";
import AdminProductCard from "../../../components/AdminProductCard";


export default function FindAllProducts(props) {

    const useProductContext = useFirebaseProductCollection();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAllProductsService(useProductContext, setProducts);
    }, []);

    return(
        <>
            {
                // placeholder for displaying actual products
                (products) &&
                products.map((row) => {
                    return (
                        <Fragment key={row.id}>
                            <AdminProductCard
                                id={row.id}
                                productName={row.product.productName}
                                price={row.product.price}
                                description={row.product.description}
                            />
                        </Fragment>
                    )
                })
            }
        </>
    );
};