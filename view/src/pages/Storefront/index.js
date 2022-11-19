import React, { useEffect, useState } from "react";

import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Slideshow from "../../components/SlideShow";
import Overflow from "../../components/OverFlow";
import { fetchAllProductsService } from "../../services/ProductService";
import { useFirebaseProductCollection } from "../../context/FirebaseContext";
import _ from 'lodash';

const Index = () => {
    const navigate = useNavigate();
    const productContext = useFirebaseProductCollection();

    const [products, setProducts] = useState();
    useEffect(() => {
        fetchAllProductsService(productContext, setProducts);
    }, []);

    return (
            <Grid container>
                <Grid item xs={12}>
                    <Slideshow/>
                </Grid>

                {
                    _.filter(products, {promotionStatus : true}).length > 0 &&
                    <Grid item xs={12}>
                        <Overflow title={"Today's deals"}
                                  products={products && _.filter(products, {promotionStatus : true})}
                                  navigate={navigate}/>
                    </Grid>
                }

                <Grid item xs={12}>
                    <Overflow title={"Spring items"}
                              products={products && _.filter(products, {category : "Spring"})}
                              navigate={navigate}/>
                </Grid>

                <Grid item xs={12}>
                    <Overflow title={"Summer items"}
                              products={products && _.filter(products, {category : "Summer"})}
                              navigate={navigate}/>
                </Grid>

                <Grid item xs={12}>
                    <Overflow title={"Fall items"}
                              products={products && _.filter(products, {category : "Fall"})}
                              navigate={navigate}/>
                </Grid>

                <Grid item xs={12}>
                    <Overflow title={"Winter items"}
                              products={products && _.filter(products, {category : "Winter"})}
                              navigate={navigate}/>
                </Grid>

                <Grid item xs={12}>
                    <Overflow title={"Guess you like"}
                              products={products && _.sampleSize(products, 12)}
                              navigate={navigate}/>
                </Grid>
            </Grid>
    );
}
export default Index;
