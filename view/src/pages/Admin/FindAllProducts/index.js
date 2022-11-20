import * as React from 'react';
import {Fragment, useEffect, useState} from "react";
import {fetchAllProductsService} from "../../../services/ProductService";
import {useFirebaseProductCollection} from "../../../context/FirebaseContext";
import AdminProductCard from "../../../components/AdminProductCard";
import Admin from "../../Admin";

export default function FindAllProducts(props) {

    const useProductContext = useFirebaseProductCollection();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAllProductsService(useProductContext, setProducts);
    }, []);

    return(
        <>
        <Admin />
            {
                // placeholder for displaying actual products
                (products) &&
                products.map((row) => {
                    return (
                        <Fragment key={row.id}>
                            <AdminProductCard
                                id={row.id}
                                productName={row.productName}
                                price={row.price}
                                description={row.description}
                                promotionStatus={row.promotion_status}
                                promotionPrice={row.promotion_price}
                                image={row?.imageUrl}
                            />
                        </Fragment>
                    )
                })
            }
        </>
    );
};